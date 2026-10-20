// 03: Dark Premium Contact Form Controller
export function initDarkPremiumForm(root = document) {
  const forms = root.querySelectorAll('[data-form="dark-premium"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfDarkForm');
    const nameInput = container.querySelector('#cf-dark-name');
    const emailInput = container.querySelector('#cf-dark-email');
    const msgInput = container.querySelector('#cf-dark-message');
    const nameErr = container.querySelector('#cf-dark-name-err');
    const emailErr = container.querySelector('#cf-dark-email-err');
    const msgErr = container.querySelector('#cf-dark-msg-err');
    const submitBtn = container.querySelector('#cfDarkSubmit');
    const status = container.querySelector('#cfDarkStatus');

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
          if (nameErr) nameErr.textContent = 'Principal name is required.';
          hasError = true;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Confidential email is required.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid email address.';
          hasError = true;
        }

        if (!msgInput.value.trim()) {
          msgInput.classList.add('is-invalid');
          if (msgErr) msgErr.textContent = 'Context outline is required.';
          hasError = true;
        }

        if (hasError) {
          const first = container.querySelector('.is-invalid');
          if (first) first.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.querySelector('.cf-dark-btn-text').textContent = 'Encrypting & Logging...';
        }

        setTimeout(() => {
          if (status) {
            status.removeAttribute('hidden');
            status.textContent = '✓ Confidential request received in demo mode. No records were stored or transmitted.';
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector('.cf-dark-btn-text').textContent = 'Submit Confidential Request';
          }
          form.reset();
        }, 650);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initDarkPremiumForm());
  } else {
    initDarkPremiumForm();
  }
}
