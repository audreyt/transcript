import { test, expect } from '@playwright/test';
import { CANARIES } from './canaries';

/**
 * Search is client-side via Pagefind — typing into #sayit-search-input
 * populates #sayit-search-results. A regression here typically means the
 * pagefind index wasn't rebuilt, which would be a serious publishing bug.
 */
test('client-side search surfaces a known canary transcript', async ({ page }) => {
  await page.goto('/');

  const input = page.locator('#sayit-search-input');
  await expect(input).toBeVisible();
  await input.click();
  await input.fill('Azeem Azhar');

  // Wait for pagefind to load its wasm bundle + index on first use.
  const results = page.locator('#sayit-search-results');
  await expect(results).toBeVisible({ timeout: 15_000 });

  const azeemLink = results.locator(`a[href*="${CANARIES.plainEn.path}"]`).first();
  await expect(azeemLink).toBeVisible({ timeout: 15_000 });

  await page.screenshot({ path: 'screenshots/search.png', fullPage: true });
});
