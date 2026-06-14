# Baby VAL Setup SOP

Plain-language instructions for creating a small personal VAL, connecting an AI key, and connecting one useful tool such as Gmail.

Last updated: June 14, 2026

## What You Are Building

A Baby VAL is a small personal AI workspace that can:

- answer questions in its own dashboard
- use an OpenAI and/or Claude API key
- connect to Gmail so it can read email context and draft replies
- save memory, tasks, transcripts, and conversations in a database
- run online through Railway
- live in your own GitHub account
- be edited later with Codex

This SOP assumes you are doing this in a workshop with a facilitator.

## Accounts You Need Before You Start

Create these accounts first. Use the same email address for all of them if possible.

1. GitHub
   - Go to: https://github.com/signup
   - Create a free account.
   - Verify your email.
   - Keep this tab open.

2. Railway
   - Go to: https://railway.com/login
   - Choose **Continue with GitHub** if possible.
   - Approve Railway connecting to GitHub.
   - Keep this tab open.

3. Codex
   - Go to: https://chatgpt.com/codex/
   - Sign in with your OpenAI/ChatGPT account.
   - If Codex asks to connect GitHub, allow it.

4. OpenAI API account
   - Go to: https://platform.openai.com/
   - Sign in or create an account.
   - Add billing if prompted.
   - Create an API key here: https://platform.openai.com/api-keys

5. Claude API account, optional but recommended
   - Go to: https://platform.claude.com/
   - Sign in or create an account.
   - Add billing if prompted.
   - Create an API key here: https://platform.claude.com/settings/keys

6. Google account for Gmail
   - Use the Gmail account you want VAL to connect to.
   - If this is a business Google Workspace account, your admin may need to allow API access.

## Safety Rules

Do these every time:

- Never paste API keys in public chat, email, or GitHub files.
- Only paste keys into Railway variables or VAL's secure key panel.
- Treat OpenAI and Claude API keys like passwords.
- If you accidentally expose a key, delete it and create a new one.
- Use a real password manager if you have one.

## Workshop Supplies

Have these ready:

- your GitHub login
- your Railway login
- your Codex login
- your OpenAI API key
- your Claude API key, if using Claude
- your Gmail login
- a name for your VAL, such as `Sarah VAL`
- a short slug, such as `sarah-val`

## Part 1: Get Your Own Copy of the VAL Code

There are two common paths. Use the one your facilitator tells you.

Starter repo for this workshop, unless your facilitator gives you a newer link:

```text
https://github.com/JessaGrace1221/baby-val-starter
```

### Option A: Facilitator Gives You a GitHub Template or Repo Link

1. Open the link from the facilitator.
2. If it is a template, click **Use this template**.
3. If it is a normal repo, click **Fork**.
4. Name your repository something simple, such as `baby-val`.
5. Set visibility to **Private** unless the facilitator says otherwise.
6. Click **Create repository**.

### Option B: Codex Creates the Repo for You

1. Open Codex: https://chatgpt.com/codex/
2. Ask Codex:

   ```text
   Create a new private GitHub repository called baby-val from the VAL starter project my facilitator provided.
   ```

3. Follow Codex's prompts to connect GitHub if needed.
4. Confirm that the repo exists in GitHub before moving on.

## Part 2: Deploy Baby VAL on Railway

1. Open Railway: https://railway.com/
2. Click **New Project** or go to: https://railway.com/new
3. Choose **Deploy from GitHub repo**.
4. Select your `baby-val` repository.
5. Let Railway create the first service.
6. Add a Postgres database:
   - Click **New**.
   - Choose **Database**.
   - Choose **Postgres**.
   - Railway should automatically create a `DATABASE_URL` variable for your app.
7. Wait for the first deploy to finish.
8. Open the public Railway URL.

Your VAL may not fully work yet. That is normal. First deploy proves that the app is online.

## Part 3: Add Required Railway Variables

In Railway:

1. Open your project.
2. Click your app service, not the Postgres database.
3. Open **Variables**.
4. Add these variables.

Required:

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

Optional if you are using Claude:

```text
ANTHROPIC_KEY=your Claude API key
```

Optional model setting:

