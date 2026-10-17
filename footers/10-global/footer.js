// global footer controller
export function initGlobalFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="global"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    const langSelect = footer.querySelector('#ft-global-lang');
    const currSelect = footer.querySelector('#ft-global-curr');
    const statusText = footer.querySelector('.ft-global-status-text');

    function updateLocale() {
      if (!statusText || !langSelect || !currSelect) return;
      statusText.textContent = `Region preference: ${langSelect.value} · ${currSelect.value}`;
    }

    if (langSelect) langSelect.addEventListener('change', updateLocale);
    if (currSelect) currSelect.addEventListener('change', updateLocale);
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initGlobalFooter());
  } else {
    initGlobalFooter();
  }
}
