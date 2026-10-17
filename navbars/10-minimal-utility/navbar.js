// minimal utility controller
export function initMinimalUtilityNavbar(root = document) {
  const headers = root.querySelectorAll('[data-navbar="minimal-utility"]');

  headers.forEach(header => {
    if (header.__nbInitialized) return;
    header.__nbInitialized = true;

    // 1. Mobile Menu
    const toggle = header.querySelector('.nb-minimal-hamburger');
    const menu = header.querySelector('.nb-minimal-mobile-menu');

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

    // 2. Notifications Popover
    const notifyBtn = header.querySelector('.nb-minimal-btn-notify');
    const notifyDropdown = header.querySelector('.nb-minimal-notify-dropdown');
    const notifyPip = header.querySelector('.nb-minimal-notify-pip');

    if (notifyBtn && notifyDropdown) {
      notifyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !notifyDropdown.hasAttribute('hidden');
        if (isOpen) {
          notifyDropdown.setAttribute('hidden', '');
          notifyBtn.setAttribute('aria-expanded', 'false');
        } else {
          notifyDropdown.removeAttribute('hidden');
          notifyBtn.setAttribute('aria-expanded', 'true');
          // Clear pip on open
          if (notifyPip) notifyPip.style.display = 'none';
        }
      });

      document.addEventListener('click', (e) => {
        if (!notifyDropdown.contains(e.target)) {
          notifyDropdown.setAttribute('hidden', '');
          notifyBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // 3. Inline Search Toggle
    const searchBtn = header.querySelector('.nb-minimal-btn-search');
    const searchInput = header.querySelector('.nb-minimal-search-input');

    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = searchInput.hasAttribute('hidden');
        if (isHidden) {
          searchInput.removeAttribute('hidden');
          searchInput.focus();
        } else {
          searchInput.setAttribute('hidden', '');
        }
      });

      document.addEventListener('click', (e) => {
        if (e.target !== searchInput && e.target !== searchBtn && !searchBtn.contains(e.target)) {
          if (!searchInput.value) {
            searchInput.setAttribute('hidden', '');
          }
        }
      });
    }

    // 4. Link Active State
    const links = header.querySelectorAll('.nb-minimal-link, .nb-minimal-mobile-link');
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
    document.addEventListener('DOMContentLoaded', () => initMinimalUtilityNavbar());
  } else {
    initMinimalUtilityNavbar();
  }
}
