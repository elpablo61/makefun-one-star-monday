import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The server, Monday, took my order at 7:12, brought a 9 a.m. meeting instead of coffee, and billed my weekend as dessert.";

const words = line.trim().split(/\s+/).length;
if (line.length < 1 || line.length > 180 || words > 25) {
  throw new Error(
    `entry must be 1-180 chars and at most 25 words, got ${line.length} chars and ${words} words`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
