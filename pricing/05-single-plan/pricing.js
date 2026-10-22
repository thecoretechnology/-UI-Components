// 05: Single-Plan Pricing Controller
export function initSinglePlanPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="single-plan"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const basePrice = 189;
    const totalEl = container.querySelector('#prSingleTotal');
    const btnTextEl = container.querySelector('#prSingleBtnText');
    const submitBtn = container.querySelector('#prSingleSubmitBtn');
    const alertBox = container.querySelector('#prSingleAlert');
    const addonCheckboxes = container.querySelectorAll('.pr-single-addon-check');

    function calculateTotal() {
      let total = basePrice;
      const selectedAddons = [];

      addonCheckboxes.forEach(cb => {
        if (cb.checked) {
          const price = parseFloat(cb.dataset.price) || 0;
          total += price;
          selectedAddons.push(cb.dataset.label || 'Add-on');
        }
      });

      if (totalEl) {
        totalEl.textContent = String(total);
      }

      if (btnTextEl) {
        btnTextEl.textContent = `Acquire Studio License — $${total}`;
      }

      return { total, selectedAddons };
    }

    addonCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        calculateTotal();
      });
    });

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const { total, selectedAddons } = calculateTotal();
        if (alertBox) {
          alertBox.removeAttribute('hidden');
          const addonsList = selectedAddons.length > 0 
            ? ` with ${selectedAddons.join(' and ')}` 
            : ' with no optional add-ons';
          alertBox.textContent = `Demo Order Selected: Complete Studio Edition ($${total} one-time)${addonsList}. Local simulation — no payment was processed.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }
  });
}

export const initSinglePlan = initSinglePlanPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSinglePlanPricing());
  } else {
    initSinglePlanPricing();
  }
}
