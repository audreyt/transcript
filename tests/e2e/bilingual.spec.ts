import { test, expect } from '@playwright/test';
import { CANARIES } from './canaries';

/**
 * The archive.tw page doesn't expose a visible "view in other language" link
 * at the moment; the alternate_filename metadata is used by the API but not
 * rendered in the current SPA. What we can still validate post-deploy is that
 * both sides of a bilingual pair are published and reachable. If an "alternate
 * language" link is added later, this spec should be tightened to click it.
 */
test('bilingual pair: both sides load with expected headings', async ({ page }) => {
  const enResp = await page.goto(CANARIES.bwEn.path);
  expect(enResp?.status(), 'EN side HTTP status').toBe(200);
  await expect(page.locator('h1')).toContainText(CANARIES.bwEn.h1);
  await page.screenshot({ path: 'screenshots/bilingual-en.png', fullPage: true });

  const zhResp = await page.goto(CANARIES.bwZh.path);
  expect(zhResp?.status(), 'ZH side HTTP status').toBe(200);
  await expect(page.locator('h1')).toContainText(CANARIES.bwZh.h1);
  await page.screenshot({ path: 'screenshots/bilingual-zh.png', fullPage: true });
});
