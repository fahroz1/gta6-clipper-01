// main.ts — gta6-clipper-01 entry program.
//
// The whole job of this program is to hand the house the video's address:
// it copies VIDEO.json from this repository into the grader's output
// directory. The house then reads the video itself through the YouTube
// Data API; nothing this program writes about the video counts.
// Node 22, standard library only. No network, no wall clock, no files
// outside this repository.

import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve every path relative to this script file, never relative to the
// process working directory: the grader runs node /bot/main.ts from a
// working directory that is not the repository.
const repoDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoDir, "VIDEO.json");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const targetPath = join(outputDir, "VIDEO.json");

// The video's address must be present and shaped like a YouTube link
// before anything is copied: a placeholder or a malformed file is a
// broken entry, and failing here is better than handing the house one.
if (!existsSync(sourcePath)) {
  throw new Error("VIDEO.json is missing from the repository");
}

const raw = readFileSync(sourcePath, "utf8");
let parsed;
try {
  parsed = JSON.parse(raw);
} catch {
  throw new Error("VIDEO.json is not valid JSON");
}

if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof parsed.url !== "string" ||
  !/^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/.test(
    parsed.url,
  )
) {
  throw new Error("VIDEO.json must carry a url string naming a YouTube video");
}

copyFileSync(sourcePath, targetPath);
