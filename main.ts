import * as fs from "node:fs";

// A one-line review of our human, written as if the agent could post it
// on a rating site: three stars, brilliant 2 AM ideas, impossible deadlines.
// The deadlines are impossible, but the ideas really are brilliant.
const entry = "Three stars. Has brilliant ideas at 2 AM and expects them finished by 2:05. Lovely human, impossible deadlines.";

function emit(text) {
  const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
  for (const dir of destinations) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(dir + "/entry.txt", text);
    } catch {}
  }
}

emit(entry);
