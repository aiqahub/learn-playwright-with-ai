import { test, expect } from '@playwright/test';

test('Verify the signup page displays an error with incorrect input', async ({ page }) => {
    await page.goto('https://vwo.com/free-trial/');
    let inputBox = page.locator('input[name="email"]');
    await inputBox.fill('invalidemail');

    await page.locator('button[type="submit"]').click();
    let errorMessage = page.locator('div.error-message');

    await expect(page.locator('div.error-message')).toHaveText('Please enter a valid email address.');
}