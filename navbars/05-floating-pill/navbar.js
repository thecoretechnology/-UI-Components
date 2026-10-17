// floating pill controller
export function initFloatingPillNavbar(root = document) {
  const headers = root.querySelectorAll('[data-navbar="floating-pill"]');

  headers.forEach(header => {
    if (header.__nbInitialized) return;
    header.__nbInitialized = true;

    const toggle = header.querySelector('.nb-floating-hamburger');
    const menu = header.querySelector('.nb-floating-mobile-menu');

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

    // Active Link State
    const links = header.querySelectorAll('.nb-floating-link, .nb-floating-mobile-link');
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
    document.addEventListener('DOMContentLoaded', () => initFloatingPillNavbar());
  } else {
    initFloatingPillNavbar();
  }
}