```text
VAL_CHAT_MODEL=gpt-5.5
```

Important:

- Replace `https://your-railway-url.up.railway.app` with your real Railway URL.
- Do not include quotation marks around values.
- After adding variables, Railway will redeploy automatically.

## Part 4: Create Your First Admin Password

1. Open your Baby VAL public URL.
2. If you see a login page, use the admin email you put in Railway.
3. If VAL asks you to set a password, create one.
4. If you do not see the password setup screen, ask your facilitator to check the Railway logs.

## Part 5: Test the AI Brain

In your VAL dashboard, ask:

```text
What can you help me with?
```

Then ask:

```text
Remember that my top priority this week is building my Baby VAL.
```

Then ask:

```text
What is my top priority this week?
```

If VAL answers and remembers the priority, the basic AI setup is working.

## Part 6: Connect Gmail

VAL uses Google OAuth to connect Gmail. OAuth is the official "Sign in with Google and approve permissions" flow.

### Step 1: Create a Google Cloud Project

1. Open Google Cloud Console: https://console.cloud.google.com/
2. Click the project selector at the top.
3. Click **New Project**.
4. Name it something like `Baby VAL`.
5. Click **Create**.

### Step 2: Enable the Gmail API

1. Open the Gmail API page: https://console.cloud.google.com/apis/library/gmail.googleapis.com
2. Make sure your `Baby VAL` project is selected.
3. Click **Enable**.

Useful Google guide: https://developers.google.com/gmail/api/quickstart/nodejs

### Step 3: Configure the OAuth Consent Screen

1. Open OAuth consent setup: https://console.cloud.google.com/apis/credentials/consent
2. Choose **External** unless your facilitator tells you otherwise.
3. Add the app name, such as `Baby VAL`.
4. Add your email as the support email.
5. Add your email as the developer contact.
6. Save and continue.
7. Add yourself as a test user if Google asks for test users.

### Step 4: Create OAuth Client Credentials

1. Open credentials: https://console.cloud.google.com/apis/credentials
2. Click **Create Credentials**.
3. Choose **OAuth client ID**.
4. Choose **Web application**.
5. Name it `Baby VAL Web Client`.
6. Add this Authorized redirect URI:

   ```text
   https://your-railway-url.up.railway.app/auth/callback
   ```

7. Replace `https://your-railway-url.up.railway.app` with your real Railway URL.
8. Click **Create**.
9. Copy the **Client ID** and **Client Secret**.

### Step 5: Add Google Credentials to Railway

In Railway app service variables, add:

```text
GOOGLE_CLIENT_ID=your Google client ID
GOOGLE_CLIENT_SECRET=your Google client secret
GOOGLE_REDIRECT_URI=https://your-railway-url.up.railway.app/auth/callback
```

Optional: if you only want Gmail and not Calendar/Drive/Docs, ask your facilitator before changing scopes. The default VAL setup requests Gmail, Calendar, Drive, and Docs permissions because those features are part of the larger VAL system.

Railway will redeploy after you save variables.

### Step 6: Connect Gmail Inside VAL

1. Open your Baby VAL dashboard.
2. Open **Integration Status**.
3. Click **Reconnect Google** or **Connect Google**.
4. Choose the Gmail account you want VAL to use.
5. Approve the requested permissions.
6. Return to VAL.
7. Open **Integration Status** again.
8. Confirm that Google/Gmail shows as connected.

## Part 7: Test Gmail

Ask VAL:

```text
What important emails need my attention?
```

Then ask:

```text
Draft a short reply to one email that needs a response, but do not send it.
```

The goal is for VAL to read context and create a draft or suggestion. Do not expect it to send anything automatically unless your facilitator has specifically enabled sending.

## Part 8: Connect OpenAI or Claude Inside VAL, If Needed

If the facilitator wants everyone to register keys inside the dashboard instead of only Railway:

1. Open Baby VAL.
2. Open **Integration Status**.
3. Click **Register Your Keys**.
4. Add your OpenAI API key under OpenAI.
5. Add your Claude/Anthropic API key if the field is available.
6. Save.

If your key is already in Railway, this may not be necessary.

