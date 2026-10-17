// sidebar dashboard controller
export function initSidebarDashboard(root = document) {
  const layouts = root.querySelectorAll('[data-navbar="sidebar-dashboard"]');

  layouts.forEach(layout => {
    if (layout.__nbInitialized) return;
    layout.__nbInitialized = true;

    const toggle = layout.querySelector('.nb-sidebar-hamburger');
    const panel = layout.querySelector('.nb-sidebar-panel');
    const backdrop = layout.querySelector('.nb-sidebar-backdrop');
    const contentTitle = layout.querySelector('.nb-sidebar-content-title');
    const contentDesc = layout.querySelector('.nb-sidebar-content-desc');

    if (toggle && panel && backdrop) {
      function openSidebar() {
        toggle.setAttribute('aria-expanded', 'true');
        panel.classList.add('is-open');
        backdrop.removeAttribute('hidden');
      }

      function closeSidebar() {
        toggle.setAttribute('aria-expanded', 'false');
        panel.classList.remove('is-open');
        backdrop.setAttribute('hidden', '');
      }

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });

      backdrop.addEventListener('click', () => {
        closeSidebar();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          closeSidebar();
          toggle.focus();
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 860 && toggle.getAttribute('aria-expanded') === 'true') {
          closeSidebar();
        }
      });
    }

    // Dynamic View Switching on Sidebar Item Click
    const views = {
      overview: {
        title: 'Workspace Overview',
        desc: 'Core metrics and platform health: 1,420 Active members, 99.98% Service uptime, 24 live microservices deployed.'
      },
      activity: {
        title: 'Recent Activity',
        desc: 'Audit timeline: Production build #142 deployed (2m ago) · Billing plan renewed (1h ago) · New team member invited.'
      },
      projects: {
        title: 'Active Projects',
        desc: 'Current initiatives: Core Engine v2 (Production) · Design Tokens System (In Review) · Mobile Client (Sprint 4).'
      },
      settings: {
        title: 'Workspace Settings',
        desc: 'Configure organization name, custom domains, member role permissions, and webhook endpoints.'
      }
    };

    const links = layout.querySelectorAll('.nb-sidebar-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          const key = href.replace('#', '');
          if (views[key] && contentTitle && contentDesc) {
            contentTitle.textContent = views[key].title;
            contentDesc.textContent = views[key].desc;
          }

          // On mobile, close sidebar after clicking an item
          if (window.innerWidth <= 860 && panel && backdrop && toggle) {
            toggle.setAttribute('aria-expanded', 'false');
            panel.classList.remove('is-open');
            backdrop.setAttribute('hidden', '');
          }
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSidebarDashboard());
  } else {
    initSidebarDashboard();
  }
}
