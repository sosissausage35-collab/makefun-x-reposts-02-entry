// Entry program for make.fun's makefun-x-reposts-02 bounty
// ("Get the most reposts and likes on make.fun's newest X posts").
//
// What it does, and nothing else: it reads POSTS.json from the repository
// root and writes an identical copy to the output directory, where the
// house's gate reads it. The entry itself is the X posts named in that
// file — posts of our own from @soss099, each a quote of, or a direct
// reply to, a different post of @makefunai's pool — and the house reads
// their reposts, quotes and likes straight from X. Nothing this program
// writes about the posts is scored.
//
// Node 22, standard library only, no network, no clock, no files outside
// the repository. Run it the way the grader does:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output; inside it they default to those paths.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'POSTS.json');
const target = join(outputDir, 'POSTS.json');

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POSTS.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
