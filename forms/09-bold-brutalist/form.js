// 09: Bold Brutalist Contact Form Controller
export function initBoldBrutalistForm(root = document) {
  const forms = root.querySelectorAll('[data-form="bold-brutalist"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfBrutalForm');
    const nameInput = container.querySelector('#cf-brutal-name');
    const emailInput = container.querySelector('#cf-brutal-email');
    const bodyInput = container.querySelector('#cf-brutal-body');

    const nameErr = container.querySelector('#cf-brutal-name-err');
    const emailErr = container.querySelector('#cf-brutal-email-err');
    const bodyErr = container.querySelector('#cf-brutal-body-err');

    const submitBtn = container.querySelector('#cfBrutalSubmit');
    const banner = container.querySelector('#cfBrutalBanner');

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, emailInput, bodyInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [nameErr, emailErr, bodyErr].forEach(err => { if (err) err.textContent = ''; });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;

        if (!nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'CELL 01 ERROR: SENDER IDENTITY CANNOT BE EMPTY.';
          hasError = true;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'CELL 02 ERROR: RETURN VECTOR CANNOT BE EMPTY.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'CELL 02 ERROR: INVALID EMAIL FORMAT.';
          hasError = true;
        }

        if (!bodyInput.value.trim()) {
          bodyInput.classList.add('is-invalid');
          if (bodyErr) bodyErr.textContent = 'CELL 05 ERROR: PAYLOAD CONTENT REQUIRED.';
          hasError = true;
        }

        if (hasError) {
          const first = container.querySelector('.is-invalid');
          if (first) first.focus();
          return;
        }

        const cls = (container.querySelector('#cf-brutal-type') || {}).value || 'contract';
        const spd = (container.querySelector('input[name="speed"]:checked') || {}).value || 'standard';

        if (submitBtn) {
          submitBtn.disabled = true;
          const textEl = submitBtn.querySelector('.cf-brutal-btn-text');
          if (textEl) textEl.textContent = 'COMPILING PAYLOAD...';
        }

        setTimeout(() => {
          if (banner) {
            banner.removeAttribute('hidden');
            banner.textContent = `[DEMO TRANSMISSION SUCCESSFUL] Payload tagged [${cls.toUpperCase()}] at [${spd.toUpperCase()}] queued in sandbox. No live transmission was initiated.`;
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            const textEl = submitBtn.querySelector('.cf-brutal-btn-text');
            if (textEl) textEl.textContent = 'DISPATCH PAYLOAD →';
          }
          form.reset();
        }, 500);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initBoldBrutalistForm());
  } else {
    initBoldBrutalistForm();
  }
}
