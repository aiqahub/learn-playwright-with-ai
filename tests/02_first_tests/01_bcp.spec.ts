import { chromium, Browser, BrowserContext, Page } from 'playwright';

async function runTest() {

    // launch a new browser instance
    let browser: Browser | null = await chromium.launch({ headless: false });
    console.log('Browser launched');

    // Create content for the test
    let context1: BrowserContext | null = await browser.newContext();
    console.log('Browser context created');


    // Create a new page in the context
    let page: Page | null = await context1.newPage();
    console.log('New page created');

    await page.goto('https://example.com');
    console.log('Navigated to example.com');

    // Perform some actions on the page
    const title = await page.title();
    console.log(`Page title is: ${title}`);

}
