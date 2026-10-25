// 01: Classic Accordion FAQ Controller
export function initClassicAccordionFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="classic-accordion"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    const items = stage.querySelectorAll('.faq-classic-item');
    const radioInputs = stage.querySelectorAll('input[name="faqClassicMode"]');
    
    function getMode() {
      const checked = stage.querySelector('input[name="faqClassicMode"]:checked');
      return checked ? checked.value : 'single';
    }

    function toggleItem(targetItem, forceState) {
      const trigger = targetItem.querySelector('.faq-classic-trigger');
      const panel = targetItem.querySelector('.faq-classic-panel');
      if (!trigger || !panel) return;

      const isCurrentlyOpen = targetItem.classList.contains('is-open');
      const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;
      const mode = getMode();

      if (shouldOpen && mode === 'single') {
        // Close all other items
        items.forEach(otherItem => {
          if (otherItem !== targetItem && otherItem.classList.contains('is-open')) {
            const otherTrigger = otherItem.querySelector('.faq-classic-trigger');
            const otherPanel = otherItem.querySelector('.faq-classic-panel');
            otherItem.classList.remove('is-open');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.setAttribute('hidden', '');
          }
        });
      }

      if (shouldOpen) {
        targetItem.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.removeAttribute('hidden');
      } else {
        targetItem.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        panel.setAttribute('hidden', '');
      }
    }

    // Attach click and keyboard listeners to each trigger
    const triggers = Array.from(stage.querySelectorAll('.faq-classic-trigger'));
    triggers.forEach((trigger, index) => {
      const item = trigger.closest('.faq-classic-item');
      if (!item) return;

      trigger.addEventListener('click', () => {
        toggleItem(item);
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextIndex = (index + 1) % triggers.length;
          triggers[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevIndex = (index - 1 + triggers.length) % triggers.length;
          triggers[prevIndex].focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          triggers[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          triggers[triggers.length - 1].focus();
        }
      });
    });

    // If user switches mode from multi to single while multiple items are open, collapse all except the first open
    radioInputs.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.value === 'single') {
          let foundOpen = false;
          items.forEach(item => {
            if (item.classList.contains('is-open')) {
              if (!foundOpen) {
                foundOpen = true; // Keep first open
              } else {
                toggleItem(item, false); // Close subsequent
              }
            }
          });
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initClassicAccordionFaq());
  } else {
    initClassicAccordionFaq();
  }
}
