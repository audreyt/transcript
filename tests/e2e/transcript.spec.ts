import { test, expect } from '@playwright/test';
import { CANARIES } from './canaries';

test('canary transcript renders expected heading and speaker', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  const response = await page.goto(CANARIES.plainEn.path);
  expect(response?.status(), 'transcript HTTP status').toBe(200);

  await expect(page.locator('h1')).toContainText(CANARIES.plainEn.h1);

  // Speaker labels are the defining visual element of a SayIt transcript.
  const speakerName = page.locator('.speech__meta-data__speaker-name').first();
  await expect(speakerName).toBeVisible();

  expect(
    consoleErrors.filter(e => !/favicon|third-party|Warning:/i.test(e)),
    'no unexpected console errors',
  ).toHaveLength(0);

  await page.screenshot({ path: 'screenshots/transcript-plain-en.png', fullPage: true });
});

test('BW column renders body paragraphs', async ({ page }) => {
  const response = await page.goto(CANARIES.bwEn.path);
  expect(response?.status(), 'BW transcript HTTP status').toBe(200);
  await expect(page.locator('h1')).toContainText(CANARIES.bwEn.h1);

  const paragraphs = page.locator('.speech__content p');
  expect(await paragraphs.count(), 'BW column should render multiple paragraphs').toBeGreaterThan(3);

  await page.screenshot({ path: 'screenshots/transcript-bw-en.png', fullPage: true });
});
