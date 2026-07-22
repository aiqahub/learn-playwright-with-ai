# 11 JS Alerts

Handling native browser dialogs — `alert`, `confirm`, and `prompt` — using
Playwright's `dialog` event.

## Key Files

- `01_JS_Alerts.spec.ts` - on the-internet.herokuapp.com's JS Alerts page,
  registers a `page.once('dialog', ...)` handler before triggering each
  dialog type, asserts the dialog's `type()`/`message()`, and accepts it
  (including typing a value into a `prompt` via `dialog.accept(text)`), then
  verifies the resulting page text.

## Dialog Patterns

- Register `page.once('dialog', handler)` (or `page.on(...)` for repeated
  dialogs) *before* the action that triggers the dialog — otherwise
  Playwright auto-dismisses it and the handler never runs.
- Inspect `dialog.type()` (`'alert' | 'confirm' | 'prompt'`) and
  `dialog.message()` to assert the correct dialog appeared.
- Call `dialog.accept()` to accept/OK, `dialog.accept(text)` to fill and
  accept a `prompt`, or `dialog.dismiss()` to cancel.
- Assert on the page's resulting state (e.g. a result `<div>`) to confirm the
  dialog was handled as expected.

## Run This Module

```bash
npx playwright test tests/11_JS_Alerts
```
