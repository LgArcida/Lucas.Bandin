# 06 — Add your subdomain in Vercel

This tells Vercel "`lgba.sukceso.org` is mine". You'll copy the CNAME record
Vercel shows you, then add it in Cloudflare in the next file.

> Your domain is **`sukceso.org`**; your portfolio will live at **`lgba.sukceso.org`**.

## A. Add the subdomain (web UI — easiest here)

1. Open <https://vercel.com/dashboard> → click your project → **Settings** → **Domains**.
2. Type `lgba.sukceso.org` → click **Add**.
3. When asked how to connect DNS, choose **"Add records manually"** — do **not** switch to Vercel's nameservers.
   - One-line explanation: your domain is registered at Cloudflare Registrar, which requires Cloudflare's nameservers to stay in charge.
4. Vercel shows a **CNAME record** to add in Cloudflare:
   - **Type:** `CNAME`
   - **Name:** `lgba`
   - **Value:** `4f596a3eb68de41a.vercel-dns-017.com.` — copy this exact value, you'll paste it in file 07.
   - One-line explanation: this one record both verifies ownership and connects the domain to Vercel — no TXT step needed.
5. Ignore the "update your domain's nameservers" section (`ns1/ns2.vercel-dns.com`) shown below it.
   - One-line explanation: that's the "move DNS to Vercel" option — you're keeping Cloudflare in charge.

## B. (Terminal alternative to add the subdomain)

```bash
vercel domains add lgba.sukceso.org
```

- [x] It registers the subdomain and shows the same CNAME record to add in Cloudflare.
  - One-line explanation: adds the subdomain to your account; the record is still added in the Cloudflare dashboard.

## C. Next file

- [x] Keep this page open — file 07 is where you paste those records into Cloudflare.
