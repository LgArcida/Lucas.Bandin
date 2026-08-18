# 02 — Build and test locally

Run these from the project root (`Lucas.Bandin`).

## A. Build the production bundle

```bash
npm run build
```

- [x] It finishes with a `dist/Lucas.Bandin/` folder (no red errors).
  - One-line explanation: compiles the optimized, SSR-ready app exactly like Vercel will.

## B. Smoke-test SSR locally

```bash
npm run serve:ssr:Lucas.Bandin
```

- [x] The terminal prints `Node Express server listening on http://localhost:4000`.
  - One-line explanation: this runs the real SSR server on your machine.

## C. Open the site

- [x] Visit <http://localhost:4000> in your browser — the page renders fully (not a blank screen).
  - One-line explanation: confirms the server produces real HTML, not an empty shell.

## D. Check the file Vercel will run

```bash
ls -la dist/Lucas.Bandin/server/server.mjs
```

- [ ] The file exists (a few hundred KB).
  - One-line explanation: this is the server entry point Vercel detects and runs.

## E. Stop the server

- [ ] Press `Ctrl+C` in the terminal.
  - One-line explanation: frees port 4000 and ends the local test.
