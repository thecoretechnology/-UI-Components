// 06: Dark Technical FAQ Controller
export function initDarkTechnicalFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="dark-technical"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    // Accordion handling
    const triggers = stage.querySelectorAll('.faq-tech-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const card = trigger.closest('.faq-tech-card');
        const panel = card ? card.querySelector('.faq-tech-panel') : null;
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

    // Copy to clipboard buttons
    const copyBtns = stage.querySelectorAll('.faq-tech-copy-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const snippet = btn.dataset.snippet || '';
        if (!snippet) return;

        function reportSuccess() {
          btn.classList.add('is-copied');
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.classList.remove('is-copied');
            btn.textContent = 'Copy';
          }, 2000);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(snippet)
            .then(reportSuccess)
            .catch(() => fallbackCopy(snippet, reportSuccess));
        } else {
          fallbackCopy(snippet, reportSuccess);
        }
      });
    });

    function fallbackCopy(text, cb) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        if (cb) cb();
      } catch (e) {}
      document.body.removeChild(ta);
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initDarkTechnicalFaq());
  } else {
    initDarkTechnicalFaq();
  }
}
