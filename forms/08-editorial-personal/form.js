// 08: Editorial / Personal Contact Form Controller
export function initEditorialPersonalForm(root = document) {
  const forms = root.querySelectorAll('[data-form="editorial-personal"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfEditForm');
    const nameInput = container.querySelector('#cf-edit-name');
    const emailInput = container.querySelector('#cf-edit-email');
    const messageInput = container.querySelector('#cf-edit-message');

    const nameErr = container.querySelector('#cf-edit-name-err');
    const emailErr = container.querySelector('#cf-edit-email-err');
    const messageErr = container.querySelector('#cf-edit-message-err');

    const submitBtn = container.querySelector('#cfEditSubmit');
    const banner = container.querySelector('#cfEditBanner');

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, emailInput, messageInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [nameErr, emailErr, messageErr].forEach(err => { if (err) err.textContent = ''; });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;

        if (!nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'Please provide your name or pseudonym.';
          hasError = true;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'A return email address is required.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid email address.';
          hasError = true;
        }

        if (!messageInput.value.trim()) {
          messageInput.classList.add('is-invalid');
          if (messageErr) messageErr.textContent = 'Please write your message.';
          hasError = true;
        }

        if (hasError) {
          const first = container.querySelector('.is-invalid');
          if (first) first.focus();
          return;
        }

        const topic = (container.querySelector('#cf-edit-topic') || {}).value || 'general';

        if (submitBtn) {
          submitBtn.disabled = true;
          const textEl = submitBtn.querySelector('.cf-edit-btn-text');
          if (textEl) textEl.textContent = 'Transmitting Letter...';
        }

        setTimeout(() => {
          if (banner) {
            banner.removeAttribute('hidden');
            banner.textContent = `✓ Dispatch for "${topic}" recorded in demo mode. No email transmission occurred.`;
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            const textEl = submitBtn.querySelector('.cf-edit-btn-text');
            if (textEl) textEl.textContent = 'Transmit Letter';
          }
          form.reset();
        }, 550);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initEditorialPersonalForm());
  } else {
    initEditorialPersonalForm();
  }
}
