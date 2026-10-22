// 08: Pricing Calculator Controller
export function initPricingCalculatorPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="pricing-calculator"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const seatsSlider = container.querySelector('#prCalcSeatsSlider');
    const storageSlider = container.querySelector('#prCalcStorageSlider');
    const slaRadios = container.querySelectorAll('input[name="prCalcSla"]');
    const resetBtn = container.querySelector('#prCalcResetBtn');
    const quoteBtn = container.querySelector('#prCalcSaveQuoteBtn');
    const alertBox = container.querySelector('#prCalcAlert');

    // Display elements
    const seatsValEl = container.querySelector('#prCalcSeatsVal');
    const storageValEl = container.querySelector('#prCalcStorageVal');
    const seatsMathEl = container.querySelector('#prCalcSeatsMath');
    const seatsTotalEl = container.querySelector('#prCalcSeatsTotal');
    const storageMathEl = container.querySelector('#prCalcStorageMath');
    const storageTotalEl = container.querySelector('#prCalcStorageTotal');
    const slaNameEl = container.querySelector('#prCalcSlaName');
    const slaTotalEl = container.querySelector('#prCalcSlaTotal');
    const discountRow = container.querySelector('#prCalcDiscountRow');
    const discountTotalEl = container.querySelector('#prCalcDiscountTotal');
    const grandTotalEl = container.querySelector('#prCalcGrandTotal');
    const formulaTextEl = container.querySelector('#prCalcFormulaText');

    function calculate() {
      const seats = parseInt(seatsSlider?.value || '10', 10);
      const storage = parseInt(storageSlider?.value || '250', 10);
      
      let slaCost = 0;
      let slaName = 'Standard';
      slaRadios.forEach(radio => {
        if (radio.checked) {
          slaCost = parseFloat(radio.value) || 0;
          if (slaCost === 49) slaName = 'Business 99.9%';
          else if (slaCost === 199) slaName = 'Mission-Critical 99.99%';
          else slaName = 'Standard';
        }
      });

      // Math rules
      const seatsGross = seats * 12;
      const isDiscounted = seats >= 25;
      const discount = isDiscounted ? seatsGross * 0.15 : 0;
      const seatsNet = seatsGross - discount;

      const extraStorage = Math.max(0, storage - 50);
      const storageCost = extraStorage * 0.10;

      const grandTotal = seatsNet + storageCost + slaCost;

      // Update UI
      if (seatsValEl) seatsValEl.textContent = String(seats);
      if (storageValEl) storageValEl.textContent = storage.toLocaleString('en-US');

      if (seatsMathEl) seatsMathEl.textContent = `${seats} seats \u00D7 $12`;
      if (seatsTotalEl) seatsTotalEl.textContent = `$${seatsGross.toFixed(2)}`;

      if (storageMathEl) storageMathEl.textContent = `${extraStorage.toLocaleString('en-US')} extra GB \u00D7 $0.10`;
      if (storageTotalEl) storageTotalEl.textContent = `$${storageCost.toFixed(2)}`;

      if (slaNameEl) slaNameEl.textContent = slaName;
      if (slaTotalEl) slaTotalEl.textContent = `$${slaCost.toFixed(2)}`;

      if (discountRow) {
        if (isDiscounted) {
          discountRow.removeAttribute('hidden');
          if (discountTotalEl) discountTotalEl.textContent = `-$${discount.toFixed(2)}`;
        } else {
          discountRow.setAttribute('hidden', '');
        }
      }

      if (grandTotalEl) {
        grandTotalEl.textContent = grandTotal.toFixed(2).replace(/\.00$/, '');
      }

      if (formulaTextEl) {
        const discountPart = isDiscounted ? ` - $${discount.toFixed(2)} (15% volume discount)` : '';
        formulaTextEl.textContent = `Total = ($${seatsGross.toFixed(2)}${discountPart}) + $${storageCost.toFixed(2)} (Storage) + $${slaCost.toFixed(2)} (SLA) = $${grandTotal.toFixed(2)}/mo`;
      }

      return { seats, storage, slaName, grandTotal };
    }

    if (seatsSlider) seatsSlider.addEventListener('input', calculate);
    if (storageSlider) storageSlider.addEventListener('input', calculate);
    slaRadios.forEach(radio => radio.addEventListener('change', calculate));

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (seatsSlider) seatsSlider.value = '10';
        if (storageSlider) storageSlider.value = '250';
        if (slaRadios[0]) slaRadios[0].checked = true;
        calculate();
        if (alertBox) alertBox.setAttribute('hidden', '');
      });
    }

    if (quoteBtn) {
      quoteBtn.addEventListener('click', () => {
        const res = calculate();
        if (alertBox) {
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Simulated Quote Saved: ${res.seats} seats, ${res.storage} GB storage, ${res.slaName} SLA estimated at $${res.grandTotal.toFixed(2)}/month. Client-side prototype calculation.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    // Initial run
    calculate();
  });
}

export const initPricingCalculator = initPricingCalculatorPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initPricingCalculatorPricing());
  } else {
    initPricingCalculatorPricing();
  }
}
