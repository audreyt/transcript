# Agent Guide

## Mission and boundaries

This repository is the public, CC0 archive of Audrey Tang’s speeches, interviews, columns, and meetings. Root-level dated Markdown files are publication records served at [archive.tw](https://archive.tw), not ordinary prose drafts.

- Make the smallest faithful change that satisfies the request. Preserve words, speaker attribution, chronology, links, quotations, and the target file’s established formatting.
- Do not bulk-reflow, normalize punctuation, rewrite transcript language, rename files, or “clean up” legacy Markdown unless explicitly asked.
- `README` is the human-facing guide and deliberately has no filename extension. This `AGENTS.md` is maintainer guidance. Neither is transcript content.
- Inspect the target file and a nearby comparable file before authoring. Current examples: `2026-07-13-WebX-Special-Dialogue-with-Ju-Chun-Ko.md` and `2026-07-13-WebX-特別對談：唐鳳-×-葛如鈞.md` for a dialogue pair; `2026-06-25-AI-Models-Made-the-List.md` for a column.

## Repository map

| Path | Purpose |
| --- | --- |
| `YYYY-MM-DD-*.md` | Published transcript, speech, interview, or column source; the filename is part of its public identity. |
| `.alternates` | Alternate-language pairs. |
| `.redirects` | Source-of-truth redirect snapshot for renamed public slugs. |
| `scripts/validate.ts` | Filename, encoding, whitespace, and alternate-pair checks. |
| `scripts/sync_markdown.ts` | Uploads changed published records and pair metadata to archive.tw. |
| `.github/workflows/upload-markdown-on-change.yml` | Production content-sync and search-index deployment workflow. |
| `tests/unit/` | Bun unit tests for repository tooling. |

If a new root-level maintainer document needs a `.md` extension, exclude it from validation, publication sync, local OG baking, and the downstream search builder before adding it. Otherwise it is treated as a public transcript.

## Transcript Markdown contract

Follow the local file’s style; the corpus contains historical variation. New or substantially reconstructed documents should use this shape:

```markdown
# 2026-03-04 Title

### Speaker Name:

Paragraphs of that speaker’s turn.

> (stage direction or editorial context)

### Question:

Question text.
```

- Root transcript filenames must be `YYYY-MM-DD-<title>.md` with a real ISO calendar date and NFC-normalized Unicode. Keep files at repository root.
- Title the record the way a reader would look for it. When it comes from a named show, series, or outlet, the title says so: `Interview with Open Commons`, `Weekly Ochiai`, `The Solve Effect (MIT Solve)`. A show that also has a strong episode title takes `Show: Episode`, as in `Digital Keywords: Audrey Tang on Civic AI and the 6-Pack of Care`. Traditional Chinese uses `：` and adds a genre word where it helps: `Open Commons 專訪`, `落合陽一對談`.
- Keep filenames URL-safe even when the title is not. Spell `&` as `and` in the filename while the H1 keeps `&`, so `2026-07-23-13th-and-Park-….md` carries `# 2026-07-23 13th & Park: …`.
- Use UTF-8 without a BOM and no trailing whitespace. Do not add YAML front matter: the corpus begins with one `#` title heading.
- Use one H1 document title. Dialogue turns and question prompts use H3 labels. Preserve the label’s locale and colon style: English examples use `:`; Traditional Chinese examples use `：`.
- Keep paragraphs and turns visibly separated. Current files nearly always have a blank line after the H1; older files vary after speaker labels, so preserve a touched file’s local spacing rather than reformatting it wholesale.
- Non-speech material covers `(laughter)`, `（與會者皆無意見）`, section/context markers, and supplied source or license attributions. Both blockquoted and inline markers are common in the corpus, so follow the file you are touching rather than converting one form to the other.
- Non-speech markers follow the language of the file they sit in, not that of its alternate. Traditional Chinese uses full-width `（笑）`, `（掌聲。）`; English uses `[laughs]` or `(laughter)`. A bilingual pair is not expected to mirror bracket glyphs, and neither side should be rewritten to match the other. Do not introduce `〔〕`: no root file uses it.
- Prefer ordinary Markdown links, `[label](https://example.test)`. Preserve legacy raw HTML and existing link text unless the requested correction requires changing them.
- Do not wrap a complete heading in `**...**`; heading text is already semantic. Do not invent speaker labels, editorial notes, source attributions, or translations.

## Bilingual pairs and redirects

### `.alternates`

When both complete language versions exist, add or update exactly one line:

```text
english-file.md<TAB>traditional-chinese-file.md
```

Rules enforced by validation:

- Use one literal tab and exactly two root-level `.md` filenames.
- Both files must exist; neither side may pair with itself or appear in a second pair.
- Keep comments and existing ordering unless the requested change needs more.
- When removing one member of a pair, remove its mapping or remove both members together.

### `.redirects`

This file is a whole-snapshot, tab-separated mapping of `old_slug<TAB>new_slug`, without `.md` suffixes. A sync replaces the live redirect table with this file. Do not edit it casually; removing a line removes that live redirect.

## Safe workflow

1. Locate the exact target and inspect its headings, nearby turns, and—when applicable—its alternate-language partner.
2. Make a surgical edit. A filename change is a URL migration; preserve or deliberately update `.redirects` only when the request calls for it. Renaming costs nothing while a file is still untracked and unpushed—check with `git ls-files --error-unmatch <path>`—because the old slug was never public. After a push, a rename needs a `.redirects` row.
3. For new bilingual content, create both finished files before adding the `.alternates` row. Do not pair partial translations. Commit the pair and its `.alternates` row together: the sync reads pair metadata from that file, so publishing two records without the row puts two unlinked pages online.
4. Validate the scope:
   - `bun run validate:all` for repository-wide filename, encoding, and metadata checks.
   - `bun scripts/validate.ts --changed --base <base-ref>` when checking a branch’s changed transcript files and trailing whitespace. The script’s implicit base is `origin/master`; pass the intended base explicitly when it differs.
   - `bun run test` after changing TypeScript tooling or its tests.
5. Do not run publication, deploy, or push commands unless the user asks. A qualifying content push syncs archive.tw and rebuilds the public search index.
