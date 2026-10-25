// 07: Card-Based FAQ Grid Controller
export function initCardGridFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="card-grid"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    const triggers = stage.querySelectorAll('.faq-grid-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.faq-grid-item');
        const panel = item ? item.querySelector('.faq-grid-panel') : null;
        const sign = item ? item.querySelector('.faq-grid-sign') : null;
        if (!item || !panel) return;

        const isOpen = item.classList.contains('is-open');

        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          panel.setAttribute('hidden', '');
          if (sign) sign.innerHTML = '&plus;';
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          panel.removeAttribute('hidden');
          if (sign) sign.innerHTML = '&minus;';
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCardGridFaq());
  } else {
    initCardGridFaq();
  }
}
