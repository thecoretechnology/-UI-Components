// centered brand controller
export function initCenteredBrandNavbar(root = document) {
  const headers = root.querySelectorAll('[data-navbar="centered-brand"]');

  headers.forEach(header => {
    if (header.__nbInitialized) return;
    header.__nbInitialized = true;

    // 1. Mobile Menu
    const toggle = header.querySelector('.nb-centered-hamburger');
    const menu = header.querySelector('.nb-centered-mobile-menu');

    if (toggle && menu) {
      function openMenu() {
        toggle.setAttribute('aria-expanded', 'true');
        menu.removeAttribute('hidden');
      }

      function closeMenu() {
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
      }

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          closeMenu();
          toggle.focus();
        }
      });

      document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && toggle.getAttribute('aria-expanded') === 'true') {
          closeMenu();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 860 && toggle.getAttribute('aria-expanded') === 'true') {
          closeMenu();
        }
      });
    }

    // 2. Interactive Bag Counter Increment
    const bagBtn = header.querySelector('.nb-centered-btn-bag');
    const bagCount = header.querySelector('.nb-centered-bag-count');
    if (bagBtn && bagCount) {
      let count = parseInt(bagCount.textContent, 10) || 0;
      bagBtn.addEventListener('click', (e) => {
        e.preventDefault();
        count++;
        bagCount.textContent = count;
        bagCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
          bagCount.style.transform = 'scale(1)';
        }, 150);
      });
    }

    // 3. Link Active State
    const links = header.querySelectorAll('.nb-centered-link, .nb-centered-mobile-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCenteredBrandNavbar());
  } else {
    initCenteredBrandNavbar();
  }
}
