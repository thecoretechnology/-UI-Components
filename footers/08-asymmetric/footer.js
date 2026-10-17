// asymmetric footer controller
export function initAsymmetricFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="asymmetric"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    const clockEls = footer.querySelectorAll('.ft-asym-time[data-tz]');

    function updateTimes() {
      const now = new Date();
      clockEls.forEach(el => {
        const tz = el.dataset.tz;
        try {
          const formatter = new Intl.DateTimeFormat([], {
            timeZone: tz,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          });
          el.textContent = formatter.format(now);
        } catch {
          el.textContent = now.toTimeString().slice(0, 5);
        }
      });
    }

    updateTimes();
    setInterval(updateTimes, 30000);
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAsymmetricFooter());
  } else {
    initAsymmetricFooter();
  }
}
