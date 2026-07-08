import { test, expect } from '@playwright/test';

test('BCP Test', async ({ browser }) => {
    const context1 = await browser.newContext();
    const page = await context1.newPage();

    await page.goto('https://example.com');
    await page.getByLabel('Username').fill('myuser');
    await page.getByLabel('Password').fill('mypassword');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Welcome, myuser!')).toBeVisible();
});