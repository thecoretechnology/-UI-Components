// 02: Split Contact Layout Controller
export function initSplitLayoutForm(root = document) {
  const forms = root.querySelectorAll('[data-form="split-layout"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfSplitForm');
    const nameInput = container.querySelector('#cf-split-name');
    const emailInput = container.querySelector('#cf-split-email');
    const msgInput = container.querySelector('#cf-split-message');
    const nameErr = container.querySelector('#cf-split-name-err');
    const emailErr = container.querySelector('#cf-split-email-err');
    const msgErr = container.querySelector('#cf-split-msg-err');
    const submitBtn = container.querySelector('#cfSplitSubmit');
    const notice = container.querySelector('#cfSplitNotice');

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
          if (nameErr) nameErr.textContent = 'Name is required.';
          hasError = true;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Email is required.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Valid email is required.';
          hasError = true;
        }

        if (!msgInput.value.trim()) {
          msgInput.classList.add('is-invalid');
          if (msgErr) msgErr.textContent = 'Message is required.';
          hasError = true;
        }

        if (hasError) {
          const first = container.querySelector('.is-invalid');
          if (first) first.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.querySelector('span').textContent = 'Sending...';
        }

        setTimeout(() => {
          if (notice) {
            notice.removeAttribute('hidden');
            notice.textContent = '✓ Inquiry received in demo mode. No email was sent.';
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = 'Send Message';
          }
          form.reset();
        }, 600);
      });
    }
  });
}

export const initSplitContactForm = initSplitLayoutForm;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSplitLayoutForm());
  } else {
    initSplitLayoutForm();
  }
}
