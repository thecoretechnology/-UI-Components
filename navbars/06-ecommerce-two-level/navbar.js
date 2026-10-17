// ecommerce two level controller
export function initEcommerceNavbar(root = document) {
  const headers = root.querySelectorAll('[data-navbar="ecommerce-two-level"]');

  headers.forEach(header => {
    if (header.__nbInitialized) return;
    header.__nbInitialized = true;

    // 1. Mobile Menu
    const toggle = header.querySelector('.nb-shop-hamburger');
    const menu = header.querySelector('.nb-shop-mobile-menu');

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

    // 2. Search Suggestions Dropdown
    const searchBar = header.querySelector('.nb-shop-search-bar');
    const searchInput = header.querySelector('.nb-shop-search-input');
    const searchDropdown = header.querySelector('.nb-shop-search-dropdown');

    if (searchBar && searchInput && searchDropdown) {
      searchInput.addEventListener('focus', () => {
        searchDropdown.removeAttribute('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target)) {
          searchDropdown.setAttribute('hidden', '');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          searchDropdown.setAttribute('hidden', '');
          searchInput.blur();
        }
      });
    }

    // 3. Wishlist Heart Toggle
    const savedBtn = header.querySelector('.nb-shop-btn-saved');
    const savedCount = header.querySelector('.nb-shop-saved-count');
    if (savedBtn && savedCount) {
      let isSaved = false;
      savedBtn.addEventListener('click', () => {
        isSaved = !isSaved;
        savedBtn.classList.toggle('is-active', isSaved);
        savedCount.textContent = isSaved ? '1' : '0';
      });
    }

    // 4. Cart Badge Increment
    const cartBtn = header.querySelector('.nb-shop-cart-btn');
    const cartBadge = header.querySelector('.nb-shop-cart-badge');
    if (cartBtn && cartBadge) {
      let count = 2;
      cartBtn.addEventListener('click', () => {
        count++;
        cartBadge.textContent = count;
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
          cartBadge.style.transform = 'scale(1)';
        }, 150);
      });
    }

    // 5. Category Links Active State
    const catLinks = header.querySelectorAll('.nb-shop-cat-link, .nb-shop-mobile-cat-link');
    catLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          catLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initEcommerceNavbar());
  } else {
    initEcommerceNavbar();
  }
}
