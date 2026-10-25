// 10: Horizontal / Full-Width FAQ Controller
export function initHorizontalRowsFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="horizontal-rows"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    const triggers = stage.querySelectorAll('.faq-row-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.faq-row-item');
        const panel = item ? item.querySelector('.faq-row-panel') : null;
        if (!item || !panel) return;

        const isOpen = item.classList.contains('is-open');

        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          panel.setAttribute('hidden', '');
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          panel.removeAttribute('hidden');
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initHorizontalRowsFaq());
  } else {
    initHorizontalRowsFaq();
  }
}
