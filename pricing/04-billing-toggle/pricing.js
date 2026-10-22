// 04: Monthly / Annual Toggle Pricing Controller
export function initBillingTogglePricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="billing-toggle"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const toggleSwitch = container.querySelector('#prToggleSwitch');
    const priceEls = container.querySelectorAll('.pr-toggle-price-num');
    const cadenceEls = container.querySelectorAll('.pr-toggle-cadence');
    const alertBox = container.querySelector('#prToggleAlert');
    const planButtons = container.querySelectorAll('.pr-toggle-btn');

    let isAnnual = false;

    function updateBillingCycle(annual) {
      isAnnual = annual;
      if (toggleSwitch) {
        toggleSwitch.classList.toggle('is-active', isAnnual);
        toggleSwitch.setAttribute('aria-checked', String(isAnnual));
      }

      priceEls.forEach(el => {
        const val = isAnnual ? el.dataset.annual : el.dataset.monthly;
        if (val) el.textContent = val;
      });

      cadenceEls.forEach(el => {
        const cadence = isAnnual ? el.dataset.cadenceAnnual : el.dataset.cadenceMonthly;
        if (cadence) el.textContent = cadence;
      });
    }

    if (toggleSwitch) {
      toggleSwitch.addEventListener('click', () => {
        updateBillingCycle(!isAnnual);
      });

      toggleSwitch.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          updateBillingCycle(!isAnnual);
        }
      });
    }

    planButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const plan = btn.dataset.plan || 'Plan';
        const card = btn.closest('.pr-toggle-card');
        const price = card?.querySelector('.pr-toggle-price-num')?.textContent || '';
        const cycle = isAnnual ? 'Annual (20% discount applied)' : 'Monthly';

        if (alertBox) {
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo Selection: ${plan} chosen on ${cycle} billing at $${price}/month. Client-side simulation — no charge executed.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  });
}

export const initBillingToggle = initBillingTogglePricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initBillingTogglePricing());
  } else {
    initBillingTogglePricing();
  }
}
