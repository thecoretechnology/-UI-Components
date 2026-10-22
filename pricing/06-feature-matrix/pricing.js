// 06: Feature Matrix Pricing Controller
export function initFeatureMatrixPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="feature-matrix"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const diffToggle = container.querySelector('#prMatrixDiffToggle');
    const alertBox = container.querySelector('#prMatrixAlert');
    const planButtons = container.querySelectorAll('.pr-matrix-col-btn');
    const rows = container.querySelectorAll('.pr-matrix-row');

    if (diffToggle) {
      diffToggle.addEventListener('change', () => {
        const showDiffOnly = diffToggle.checked;
        rows.forEach(row => {
          if (row.dataset.diff === 'false') {
            row.classList.toggle('is-hidden-diff', showDiffOnly);
          }
        });
      });
    }

    planButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const plan = btn.dataset.plan || 'Plan';
        if (alertBox) {
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo Selection: ${plan} chosen from the comparison matrix. Client-side inspection simulation.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  });
}

export const initFeatureMatrix = initFeatureMatrixPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initFeatureMatrixPricing());
  } else {
    initFeatureMatrixPricing();
  }
}
