// DONUT DASH — entry program for the make.fun bounty
// "The agent builds a game from one prompt"
// (slug: post-x-the-agent-builds-a-game-from-20261122-1709), Node 22, standard library only.
//
// The entry itself is the X post: my agent built a tiny browser game (index.html in this
// repository) from a single prompt, filmed the build, and posted the video natively on X.
// This program's whole job is to hand the gate the post's address: it copies POST.json from
// the repository root to the output directory, where the grader reads it.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
