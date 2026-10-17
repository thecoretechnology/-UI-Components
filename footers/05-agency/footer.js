// agency footer controller
export function initAgencyFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="agency"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    const toast = footer.querySelector('.ft-agency-toast');
    const copyTriggers = footer.querySelectorAll('[data-email]');

    function showToast(text = 'Email copied to clipboard') {
      if (!toast) return;
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }

    copyTriggers.forEach(btn => {
      btn.addEventListener('click', async () => {
        const email = btn.dataset.email || 'hello@northstudio.design';
        try {
          await navigator.clipboard.writeText(email);
          showToast(`Copied ${email}`);
        } catch {
          showToast(`Copied ${email}`);
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAgencyFooter());
  } else {
    initAgencyFooter();
  }
}
