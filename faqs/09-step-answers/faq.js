// 09: Interactive Step-by-Step Answers FAQ Controller
export function initStepAnswersFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="step-answers"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    const triggers = stage.querySelectorAll('.faq-step-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const card = trigger.closest('.faq-step-card');
        const panel = card ? card.querySelector('.faq-step-panel') : null;
        const sign = card ? card.querySelector('.faq-step-toggle-btn') : null;
        if (!card || !panel) return;

        const isOpen = card.classList.contains('is-open');

        if (isOpen) {
          card.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          panel.setAttribute('hidden', '');
          if (sign) sign.innerHTML = '&plus;';
        } else {
          card.classList.add('is-open');
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
    document.addEventListener('DOMContentLoaded', () => initStepAnswersFaq());
  } else {
    initStepAnswersFaq();
  }
}
