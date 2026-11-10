// Appends items to data/*.json from a JSON file of the form
// { "01-icu.json": [item, ...], ... }, skipping ids that already exist.
// Usage: node scripts/add-items.mjs additions.json
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dataDir = join(dirname(fileURLToPath(import.meta.url)), "..", "data");
const additions = JSON.parse(readFileSync(process.argv[2], "utf8"));
const existing = new Set(
  readdirSync(dataDir).filter((f) => f.endsWith(".json"))
    .flatMap((f) => JSON.parse(readFileSync(join(dataDir, f), "utf8")).items.map((i) => i.id)),
);

// Match the hand-written style: paper objects and tag arrays on one line.
const format = (obj) =>
  JSON.stringify(obj, null, 2)
    .replace(/"paper": \{\n\s+"label": (.*),\n\s+"url": (.*)\n\s+\}/g, '"paper": {"label": $1, "url": $2}')
    .replace(/"tags": \[\n([\s\S]*?)\n\s+\]/g, (_, body) => `"tags": [${body.split("\n").map((l) => l.trim()).join(" ")}]`) + "\n";

for (const [file, items] of Object.entries(additions)) {
  const path = join(dataDir, file);
  const cat = JSON.parse(readFileSync(path, "utf8"));
  let added = 0;
  for (const it of items) {
    if (existing.has(it.id)) { console.log(`skip duplicate ${it.id}`); continue; }
    cat.items.push(it);
    existing.add(it.id);
    added++;
  }
  writeFileSync(path, format(cat));
  console.log(`${file}: +${added}`);
}
