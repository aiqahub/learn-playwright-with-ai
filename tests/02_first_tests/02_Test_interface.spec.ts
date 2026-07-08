import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
    // Navigate to the example page
    await page.goto('https://example.com');
    // Perform login actions
    await page.getByLabel('Username').fill('myuser');
    await page.getByLabel('Password').fill('mypassword');
    await page.getByRole('button', { name: 'Login' }).click();
    // Assert login was successful
    await expect(page.getByText('Welcome, myuser!')).toBeVisible();
});