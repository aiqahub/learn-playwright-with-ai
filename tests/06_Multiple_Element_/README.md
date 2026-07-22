# 06 Multiple Elements

Working with locators that match many elements at once — reading all their
text, iterating over them, and acting on one based on its content.

## Key Files

- `01_Multiple_Element.spec.ts` - on the "multiple element filter" demo page,
  reads all sidebar link texts with `allInnerTexts()`, clicks the one whose
  text is `"My Account"`, then re-queries the links with `.all()` and logs
  each link's `href` attribute.

## Multiple Element Patterns

- `locator(...).allInnerTexts()` returns the text of every matching element as
  a string array without needing to loop element handles.
- `locator(...).all()` returns an array of `Locator` handles you can iterate
  and call further actions/attributes on (e.g. `getAttribute('href')`).
- Combine both: use `allInnerTexts()` to find the right item by text, then
  `.first()`/`.nth()` or a fresh `.all()` pass to act on it.

## Run This Module

```bash
npx playwright test tests/06_Multiple_Element_
```
