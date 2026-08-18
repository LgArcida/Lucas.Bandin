# 05 — Connect GitHub for auto-deploys

After this, **every push to `main` deploys automatically** — that's your "keep shipping" loop.
The repo is already on GitHub; this just wires Vercel to it.

## A. Make sure your latest code is pushed

```bash
git status && git push origin main
```

- [x] `git status` says "nothing to commit" and the push succeeds.
  - One-line explanation: Vercel can only deploy what's on GitHub.

## B. Link the GitHub repo (terminal, preferred)

```bash
vercel git connect
```

- [x] Follow the prompts: pick your GitHub account, then the `Lucas.Bandin` repo.
  - One-line explanation: tells Vercel "watch this repo".

## C. Confirm the connection

```bash
vercel project ls
```

- [x] You see your project listed.
  - One-line explanation: your local CLI is linked to the Vercel project.

## D. Verify auto-deploy works

- [x] Push any tiny change (e.g. edit a README) — or wait until your next real change.
  - One-line explanation: a new deployment should appear automatically.
- [x] Optional: open a PR to `main` — Vercel gives it a **preview URL**.
  - One-line explanation: PRs get their own test deployment without touching production.

## UI instead

1. <https://vercel.com/new> → **Import Git Repository** → select `LgArcida/Lucas.Bandin` → **Deploy**.
2. Vercel now auto-deploys on every push and gives PR previews for free.
