// 01: Minimal Studio Contact Form Controller
export function initMinimalStudioForm(root = document) {
  const forms = root.querySelectorAll('[data-form="minimal-studio"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfStudioForm');
    const nameInput = container.querySelector('#cf-studio-name');
    const emailInput = container.querySelector('#cf-studio-email');
    const msgInput = container.querySelector('#cf-studio-message');
    const nameErr = container.querySelector('#cf-studio-name-err');
    const emailErr = container.querySelector('#cf-studio-email-err');
    const msgErr = container.querySelector('#cf-studio-msg-err');
    const submitBtn = container.querySelector('#cfStudioSubmit');
    const banner = container.querySelector('#cfStudioBanner');

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, emailInput, msgInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [nameErr, emailErr, msgErr].forEach(err => { if (err) err.textContent = ''; });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;

        if (!nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'Please enter your name.';
          hasError = true;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please provide an email address.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid email address.';
          hasError = true;
        }

        if (!msgInput.value.trim()) {
          msgInput.classList.add('is-invalid');
          if (msgErr) msgErr.textContent = 'Please provide project details.';
          hasError = true;
        }

        if (hasError) {
          const firstErr = container.querySelector('.is-invalid');
          if (firstErr) firstErr.focus();
          return;
        }

        // Honest demo submission feedback
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.querySelector('.cf-studio-btn-text').textContent = 'Sending...';
        }

        setTimeout(() => {
          if (banner) {
            banner.removeAttribute('hidden');
            banner.textContent = '✓ Demo inquiry received. No external message was transmitted.';
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector('.cf-studio-btn-text').textContent = 'Send Inquiry';
          }
          form.reset();
        }, 600);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMinimalStudioForm());
  } else {
    initMinimalStudioForm();
  }
}
