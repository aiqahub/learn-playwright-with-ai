# 01 Basics

First Playwright tests: navigating to a page, asserting the title, and the
built-in test annotations (`skip`, `only`, `fail`, `slow`, conditional skip).

## Key Files

- `01_Basic_Test.spec.ts` - navigates to `https://app.vwo.com` and asserts the
  page title equals `Login - Wingify`.
- `02_Test_Annotations.spec.ts` - demonstrates `test.skip`, `test.only`,
  `test.fail`, `test.slow`, and a conditional `test.skip(condition, reason)`
  based on `browserName`.

## Patterns

- Use `expect(page).toHaveTitle(...)` for exact or regex title assertions.
- `test.skip(...)` inside a test body skips conditionally at runtime.
- `test.only(...)` restricts a run to just that test — remove before committing.
- `test.fail(...)` marks a test as expected to fail.
- `test.slow(...)` triples the test's default timeout.

## Run This Module

```bash
npx playwright test tests/01_Basics
```

Run a single lesson spec:

```bash
npx playwright test tests/01_Basics/01_Basic_Test.spec.ts
npx playwright test tests/01_Basics/02_Test_Annotations.spec.ts
```