## Part 9: Use Codex to Make Baby VAL Personal

Open Codex: https://chatgpt.com/codex/

Good first prompts:

```text
Open my baby-val GitHub repo and explain the main files in plain English.
```

```text
Change the dashboard name to my name and make the welcome text sound warmer.
```

```text
Add a short README section explaining what my Baby VAL is for.
```

```text
Check whether my Railway variables look complete. Do not show the secret values.
```

When Codex changes code:

1. Review what it changed.
2. Ask it to commit the changes.
3. Push to GitHub.
4. Railway should redeploy automatically.

## Done Checklist

You are done when:

- GitHub repo exists
- Railway project exists
- Railway deployment is live
- Postgres database is attached
- `OPENAI_KEY` is set
- `ANTHROPIC_KEY` is set, if using Claude
- `VAL_PUBLIC_BASE_URL` matches the Railway public URL
- admin login works
- VAL answers a test question
- Google Cloud project exists
- Gmail API is enabled
- Google OAuth client exists
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `GOOGLE_REDIRECT_URI` are set in Railway
- Gmail connects from inside VAL
- VAL can answer a Gmail-related question

## Common Problems

### Railway deploy failed

Check:

- Did you deploy the correct GitHub repo?
- Does the repo have `package.json`?
- Did Railway detect Node.js?
- Do the Railway logs mention a missing variable?

### VAL says `OPENAI_KEY not configured`

Fix:

1. Go to Railway variables.
2. Add or correct `OPENAI_KEY`.
3. Wait for redeploy.
4. Refresh VAL.

### Google says redirect URI mismatch

Fix:

1. Copy your exact Railway URL.
2. Add `/auth/callback` to the end.
3. Put that exact full URL in Google OAuth credentials.
4. Put the same URL in Railway as `GOOGLE_REDIRECT_URI`.

Example:

```text
https://sarah-val-production.up.railway.app/auth/callback
```

### Gmail connects but VAL cannot read email

Check:

- Did you enable the Gmail API?
- Did you approve Gmail permissions during Google login?
- Are you using the right Google account?
- Is your Google Workspace admin blocking third-party app access?

### The app works, then forgets everything

Check:

- Is Postgres attached in Railway?
- Does Railway have `DATABASE_URL`?
- Did the app service receive the `DATABASE_URL`, not just the database service?

### Codex cannot see the repo

Check:

- Is Codex connected to GitHub?
- Did you create the repo under the same GitHub account?
- Is the repo private, and did you grant access?

## Facilitator Checklist for a 10-Person Session

Before the session:

- Share the starter repo or template link.
- Decide whether everyone is using OpenAI only, Claude only, or both.
- Decide whether everyone will connect Gmail during the session.
- Have one sample Railway deployment ready to show.
- Have one sample Google OAuth setup ready to show.
- Warn attendees that API billing may require a credit card.

Suggested flow:

1. 10 minutes: create accounts
2. 10 minutes: copy or create GitHub repo
3. 15 minutes: deploy to Railway and add Postgres
4. 15 minutes: add OpenAI/Claude variables and test chat
5. 20 minutes: create Google Cloud project and OAuth credentials
6. 10 minutes: connect Gmail inside VAL
7. 10 minutes: test, troubleshoot, and celebrate working Baby VALs

Keep the group moving. If one person gets stuck on Google OAuth, pair them with a helper while the rest continue.

## Useful URLs

- GitHub signup: https://github.com/signup
- Railway login: https://railway.com/login
- Railway new project: https://railway.com/new
- Codex: https://chatgpt.com/codex/
- OpenAI Platform: https://platform.openai.com/
- OpenAI API keys: https://platform.openai.com/api-keys
- Claude Platform: https://platform.claude.com/
- Claude API keys: https://platform.claude.com/settings/keys
- Google Cloud Console: https://console.cloud.google.com/
- Google API credentials: https://console.cloud.google.com/apis/credentials
- Google OAuth consent: https://console.cloud.google.com/apis/credentials/consent
- Gmail API: https://console.cloud.google.com/apis/library/gmail.googleapis.com
- Gmail API quickstart: https://developers.google.com/gmail/api/quickstart/nodejs
