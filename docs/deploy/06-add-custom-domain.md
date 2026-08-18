# 06 — Add your custom domain in Vercel

This tells Vercel "this domain is mine". You'll prove ownership with a TXT record,
then point DNS at Vercel in the next file.

> Use **`yourdomain.com`** — replace with your real domain in every command below.

## A. Add the domain (web UI — easiest here)

1. Open <https://vercel.com/dashboard> → click your project → **Settings** → **Domains**.
2. Type `yourdomain.com` → click **Add**.
3. When asked how to connect DNS, choose **"Add records manually"** — do **not** switch to Vercel's nameservers.
   - One-line explanation: your domain is registered at Cloudflare Registrar, which requires Cloudflare's nameservers to stay in charge.
4. Vercel now shows two things on that page:
   - A **verification TXT record** (starts with `vercel-verification=...`) — copy it.
   - The DNS records it wants (the `A` and `CNAME` you'll add in file 07).

## B. (Terminal alternative to add the domain)

```bash
vercel domains add yourdomain.com
```

- [ ] It registers the domain and prints the same verification TXT record.
  - One-line explanation: adds the domain to your account; verification still happens in the dashboard.

## C. Next file

- [ ] Keep this page open — file 07 is where you paste those records into Cloudflare.
