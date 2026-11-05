// Builds the static site into dist/ and regenerates DATABASES.md from data/*.json.
// No dependencies: node scripts/build.mjs
import { readFileSync, readdirSync, writeFileSync, mkdirSync, copyFileSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

export const ACCESS = {
  open: { label: "Open", long: "Completely free — direct download, no account" },
  registration: { label: "Registration", long: "Free — create an account / accept terms" },
  application: { label: "Application", long: "Free — submit a request or data use agreement for approval" },
  credentialed: { label: "Credentialed", long: "Free — identity credentialing + ethics training + DUA" },
};

const categories = readdirSync(join(root, "data"))
  .filter((f) => f.endsWith(".json"))
  .sort()
  .map((f) => JSON.parse(readFileSync(join(root, "data", f), "utf8")));

// Validate: unique ids, required fields, known access levels.
const seen = new Set();
for (const c of categories) {
  for (const it of c.items) {
    for (const k of ["id", "name", "description", "provider", "region", "access", "access_note", "url"]) {
      if (!it[k]) throw new Error(`${c.category}/${it.id ?? "?"}: missing ${k}`);
    }
    if (!ACCESS[it.access]) throw new Error(`${it.id}: unknown access '${it.access}'`);
    if (seen.has(it.id)) throw new Error(`duplicate id ${it.id}`);
    seen.add(it.id);
  }
}

const all = categories.flatMap((c) => c.items.map((it) => ({ ...it, category: c.category })));
const counts = Object.fromEntries(Object.keys(ACCESS).map((a) => [a, all.filter((i) => i.access === a).length]));

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

function card(it) {
  // The id doubles as a short alias (e.g. "eicu-crd"); hyphens become spaces
  // so the client, which splits queries on hyphens too, can match it.
  const search = [it.id.replaceAll("-", " "), it.name, it.full_name, it.description, it.provider, it.region, ...(it.tags || [])].join(" ").toLowerCase();
  const paper = it.paper
    ? `<a class="btn btn-ghost" href="${esc(it.paper.url)}" target="_blank" rel="noopener" title="${esc(it.paper.label)}">Original article</a>`
    : `<span class="btn btn-none" title="No dedicated descriptor article">No article</span>`;
  return `<article class="card" id="${esc(it.id)}" data-cat="${esc(it.category)}" data-access="${esc(it.access)}" data-search="${esc(search)}">
  <header class="card-head">
    <h3><a href="#${esc(it.id)}" class="anchor">${esc(it.name)}</a></h3>
    <span class="badge badge-${esc(it.access)}" title="${esc(ACCESS[it.access].long)}">${ACCESS[it.access].label}</span>
  </header>
  ${it.full_name ? `<p class="full-name">${esc(it.full_name)}</p>` : ""}
  <p class="desc">${esc(it.description)}</p>
  <dl class="meta">
    <div><dt>Provider</dt><dd>${esc(it.provider)}</dd></div>
    <div><dt>Region</dt><dd>${esc(it.region)}</dd></div>
    <div class="how"><dt>How to get it</dt><dd>${esc(it.access_note)}</dd></div>
  </dl>
  ${it.paper ? `<p class="cite">${esc(it.paper.label)}</p>` : ""}
  <ul class="tags">${(it.tags || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
  <footer class="card-actions">
    <a class="btn btn-primary" href="${esc(it.url)}" target="_blank" rel="noopener">Access data <span aria-hidden="true">↗</span></a>
    ${paper}
  </footer>
</article>`;
}

const sections = categories
  .map((c) => `<section class="cat" id="cat-${esc(c.category)}" data-cat="${esc(c.category)}">
  <div class="cat-head"><h2>${esc(c.title)} <span class="cat-count">${c.items.length}</span></h2><p>${esc(c.blurb)}</p></div>
  <div class="grid">
${c.items.map(card).join("\n")}
  </div>
</section>`)
  .join("\n");

const catChips = categories
  .map((c) => `<button type="button" class="chip" data-filter-cat="${esc(c.category)}" aria-pressed="false">${esc(c.title)} <span>${c.items.length}</span></button>`)
  .join("");
const accessChips = Object.entries(ACCESS)
  .map(([k, v]) => `<button type="button" class="chip chip-${k}" data-filter-access="${k}" aria-pressed="false" title="${esc(v.long)}"><i class="dot dot-${k}"></i>${v.label} <span>${counts[k]}</span></button>`)
  .join("");
const legend = Object.entries(ACCESS)
  .map(([k, v]) => `<li><span class="badge badge-${k}">${v.label}</span> ${esc(v.long.replace(/^Completely free — |^Free — /, ""))}</li>`)
  .join("");

const updated = new Date().toISOString().slice(0, 10);
const html = readFileSync(join(root, "site", "index.template.html"), "utf8")
  .replaceAll("{{TOTAL}}", String(all.length))
  .replaceAll("{{NCAT}}", String(categories.length))
  .replaceAll("{{OPEN}}", String(counts.open))
  .replaceAll("{{UPDATED}}", updated)
  .replace("{{CAT_CHIPS}}", catChips)
  .replace("{{ACCESS_CHIPS}}", accessChips)
  .replace("{{LEGEND}}", legend)
  .replace("{{SECTIONS}}", sections);

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
writeFileSync(join(dist, "index.html"), html);
for (const f of ["styles.css", "app.js", "favicon.svg"]) copyFileSync(join(root, "site", f), join(dist, f));
writeFileSync(join(dist, "databases.json"), JSON.stringify(all, null, 2));

const csvCols = ["id", "name", "full_name", "category", "access", "access_note", "url", "paper_label", "paper_url", "provider", "region", "description", "tags"];
const csvCell = (v) => `"${String(v ?? "").replaceAll('"', '""')}"`;
const csv = [csvCols.join(",")]
  .concat(all.map((it) => csvCols.map((k) => csvCell(
    k === "paper_label" ? it.paper?.label : k === "paper_url" ? it.paper?.url : k === "tags" ? (it.tags || []).join("; ") : it[k],
  )).join(",")))
  .join("\n");
writeFileSync(join(dist, "databases.csv"), "﻿" + csv);

// Markdown table for GitHub readers.
const md = [`# Database list\n\n_Auto-generated from \`data/*.json\` by \`scripts/build.mjs\` — do not edit by hand. ${all.length} databases, last built ${updated}._\n`];
for (const c of categories) {
  md.push(`\n## ${c.title}\n\n${c.blurb}\n\n| Database | Access | Description | Article |\n|---|---|---|---|`);
  for (const it of c.items) {
    const cell = (s) => String(s).replaceAll("|", "\\|");
    md.push(`| [${cell(it.name)}](${it.url}) | ${ACCESS[it.access].label} | ${cell(it.description)} | ${it.paper ? `[${cell(it.paper.label)}](${it.paper.url})` : "—"} |`);
  }
}
writeFileSync(join(root, "DATABASES.md"), md.join("\n") + "\n");

console.log(`Built ${all.length} databases in ${categories.length} categories →`, dist, counts);
