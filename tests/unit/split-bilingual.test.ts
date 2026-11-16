import { describe, expect, test } from "bun:test";
import {
  SplitError,
  archiveFilename,
  renderDocument,
  splitBilingual,
} from "../../scripts/split_bilingual";

const FIXTURE = `# 2026-10-08 NRC Interview｜NRC 專訪

## On the record｜為人類，留下紀錄

### Audrey Tang 唐鳳:

It's just on the record.

這只是正式列入紀錄。

Yeah, and [plurality](https://www.plurality.net/ "Weyl and ⿻ Community.").

對，還有[多元](https://www.plurality.net/)。

### Wouter van Noort:

With Polis.

用 Polis。

### Irma:

《Laudato si'》?

《Laudato si'》？
`;

describe("splitBilingual", () => {
  test("pairs alternating paragraphs and keeps Latin names Latin", () => {
    const pair = splitBilingual(FIXTURE);

    expect(pair.en.title).toBe("2026-10-08 NRC Interview");
    expect(pair.zh.title).toBe("2026-10-08 NRC 專訪");
    expect(pair.en.blocks.map(speakerOf)).toEqual([
      "On the record",
      "Audrey Tang",
      "Wouter van Noort",
      "Irma",
    ]);
    expect(pair.zh.blocks.map(speakerOf)).toEqual([
      "為人類，留下紀錄",
      "唐鳳",
      "Wouter van Noort",
      "Irma",
    ]);
    expect(paragraphCounts(pair.en)).toEqual(paragraphCounts(pair.zh));
    expect(paragraphCounts(pair.en)).toEqual([2, 1, 1]);
  });

  test("keeps a Latin-only Chinese gloss and the English link title on their own sides", () => {
    const pair = splitBilingual(FIXTURE);
    const en = renderDocument(pair.en, ":");
    const zh = renderDocument(pair.zh, "：");

    expect(en).toContain('### Wouter van Noort:\n\nWith Polis.');
    expect(zh).toContain("### Wouter van Noort：\n\n用 Polis。");
    expect(zh).toContain("《Laudato si'》？");
    expect(en).toContain("⿻ Community.");
    expect(zh).not.toContain("⿻");
    expect(en).not.toContain("### 唐鳳");
    expect(zh.startsWith("# 2026-10-08 NRC 專訪\n")).toBe(true);
  });

  test("rejects a turn whose paragraph count is odd", () => {
    const odd = "# 2026-10-08 T｜標題\n\n### Irma:\n\nOnly one.\n";
    expect(() => splitBilingual(odd)).toThrow(SplitError);
    expect(() => splitBilingual(odd)).toThrow(/line 3: turn needs an even number/);
  });

  test("rejects an English slot that is actually Chinese", () => {
    const swapped = "# 2026-10-08 T｜標題\n\n### Irma:\n\n這整段都是中文，不該出現在英文側。\n\nWith Polis.\n";
    expect(() => splitBilingual(swapped)).toThrow(/English paragraph looks Chinese/);
  });
});

describe("archiveFilename", () => {
  test("hyphenates the title and keeps Han characters", () => {
    expect(archiveFilename("2026-10-08 NRC Interview")).toBe("2026-10-08-NRC-Interview.md");
    expect(archiveFilename("2026-10-08 NRC 專訪")).toBe("2026-10-08-NRC-專訪.md");
  });
});

function speakerOf(block: { readonly kind: string; readonly title?: string; readonly speaker?: string }): string {
  return block.kind === "section" ? (block.title ?? "") : (block.speaker ?? "");
}

function paragraphCounts(doc: { readonly blocks: readonly { readonly kind: string; readonly paragraphs?: readonly string[] }[] }): number[] {
  return doc.blocks.filter((block) => block.kind === "turn").map((block) => block.paragraphs?.length ?? 0);
}
