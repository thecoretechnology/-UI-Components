// conversion footer controller
export function initConversionFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="conversion"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    // Frequency Pills
    const pills = footer.querySelectorAll('.ft-conv-pref-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const radio = pill.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    // Form submission
    const form = footer.querySelector('.ft-conv-form');
    const input = footer.querySelector('.ft-conv-input');
    const status = footer.querySelector('.ft-conv-status');
    const btn = footer.querySelector('.ft-conv-btn');

    if (form && input && status) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = input.value.trim();

        if (!input.checkValidity() || !email) {
          status.textContent = 'Please provide a valid email address.';
          status.className = 'ft-conv-status error';
          input.focus();
          return;
        }

        const activeFreq = footer.querySelector('.ft-conv-pref-pill.active input')?.value || 'weekly';

        btn.disabled = true;
        status.textContent = 'Registering your subscription...';
        status.className = 'ft-conv-status';

        setTimeout(() => {
          btn.disabled = false;
          status.textContent = `Welcome! You're subscribed to the ${activeFreq} dispatch at ${email}.`;
          status.className = 'ft-conv-status success';
          form.reset();
        }, 500);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initConversionFooter());
  } else {
    initConversionFooter();
  }
}
