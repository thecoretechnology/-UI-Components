// editorial controller
export function initEditorialFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="editorial"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    const btnTop = footer.querySelector('.ft-edit-btn-top');
    if (btnTop) {
      btnTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initEditorialFooter());
  } else {
    initEditorialFooter();
  }
}
