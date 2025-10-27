# Quick Start - Deploy to Google

You have two options to deploy your website:

## Option 1: Google Sites (Easiest - No Code Required)

1. Go to https://sites.google.com
2. Click the "+" button to create a new site
3. Click "Embed" → "Embed code"
4. Copy and paste your HTML from `index.html`
5. Publish your site
6. Done! ✅

This is the simplest option if you don't need Firebase features.

---

## Option 2: Firebase Hosting (More Control)

### Prerequisites (Required First Time):

1. **Accept Terms of Service:**
   - Go to https://console.firebase.google.com/
   - Accept Google Cloud Terms of Service when prompted
   
2. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

3. **Login:**
   ```bash
   firebase login
   ```

### Deploy:

4. **Initialize hosting:**
   ```bash
   firebase init hosting
   ```
   
   When prompted:
   - Select "Create a new project" (or use existing)
   - Public directory: `.`
   - Single-page app: **Yes**
   - Overwrite index.html: **No**

5. **Deploy:**
   ```bash
   firebase deploy
   ```

Your site will be live at: `https://YOUR-PROJECT-ID.web.app`

---

## Recommendation

For a simple personal website, **Google Sites is the easiest and fastest** option. Firebase gives you more control but requires setup.

