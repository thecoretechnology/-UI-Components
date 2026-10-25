// 02: Split-Screen FAQ Controller
export function initSplitScreenFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="split-screen"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    // Accordion handling
    const triggers = stage.querySelectorAll('.faq-split-trigger');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const card = trigger.closest('.faq-split-card');
        const panel = card ? card.querySelector('.faq-split-panel') : null;
        if (!card || !panel) return;

        const isOpen = card.classList.contains('is-open');

        if (isOpen) {
          card.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          panel.setAttribute('hidden', '');
        } else {
          card.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          panel.removeAttribute('hidden');
        }
      });
    });

    // Inquiry box handling
    const input = stage.querySelector('#faqSplitQueryInput');
    const submitBtn = stage.querySelector('#faqSplitSubmitBtn');
    const feedback = stage.querySelector('#faqSplitInquiryFeedback');

    if (submitBtn && input && feedback) {
      function sendQuery() {
        const query = (input.value || '').trim();
        if (!query) {
          feedback.textContent = 'Please enter a question or technical topic before submitting.';
          feedback.className = 'faq-split-feedback is-error';
          feedback.removeAttribute('hidden');
          input.focus();
          return;
        }

        const ticketNum = Math.floor(1000 + Math.random() * 9000);
        feedback.textContent = `Inquiry recorded as ticket #ARC-${ticketNum}. Our on-call staff will review it shortly.`;
        feedback.className = 'faq-split-feedback is-success';
        feedback.removeAttribute('hidden');
        input.value = '';

        setTimeout(() => {
          if (feedback) feedback.setAttribute('hidden', '');
        }, 6000);
      }

      submitBtn.addEventListener('click', sendQuery);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          sendQuery();
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSplitScreenFaq());
  } else {
    initSplitScreenFaq();
  }
}
