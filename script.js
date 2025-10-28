// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button loading state handler (reCAPTCHA v3 handles the actual submit)
const contactForms = document.querySelectorAll('#contact-form');
contactForms.forEach(form => {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
        form.addEventListener('submit', function(e) {
            const originalText = submitButton.textContent;
            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Re-enable button after a delay (in case of errors)
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 5000);
        });
    }
});

// CTA button handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

