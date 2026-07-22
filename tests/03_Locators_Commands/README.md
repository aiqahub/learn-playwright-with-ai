# 03 Locators and Commands

This module introduces core Playwright navigation commands and locator strategies. The examples cover `page.goto()` wait options, referer headers, CSS and XPath locators, role-based locators, sequential typing, browser history, and browser-context cookies.

## Key Files

- `01_Commands.spec.ts`: demonstrates `page.goto()` with `waitUntil` modes — `commit`, `domcontentloaded`, `load` (default), and `networkidle`.
- `02_GotoCommands.spec.ts`: shows default navigation behavior with a URL assertion, and a per-navigation `referer` option.
- `03_Reffer_Command.spec.ts`: sets a `Referer` header for an entire browser context via `extraHTTPHeaders`.
- `04_Automation.vwo.com.spec.ts`: uses a CSS `id` locator against the VWO login page, submits invalid credentials, and asserts the error notification text.
- `05_Xpath.spec.ts`: repeats the VWO login exercise using an XPath locator (`xpath=//input[@data-qa='...']`) for the username field.
- `06_GetRole.spec.ts`: uses `getByRole()` to click the "Make Appointment" link on the CURA demo site.
- `07_CSS_Locators.spec.ts`: practices a CSS child selector (`div.first > span`) plus `count()`, `first()`, `nth()`, `last()`, and looping over all matches.
- `08_PressSequentially.spec.ts`: demonstrates `pressSequentially()` for character-by-character typing, then `page.goBack()`.
- `09_Cookie.spec.ts`: reads all cookies via `context.cookies()` and adds new ones via `context.addCookies([...])`.
- `10_Project_3_Signup.spec.ts`: fills the VWO free-trial signup form with an invalid email and asserts the validation error message.
- `index.html`: local login-page fixture for locator practice.

Several specs use public demo/training sites, so network access is required when running them.

## Run

Run the whole module:

```bash
npx playwright test tests/03_Locators_Commands
```

Run one lesson file:

```bash
npx playwright test tests/03_Locators_Commands/06_GetRole.spec.ts
```

Run headed for easier debugging:

```bash
npx playwright test tests/03_Locators_Commands --headed
```
