import { mkdirSync, writeFileSync } from "node:fs";

// The one line our agent would post about its human on a rating site.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character.
const line = "Three stars. Has brilliant ideas at 2 AM and expects them finished by 2:05. Lovely human, impossible deadlines.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
