# 08 — Final checks + canonical redirect

## A. Pick one canonical host (recommended: the root domain)

- [ ] In Vercel → **Settings → Domains**, decide the main URL.
  - One-line explanation: `www` and the root should not be two competing sites.
  - Recommended: keep **`yourdomain.com`** as the main one.

## B. Redirect the other one to the canonical host

- [ ] On the `www.yourdomain.com` row, click the **…** menu → **Redirect to** `yourdomain.com`.
  - One-line explanation: anyone typing `www.` lands on the root automatically (or reverse it if you prefer `www`).
- [ ] Confirm the redirect applies (Vercel does it at the edge, no code needed).

## C. TLS is live on the root

```bash
curl -sI https://yourdomain.com
```

- [ ] First line is `HTTP/2 200` (and the cert is valid in your browser).
  - One-line explanation: HTTPS is up — Vercel's automatic certificate works.

## D. www redirects to the root

```bash
curl -sI https://www.yourdomain.com
```

- [ ] You see `HTTP/2 308` and a `location: https://yourdomain.com/...` header.
  - One-line explanation: the canonical redirect works.

## E. Assets still load on the custom domain

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://yourdomain.com/assets/Du.webp
```

- [ ] Prints `200`.
  - One-line explanation: nothing is broken after switching domains.

## F. Final browser walkthrough

- [ ] Open <https://yourdomain.com> in a normal (or incognito) tab.
- [ ] Hard-refresh (`Ctrl+Shift+R`) — full page renders instantly.
- [ ] Scroll every section; reload mid-page (no 404s); click every nav link.
- [ ] Open it on your phone — layout and performance feel right.

## G. You're live

- [ ] Done. Your portfolio is at **https://yourdomain.com**.
  - From now on: `git push origin main` → Vercel deploys automatically.
  - Remember: keep the Cloudflare records gray cloud.
