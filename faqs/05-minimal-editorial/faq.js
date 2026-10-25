// 05: Minimal Editorial FAQ Controller
export function initMinimalEditorialFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="minimal-editorial"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    const triggers = stage.querySelectorAll('.faq-edit-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const row = trigger.closest('.faq-edit-row');
        const panel = row ? row.querySelector('.faq-edit-panel') : null;
        if (!row || !panel) return;

        const isOpen = row.classList.contains('is-open');

        if (isOpen) {
          row.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          panel.setAttribute('hidden', '');
        } else {
          row.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          panel.removeAttribute('hidden');
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMinimalEditorialFaq());
  } else {
    initMinimalEditorialFaq();
  }
}
