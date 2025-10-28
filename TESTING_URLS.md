# Website URLs

## 🌐 Local Testing (Before Deployment)

### Option 1: Open in Browser Directly
Double-click `index.html` in Finder, or right-click and choose "Open with" → your browser.

The URL will look like:
```
file:///Users/carlosvillalpando/Documents/carlosvillalpando_site/index.html
```

### Option 2: Use a Local Server (Recommended)
Install a simple HTTP server:
```bash
# Using Python (usually pre-installed)
python3 -m http.server 8000

# Then open: http://localhost:8000
```

Or using Node.js:
```bash
npx http-server -p 8000
```

---

## 🚀 Firebase Hosting URL (After Deployment)

Once you deploy with `firebase deploy`, your URL will be:

```
https://[YOUR-PROJECT-ID].web.app
https://[YOUR-PROJECT-ID].firebaseapp.com
```

### How to Find Your Firebase URL:

1. **After deployment**, Firebase will show you the URL in the terminal output
2. **Or** go to https://console.firebase.google.com/
   - Select your project
   - Go to "Hosting" in the left sidebar
   - You'll see your live URLs there

### Your Main Page:
The `index.html` file is your main/landing page, so it will be the default URL:
- `https://YOUR-PROJECT-ID.web.app/` (homepage)
- `https://YOUR-PROJECT-ID.web.app/index.html` (also works)

---

## 📁 Your Project Structure

Your website has these pages (all handled by the single index.html):
- **Home**: `/` or `/index.html` - Hero section
- **About**: `/#about` - About section
- **Projects**: `/#projects` - Projects section
- **Contact**: `/#contact` - Contact form

The hash routing (`#`) means all navigation happens on the same page without page reloads.


