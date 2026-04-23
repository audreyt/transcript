/**
 * Stable transcripts used by the visual-E2E suite.
 *
 * These URLs are hardcoded so that a rename or republish triggers a test
 * failure rather than a silent miss. If any of these is renamed on archive.tw,
 * update the entry here in the same PR.
 */
export const CANARIES = {
  plainEn: {
    path: '/2020-10-07-interview-with-azeem-azhar',
    h1: '2020-10-07 Interview with Azeem Azhar',
  },
  bwEn: {
    path: '/2025-02-27-bw-column-countering-the-ai-bin-laden-t',
    h1: '2025-02-27 BW Column: Countering the AI bin Laden Threat',
  },
  bwZh: {
    // Note: archive.tw strips the full-width colon from the slug.
    path: '/2025-02-27-商周專欄防堵-ai-賓拉登',
    h1: '2025-02-27 商周專欄：防堵 AI 賓拉登',
  },
} as const;
