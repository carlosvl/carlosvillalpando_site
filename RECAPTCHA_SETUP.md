# reCAPTCHA Setup Guide

I've added Google reCAPTCHA to your contact forms. You need to get your reCAPTCHA keys from Google.

## Steps to Set Up reCAPTCHA:

### 1. Get Your reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "+ Create" to register a new site
3. Fill in the form:
   - **Label**: "Carlos Villalpando Portfolio"
   - **reCAPTCHA type**: Select "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Add your domains
     - `carlosvillalpando.com`
     - `www.carlosvillalpando.com`
     - For local testing: `localhost`
4. Accept the Terms of Service
5. Click Submit
6. You'll receive:
   - **Site Key** (Public key - safe to expose)
   - **Secret Key** (Keep this private)

### 2. Update Your HTML Files

Replace `YOUR_SITE_KEY` in both forms:

**In `index.html` (line 69)** and **`elcochinito.html` (line 202)**:
```html
<div class="g-recaptcha" data-sitekey="6Lc_YOUR_ACTUAL_SITE_KEY_HERE" style="margin: 1rem 0;"></div>
```

### 3. Configure FormSubmit (Optional)

1. Go to [FormSubmit Dashboard](https://formsubmit.co/users/sign_in)
2. Sign up/sign in with your email
3. Go to Settings
4. Add your reCAPTCHA Secret Key

---

## Alternative: Use FormSubmit's Built-in Captcha

If you prefer not to use Google reCAPTCHA, FormSubmit has its own captcha that's already enabled by the `_captcha` field I added. You can remove the Google reCAPTCHA div if you want to use FormSubmit's simpler version.

---

## Thank You Page

The thank you page (`thank-you.html`) is ready and will automatically redirect after successful form submission.

The redirect URL is set to: `https://carlosvillalpando.com/thank-you.html`

**For local testing**, you'll need to update the `_next` value temporarily to:
```html
<input type="hidden" name="_next" value="file:///path/to/thank-you.html">
```
Or just use the hosted version once deployed.

---

## Test It!

1. Get your reCAPTCHA keys
2. Update the site key in the HTML
3. Submit the form
4. You should be redirected to the thank you page!

