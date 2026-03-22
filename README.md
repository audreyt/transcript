# Transcript

Public transcripts of Audrey Tang's speeches, interviews, and columns — roughly 2,000 markdown files from 1999 to the present. Published in the spirit of *publishing before perishing*: released as soon as possible, open to correction by anyone.

Served at [archive.tw](https://archive.tw) via [sayit-hono](https://github.com/audreyt/sayit-hono).

## File format

Each file is a standalone markdown document. The filename is the date and title:

```
2026-03-04-Ciudadanía-Digital.md
2026-03-04-數位公民.md
```

Inside, transcripts follow a simple convention:

```markdown
# 2026-03-04 數位公民

### 唐鳳：

（speech content）

> (Section Title)

（more content）

### 問：
（question text）

### 唐鳳：
（answer text）
```

- `# Date Title` — document heading
- `### Speaker:` — speaker label (e.g. `### Audrey Tang:` or `### 唐鳳：`)
- `> (Section Title)` — section dividers
- `### Question:` / `### 問：` — questions in Q&A sections

## Bilingual pairs

Many transcripts exist in both English and Traditional Chinese. The `.alternates` file maps these pairs (tab-separated, one pair per line):

```
2026-03-04-Ciudadanía-Digital.md	2026-03-04-數位公民.md
```

The CI workflow reads this file and sends `alternate_filename` to the API so the two versions are linked on the site.

## How it works

```
git push *.md
    │
    ▼
GitHub Actions workflow
    ├─ POST /api/upload_markdown   → archive.tw (D1 + R2)
    └─ rebuild Pagefind index      → deploy sayit-hono to Cloudflare Workers
```

On every push that touches a `.md` file, the workflow in `.github/workflows/upload-markdown-on-change.yml`:

1. Detects added, modified, and deleted markdown files
2. Uploads (or deletes) them via the archive.tw API, including `alternate_filename` for bilingual pairs
3. Rebuilds the Pagefind search index and redeploys the site

## Contributing

If you spot an error in any transcript, open a pull request. The content is CC0 — public domain.

## License

[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
