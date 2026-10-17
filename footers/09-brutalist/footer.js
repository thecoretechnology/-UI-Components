// brutalist controller
export function initBrutalistFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="brutalist"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    const emailBtn = footer.querySelector('.ft-brutal-card-btn[data-email]');
    const label = footer.querySelector('.ft-brutal-email-label');

    if (emailBtn && label) {
      emailBtn.addEventListener('click', async () => {
        const email = emailBtn.dataset.email || 'hello@noform.design';
        try {
          await navigator.clipboard.writeText(email);
          const orig = label.textContent;
          label.textContent = 'COPIED!';
          setTimeout(() => {
            label.textContent = orig;
          }, 2000);
        } catch {
          const orig = label.textContent;
          label.textContent = 'COPIED!';
          setTimeout(() => {
            label.textContent = orig;
          }, 2000);
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initBrutalistFooter());
  } else {
    initBrutalistFooter();
  }
}
