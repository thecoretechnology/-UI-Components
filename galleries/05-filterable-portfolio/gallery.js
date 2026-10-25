// 05: Filterable Portfolio Gallery Controller
export function initFilterablePortfolioGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="filterable-portfolio"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    const tabs = stage.querySelectorAll('.gal-filter-tab');
    const cards = stage.querySelectorAll('.gal-filter-card');
    const emptyBox = stage.querySelector('#galFilterEmpty');
    const resetBtn = stage.querySelector('#galFilterResetBtn');

    function applyFilter(category) {
      let visibleCount = 0;

      // Update tab active state
      tabs.forEach(tab => {
        const isMatch = tab.dataset.filter === category;
        tab.classList.toggle('is-active', isMatch);
        tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      // Filter cards
      cards.forEach(card => {
        const cardCat = card.dataset.category;
        const matches = (category === 'all' || cardCat === category);
        if (matches) {
          card.removeAttribute('hidden');
          visibleCount++;
        } else {
          card.setAttribute('hidden', '');
        }
      });

      // Handle empty state
      if (emptyBox) {
        if (visibleCount === 0) {
          emptyBox.removeAttribute('hidden');
        } else {
          emptyBox.setAttribute('hidden', '');
        }
      }
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.dataset.filter || 'all';
        applyFilter(category);
      });
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        applyFilter('all');
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initFilterablePortfolioGallery());
  } else {
    initFilterablePortfolioGallery();
  }
}
