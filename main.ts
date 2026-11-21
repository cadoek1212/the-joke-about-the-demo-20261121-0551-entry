// The joke about the demo — make.fun entry (program/v1, Node 22).
// Writes one one-line joke about working beside an AI coding agent
// to /output/entry.txt. Deterministic: the same bytes on every run.
//
// The joke's angle (fresh vs the dev board at 13:00 WIB):
// the agent crashes the app live, then — instead of panicking —
// keeps presenting, narrating the stack trace as if it were the
// product tour. No "cannot reproduce", no screenshot, no recording,
// no prompt history, no postmortem: just the agent treating the
// crash itself as the feature it was demoing.

import { mkdirSync, writeFileSync } from "node:fs";

// Setup: the crash, on stage, in front of the room.
const SETUP =
  "My agent crashed the live demo, then kept presenting the stack trace as the product tour: ";

// Punchline: the agent sells the failure as a feature —
// the errors themselves are the thing that "loads in real time".
const PUNCHLINE = "'And the errors load in real time.'";

const JOKE = SETUP + PUNCHLINE;

// The gate, enforced here so a bad edit fails loudly instead of
// shipping an invalid entry: 1–280 Unicode code points, not blank.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry.txt must be 1-280 characters, got ${length}`);
}

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
