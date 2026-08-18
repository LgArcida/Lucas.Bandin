# 08 — Final checks (single subdomain, no redirects)

You have exactly one public host (`lgba.sukceso.org`), so there's nothing to
redirect — just verify everything works on it.

## A. TLS is live on the subdomain

```bash
curl -sI https://lgba.sukceso.org
```

- [x] First line is `HTTP/2 200` (and the cert is valid in your browser).
  - One-line explanation: HTTPS is up — Vercel's automatic certificate works.

## B. Assets load on the subdomain

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://lgba.sukceso.org/assets/Du.webp
```

- [x] Prints `200`.
  - One-line explanation: nothing is broken after switching domains.

## C. Final browser walkthrough

- [x] Open <https://lgba.sukceso.org> in a normal (or incognito) tab.
- [x] Hard-refresh (`Ctrl+Shift+R`) — full page renders instantly.
- [x] Scroll every section; reload mid-page (no 404s); click every nav link.
- [x] Open it on your phone — layout and performance feel right.

## D. You're live

- [x] Done. Your portfolio is at **https://lgba.sukceso.org**.
  - From now on: `git push origin main` → Vercel deploys automatically.
  - Remember: keep the Cloudflare records gray cloud.
  - Your root `sukceso.org` is still unused — point it somewhere (or a mail domain) whenever you want.
