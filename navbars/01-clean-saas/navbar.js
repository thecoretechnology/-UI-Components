// clean saas controller
export function initCleanSaaSNavbar(root = document) {
  const headers = root.querySelectorAll('[data-navbar="clean-saas"]');

  headers.forEach(header => {
    if (header.__nbInitialized) return;
    header.__nbInitialized = true;

    const toggle = header.querySelector('.nb-saas-hamburger');
    const menu = header.querySelector('.nb-saas-mobile-menu');
    const dropdownBtn = header.querySelector('.nb-saas-dropdown-btn');
    const dropdownMenu = header.querySelector('.nb-saas-dropdown-menu');
    const dropdown = header.querySelector('.nb-saas-dropdown');

    // 1. Mobile Menu Logic
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

    // 2. Desktop Dropdown Logic
    if (dropdownBtn && dropdownMenu && dropdown) {
      function toggleDropdown(open) {
        const isOpen = open !== undefined ? open : dropdownMenu.hasAttribute('hidden');
        if (isOpen) {
          dropdownMenu.removeAttribute('hidden');
          dropdownBtn.setAttribute('aria-expanded', 'true');
          dropdown.classList.add('is-open');
        } else {
          dropdownMenu.setAttribute('hidden', '');
          dropdownBtn.setAttribute('aria-expanded', 'false');
          dropdown.classList.remove('is-open');
        }
      }

      dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
      });

      document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          toggleDropdown(false);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          toggleDropdown(false);
        }
      });
    }

    // 3. Interactive Link Active Switching
    const allLinks = header.querySelectorAll('.nb-saas-link:not(.nb-saas-dropdown-btn), .nb-saas-mobile-link');
    allLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          allLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCleanSaaSNavbar());
  } else {
    initCleanSaaSNavbar();
  }
}
