# 05 Allure Reporting

Annotating tests with `allure-js-commons` metadata (epic, feature, story,
description) so the generated Allure report is organized and searchable.

## Key Files

- `01_login.spec.ts` - logs into `app.wingify.com` and tags the test with
  `allure.epic`, `allure.description`, `allure.feature`, and `allure.story`
  before asserting the dashboard title.

## Allure Patterns

- Call `allure.epic(...)`, `allure.feature(...)`, and `allure.story(...)` near
  the top of the test to group it in the report hierarchy.
- Use `allure.description(...)` to add human-readable context shown in the
  report.
- Combine with the Playwright Allure reporter/writer configured in
  `playwright.config.ts` to produce the raw results consumed by
  `allure generate`.

## Run This Module

```bash
npx playwright test tests/05_Allure_Reporting
```

Generate and open the Allure report afterward:

```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```
