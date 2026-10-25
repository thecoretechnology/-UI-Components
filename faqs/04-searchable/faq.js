// 04: Searchable FAQ Controller
export function initSearchableFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="searchable"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    const input = stage.querySelector('#faqSearchInput');
    const clearBtn = stage.querySelector('#faqSearchClearBtn');
    const resetBtn = stage.querySelector('#faqSearchResetBtn');
    const countEl = stage.querySelector('#faqSearchResultCount');
    const emptyBox = stage.querySelector('#faqSearchEmpty');
    const cards = stage.querySelectorAll('.faq-search-card');
    const tagBtns = stage.querySelectorAll('.faq-search-tag-btn');

    // Cache original question & answer strings
    cards.forEach(card => {
      const qText = card.querySelector('.faq-search-q-text');
      const pText = card.querySelector('.faq-search-panel-content p');
      if (qText) card.__origQ = qText.textContent;
      if (pText) card.__origP = pText.textContent;
    });

    function highlightText(text, query) {
      if (!query) return text;
      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, 'gi');
      return text.replace(regex, '<mark class="faq-search-highlight">$1</mark>');
    }

    function runSearch(query) {
      const q = (query || '').trim().toLowerCase();
      let matchCount = 0;

      if (clearBtn) {
        if (q.length > 0) clearBtn.removeAttribute('hidden');
        else clearBtn.setAttribute('hidden', '');
      }

      cards.forEach(card => {
        const qTextEl = card.querySelector('.faq-search-q-text');
        const pTextEl = card.querySelector('.faq-search-panel-content p');
        const origQ = card.__origQ || '';
        const origP = card.__origP || '';

        const matchesQ = origQ.toLowerCase().includes(q);
        const matchesP = origP.toLowerCase().includes(q);

        if (!q || matchesQ || matchesP) {
          card.style.display = 'block';
          card.removeAttribute('hidden');
          matchCount++;

          // Apply text highlight if searching
          if (q) {
            if (qTextEl) qTextEl.innerHTML = highlightText(origQ, q);
            if (pTextEl) pTextEl.innerHTML = highlightText(origP, q);
            // If match is inside panel body, automatically expand to show user
            if (matchesP && !card.classList.contains('is-open')) {
              card.classList.add('is-open');
              const trig = card.querySelector('.faq-search-trigger');
              const pan = card.querySelector('.faq-search-panel');
              if (trig) trig.setAttribute('aria-expanded', 'true');
              if (pan) pan.removeAttribute('hidden');
            }
          } else {
            // Restore clean original
            if (qTextEl) qTextEl.textContent = origQ;
            if (pTextEl) pTextEl.textContent = origP;
          }
        } else {
          card.style.display = 'none';
          card.setAttribute('hidden', '');
        }
      });

      // Update count
      if (countEl) {
        if (!q) {
          countEl.textContent = `Showing all ${cards.length} verified answers`;
        } else {
          countEl.textContent = `Showing ${matchCount} of ${cards.length} results for "${query}"`;
        }
      }

      // Toggle empty box
      if (emptyBox) {
        if (matchCount === 0) emptyBox.removeAttribute('hidden');
        else emptyBox.setAttribute('hidden', '');
      }
    }

    // Input listener
    if (input) {
      input.addEventListener('input', (e) => {
        runSearch(e.target.value);
      });
    }

    // Clear and reset buttons
    function clearSearch() {
      if (input) {
        input.value = '';
        input.focus();
      }
      runSearch('');
    }

    if (clearBtn) clearBtn.addEventListener('click', clearSearch);
    if (resetBtn) resetBtn.addEventListener('click', clearSearch);

    // Suggestion tags
    tagBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.dataset.query || btn.textContent.trim();
        if (input) {
          input.value = query;
          input.focus();
        }
        runSearch(query);
      });
    });

    // Accordion expand/collapse
    cards.forEach(card => {
      const trigger = card.querySelector('.faq-search-trigger');
      const panel = card.querySelector('.faq-search-panel');
      if (!trigger || !panel) return;

      trigger.addEventListener('click', () => {
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
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSearchableFaq());
  } else {
    initSearchableFaq();
  }
}
