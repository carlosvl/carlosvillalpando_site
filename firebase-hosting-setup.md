# Firebase Hosting Setup Guide

## Install Firebase CLI

```bash
npm install -g firebase-tools
```

## Initialize Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firebase Hosting

## In Terminal

```bash
# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init

# Follow the prompts:
# - Select "Hosting"
# - Select "Use an existing project" or "Create a new project"
# - Public directory: Enter "." (current directory)
# - Single-page app: Yes (for smooth routing)
# - GitHub automatic deployments: Your choice
# - Overwrite index.html: No (we already have one)
```

## Deploy

```bash
firebase deploy --only hosting
```

Your website will be live at: `https://YOUR-PROJECT-ID.web.app`

## Connect Custom Domain

1. In Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS verification steps

