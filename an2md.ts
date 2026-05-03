#!/usr/bin/env bun

import { readFileSync, writeFileSync } from "node:fs";
import { DOMParser } from "@xmldom/xmldom";

export const EN_REGEX = /^[a-zA-Z0-9$@$!%*?&#^\-_. +]+$/;
const ELEMENT_NODE = 1;
const TEXT_NODE = 3;

export function checkEn(text: string): boolean {
  return EN_REGEX.test(text ?? "");
}

function localName(node: Node | null): string {
  if (!node || node.nodeType !== ELEMENT_NODE) {
    return "";
  }
  return (node as Element).localName;
}

export function elementChildren(element: Element): Element[] {
  return [...element.childNodes].filter(
    (child): child is Element => child.nodeType === ELEMENT_NODE,
  );
}

export function sanitizeMarkdown(text: string): string {
  return text
    .replace(/\n+(\[[^\]]+\]\([^)]+\))/g, " $1")
    .replace(/(\[[^\]]+\]\([^)]+\))\n+/g, "$1 ")
    .replace(/\n+(\*[^*]+\*)/g, " $1")
    .replace(/(\*[^*]+\*)\n+/g, "$1 ")
    .trim();
}

function textContent(node: Node | null): string {
  return node?.textContent ?? "";
}

export function nodeToMarkdown(node: Node | null): string {
  if (!node) {
    return "";
  }

  if (node.nodeType === TEXT_NODE) {
    return node.nodeValue ?? "";
  }

  if (node.nodeType !== ELEMENT_NODE) {
    return "";
  }

  const element = node as Element;
  const children = [...element.childNodes].map((child) => nodeToMarkdown(child)).join("");
  switch (element.localName) {
    case "p":
      return children.trim();
    case "i":
    case "em":
      return `*${children.trim()}*`;
    case "strong":
    case "b":
      return `**${children.trim()}**`;
    case "a": {
      const href = element.getAttribute("href") ?? "";
      return `[${children.trim()}](${href})`;
    }
    case "br":
      return "\n";
    default:
      return children || textContent(element);
  }
}

function firstDescendantByLocalName(root: ParentNode, tagName: string): Element | null {
  const queue = [...root.childNodes];
  while (queue.length > 0) {
    const current = queue.shift()!;
    if (localName(current) === tagName) {
      return current as Element;
    }
    queue.push(...current.childNodes);
  }
  return null;
}

export function aknToMarkdown(xmlText: string): string {
  const sanitizedXml = xmlText.replaceAll("&", "&amp;");
  const document = new DOMParser().parseFromString(sanitizedXml, "application/xml");
  const debate = firstDescendantByLocalName(document, "debateSection");
  if (!debate) {
    throw new Error("找不到 <debateSection>");
  }

  const headingElement = firstDescendantByLocalName(debate, "heading");
  const headingText = textContent(headingElement).trim();
  const colon = checkEn(headingText) ? ":" : "：";

  let output = `# ${headingText}\n\n`;
  let lastSpeaker: string | null = null;

  for (const child of elementChildren(debate)) {
    const tagName = child.localName;
    if (tagName === "speech") {
      const speaker = (child.getAttribute("by") ?? "").replace(/^#/, "");
      const children = elementChildren(child);
      let content = "";

      if (children.length > 0) {
        const paragraphChildren = children.filter((candidate) => candidate.localName === "p");
        if (paragraphChildren.length > 0) {
          content = paragraphChildren
            .map((paragraph) => sanitizeMarkdown(nodeToMarkdown(paragraph)))
            .filter(Boolean)
            .join("\n\n");
        } else {
          const chosen = children[1] ?? children[0];
          content = sanitizeMarkdown(nodeToMarkdown(chosen));
        }
      } else {
        content = sanitizeMarkdown(textContent(child));
      }

      if (speaker === lastSpeaker) {
        output += `${content}\n\n`;
      } else {
        output += `### ${speaker}${colon}\n${content}\n\n`;
        lastSpeaker = speaker;
      }
    } else if (tagName === "narrative") {
      const children = elementChildren(child);
      const chosen = children[1] ?? children[0] ?? null;
      const narrative = sanitizeMarkdown(nodeToMarkdown(chosen)).replaceAll("_", "");
      output += `> ${narrative}\n\n`;
      lastSpeaker = null;
    }
  }

  return output;
}

export function main(argv: string[] = Bun.argv.slice(2)): number {
  if (argv.length < 2) {
    console.error(`用法：${Bun.argv[1] ?? "an2md.ts"} input.xml output.md`);
    return 1;
  }

  const [inputPath, outputPath] = argv;
  const xmlText = readFileSync(inputPath, "utf-8");
  writeFileSync(outputPath, aknToMarkdown(xmlText), "utf-8");
  return 0;
}

if (import.meta.main) {
  process.exit(main());
}
