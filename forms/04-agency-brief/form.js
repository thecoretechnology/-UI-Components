// 04: Creative Agency Brief Form Controller
export function initAgencyBriefForm(root = document) {
  const forms = root.querySelectorAll('[data-form="agency-brief"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfAgencyForm');
    const nameInput = container.querySelector('#cf-agency-name');
    const emailInput = container.querySelector('#cf-agency-email');
    const briefInput = container.querySelector('#cf-agency-brief');
    const nameErr = container.querySelector('#cf-agency-name-err');
    const emailErr = container.querySelector('#cf-agency-email-err');
    const briefErr = container.querySelector('#cf-agency-brief-err');
    const submitBtn = container.querySelector('#cfAgencySubmit');
    const status = container.querySelector('#cfAgencyStatus');

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, emailInput, briefInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [nameErr, emailErr, briefErr].forEach(err => { if (err) err.textContent = ''; });
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
          if (emailErr) emailErr.textContent = 'Please provide a work email.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid work email.';
          hasError = true;
        }

        if (!briefInput.value.trim()) {
          briefInput.classList.add('is-invalid');
          if (briefErr) briefErr.textContent = 'Please outline the project brief.';
          hasError = true;
        }

        if (hasError) {
          const first = container.querySelector('.is-invalid');
          if (first) first.focus();
          return;
        }

        // Selected services & budget summary
        const checkedServices = Array.from(form.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value);
        const selectedBudget = (form.querySelector('input[name="budget"]:checked') || {}).value || 'unspecified';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.querySelector('.cf-agency-btn-text').textContent = 'Submitting Brief...';
        }

        setTimeout(() => {
          if (status) {
            status.removeAttribute('hidden');
            const svcCount = checkedServices.length > 0 ? `${checkedServices.length} services` : 'custom scope';
            status.textContent = `✓ Project brief for ${svcCount} (${selectedBudget}) received in demo mode. No transmission occurred.`;
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector('.cf-agency-btn-text').textContent = 'Submit Project Brief';
          }
          form.reset();
        }, 600);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAgencyBriefForm());
  } else {
    initAgencyBriefForm();
  }
}
