# 03 — First deploy to Vercel

## A. Deploy (terminal, preferred)

From the project root:

```bash
vercel
```

- [ ] If it asks about scope/team, pick your personal account.
- [ ] If it asks to link a project, say **No** (this is a brand-new project).
- [ ] **Framework**: it should auto-detect `Angular` — keep it.
- [ ] **Build Command**: it should show `npm run build` — keep it.
- [ ] **Output Directory**: leave it **empty** / accept the default.
- [ ] Wait for the build to finish — it ends with a URL like `https://lucas-bandin.vercel.app`.
  - One-line explanation: this first run creates the Vercel project, builds, and deploys to a preview URL.

Now deploy to **production** (the URL people will actually use):

```bash
vercel --prod
```

- [ ] It builds again and gives you a production URL, e.g. `https://lucas-bandin.vercel.app`.
  - One-line explanation: `--prod` ships to the production environment instead of a preview.

## B. Note your URL

- [ ] Write your production URL here: `https://________.vercel.app`
  - One-line explanation: you'll need it in the next file.

## UI instead

1. Go to <https://vercel.com/new> → **Import Git Repository** → select `LgArcida/Lucas.Bandin`.
2. Vercel auto-detects Angular — click **Deploy**.
3. Wait for the build → note the production URL.
