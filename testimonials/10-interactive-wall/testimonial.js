// 10: Interactive Testimonial Wall Controller
export function initInteractiveWallTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="interactive-wall"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;

    const filterBtns = container.querySelectorAll('.ts-wall-filter-btn');
    const searchInput = container.querySelector('#tsWallSearch');
    const countBadge = container.querySelector('#tsWallCount');
    const cards = container.querySelectorAll('.ts-wall-card');
    const emptyState = container.querySelector('#tsWallEmpty');
    const resetBtn = container.querySelector('#tsWallResetBtn');

    let activeFilter = 'all';
    let searchQuery = '';

    function filterCards() {
      let visibleCount = 0;

      cards.forEach(card => {
        const cat = card.dataset.category || '';
        const text = card.textContent.toLowerCase();

        const matchesCat = (activeFilter === 'all' || cat === activeFilter);
        const matchesSearch = !searchQuery || text.includes(searchQuery);

        if (matchesCat && matchesSearch) {
          card.style.display = 'flex';
          card.removeAttribute('hidden');
          visibleCount++;
        } else {
          card.style.display = 'none';
          card.setAttribute('hidden', '');
        }
      });

      if (countBadge) {
        countBadge.textContent = `Showing ${visibleCount} of ${cards.length} reviews`;
      }

      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.removeAttribute('hidden');
        } else {
          emptyState.setAttribute('hidden', '');
        }
      }
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        activeFilter = btn.dataset.filter || 'all';
        filterCards();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = (e.target.value || '').trim().toLowerCase();
        filterCards();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        activeFilter = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';

        filterBtns.forEach(b => {
          if (b.dataset.filter === 'all') {
            b.classList.add('is-active');
            b.setAttribute('aria-selected', 'true');
          } else {
            b.classList.remove('is-active');
            b.setAttribute('aria-selected', 'false');
          }
        });

        filterCards();
      });
    }

    filterCards();
  });
}

export const initInteractiveWall = initInteractiveWallTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initInteractiveWallTestimonial());
  } else {
    initInteractiveWallTestimonial();
  }
}
