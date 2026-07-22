# 08 Web Select / Dropdowns

This module covers interacting with native and custom (JS-driven) dropdown
and multi-select widgets — from the built-in `<select>` element up to
searchable, multi-value, creatable, grouped, and async "react-select" style
components.

## Key Files

- `01_Select_FramesWeb.spec.ts` - opens the-internet.herokuapp.com's native
  `<select>` dropdown page (the `selectOption()` calls are left commented out
  as a reference for `page.locator("#dropdown").selectOption("Option 1")`).
- `02_Advacne_Select_Frames2.spec.ts` - clicks open two custom dropdown
  widgets (language, experience level) on the Testing Academy
  "tables/dropdowns" page and selects an option from each via `getByText()`.
- `03_Advacne_Select_Pro.spec.ts` - exercises a react-select-style widget on
  the "tables/select-boxes" page: single select, multi-select (with
  `Escape` to close), a creatable tag input, and an async-loaded select that
  is filtered by typing and asserted with `toContainText`.
- `04_Advance_Select_Pro_v2.spec.ts` - a more thorough pass over the same
  select-boxes page: a searchable single select, a multi-select where one
  chosen value is removed again, a creatable tag added by pressing `Enter`,
  a grouped select where an option is picked from a specific group, and the
  async select from `03`.

## Select/Dropdown Patterns

- Native `<select>` elements: use `page.locator(selector).selectOption(value)`.
- Custom JS dropdowns: click to open, then use `getByText()` or
  `getByRole('option', { name })` to pick the option, since there's no real
  `<select>` under the hood.
- Multi-select widgets often need `Escape` to close the menu after each pick.
- Creatable inputs: fill the input with a new value and `press('Enter')` to
  add it as a new option/tag.
- Async selects: fill the search input, wait for the menu to update, then
  assert its contents with `toContainText` before clicking the option.
- Grouped selects: scope the locator to the specific group container before
  calling `getByRole('option', ...)`.

## Run This Module

```bash
npx playwright test tests/08_Web_Select_Frames_Iframe
```

Run a single lesson spec:

```bash
npx playwright test tests/08_Web_Select_Frames_Iframe/04_Advance_Select_Pro_v2.spec.ts
```
