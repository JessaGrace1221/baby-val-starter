# Install the New Baby VAL in Under 10 Minutes

You do not need to use Terminal or write code.

## Before You Start

You need:

- your GitHub login
- your Railway login
- your existing Baby VAL Railway project

This process replaces the Baby VAL code. It does **not** delete your saved
information as long as you keep the existing Railway database connected.

## Step 1: Make Your Baby VAL Repository

1. Open:
   [Create My Baby VAL Repository](https://github.com/new?template_name=baby-val-starter&template_owner=JessaGrace1221)
2. Sign in to GitHub if asked.
3. Under **Owner**, choose your own GitHub account.
4. Under **Repository name**, type `baby-val`.
5. Choose **Private**.
6. Leave **Include all branches** unchecked.
7. Click **Create repository**.
8. Wait until you see your new repository page.

## Step 2: Open Your Existing Railway Project

1. Open [Railway Dashboard](https://railway.com/dashboard).
2. Sign in if asked.
3. Click the Railway project that already runs your Baby VAL.
4. You should see at least two boxes:
   - your Baby VAL app
   - PostgreSQL or Postgres

**Do not click, replace, disconnect, or delete PostgreSQL.**

## Step 3: Point the App at Your New Repository

1. Click the **Baby VAL app** box. Do not click PostgreSQL.
2. Click **Settings**.
3. Find **Source** or **Service Source**.
4. If an old GitHub repository is connected, click **Disconnect** beside the
   old repository.
5. Click **Connect Repo**.
6. Choose the new `baby-val` repository you created in Step 1.
7. Choose the `main` branch if Railway asks.

If Railway cannot see the repository:

1. Open [GitHub Installed Apps](https://github.com/settings/installations).
2. Find **Railway** and click **Configure**.
3. Allow Railway to access your new `baby-val` repository.
4. Return to Railway and click **Connect Repo** again.

## Step 4: Check One Setting

1. While still inside the **Baby VAL app** box, click **Variables**.
2. Confirm that `DATABASE_URL` is already listed.
3. Do not change or copy its value.
4. Add this variable if it is missing:
   - Name: `VAL_EDITION`
   - Value: `baby`
5. Click **Add** or **Save**.

Do not replace your existing name, email, password, encryption, session, Google,
Microsoft, Krisp, or database variables.

## Step 5: Let Railway Deploy

1. Click **Deployments**.
2. Wait for the newest deployment to say **Success** or **Active**.
3. If no deployment starts, click **Deploy** or **Redeploy** once.
4. Do not repeatedly click Deploy while it is building.

## Step 6: Open Baby VAL

1. Inside the Baby VAL app service, open **Settings**.
2. Find **Networking** or **Public Networking**.
3. Click the Railway web address shown there. It usually ends in
   `.up.railway.app`.
4. Sign in with your existing Baby VAL email and password.
5. Refresh the page once if the old version appears.

## Step 7: Confirm It Worked

You should see:

- **Witnessing Session** near the top-left
- **Open VAL Studio** on the right
- **Open Executive Functions** at the bottom
- Board of Observers
- Executive Inbox
- Transcripts
- text Co-Work with VAL
- no Voice button

Click **Witnessing Session**. Baby VAL should take you to the exact setup step
you need next.

Open **VAL Setup → Connections** to add or test:

- OpenAI
- Anthropic / Claude, if you want to use it
- Google
- Microsoft
- Krisp

## Stop and Ask for Help If

- `DATABASE_URL` is missing
- the PostgreSQL box disappeared
- Railway asks you to create a new database
- your saved Witnessing answers disappear
- the page says the deployment failed

Do not use **Clean Start**, **Delete My Data**, or delete the PostgreSQL service.
