# Deployment Guide - Firebase Hosting

## ⚠️ IMPORTANT: Accept Terms of Service First!

Before running `firebase init`, you need to accept Google Cloud's Terms of Service:

1. Go to https://console.firebase.google.com/
2. Accept the Terms of Service when prompted
3. Then continue with the steps below

OR create the project manually in the Firebase Console first.

## Step 1: Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

## Step 2: Login to Firebase

Run this in your terminal:
```bash
firebase login
```

This will open a browser window for authentication. Log in with your Google account.

## Step 3: Initialize Firebase Hosting

After logging in, run:
```bash
firebase init hosting
```

During initialization, you'll be prompted with several questions:

1. **"Which Firebase project do you want to use?"**
   - Choose "Create a new project" OR select an existing one
   
2. **"What would you like to use as your public directory?"**
   - Enter: `.` (just a dot) - this means the current directory

3. **"Configure as a single-page app (rewrite all urls to /index.html)?"**
   - Enter: **Yes** (this enables smooth routing)

4. **"File index.html already exists. Overwrite?"**
   - Enter: **No** (keep your existing file)

## Step 4: Deploy Your Website

Once initialization is complete, deploy your site:
```bash
firebase deploy
```

Your website will be live at: `https://YOUR-PROJECT-ID.web.app`

## Step 5 (Optional): Connect Custom Domain

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Hosting → "Add custom domain"
4. Follow the DNS verification steps

## Troubleshooting

- If you get "project does not exist" errors, make sure to create the project in Firebase Console first
- Verify your files are in the correct directory
- Check that index.html exists in the root directory

## Manual Alternative: Google Sites

If you prefer not to use Firebase:

1. Go to https://sites.google.com
2. Click "+" to create a new site
3. Use the "Embed" section to add your HTML content
4. Publish the site

