// app utility controller
export function initAppUtilityFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="app-utility"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    const modal = footer.querySelector('#ft-util-shortcuts-modal');
    const btnOpen = footer.querySelector('[data-modal="shortcuts"]');
    const btnClose = footer.querySelector('.ft-util-modal-close');

    function openModal() {
      if (modal) modal.removeAttribute('hidden');
    }

    function closeModal() {
      if (modal) modal.setAttribute('hidden', '');
    }

    if (btnOpen) btnOpen.addEventListener('click', openModal);
    if (btnClose) btnClose.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === '?' && !e.target.matches('input, textarea')) {
        openModal();
      } else if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
        closeModal();
      }
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAppUtilityFooter());
  } else {
    initAppUtilityFooter();
  }
}
