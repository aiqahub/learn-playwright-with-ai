# 10 Keyboard, Hover, Drag & Drop, Right Click

Simulating raw keyboard input, mouse hover to reveal menus, drag-and-drop
(both the built-in helper and a manual mouse path), and right-click context
menus.

## Key Files

- `01_keyboard.spec.ts` - uses `page.keyboard.press/up/down` on
  `keycode.info` to send individual key presses (`A`, `ArrowLeft`,
  `Shift+O`) and screenshots the result of each.
- `02_Spicejet_Hover.spec.ts` - hovers the "Add-ons" nav item on SpiceJet and
  a demo hover-menu page, then reads all submenu item texts with
  `allInnerTexts()`.
- `03_Drag_Drop.spec.ts` - uses `locator.dragTo(...)` on the classic
  the-internet.herokuapp.com drag-and-drop columns and asserts the swap.
- `04_Drag_Drop_advance_Kanban.spec.ts` - drags a Kanban card between columns
  using a manual `page.mouse.move/down/move/up` sequence (for DnD widgets
  where `dragTo()` doesn't trigger the right events).
- `05_RightClick.spec.ts` - right-clicks (`click({ button: 'right' })`) to
  open a context menu, reads all menu option texts, and clicks "Copy".

## Patterns

- `page.keyboard.press('Key')` sends a single key; `down`/`up` let you hold a
  modifier across multiple actions.
- `locator.hover()` triggers CSS/JS hover states so submenus become visible
  before you query them.
- `locator.dragTo(target)` works for most native HTML5/Playwright-compatible
  drag-and-drop; fall back to manual `page.mouse` move/down/move/up (with
  `steps` for intermediate mousemove events) when a widget needs finer
  control.
- `click({ button: 'right' })` opens a native or custom context menu.

## Run This Module

```bash
npx playwright test tests/10_Keyboard_Hover_Drag_Drop
```

Run a single lesson spec:

```bash
npx playwright test tests/10_Keyboard_Hover_Drag_Drop/03_Drag_Drop.spec.ts
```
