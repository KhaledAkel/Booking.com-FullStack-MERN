import { test, expect } from '@playwright/test';

const UI_URL = 'http://localhost:5173';

test('allow to regiter', async ({ page }) => {

  await page.goto(UI_URL);
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.fill('input[name="first_name"]', 'test_first_name');
  await page.fill('input[name="last_name"]', 'test_last_name');
  await page.fill('input[name="email"]', `test@${Date.now()}test.com`);
  await page.fill('input[name="password"]', 'test_12345678');
  await page.fill('input[name="confirm_password"]', 'test_12345678');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
  await expect(page.url()).toBe(`${UI_URL}/`);
});
