// 01: Classic Tier Comparison Controller
export function initClassicTierPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="classic-tier"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const alertBox = container.querySelector('#prClassicAlert');
    const buttons = container.querySelectorAll('.pr-classic-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const planName = btn.dataset.planName || 'Plan';
        const price = btn.dataset.price || '$0';

        if (alertBox) {
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo Selection: You selected the ${planName} plan (${price}/month). No real subscription or payment execution was triggered.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  });
}

export const initClassicTier = initClassicTierPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initClassicTierPricing());
  } else {
    initClassicTierPricing();
  }
}
