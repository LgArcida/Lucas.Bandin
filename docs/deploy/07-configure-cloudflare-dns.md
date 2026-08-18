# 07 — Point Cloudflare DNS at Vercel

Everything here happens in the **Cloudflare dashboard**. Keep every record
**gray cloud** (DNS only) — never click the orange cloud for these.

## A. Log in and open DNS

- [ ] Go to <https://dash.cloudflare.com> → select your domain → **DNS** → **Records**.
  - One-line explanation: Cloudflare is the DNS authority for your domain.

## B. Add the ownership verification TXT (from file 06)

- [ ] **Add record**:
  - **Type:** `TXT`
  - **Name:** `yourdomain.com` (or `@`)
  - **Content:** paste the `vercel-verification=...` value from Vercel
  - **TTL:** Auto
- [ ] Back in Vercel's Domains page, click **Refresh** — the domain shows as verified.
  - One-line explanation: proves to Vercel you own the domain.

## C. Add the A record (points the root domain at Vercel)

- [ ] **Add record**:
  - **Type:** `A`
  - **Name:** `@`
  - **IPv4 address:** `76.76.21.21`
  - **Proxy status:** **DNS only** (gray cloud)
- [ ] Confirm the record shows **gray cloud**.
  - One-line explanation: Vercel answers requests for `yourdomain.com`.

## D. Add the CNAME record (points www at Vercel)

- [ ] **Add record**:
  - **Type:** `CNAME`
  - **Name:** `www`
  - **Target:** `cname.vercel-dns.com`
  - **Proxy status:** **DNS only** (gray cloud)
- [ ] Confirm the record shows **gray cloud**.
  - One-line explanation: Vercel answers requests for `www.yourdomain.com`.

## E. Wait for Vercel to see it

- [ ] Back in Vercel → **Settings → Domains**, both `yourdomain.com` and `www.yourdomain.com`
      eventually show **Valid Configuration** (may take a few minutes; click Refresh).
  - One-line explanation: Vercel auto-issues the HTTPS certificate (Let's Encrypt) once DNS points at it.
