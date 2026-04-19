import { test, expect } from '@playwright/test';

test('homepage loads and shows navigation', async ({ page }) => {
  const response = await page.goto('/');
  expect(response?.status(), 'homepage HTTP status').toBeLessThan(400);

  // Navigation landmarks — these are server-rendered, not JS-dependent.
  await expect(page.getByRole('link', { name: /Speakers|講者/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /Speeches|對話/ })).toBeVisible();

  await page.screenshot({ path: 'screenshots/homepage.png', fullPage: true });
});

test('speeches index lists transcripts', async ({ page }) => {
  const response = await page.goto('/speeches');
  expect(response?.status(), 'speeches index HTTP status').toBeLessThan(400);

  // The index must have at least some links matching the YYYY-MM-DD slug shape.
  const datedLinks = page.locator('a[href^="/20"]');
  await expect(datedLinks.first()).toBeVisible();
  expect(await datedLinks.count()).toBeGreaterThan(10);

  await page.screenshot({ path: 'screenshots/speeches-index.png', fullPage: true });
});
