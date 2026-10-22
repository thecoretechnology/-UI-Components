// 03: Usage-Based Pricing Controller
export function initUsageBasedPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="usage-based"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const slider = container.querySelector('#prUsageSlider');
    const volumeDisplay = container.querySelector('#prUsageVolumeDisplay');
    const billableLabel = container.querySelector('#prUsageBillableCallsLabel');
    const billableAmount = container.querySelector('#prUsageBillableAmount');
    const totalAmount = container.querySelector('#prUsageTotalAmount');
    const presetBtns = container.querySelectorAll('.pr-usage-preset-btn');
    const keyBtn = container.querySelector('#prUsageKeyBtn');
    const alertBox = container.querySelector('#prUsageAlert');

    const FREE_TIER = 100000;
    const RATE_PER_THOUSAND = 0.002;

    function formatNumber(num) {
      return new Intl.NumberFormat('en-US').format(num);
    }

    function calculateCost(totalVolume) {
      const billable = Math.max(0, totalVolume - FREE_TIER);
      const cost = (billable / 1000) * RATE_PER_THOUSAND;
      return {
        billable,
        cost: cost.toFixed(2)
      };
    }

    function updateUsage(volume) {
      const volNum = parseInt(volume, 10) || FREE_TIER;
      const { billable, cost } = calculateCost(volNum);

      if (volumeDisplay) {
        volumeDisplay.textContent = formatNumber(volNum);
      }

      if (billableLabel) {
        billableLabel.textContent = `Billable Ingestion (${formatNumber(billable)} calls × $0.0020/1k)`;
      }

      if (billableAmount) {
        billableAmount.textContent = `$${cost}`;
      }

      if (totalAmount) {
        totalAmount.textContent = `$${cost}`;
      }

      // Update preset active classes
      presetBtns.forEach(btn => {
        const pVol = parseInt(btn.dataset.volume, 10);
        btn.classList.toggle('is-active', pVol === volNum);
      });
    }

    // Slider listener
    if (slider) {
      slider.addEventListener('input', (e) => {
        updateUsage(e.target.value);
      });
    }

    // Preset button listeners
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.volume;
        if (slider && val) {
          slider.value = val;
          updateUsage(val);
        }
      });
    });

    // Test Key Generation Simulation
    if (keyBtn) {
      keyBtn.addEventListener('click', () => {
        const currentVol = slider ? slider.value : '5000000';
        const { cost } = calculateCost(parseInt(currentVol, 10));
        if (alertBox) {
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo Environment Provisioned: Test token test_live_metered_v4 created with estimated $${cost}/month allowance. No credit card billed.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    // Initialize with default slider value
    if (slider) {
      updateUsage(slider.value);
    }
  });
}

export const initUsageBased = initUsageBasedPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initUsageBasedPricing());
  } else {
    initUsageBasedPricing();
  }
}
