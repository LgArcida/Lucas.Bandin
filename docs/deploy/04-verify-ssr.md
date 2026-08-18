# 04 — Verify the live site serves real HTML + assets

This confirms SSR (and Vercel's static asset serving) works in production.
Replace `YOUR-URL.vercel.app` with your URL from file 03.

## A. The homepage returns real rendered HTML

```bash
curl -s https://lucasbandin.vercel.app/ -o /tmp/home.html && wc -c /tmp/home.html
```

- [ ] The size is several KB (not a few hundred bytes).
  - One-line explanation: a large HTML body means the server rendered the full page.

```bash
grep -io "experience\|projects\|skills" /tmp/home.html | sort -u
```

- [x] It prints at least one of those section names.
  - One-line explanation: the actual page content (not just an empty `<app-root>`) is in the served HTML — SSR works.

## B. A static asset is served (the express.static gotcha check)

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://lucasbandin.vercel.app/assets/Du.webp
```

- [x] It prints `200`.
  - One-line explanation: Vercel serves the `browser/` assets from its CDN even though it ignores `express.static()`.
  - If it prints `404`, stop here and tell me — we'll add a small `vercel.json` to fix it.

## C. Optional: preview URL also works

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://lucasbandin.vercel.app/projects
```

- [x] It prints `200` (any route falls back to the server render).
  - One-line explanation: deep links and refreshes don't 404.

All good? Move on to **05-connect-github.md**.
