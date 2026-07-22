# 02 First Tests

Browser, Context, Page (BCP) fundamentals — the three-level hierarchy
Playwright uses to isolate sessions, plus how to configure a context with
viewport, locale, geolocation, and device emulation options.

## Key Files

- `01_bcp.spec.ts` - raw `playwright` script (not a `test()` block) that
  launches a browser, creates two contexts, opens a page in one, and closes
  everything in reverse order.
- `02_bcp_multipleContext.spec.ts` - raw script simulating an admin and a
  viewer as two separate contexts on the same browser.
- `03_BCP_Test.spec.ts` - `test()`-based login flow using a fresh
  `browser.newContext()` and `getByLabel`/`getByRole` locators.
- `03_bcp_multiple_Page.spe.ts` - raw script opening two pages (tabs) in the
  *same* context to show shared cookies/session state. Note: filename ends in
  `.spe.ts`, not `.spec.ts`, so the Playwright test runner does not pick it up.
- `04_Test_interface.spec.ts` - shows the `page` fixture Playwright injects
  automatically, and that each `test()` gets a fresh, isolated page/context.
- `05__BCP_TEST_PW.spec.ts` - two contexts (`admin`, `guest`) created from the
  `browser` fixture to interact independently within one test.
- `06__BCP_Test_Options.spec.ts` - `browser.newContext()` with options such as
  `viewport`, `locale`, `timezoneId`, `geolocation`, `permissions`, and a
  manual mobile device emulation object.

## BCP Patterns

- Browser → Context → Page: launch the browser once, create a new context per
  isolated session, and a page (tab) inside that context.
- Contexts do not share cookies/storage; pages within the same context do.
- Use the `browser` fixture inside `test()` to create extra contexts when a
  test needs multiple independent sessions (e.g. admin vs. guest).
- Pass options to `browser.newContext({...})` to emulate viewport, locale,
  timezone, geolocation, or a mobile device.
- Always close contexts/browsers you open manually, in reverse order of
  creation.

## Run This Module

```bash
npx playwright test tests/02_first_tests
```

Run a single `test()`-based spec:

```bash
npx playwright test tests/02_first_tests/03_BCP_Test.spec.ts
```

The raw `playwright` scripts (no `test()` blocks) are run directly with `tsx`
instead of the Playwright test runner:

```bash
npx tsx tests/02_first_tests/01_bcp.spec.ts
```
