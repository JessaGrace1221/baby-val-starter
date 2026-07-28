# Update Your Existing Baby VAL in Under 10 Minutes

You do not need Terminal. You do not need to create a new repository. You do
not need to change anything in Railway.

You will use GitHub Desktop to replace the files in the Baby VAL repository you
already have. Railway will see the update and redeploy automatically.

## Before You Start

You need:

- your GitHub login
- the GitHub repository that currently runs your Baby VAL

## Step 1: Install GitHub Desktop

1. Open [Download GitHub Desktop](https://desktop.github.com/download/).
2. Download the Mac or Windows version.
3. Open the downloaded installer.
4. Follow the normal installation steps.
5. Open **GitHub Desktop**.
6. Click **Sign in to GitHub.com**.
7. Sign in with the GitHub account that owns your existing Baby VAL repository.

## Step 2: Put Your Existing Repository on Your Computer

1. In GitHub Desktop, click **File** in the top menu.
2. Click **Clone repository**.
3. Click the **GitHub.com** tab.
4. Find and click the repository that currently runs your Baby VAL.
5. Leave **Local path** exactly as GitHub Desktop chooses it.
6. Click **Clone**.
7. Wait for GitHub Desktop to finish.

You are copying your existing repository to your computer. You are not creating
a new repository.

## Step 3: Download the Replacement Files

1. Open:
   [Download the Baby VAL Replacement Files](https://github.com/JessaGrace1221/baby-val-starter/releases/latest/download/baby-val-replacement-files.zip)
2. The file `baby-val-replacement-files.zip` will download.
3. Open your **Downloads** folder.
4. Double-click `baby-val-replacement-files.zip`.
5. A folder named `baby-val-replacement-files` will appear.
6. Open that folder. You should see:
   - `server.js`
   - `package.json`
   - `hearth-prototype.html`
   - folders named `assets` and `services`

## Step 4: Open the Existing Repository Folder

Return to GitHub Desktop.

### On a Mac

1. Click **Repository** in the top menu.
2. Click **Show in Finder**.

### On Windows

1. Click **Repository** in the top menu.
2. Click **Show in Explorer**.

A folder will open. This is the existing Baby VAL repository on your computer.
Leave this folder open.

## Step 5: Copy in the Replacement

You should now have two folders open:

1. `baby-val-replacement-files`
2. your existing Baby VAL repository

Open `baby-val-replacement-files`.

1. Select everything inside:
   - Mac: press **Command + A**
   - Windows: press **Ctrl + A**
2. Copy everything:
   - Mac: press **Command + C**
   - Windows: press **Ctrl + C**
3. Open the existing Baby VAL repository folder.
4. Paste:
   - Mac: press **Command + V**
   - Windows: press **Ctrl + V**
5. If your computer asks what to do with matching files:
   - choose **Replace**
   - choose **Replace All** if that option appears
   - on Windows, choose **Replace the files in the destination**
6. Wait for the copying to finish.

Do not delete the existing repository folder. Do not move the ZIP into it.

## Step 6: Send the Update to GitHub

Return to GitHub Desktop.

1. The left side should now show a list of changed files.
2. Find the **Summary** box near the bottom-left.
3. Type: `Update Baby VAL`
4. Click **Commit to main**.
5. Wait for the commit to finish.
6. Click **Push origin** near the top of GitHub Desktop.
7. Wait until GitHub Desktop says there are no local changes.

## Step 7: Wait for Railway

Your existing repository is already connected to Railway. Do not reconnect or
replace anything.

1. Open [Railway Dashboard](https://railway.com/dashboard).
2. Click your existing Baby VAL project.
3. Click the **Baby VAL app** box. Do not click PostgreSQL.
4. Click **Deployments**.
5. Wait for the newest deployment to say **Success** or **Active**.

Do not repeatedly click Deploy while Railway is building.

## Step 8: Open Baby VAL

1. Open the same Baby VAL web address you already use.
2. Refresh the page:
   - Mac: press **Command + Shift + R**
   - Windows: press **Ctrl + Shift + R**
3. Sign in with your existing Baby VAL email and password.

## Step 9: Confirm It Worked

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

- GitHub Desktop cannot find the existing repository
- your computer asks whether to delete the repository
- GitHub Desktop shows an error when you click Push origin
- Railway says the deployment failed
- your saved Witnessing answers disappear

Do not create a new repository. Do not create a new Railway project. Do not
delete or disconnect PostgreSQL. Do not use **Clean Start** or **Delete My
Data**.
