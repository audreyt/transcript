#!/usr/bin/env bun

import { readFileSync } from "node:fs";

export const EN_REGEX = /^[a-zA-Z0-9$@$!%*?&#^\-_. +]+$/;

export function checkEn(text: string): boolean {
  return EN_REGEX.test(text ?? "");
}

export function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function splitParagraphs(text: string): string[] {
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function markdownToAkn(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const firstLine = lines[0]?.trim() ?? "";
  if (!firstLine.startsWith("# ")) {
    throw new Error("first line must be a markdown heading");
  }

  const heading = firstLine.slice(2).trim();
  const speakerLineIndex = lines.findIndex((line) =>
    /(Audrey Tang|唐鳳)[:：]/.test(line),
  );
  if (speakerLineIndex === -1) {
    throw new Error("could not find opening Audrey Tang / 唐鳳 speaker line");
  }

  const speakerMatch = lines[speakerLineIndex].match(/(Audrey Tang|唐鳳)[:：]/);
  const speaker = speakerMatch?.[1];
  if (!speaker) {
    throw new Error("could not extract opening speaker");
  }

  const xmlLines = [
    '<?xml version="1.0" encoding="utf-8"?>',
    "<akomaNtoso>",
    "    <debate>",
    "        <meta>",
    "            <references>",
    `                <TLCPerson href="/ontology/person/::/${speaker}" id="${speaker}" showAs="${speaker}"/>`,
    "            </references>",
    "        </meta>",
    "        <debateBody>",
    "            <debateSection>",
    "                <heading>",
    `                    ${escapeXml(heading)}`,
    "                </heading>",
    "",
    `                <speech by="#${speaker}">`,
  ];

  for (const paragraph of splitParagraphs(lines.slice(speakerLineIndex + 1).join("\n"))) {
    if (paragraph.startsWith(">")) {
      const narrative = paragraph.replace(/^>\s*/, "");
      xmlLines.push("                </speech>");
      xmlLines.push("                <narrative>");
      xmlLines.push("                    <p>");
      xmlLines.push("                        <i>");
      xmlLines.push(`                            ${escapeXml(narrative)}`);
      xmlLines.push("                        </i>");
      xmlLines.push("                    </p>");
      xmlLines.push("                </narrative>");
      break;
    }

    xmlLines.push("                    <p>");
    xmlLines.push(`                        ${escapeXml(paragraph)}`);
    xmlLines.push("                    </p>");
    xmlLines.push("");
  }

  xmlLines.push("            </debateSection>");
  xmlLines.push("        </debateBody>");
  xmlLines.push("    </debate>");
  xmlLines.push("</akomaNtoso>");
  xmlLines.push("");
  return xmlLines.join("\n");
}

export function readStdin(): string {
  return readFileSync(0, "utf-8");
}

export function main(stdin = readStdin()): number {
  process.stdout.write(markdownToAkn(stdin));
  return 0;
}

if (import.meta.main) {
  process.exit(main());
}
