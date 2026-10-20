// 07: Developer / Technical Support Form Controller
export function initTechnicalSupportForm(root = document) {
  const forms = root.querySelectorAll('[data-form="technical-support"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfTechForm');
    const nameInput = container.querySelector('#cf-tech-name');
    const emailInput = container.querySelector('#cf-tech-email');
    const summaryInput = container.querySelector('#cf-tech-summary');
    const traceInput = container.querySelector('#cf-tech-trace');

    const nameErr = container.querySelector('#cf-tech-name-err');
    const emailErr = container.querySelector('#cf-tech-email-err');
    const summaryErr = container.querySelector('#cf-tech-summary-err');
    const traceErr = container.querySelector('#cf-tech-trace-err');

    const submitBtn = container.querySelector('#cfTechSubmit');
    const statusBox = container.querySelector('#cfTechStatus');

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, emailInput, summaryInput, traceInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [nameErr, emailErr, summaryErr, traceErr].forEach(err => { if (err) err.textContent = ''; });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;

        if (!nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'Engineer identity is required.';
          hasError = true;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Contact email is required.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please provide a valid technical contact address.';
          hasError = true;
        }

        if (!summaryInput.value.trim()) {
          summaryInput.classList.add('is-invalid');
          if (summaryErr) summaryErr.textContent = 'Defect summary is required.';
          hasError = true;
        }

        if (!traceInput.value.trim()) {
          traceInput.classList.add('is-invalid');
          if (traceErr) traceErr.textContent = 'Stack trace or minimal repro is required.';
          hasError = true;
        }

        if (hasError) {
          const first = container.querySelector('.is-invalid');
          if (first) first.focus();
          return;
        }

        const cat = (container.querySelector('#cf-tech-cat') || {}).value || 'general';
        const prio = (container.querySelector('input[name="priority"]:checked') || {}).value || 'p3';

        if (submitBtn) {
          submitBtn.disabled = true;
          const textEl = submitBtn.querySelector('.text');
          if (textEl) textEl.textContent = 'Triage Analysis in Progress...';
        }

        setTimeout(() => {
          if (statusBox) {
            statusBox.removeAttribute('hidden');
            statusBox.textContent = `[DIAGNOSTIC OK] Simulated intake for ${cat.toUpperCase()} (${prio.toUpperCase()}) completed. Demo mode: no production alert or PagerDuty incident was generated.`;
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            const textEl = submitBtn.querySelector('.text');
            if (textEl) textEl.textContent = 'Dispatch Diagnostic Report';
          }
          form.reset();
        }, 650);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initTechnicalSupportForm());
  } else {
    initTechnicalSupportForm();
  }
}
