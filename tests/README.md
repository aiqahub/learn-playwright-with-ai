# Tests

Root-level Playwright specs plus the numbered course modules. Each `NN_Topic`
folder is a self-contained lesson with its own README describing the concepts
and files inside it.

## Key Files

- `example.spec.ts`: default Playwright starter spec — checks the
  playwright.dev title and the "Get started" link navigation.
- `test1.spec.ts`: minimal smoke test asserting the navbar title text on
  playwright.dev.

## Modules

- [01_Basics](01_Basics/README.md) — first test, title assertions, test annotations.
- [02_first_tests](02_first_tests/README.md) — browsers, contexts, and pages (BCP).
- [03_Locators_Commands](03_Locators_Commands/README.md) — locators and core commands.
- [04_Session_Storage](04_Session_Storage/README.md) — saving and reusing storage state.
- [05_Allure_Reporting](05_Allure_Reporting/README.md) — Allure annotations and reporting.
- [06_Multiple_Element_](06_Multiple_Element_/README.md) — handling lists of elements.
- [07_WebTables](07_WebTables/README.md) — reading HTML tables.
- [08_Web_Select_Frames_Iframe](08_Web_Select_Frames_Iframe/README.md) — select dropdowns and frames.
- [09_Frame_Iframe](09_Frame_Iframe/README.md) — iframe and nested iframe handling.
- [10_Keyboard_Hover_Drag_Drop](10_Keyboard_Hover_Drag_Drop/README.md) — keyboard, hover, drag & drop, right-click.
- [11_JS_Alerts](11_JS_Alerts/README.md) — native JS alert, confirm, and prompt dialogs.

## Run This Module

```bash
npx playwright test tests/example.spec.ts tests/test1.spec.ts
```

Run the full suite:

```bash
npx playwright test
```
