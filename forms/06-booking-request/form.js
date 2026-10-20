// 06: Booking / Consultation Request Form Controller
export function initBookingRequestForm(root = document) {
  const forms = root.querySelectorAll('[data-form="booking-request"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfBookForm');
    const dateInput = container.querySelector('#cf-book-date');
    const nameInput = container.querySelector('#cf-book-name');
    const emailInput = container.querySelector('#cf-book-email');
    const agendaInput = container.querySelector('#cf-book-agenda');

    const dateErr = container.querySelector('#cf-book-date-err');
    const nameErr = container.querySelector('#cf-book-name-err');
    const emailErr = container.querySelector('#cf-book-email-err');
    const agendaErr = container.querySelector('#cf-book-agenda-err');

    const submitBtn = container.querySelector('#cfBookSubmit');
    const banner = container.querySelector('#cfBookBanner');

    // Pre-populate with tomorrow's date by default
    if (dateInput && !dateInput.value) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const iso = tomorrow.toISOString().split('T')[0];
      dateInput.min = iso;
      dateInput.value = iso;
    }

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [dateInput, nameInput, emailInput, agendaInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [dateErr, nameErr, emailErr, agendaErr].forEach(err => { if (err) err.textContent = ''; });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;

        if (!dateInput.value) {
          dateInput.classList.add('is-invalid');
          if (dateErr) dateErr.textContent = 'Please choose a preferred date.';
          hasError = true;
        }

        if (!nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'Your name is required.';
          hasError = true;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Email address is required.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid email.';
          hasError = true;
        }

        if (!agendaInput.value.trim()) {
          agendaInput.classList.add('is-invalid');
          if (agendaErr) agendaErr.textContent = 'Please describe the proposed agenda.';
          hasError = true;
        }

        if (hasError) {
          const first = container.querySelector('.is-invalid');
          if (first) first.focus();
          return;
        }

        const mType = (form.querySelector('input[name="meeting-type"]:checked') || {}).value || 'session';
        const win = (form.querySelector('#cf-book-window') || {}).value || 'afternoon';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.querySelector('.cf-book-btn-text').textContent = 'Submitting Request...';
        }

        setTimeout(() => {
          if (banner) {
            banner.removeAttribute('hidden');
            banner.textContent = `✓ Consultation request for ${mType} (${dateInput.value}, ${win}) recorded in demo mode. No calendar invite was dispatched.`;
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector('.cf-book-btn-text').textContent = 'Submit Consultation Request';
          }
          form.reset();
        }, 600);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initBookingRequestForm());
  } else {
    initBookingRequestForm();
  }
}
