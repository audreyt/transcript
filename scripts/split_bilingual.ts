#!/usr/bin/env bun
// bun scripts/split_bilingual.ts <bilingual.md> [--en out.md] [--zh out.md]

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const HAN = /[\u3400-\u9fff\uf900-\ufaff]/;
const HAN_G = /[\u3400-\u9fff\uf900-\ufaff]/g;
const LATIN_G = /[A-Za-z]/g;
const DATE = /^(\d{4}-\d{2}-\d{2})(?:\s+|$)/;

export class SplitError extends Error {
  constructor(
    readonly line: number,
    message: string,
  ) {
    super(`line ${line}: ${message}`);
    this.name = "SplitError";
  }
}

export interface SectionBlock {
  readonly kind: "section";
  readonly title: string;
}

export interface TurnBlock {
  readonly kind: "turn";
  readonly speaker: string;
  readonly paragraphs: readonly string[];
}

export type Block = SectionBlock | TurnBlock;

export interface SplitDocument {
  readonly title: string;
  readonly blocks: readonly Block[];
}

export interface SplitPair {
  readonly en: SplitDocument;
  readonly zh: SplitDocument;
}

interface OpenBlock {
  readonly kind: "h1" | "h2" | "turn";
  readonly line: number;
  readonly en: string;
  readonly zh: string;
  readonly paragraphs: string[];
}

export function splitBilingual(text: string): SplitPair {
  const blocks = collect(text.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n"));
  const first = blocks[0];
  if (first === undefined || first.kind !== "h1") {
    throw new SplitError(first?.line ?? 1, "document must start with one # title");
  }
  if (first.paragraphs.length > 0) {
    throw new SplitError(first.line, "title heading cannot contain paragraphs");
  }

  const enBlocks: Block[] = [];
  const zhBlocks: Block[] = [];
  let seenTitle = false;
  for (const block of blocks) {
    if (block.kind === "h1") {
      if (seenTitle) {
        throw new SplitError(block.line, "document has a second # title");
      }
      seenTitle = true;
      continue;
    }
    if (block.kind === "h2") {
      if (block.paragraphs.length > 0) {
        throw new SplitError(block.line, "section heading cannot contain paragraphs");
      }
      enBlocks.push({ kind: "section", title: block.en });
      zhBlocks.push({ kind: "section", title: block.zh });
      continue;
    }
    const paired = pairTurn(block);
    enBlocks.push({ kind: "turn", speaker: block.en, paragraphs: paired.en });
    zhBlocks.push({ kind: "turn", speaker: block.zh, paragraphs: paired.zh });
  }

  return {
    en: { title: first.en, blocks: enBlocks },
    zh: { title: withSharedDate(first.en, first.zh), blocks: zhBlocks },
  };
}

export function renderDocument(doc: SplitDocument, colon: ":" | "："): string {
  const lines: string[] = [`# ${doc.title}`, ""];
  for (const block of doc.blocks) {
    switch (block.kind) {
      case "section":
        lines.push(`## ${block.title}`, "");
        break;
      case "turn":
        lines.push(`### ${block.speaker}${colon}`, "");
        for (const paragraph of block.paragraphs) {
          lines.push(paragraph, "");
        }
        break;
      default:
        assertNever(block);
    }
  }
  return lines.join("\n");
}

export function archiveFilename(title: string): string {
  return `${title.normalize("NFC").trim().replace(/\s+/g, "-")}.md`;
}

export function turnCount(doc: SplitDocument): number {
  return doc.blocks.filter((block) => block.kind === "turn").length;
}

function collect(text: string): OpenBlock[] {
  const blocks: OpenBlock[] = [];
  let current: OpenBlock | null = null;
  let buffer: string[] = [];

  const flushParagraph = (): void => {
    const paragraph = buffer.join("\n").trim();
    buffer = [];
    if (paragraph !== "" && current !== null) {
      current.paragraphs.push(paragraph);
    }
  };

  const lines = text.split("\n");
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index] ?? "";
    const lineNo = index + 1;
    if (/^#{1,3} /.test(line)) {
      flushParagraph();
      current = openHeading(line, lineNo);
      blocks.push(current);
      continue;
    }
    if (line.trim() === "") {
      flushParagraph();
      continue;
    }
    if (current === null) {
      throw new SplitError(lineNo, "text appears before the title");
    }
    buffer.push(line);
  }
  flushParagraph();
  return blocks;
}

