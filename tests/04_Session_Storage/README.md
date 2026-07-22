# 04 Session Storage

Saving an authenticated browser session to disk and reusing it so later tests
can skip the login flow.

## Key Files

- `01_Session.spec.ts` - raw `playwright` script that logs into
  `app.wingify.com`, waits for the post-login redirect, and writes the
  session (cookies/local storage) to `./user-session.json` via
  `context.storageState({ path })`. Run directly with `tsx`, not the test
  runner.
- `02_Use_Saved_Session.spec.ts` - `test.use({ storageState: "./user-session.json" })`
  to start each test already authenticated, then navigates straight to the
  dashboard and settings pages without logging in again.

## Session Storage Patterns

- Wait for a reliable post-login signal (URL change) before snapshotting
  storage — capturing too early saves an empty/unauthenticated session.
- `context.storageState({ path })` writes cookies and local storage to a JSON
  file.
- `test.use({ storageState: 'path/to/file.json' })` at the top of a spec
  applies the saved session to every test in that file.
- Keep `user-session.json` out of version control since it contains live
  auth cookies.

## Run This Module

Generate the session file first (raw script, run with `tsx`):

```bash
npx tsx tests/04_Session_Storage/01_Session.spec.ts
```

Then run the tests that reuse it:

```bash
npx playwright test tests/04_Session_Storage/02_Use_Saved_Session.spec.ts
```
