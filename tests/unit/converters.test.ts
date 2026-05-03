import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { DOMParser } from "@xmldom/xmldom";
import { aknToMarkdown, checkEn as anCheckEn, elementChildren, main as anMain, nodeToMarkdown, sanitizeMarkdown } from "../../an2md";
import { checkEn as bwCheckEn, escapeXml, main as bwMain, markdownToAkn } from "../../bw2an";
import { createTempDir, runBun, writeFile } from "./test-helpers";

const REPO_ROOT = path.resolve(import.meta.dir, "../..");
const AN2MD_SCRIPT = path.join(REPO_ROOT, "an2md.ts");
const BW2AN_SCRIPT = path.join(REPO_ROOT, "bw2an.ts");

describe("bw2an", () => {
  test("detects english headings", () => {
    expect(bwCheckEn("Hello 123")).toBe(true);
    expect(bwCheckEn("數位公民")).toBe(false);
  });

  test("escapes xml entities", () => {
    expect(escapeXml(`<tag attr="x">'&`)).toBe(
      "&lt;tag attr=&quot;x&quot;&gt;&apos;&amp;",
    );
  });

  test("converts markdown to Akoma Ntoso", () => {
    const xml = markdownToAkn(`# My Title

### Audrey Tang:

First paragraph.

Second paragraph.

> Scene break
`);

    expect(xml).toContain("<heading>");
    expect(xml).toContain("<speech by=\"#Audrey Tang\">");
    expect(xml).toContain("First paragraph.");
    expect(xml).toContain("<narrative>");
    expect(xml).toContain("Scene break");
  });

  test("rejects malformed markdown", () => {
    expect(() => markdownToAkn("No heading")).toThrow("first line must be a markdown heading");
    expect(() => markdownToAkn("# Title\n\nHello")).toThrow("could not find opening Audrey Tang");
  });

  test("main writes xml to stdout", () => {
    const output: string[] = [];
    const write = process.stdout.write;
    process.stdout.write = ((chunk: string | Uint8Array) => {
      output.push(String(chunk));
      return true;
    }) as typeof process.stdout.write;
    try {
      expect(
        bwMain(`# Title

### 唐鳳：

您好。
`),
      ).toBe(0);
    } finally {
      process.stdout.write = write;
    }
    expect(output.join("")).toContain("<speech by=\"#唐鳳\">");
  });

  test("runs as a CLI", () => {
    const result = runBun(REPO_ROOT, BW2AN_SCRIPT, [], {
      input: `# Title

### Audrey Tang:

Hello.
`,
    });
    expect(result.status).toBe(0);
    expect(result.stdout).toContain("<akomaNtoso>");
  });
});

describe("an2md", () => {
  test("detects english headings", () => {
    expect(anCheckEn("Digital Citizenship")).toBe(true);
    expect(anCheckEn("數位公民")).toBe(false);
  });

  test("sanitizes markdown around inline content", () => {
    expect(sanitizeMarkdown("hello\n[link](https://example.com)\n*em*")).toBe(
      "hello [link](https://example.com) *em*",
    );
  });

  test("converts xml nodes to markdown", () => {
    const document = new DOMParser().parseFromString(
      "<root><p>Hello <a href=\"https://example.com\">link</a> <i>italic</i></p></root>",
      "application/xml",
    );
    const root = document.documentElement;
    const [paragraph] = elementChildren(root);
    expect(paragraph).toBeDefined();
    expect(nodeToMarkdown(paragraph)).toBe(
      "Hello [link](https://example.com) *italic*",
    );
  });

  test("converts Akoma Ntoso xml to markdown", () => {
    const markdown = aknToMarkdown(`<?xml version="1.0" encoding="utf-8"?>
<akomaNtoso>
  <debate>
    <debateBody>
      <debateSection>
        <heading>Digital Citizenship</heading>
        <speech by="#Audrey Tang">
          <p>Hello <a href="https://example.com">link</a></p>
          <p><i>World</i></p>
        </speech>
        <speech by="#Audrey Tang">
          <p>Second turn</p>
        </speech>
        <narrative>
          <p><i>Scene_break</i></p>
        </narrative>
      </debateSection>
    </debateBody>
  </debate>
</akomaNtoso>`);

    expect(markdown).toContain("# Digital Citizenship");
    expect(markdown).toContain("### Audrey Tang:");
    expect(markdown).toContain("Hello [link](https://example.com)");
    expect(markdown).toContain("*World*");
    expect(markdown).toContain("Second turn");
    expect(markdown).toContain("> *Scenebreak*");
  });

  test("rejects xml without debate sections", () => {
    expect(() => aknToMarkdown("<root />")).toThrow("找不到 <debateSection>");
  });

  test("main writes markdown to a file", () => {
    const root = createTempDir();
    const inputPath = path.join(root, "in.xml");
    const outputPath = path.join(root, "out.md");
    writeFile(
      root,
      "in.xml",
      `<?xml version="1.0" encoding="utf-8"?>
<akomaNtoso>
  <debate>
    <debateBody>
      <debateSection>
        <heading>數位公民</heading>
        <speech by="#唐鳳"><p>您好。</p></speech>
      </debateSection>
    </debateBody>
  </debate>
</akomaNtoso>`,
    );
    expect(anMain([inputPath, outputPath])).toBe(0);
    expect(readFileSync(outputPath, "utf-8")).toContain("### 唐鳳：");
  });

  test("main rejects missing arguments", () => {
    expect(anMain([])).toBe(1);
  });

  test("runs as a CLI", () => {
    const root = createTempDir();
    const inputPath = path.join(root, "in.xml");
    const outputPath = path.join(root, "out.md");
    writeFile(
      root,
      "in.xml",
      `<?xml version="1.0" encoding="utf-8"?>
<akomaNtoso>
  <debate>
    <debateBody>
      <debateSection>
        <heading>Title</heading>
        <speech by="#Audrey Tang"><p>Hello</p></speech>
      </debateSection>
    </debateBody>
  </debate>
</akomaNtoso>`,
    );
    const result = runBun(root, AN2MD_SCRIPT, [inputPath, outputPath]);
    expect(result.status).toBe(0);
    expect(readFileSync(outputPath, "utf-8")).toContain("### Audrey Tang:");
  });
});
