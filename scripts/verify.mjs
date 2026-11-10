// Checks every access URL, resolves article DOIs via Crossref, and reads the
// access policy on PhysioNet pages. Usage: node scripts/verify.mjs [--json out.json]
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "data");
const items = readdirSync(dataDir)
  .filter((f) => f.endsWith(".json"))
  .flatMap((f) => JSON.parse(readFileSync(join(dataDir, f), "utf8")).items);

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36";

async function fetchStatus(url) {
  try {
    const res = await fetch(url, { redirect: "follow", headers: { "User-Agent": UA }, signal: AbortSignal.timeout(25000) });
    const text = url.includes("physionet.org/content") ? await res.text() : "";
    return { status: res.status, final: res.url, text };
  } catch (e) {
    return { status: "ERR", error: String(e.cause?.code || e.message) };
  }
}

async function crossrefTitle(doiUrl) {
  const doi = doiUrl.replace("https://doi.org/", "");
  try {
    const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
      headers: { "User-Agent": "open-health-databases-verifier (mailto:abdullahdmc@gmail.com)" },
      signal: AbortSignal.timeout(25000),
    });
    if (res.status !== 200) return { status: res.status };
    const m = (await res.json()).message;
    return { status: 200, title: (m.title || [""])[0], journal: (m["container-title"] || [""])[0], year: m.issued?.["date-parts"]?.[0]?.[0] };
  } catch (e) {
    return { status: "ERR", error: String(e.message) };
  }
}

function physionetPolicy(html) {
  if (/Only credentialed users/i.test(html)) return "credentialed";
  if (/Only registered users/i.test(html)) return "registration";
  if (/Anyone can access/i.test(html)) return "open";
  return "unknown";
}

async function pool(list, n, fn) {
  const out = new Array(list.length);
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (i < list.length) { const k = i++; out[k] = await fn(list[k]); }
  }));
  return out;
}

const results = await pool(items, 8, async (it) => {
  const r = { id: it.id, access: it.access, url: it.url };
  const u = await fetchStatus(it.url);
  r.url_status = u.status; r.final = u.final; r.url_error = u.error;
  if (u.text) r.physionet_policy = physionetPolicy(u.text);
  const hf = it.url.match(/huggingface\.co\/datasets\/([^/?#]+\/[^/?#]+)/);
  if (hf) {
    try {
      const meta = await (await fetch(`https://huggingface.co/api/datasets/${hf[1]}`, { signal: AbortSignal.timeout(25000) })).json();
      r.hf_gated = meta.gated; // false | "auto" | "manual"
    } catch { r.hf_gated = "unknown"; }
  }
  if (it.paper?.url?.startsWith("https://doi.org/")) r.paper = { label: it.paper.label, ...(await crossrefTitle(it.paper.url)) };
  else if (it.paper) r.paper = { label: it.paper.label, ...(await fetchStatus(it.paper.url)), text: undefined };
  return r;
});

const out = process.argv.indexOf("--json");
if (out > -1) writeFileSync(process.argv[out + 1], JSON.stringify(results, null, 2));

console.log(`Checked ${results.length} entries\n`);
for (const r of results) {
  const flags = [];
  if (r.url_status !== 200) flags.push(`URL ${r.url_status}${r.url_error ? " " + r.url_error : ""}`);
  if (r.physionet_policy && r.physionet_policy !== r.access) flags.push(`PhysioNet says ${r.physionet_policy}, we say ${r.access}`);
  if (r.paper && r.paper.status !== 200) flags.push(`PAPER ${r.paper.status}`);
  if (r.hf_gated !== undefined && (r.hf_gated ? "registration" : "open") !== r.access) flags.push(`HF gated=${r.hf_gated}, we say ${r.access}`);
  console.log(`${flags.length ? "!!" : "ok"} ${r.id}${flags.length ? "  -> " + flags.join(" | ") : ""}`);
  if (r.paper?.title) console.log(`     paper: ${r.paper.title} (${r.paper.journal}, ${r.paper.year})`);
}
