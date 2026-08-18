# 01 — Vercel account + CLI login

## A. Create your Vercel account (once, web)

- [x] Go to <https://vercel.com/signup> and create a free **Hobby** account.
  - One-line explanation: Vercel is free for personal projects like this one.
- [x] Log in and click **Continue with GitHub** if offered.
  - One-line explanation: linking GitHub makes importing the repo in step 5 trivial.

## B. Check your Node version

```bash
node -v
```

- [x] The version should be `v20.19.0` or higher (ideally 22+).
  - One-line explanation: Angular 21 and Vercel both require a recent Node.

## C. Install the Vercel CLI

```bash
npm install -g vercel
```

- [x] Install finished without errors.
  - One-line explanation: gives you the `vercel` command everywhere.

## D. Log in

```bash
vercel login
```

- [x] A browser tab opens → click **Continue with GitHub** (or email) → you're logged in.
  - One-line explanation: authenticates this machine so the CLI can deploy for you.

## E. Confirm the login

```bash
vercel whoami
```

- [x] It prints your Vercel username or email.
  - One-line explanation: proves the CLI is authenticated and ready.

## UI instead (A + D)

Just sign up and log in at <https://vercel.com> in your browser — you only need the
CLI login if you want to deploy from the terminal.
