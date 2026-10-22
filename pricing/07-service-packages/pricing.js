// 07: Product / Service Packages Pricing Controller
export function initServicePackagesPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="service-packages"]');

  const sowDetails = {
    'Design System Sprint': {
      title: 'SOW: Design System Sprint (2-Week Scope)',
      content: `
        <h4>Week 1: Token Architecture & Foundations</h4>
        <ul>
          <li>Comprehensive typography, spacing, and elevation scale definition.</li>
          <li>Semantic color palette and dark-mode token mapping.</li>
          <li>Audit of 10 existing fragmented surfaces.</li>
        </ul>
        <h4>Week 2: Core Components & Handoff</h4>
        <ul>
          <li>Production-ready code scaffolding for buttons, inputs, pills, and cards.</li>
          <li>Figma tokens synchronization workshop (2 hrs).</li>
          <li>Detailed developer migration README and token checklist.</li>
        </ul>
      `
    },
    'Full Platform Overhaul': {
      title: 'SOW: Full Platform Overhaul (6-Week Turnkey)',
      content: `
        <h4>Weeks 1–2: Discovery, Tokens & Design System Kit</h4>
        <ul>
          <li>Complete visual language, grid rules, and component taxonomy.</li>
          <li>Accessible Figma library with automated variant props.</li>
        </ul>
        <h4>Weeks 3–4: Production Component Implementation</h4>
        <ul>
          <li>Zero-dependency HTML/CSS/JS components with 100% responsive coverage.</li>
          <li>Full keyboard navigation, ARIA attributes, and reduced-motion states.</li>
        </ul>
        <h4>Weeks 5–6: Direct Integration, QA & Launch</h4>
        <ul>
          <li>Direct pull requests submitted into client repository.</li>
          <li>Cross-browser testing (Chrome, Safari, Firefox, Edge, Mobile iOS/Android).</li>
          <li>30-day post-launch bug warranty included.</li>
        </ul>
      `
    },
    'Architecture Retainer': {
      title: 'SOW: Architecture Retainer (Quarterly Advisory)',
      content: `
        <h4>Cadence & Availability</h4>
        <ul>
          <li>15 dedicated advisory hours per week with a principal design engineer.</li>
          <li>Private dedicated Slack/Discord channel with 4-hour SLA during business hours.</li>
        </ul>
        <h4>Continuous Deliverables</h4>
        <ul>
          <li>Weekly asynchronous PR reviews for frontend architecture and design tokens.</li>
          <li>Bi-weekly live pairing and architectural alignment sessions.</li>
          <li>Quarterly accessibility compliance and bundle size performance reports.</li>
        </ul>
      `
    }
  };

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const alertBox = container.querySelector('#prPackAlert');
    const modal = container.querySelector('#prPackModal');
    const modalTitle = container.querySelector('#prPackModalTitle');
    const modalContent = container.querySelector('#prPackModalContent');
    const modalClose = container.querySelector('#prPackModalClose');
    const modalDismiss = container.querySelector('#prPackModalDismiss');

    function closeModal() {
      if (modal) modal.setAttribute('hidden', '');
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalDismiss) modalDismiss.addEventListener('click', closeModal);
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

    const buttons = container.querySelectorAll('.pr-pack-action-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const pkg = btn.dataset.package;
        const action = btn.dataset.action;

        if (action === 'sow') {
          const data = sowDetails[pkg];
          if (data && modal && modalTitle && modalContent) {
            modalTitle.textContent = data.title;
            modalContent.innerHTML = data.content;
            modal.removeAttribute('hidden');
          }
        } else {
          if (alertBox) {
            alertBox.removeAttribute('hidden');
            alertBox.textContent = `Demo Reservation: Inquired for "${pkg}". Local prototype simulation — no booking was executed.`;
            alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    });
  });
}

export const initServicePackages = initServicePackagesPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initServicePackagesPricing());
  } else {
    initServicePackagesPricing();
  }
}
