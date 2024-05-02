import { test, expect } from '@playwright/test';

test.describe('Switch Component - E2E', () => {
  test('should toggle checked state when clicked', async ({ page }) => {
    // Serve your Svelte application
    await page.goto('http://localhost:5173/');

    const checkbox = page.locator('label[data-testid="switch"]');
    await expect(checkbox).not.toBeChecked();
    await checkbox.click();
    await expect(checkbox).toBeChecked();
  });
});