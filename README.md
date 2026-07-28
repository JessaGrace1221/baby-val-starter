# Baby VAL

Baby VAL is the governed foundation edition of VAL. It uses the current VAL
intelligence, evidence, Witnessing, Connections, Board of Observers, text chat,
Executive Inbox, Transcripts, and VAL Studio architecture while intentionally
presenting a smaller product surface.

## Visible Experience

- Board of Observers
- Executive Inbox
- Transcripts
- Text Co-Work with VAL
- VAL Studio, including Environment sharing and importing

Witnessing and Connections remain available through **VAL Setup** because they
are the infrastructure that makes the visible experience truthful. Voice is not
included in this edition.

## Replacing an Existing Baby VAL

Deploying this repository changes application code. It does not replace the
Railway Postgres service or delete its data.

Keep the existing Railway service connected to its existing `DATABASE_URL`.
Do not create a new database when updating the code. On startup, Baby VAL uses
additive `create table if not exists` and `add column if not exists` migrations.
Existing Witnessing answers, connections, transcripts, Board evidence, and VAL
Studio Environments remain in Postgres.

Destructive reset and deletion operations are never run during startup. They
remain behind explicit authenticated actions.

## Required Railway Variables

- `DATABASE_URL`
- `SESSION_SECRET`
- `ENCRYPTION_KEY`
- `ADMIN_NAME`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `VAL_CLIENT_NAME`
- `VAL_CLIENT_SLUG`
- `VAL_CLIENT_BRAND_NAME`
- `VAL_PUBLIC_BASE_URL`

Baby VAL defaults to `VAL_EDITION=baby`. It is still helpful to set that
variable explicitly in Railway.

Users can securely add OpenAI and optional Anthropic keys inside **VAL Setup →
Connections**. Keys are encrypted and are not committed to GitHub.

## Common Connections

- Google OAuth for Gmail, Calendar, Drive, and Docs
- Microsoft OAuth for Outlook and Microsoft Calendar
- Krisp for transcripts
- OpenAI for VAL reasoning
- Anthropic / Claude as an optional approved model provider

## Environment Sharing

VAL Studio Environments live in each recipient's Postgres database, not in this
GitHub repository.

Use **Share Environment** to download a portable
`.val-environment.json` file. The share file includes the governed workflow
contract but removes private evidence, identities, credentials, account
mappings, destination IDs, approvals, receipts, and run history.

Use **Import Environment** to install a shared Environment. Imports always
arrive as disconnected Drafts. The recipient must reconnect sources and
destinations, confirm approval boundaries, and pass a historical test before
making the Environment live.

## Local Verification

```bash
npm install
npm test
npm start
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

`npm test` is the Baby VAL launch gate for its promised surfaces. The inherited
full-product diagnostic suite remains available as `npm run test:full`; some
adult-VAL presentation assertions intentionally do not apply to this edition.

Never commit `.env`, API keys, OAuth tokens, database exports, or personal
Witnessing documents.
