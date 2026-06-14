# Baby VAL Starter

Baby VAL is a small personal VAL starter app for workshops, experiments, and first deployments.

It gives each person their own AI dashboard that can:

- answer questions in a private web dashboard
- use an OpenAI API key
- optionally use a Claude/Anthropic API key
- connect Gmail through Google OAuth
- save tasks, memory, transcripts, conversations, drafts, and OAuth tokens in Postgres
- deploy on Railway from a GitHub repo
- be customized later with Codex

Start here:

- [Baby VAL Setup SOP](./BABY_VAL_SOP.md)
- [Full VAL User Guide](./VAL_USER_GUIDE.md)

## Quick Deploy

1. Copy this repo into your own GitHub account.
2. Deploy it on Railway from GitHub.
3. Add a Railway Postgres database.
4. Add the required Railway variables.
5. Open the Railway URL and set your admin password.
6. Connect Gmail from **Integration Status**.

## Required Railway Variables

```text
OPENAI_KEY=your OpenAI API key
SESSION_SECRET=make up a long random phrase
VAL_CLIENT_NAME=Your Name
VAL_CLIENT_SLUG=your-name-val
VAL_CLIENT_BRAND_NAME=Your Name VAL
VAL_PUBLIC_BASE_URL=https://your-railway-url.up.railway.app
ADMIN_EMAIL=your email address
ADMIN_NAME=Your Name
```

Railway should provide this automatically after you attach Postgres:

```text
DATABASE_URL=your Railway Postgres URL
```

Optional:

```text
ANTHROPIC_KEY=your Claude API key
VAL_CHAT_MODEL=gpt-5.5
GOOGLE_CLIENT_ID=your Google OAuth client ID
GOOGLE_CLIENT_SECRET=your Google OAuth client secret
GOOGLE_REDIRECT_URI=https://your-railway-url.up.railway.app/auth/callback
```

## Gmail Setup

To connect Gmail, create a Google Cloud project, enable the Gmail API, create OAuth credentials, and add the Google variables to Railway.

Use the step-by-step SOP:

- [Baby VAL Setup SOP](./BABY_VAL_SOP.md#part-6-connect-gmail)

Useful Google links:

- Google Cloud Console: https://console.cloud.google.com/
- Google API credentials: https://console.cloud.google.com/apis/credentials
- Gmail API: https://console.cloud.google.com/apis/library/gmail.googleapis.com
- Gmail API quickstart: https://developers.google.com/gmail/api/quickstart/nodejs

## Optional Advanced Integrations

This starter comes from a larger VAL codebase, so it includes optional hooks for CRM, lead research, Google Docs, Microsoft, and other advanced workflows.

For a Baby VAL workshop, you can ignore these unless your facilitator specifically enables them:

- GoHighLevel / LeadConnector
- Microsoft OAuth
- Outscraper
- Apollo
- RocketReach
- lead intelligence workflows

## Local Development

Install dependencies:

```sh
npm install
```

Run locally:

```sh
npm start
```

By default the app runs on:

```text
http://localhost:3000
```

## Important Safety Note

Do not commit API keys, OAuth secrets, passwords, or `.env` files to GitHub. Put secrets in Railway variables or in VAL's secure key panel.
