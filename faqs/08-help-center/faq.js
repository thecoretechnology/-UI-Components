// 08: Help Center FAQ Controller
export function initHelpCenterFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="help-center"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    const input = stage.querySelector('#faqHelpSearch');
    const clearBtn = stage.querySelector('#faqHelpClearBtn');
    const resetBtn = stage.querySelector('#faqHelpResetBtn');
    const tiles = stage.querySelectorAll('.faq-help-tile');
    const items = stage.querySelectorAll('.faq-help-item');
    const emptyBox = stage.querySelector('#faqHelpEmpty');
    const countTag = stage.querySelector('#faqHelpCountTag');
    const heading = stage.querySelector('#faqHelpSectionHeading');

    let currentTopic = 'all';
    let searchQuery = '';

    function filterArticles() {
      let matchCount = 0;

      items.forEach(item => {
        const itemTopic = item.dataset.topic || '';
        const text = item.textContent.toLowerCase();

        const matchesTopic = (currentTopic === 'all' || itemTopic === currentTopic);
        const matchesSearch = !searchQuery || text.includes(searchQuery);

        if (matchesTopic && matchesSearch) {
          item.style.display = 'block';
          item.removeAttribute('hidden');
          matchCount++;
        } else {
          item.style.display = 'none';
          item.setAttribute('hidden', '');
        }
      });

      if (countTag) {
        countTag.textContent = `Showing ${matchCount} Articles`;
      }

      if (emptyBox) {
        if (matchCount === 0) emptyBox.removeAttribute('hidden');
        else emptyBox.setAttribute('hidden', '');
      }

      if (clearBtn) {
        if (searchQuery.length > 0) clearBtn.removeAttribute('hidden');
        else clearBtn.setAttribute('hidden', '');
      }
    }

    // Tile click
    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        tiles.forEach(t => t.classList.remove('is-active'));
        tile.classList.add('is-active');

        currentTopic = tile.dataset.topic || 'all';
        const name = tile.querySelector('.faq-help-tile-name')?.textContent || 'Topic';
        if (heading) {
          heading.textContent = currentTopic === 'all' ? 'Popular & Verified Questions' : `${name} Questions`;
        }

        filterArticles();
      });
    });

    // Search input
    if (input) {
      input.addEventListener('input', (e) => {
        searchQuery = (e.target.value || '').trim().toLowerCase();
        filterArticles();
      });
    }

    function clearSearch() {
      if (input) {
        input.value = '';
        input.focus();
      }
      searchQuery = '';
      currentTopic = 'all';
      tiles.forEach(t => t.classList.toggle('is-active', t.dataset.topic === 'all'));
      if (heading) heading.textContent = 'Popular & Verified Questions';
      filterArticles();
    }

    if (clearBtn) clearBtn.addEventListener('click', clearSearch);
    if (resetBtn) resetBtn.addEventListener('click', clearSearch);

    // Accordions
    items.forEach(item => {
      const trigger = item.querySelector('.faq-help-trigger');
      const panel = item.querySelector('.faq-help-panel');
      if (!trigger || !panel) return;

      trigger.addEventListener('click', () => {
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

    // Modal support ticket intake
    const modal = stage.querySelector('#faqHelpModal');
    const openBtn = stage.querySelector('#faqHelpTicketBtn');
    const closeBtn = stage.querySelector('#faqHelpModalClose');
    const cancelBtn = stage.querySelector('#faqHelpModalCancel');
    const form = stage.querySelector('#faqHelpTicketForm');
    const feedback = stage.querySelector('#faqHelpTicketFeedback');

    function openModal() {
      if (modal) {
        modal.removeAttribute('hidden');
        const firstInput = modal.querySelector('input');
        if (firstInput) firstInput.focus();
      }
    }

    function closeModal() {
      if (modal) modal.setAttribute('hidden', '');
      if (feedback) feedback.setAttribute('hidden', '');
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
        closeModal();
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const ticketNum = Math.floor(1000 + Math.random() * 9000);
        if (feedback) {
          feedback.textContent = `Ticket #HLP-${ticketNum} registered successfully! An engineer has been paged.`;
          feedback.removeAttribute('hidden');
        }
        setTimeout(() => {
          closeModal();
          form.reset();
        }, 1800);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initHelpCenterFaq());
  } else {
    initHelpCenterFaq();
  }
}
