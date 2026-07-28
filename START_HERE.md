# Update Your Existing Baby VAL in Under 10 Minutes

You do not need Terminal. You do not need to create a new repository. You do
not need to change anything in Railway.

You are replacing the live files inside the GitHub repository you already use.
Railway will notice the update and redeploy Baby VAL automatically.

## Before You Start

You need:

- your GitHub login
- the GitHub page for your existing Baby VAL repository

## Step 1: Download the Replacement Files

1. Open:
   [Download the Baby VAL Replacement Files](https://github.com/JessaGrace1221/baby-val-starter/releases/latest/download/baby-val-replacement-files.zip)
2. The file `baby-val-replacement-files.zip` will download.
3. Open your **Downloads** folder.
4. Double-click `baby-val-replacement-files.zip`.
5. A folder named `baby-val-replacement-files` will appear.
6. Open that folder. You should see files such as:
   - `server.js`
   - `package.json`
   - `hearth-prototype.html`
   - folders named `assets` and `services`

Do not upload the ZIP itself. Upload the files inside the opened folder.

## Step 2: Open Your Existing GitHub Repository

1. Open [GitHub](https://github.com/).
2. Sign in if asked.
3. Click your profile picture in the top-right.
4. Click **Your repositories**.
5. Click the repository that currently runs your Baby VAL.
6. Make sure you are looking at the `main` branch.

Do not create a new repository.

## Step 3: Upload the Replacement

1. On your existing repository page, click **Add file**.
2. Click **Upload files**.
3. Return to the open `baby-val-replacement-files` folder on your computer.
4. Select everything inside it:
   - Mac: press **Command + A**
   - Windows: press **Ctrl + A**
5. Drag the selected files and folders into the large GitHub upload box.
6. Wait until GitHub finishes listing the uploaded files.

Matching files will be replaced. New required files will be added. Your
database, passwords, Witnessing answers, Connections, transcripts, and
Environments are not inside this upload.

## Step 4: Save the Update

1. Click **Commit changes**.
2. If GitHub asks for a message, type:
   `Update Baby VAL`
3. Choose **Commit directly to the main branch**.
4. Click the final **Commit changes** button.
5. Wait until GitHub returns to the repository page.

## Step 5: Wait for Railway

Your existing repository is already connected to Railway. You should not
reconnect or replace anything.

1. Open [Railway Dashboard](https://railway.com/dashboard).
2. Click your existing Baby VAL project.
3. Click the **Baby VAL app** box. Do not click PostgreSQL.
4. Click **Deployments**.
5. Wait for the newest deployment to say **Success** or **Active**.

Do not repeatedly click Deploy while Railway is building.

## Step 6: Open Baby VAL

1. Open the same Baby VAL web address you already use.
2. Refresh the page:
   - Mac: press **Command + Shift + R**
   - Windows: press **Ctrl + Shift + R**
3. Sign in with your existing Baby VAL email and password.

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

- GitHub shows more than 100 files in the upload
- GitHub says a file is too large
- Railway says the deployment failed
- your usual Baby VAL address does not open
- your saved Witnessing answers disappear

Do not create a new repository. Do not create a new Railway project. Do not
delete or disconnect PostgreSQL. Do not use **Clean Start** or **Delete My
Data**.
