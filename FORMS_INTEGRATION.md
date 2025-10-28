# Email Integration for Contact Forms

To make the contact forms actually send emails, you need to set up one of these services:

## Option 1: Formspree (Recommended - Easiest)

### Steps:
1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your unique form ID (looks like: `xpzgkpmb`)
5. Replace `YOUR_FORM_ID` in `script.js` with your actual form ID

### Free Tier:
- 50 submissions per month
- No credit card required
- Works perfectly for personal portfolios

---

## Option 2: FormSubmit (Simpler, No Signup Needed)

### Steps:
1. Update your HTML forms to use FormSubmit directly
2. Change the form action to: `https://formsubmit.co/carlos@carlosvillalpando.com`
3. No JavaScript needed for this option

### Update the HTML:
```html
<form action="https://formsubmit.co/carlos@carlosvillalpando.com" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" rows="5" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

**Pros:**
- No signup required
- Email sent directly to your address
- Free unlimited submissions

**Cons:**
- Less control over submissions
- Need to update HTML forms

---

## Option 3: EmailJS (More Features)

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create an account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your public key and template ID
6. Update the JavaScript code

### Free Tier:
- 200 emails per month
- Templates
- Email history

---

## Quick Setup with FormSubmit (No Signup)

If you want the quickest solution, I can update your forms to use FormSubmit with your email address. This requires no signup and emails will be sent directly to carlos@carlosvillalpando.com.

Would you like me to:
1. Set up FormSubmit (quickest - no signup)
2. Guide you through Formspree (more features, requires signup)

