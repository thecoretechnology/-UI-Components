// 09: Credit / Token Bundles Controller
export function initCreditBundlesPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="credit-bundles"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const alertBox = container.querySelector('#prBundleAlert');
    const buttons = container.querySelectorAll('.pr-bundle-btn');
    const opSelect = container.querySelector('#prBundleOpSelect');
    const volSlider = container.querySelector('#prBundleVolumeSlider');
    const volLabel = container.querySelector('#prBundleVolumeLabel');
    const neededCreditsEl = container.querySelector('#prBundleNeededCredits');
    const recPackEl = container.querySelector('#prBundleRecPack');

    function updateRecommender() {
      if (!opSelect || !volSlider) return;
      const rate = parseInt(opSelect.value, 10) || 5;
      const volume = parseInt(volSlider.value, 10) || 2000;
      const totalNeeded = rate * volume;

      if (volLabel) volLabel.textContent = `${volume.toLocaleString('en-US')} units`;
      if (neededCreditsEl) neededCreditsEl.textContent = totalNeeded.toLocaleString('en-US');

      let rec = 'Micro Pack (1,000)';
      let targetBundle = 'Micro';
      if (totalNeeded > 25000) {
        rec = 'Enterprise Scale (100k)';
        targetBundle = 'Scale';
      } else if (totalNeeded > 5000) {
        rec = 'Production Pack (25k)';
        targetBundle = 'Production';
      } else if (totalNeeded > 1000) {
        rec = 'Builder Pack (5k)';
        targetBundle = 'Builder';
      }

      if (recPackEl) recPackEl.textContent = rec;

      container.querySelectorAll('.pr-bundle-card').forEach(card => {
        if (card.dataset.bundle === targetBundle) {
          card.classList.add('is-recommended-fit');
        } else {
          card.classList.remove('is-recommended-fit');
        }
      });
    }

    if (opSelect) opSelect.addEventListener('change', updateRecommender);
    if (volSlider) volSlider.addEventListener('input', updateRecommender);
    updateRecommender();

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const bundle = btn.dataset.bundle || 'Credit Bundle';
        const card = btn.closest('.pr-bundle-card');
        const credits = card?.dataset.credits || '';
        const price = card?.dataset.price || '';
        const unit = card?.dataset.unit || '';

        if (alertBox) {
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo Selection: ${bundle} (${parseInt(credits, 10).toLocaleString('en-US')} Credits) at $${price} ($${unit}/credit). Client-side simulation — no real payment.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  });
}

export const initCreditBundles = initCreditBundlesPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCreditBundlesPricing());
  } else {
    initCreditBundlesPricing();
  }
}
