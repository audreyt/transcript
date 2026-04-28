#!/usr/bin/env bun
// Strip extra **...** wrappers from markdown heading lines.
//   # **Foo**           ->  # Foo
//   ### **唐鳳：**       ->  ### 唐鳳：
// Only fully-wrapped headings are touched; inline bold elsewhere is preserved.

import { readFileSync, writeFileSync } from "node:fs";

const HEADING_BOLD = /^(#{1,6}\s+)\*\*(.+?)\*\*(\s*)$/;

export function stripHeadingBold(text: string): string {
  return text
    .split("\n")
    .map((line) => line.replace(HEADING_BOLD, "$1$2$3"))
    .join("\n");
}

if (import.meta.main) {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.error("usage: bun scripts/strip_heading_bold.ts <file.md> [...]");
    process.exit(1);
  }
  for (const file of files) {
    const before = readFileSync(file, "utf8");
    const after = stripHeadingBold(before);
    if (before !== after) {
      writeFileSync(file, after);
      console.log(`cleaned: ${file}`);
    } else {
      console.log(`unchanged: ${file}`);
    }
  }
}
