# 07 — Create the subdomain in Cloudflare and point it at Vercel

Everything here happens in the **Cloudflare dashboard**.

> **How subdomains work here:** Cloudflare has no "create subdomain" button.
> A subdomain like `lgba.sukceso.org` is created automatically the moment you
> add a DNS record whose **Name** is `lgba`. So the single CNAME record below is
> what brings `lgba.sukceso.org` to life.

Keep the record **gray cloud** (DNS only) — never click the orange cloud for this.

## A. Log in and open DNS

- [x] Go to <https://dash.cloudflare.com> → select **`sukceso.org`** → **DNS** → **Records**.
  - One-line explanation: Cloudflare is the DNS authority for your domain.

## B. Add the CNAME record (verifies + connects in one step)

- [x] Click **Add record** and fill in:
  - **Type:** `CNAME`
  - **Name:** `lgba`
  - **Target / Value:** `4f596a3eb68de41a.vercel-dns-017.com` (paste exactly what Vercel showed you; if Cloudflare rejects the trailing dot, drop it)
  - **TTL:** Auto
  - **Proxy status:** **DNS only** (gray cloud)
- [x] Save it — `lgba.sukceso.org` now exists and points at Vercel.
  - One-line explanation: this record is what "creates" the subdomain; Vercel's unique value also proves you own it.
- [x] Confirm the record shows **gray cloud**.
  - One-line explanation: Vercel handles CDN and TLS; Cloudflare just answers DNS.

## C. Wait for Vercel to verify it

- [x] Back in Vercel → **Settings → Domains**, `lgba.sukceso.org` eventually shows
      **Valid Configuration** (may take a few minutes; click Refresh).
  - One-line explanation: once DNS points at Vercel, ownership is auto-verified and the HTTPS certificate (Let's Encrypt) is issued.

## D. Done with DNS

- [x] Your root domain `sukceso.org` is untouched — only `lgba.sukceso.org` points at Vercel.
  - One-line explanation: the rest of your domain stays exactly as it was.
