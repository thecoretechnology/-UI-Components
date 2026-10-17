// clean saas controller
export function initCleanSaaSFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="clean-saas"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    const form = footer.querySelector('.ft-saas-form');
    const input = footer.querySelector('.ft-saas-input');
    const btn = footer.querySelector('.ft-saas-submit-btn');
    const status = footer.querySelector('.ft-saas-status');

    if (form && input && status) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = input.value.trim();

        if (!input.checkValidity() || !email) {
          status.textContent = 'Please enter a valid email address.';
          status.className = 'ft-saas-status error';
          input.focus();
          return;
        }

        // Simulate submission
        btn.disabled = true;
        btn.innerHTML = '<span>Subscribing...</span>';
        status.textContent = '';
        status.className = 'ft-saas-status';

        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = '<span>Subscribed</span>';
          status.textContent = `Thanks! Updates will be sent to ${email}.`;
          status.className = 'ft-saas-status success';
          form.reset();

          setTimeout(() => {
            btn.innerHTML = '<span>Subscribe</span>';
          }, 3500);
        }, 600);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCleanSaaSFooter());
  } else {
    initCleanSaaSFooter();
  }
}
