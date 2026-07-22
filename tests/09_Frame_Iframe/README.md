# 09 Frame and Iframe Tests

This module covers Playwright patterns for working with HTML frames, iframes,
multiple frames, and nested iframe structures. The examples use `frameLocator()`
to scope actions and assertions inside the correct frame before interacting with
form fields, links, and text.

## Key Files

- `01_Iframe.spec.ts`: fills and submits a vehicle registration form inside a
  single iframe selected by `#frame-one`, then reads back the result text.
- `02_Multiple_frame.spec.ts`: opens a page with multiple named frames,
  reads the main frame header, inspects all `<frame>` elements on the page
  (name/src), and clicks a registration link in the side frame.
- `03_Iframe_within_Iframe.spec.ts`: demonstrates chained frame locators for
  three levels of nested iframes on the SelectorsHub iframe scenario page.

## Iframe Patterns

- Use `page.frameLocator(selector)` to create a scoped locator for one frame.
- Use frame-scoped locators, such as `vehicleFrame.locator('#field')`, before
  filling inputs or clicking buttons inside a frame.
- Select named frames with selectors such as `[name="main"]` and `[name="side"]`.
- Inspect multiple frame elements with `page.locator('//frame').all()` when a
  page uses legacy `<frame>` tags.
- Chain frame locators for nested frames:

```ts
const frame1 = page.frameLocator('#pact1').first();
const frame2 = frame1.frameLocator('#pact2');
const frame3 = frame2.frameLocator('#pact3');
```

## Run This Module

Run all frame and iframe tests:

```bash
npx playwright test tests/09_Frame_Iframe
```

Run one spec:

```bash
npx playwright test tests/09_Frame_Iframe/01_Iframe.spec.ts
```

Run in UI mode for debugging:

```bash
npx playwright test tests/09_Frame_Iframe --ui
```