function openHeading(line: string, lineNo: number): OpenBlock {
  if (line.startsWith("# ")) {
    const title = splitBar(line.slice(2).trim(), lineNo);
    return { kind: "h1", line: lineNo, en: title.en, zh: title.zh, paragraphs: [] };
  }
  if (line.startsWith("## ")) {
    const title = splitBar(line.slice(3).trim(), lineNo);
    return { kind: "h2", line: lineNo, en: title.en, zh: title.zh, paragraphs: [] };
  }
  if (line.startsWith("### ")) {
    const match = /^###\s+(.+?)[:：]\s*$/.exec(line);
    if (match === null) {
      throw new SplitError(lineNo, "speaker heading needs a colon");
    }
    const name = splitSpeaker(match[1] ?? "");
    return { kind: "turn", line: lineNo, en: name.en, zh: name.zh, paragraphs: [] };
  }
  throw new SplitError(lineNo, "unsupported heading");
}

function splitBar(text: string, lineNo: number): { readonly en: string; readonly zh: string } {
  const parts = text.split("｜");
  if (parts.length !== 2 || parts[0]?.trim() === "" || parts[1]?.trim() === "") {
    throw new SplitError(lineNo, "heading needs exactly one ｜ between English and Chinese");
  }
  return { en: parts[0].trim(), zh: parts[1].trim() };
}

function splitSpeaker(label: string): { readonly en: string; readonly zh: string } {
  const tokens = label.trim().split(/\s+/);
  const han = tokens.filter((token) => HAN.test(token));
  const latin = tokens.filter((token) => !HAN.test(token));
  if (han.length === 0) {
    const name = tokens.join(" ");
    return { en: name, zh: name };
  }
  if (latin.length === 0) {
    const name = han.join("");
    return { en: name, zh: name };
  }
  return { en: latin.join(" "), zh: han.join("") };
}

function pairTurn(block: OpenBlock): { readonly en: readonly string[]; readonly zh: readonly string[] } {
  if (block.paragraphs.length === 0 || block.paragraphs.length % 2 !== 0) {
    throw new SplitError(
      block.line,
      `turn needs an even number of paragraphs, found ${block.paragraphs.length}`,
    );
  }
  const en: string[] = [];
  const zh: string[] = [];
  for (let index = 0; index < block.paragraphs.length; index++) {
    const paragraph = block.paragraphs[index] ?? "";
    if (index % 2 === 0) {
      if (looksChinese(paragraph)) {
        throw new SplitError(
          block.line,
          `English paragraph looks Chinese: ${snippet(paragraph)}`,
        );
      }
      en.push(paragraph);
    } else {
      zh.push(paragraph);
    }
  }
  return { en, zh };
}

function looksChinese(paragraph: string): boolean {
  const visible = paragraph
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/`[^`]*`/g, " ");
  const cjk = visible.match(HAN_G)?.length ?? 0;
  const latin = visible.match(LATIN_G)?.length ?? 0;
  return cjk > latin;
}

function snippet(paragraph: string): string {
  const flat = paragraph.replace(/\s+/g, " ").trim();
  return flat.length > 48 ? `${flat.slice(0, 48)}…` : flat;
}

function withSharedDate(en: string, zh: string): string {
  const match = en.match(DATE);
  if (match === null) {
    return zh;
  }
  const date = match[1] ?? "";
  if (zh.startsWith(date)) {
    return zh;
  }
  return `${date} ${zh}`;
}

function assertNever(value: never): never {
  throw new SplitError(0, `unexpected block ${JSON.stringify(value)}`);
}

function repoRoot(): string {
  return path.resolve(import.meta.dirname, "..");
}

function takeFlag(args: string[], flag: string): string | undefined {
  const index = args.indexOf(flag);
  if (index === -1) {
    return undefined;
  }
  const value = args[index + 1];
  if (value === undefined || value.startsWith("--")) {
    throw new SplitError(0, `${flag} needs a path`);
  }
  args.splice(index, 2);
  return value;
}

if (import.meta.main) {
  try {
    const args = process.argv.slice(2);
    const enFlag = takeFlag(args, "--en");
    const zhFlag = takeFlag(args, "--zh");
    const input = args[0];
    if (input === undefined || args.length !== 1) {
      console.error(
        "usage: bun scripts/split_bilingual.ts <bilingual.md> [--en out.md] [--zh out.md]",
      );
      process.exit(1);
    }
    const pair = splitBilingual(readFileSync(input, "utf8"));
    const root = repoRoot();
    const enPath = enFlag ?? path.join(root, archiveFilename(pair.en.title));
    const zhPath = zhFlag ?? path.join(root, archiveFilename(pair.zh.title));
    writeFileSync(enPath, renderDocument(pair.en, ":"));
    writeFileSync(zhPath, renderDocument(pair.zh, "："));
    console.log(`wrote ${enPath} (${turnCount(pair.en)} turns)`);
    console.log(`wrote ${zhPath} (${turnCount(pair.zh)} turns)`);
  } catch (error) {
    if (error instanceof SplitError) {
      console.error(error.message);
      process.exit(1);
    }
    throw error;
  }
}
