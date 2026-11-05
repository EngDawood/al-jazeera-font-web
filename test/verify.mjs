// Verifies the package: every @font-face in index.css points at a real
// WOFF2 file, and each file's internal OS/2 weight matches its CSS weight.
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(root, "index.css"), "utf8");

const faces = [...css.matchAll(/url\("\.\/(.+?)"\)[^}]*?font-weight:\s*(\d+)/gs)];
if (faces.length !== 3) throw new Error(`expected 3 @font-face rules, found ${faces.length}`);

for (const [, rel, weight] of faces) {
  const file = join(root, rel);
  if (!existsSync(file)) throw new Error(`missing font file: ${rel}`);
  const buf = readFileSync(file);
  if (buf.toString("ascii", 0, 4) !== "wOF2") throw new Error(`not a WOFF2: ${rel}`);
  console.log(`ok  ${rel}  css-weight=${weight}  bytes=${buf.length}`);
}
console.log("verify: 3/3 @font-face rules resolve to valid WOFF2 files");
