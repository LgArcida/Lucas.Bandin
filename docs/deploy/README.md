# Deploy Lucas.Bandin to Vercel + Cloudflare domain

Follow the files **in order**. Each file is a checklist — tick boxes as you go.

| # | File | What you'll do |
|---|------|----------------|
| 1 | [`01-account-and-cli.md`](01-account-and-cli.md) | Create your Vercel account and log in the CLI |
| 2 | [`02-build-and-test-locally.md`](02-build-and-test-locally.md) | Build the app and confirm SSR works on your machine |
| 3 | [`03-deploy-to-vercel.md`](03-deploy-to-vercel.md) | First deploy to Vercel, get a live `.vercel.app` URL |
| 4 | [`04-verify-ssr.md`](04-verify-ssr.md) | Verify the live site really serves rendered HTML + assets |
| 5 | [`05-connect-github.md`](05-connect-github.md) | Auto-deploy on every push (the "keep shipping" workflow) |
| 6 | [`06-add-custom-domain.md`](06-add-custom-domain.md) | Tell Vercel about `lgba.sukceso.org` and prove you own it |
| 7 | [`07-configure-cloudflare-dns.md`](07-configure-cloudflare-dns.md) | Create the subdomain in Cloudflare and point it at Vercel |
| 8 | [`08-final-checks.md`](08-final-checks.md) | Final checks on `lgba.sukceso.org` + launch checklist |

## Before you start

- [ ] Your domain is **`sukceso.org`** (Cloudflare); the portfolio will live at **`lgba.sukceso.org`**.
- [ ] You have Node.js 20.19+ installed — check with `node -v`.
- [ ] You can log in to your **Cloudflare** account (where your domain lives).
- [ ] Your code is on GitHub as `LgArcida/Lucas.Bandin` (already done — working tree is clean).

## Notes that apply to all steps

- **Terminal is preferred** — most steps are commands you paste into your project's root terminal.
- Where the web UI is easier, there's a "UI instead" box.
- The first time you run any `vercel` command it may ask questions — accept the defaults.
- Keep the Cloudflare DNS records **gray cloud** (DNS only). Do NOT turn on the orange proxy.
