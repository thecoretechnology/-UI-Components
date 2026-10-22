// 02: Minimal Editorial Pricing Controller
export function initMinimalEditorialPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="minimal-editorial"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const currencyBtns = container.querySelectorAll('.pr-edit-currency-btn');
    const alertBox = container.querySelector('#prEditAlert');
    const subscribeBtns = container.querySelectorAll('.pr-edit-sub-btn');
    const symbolEls = container.querySelectorAll('.pr-edit-curr-sym');
    const valEls = container.querySelectorAll('.pr-edit-val');

    const currencySymbols = {
      usd: '$',
      eur: '€',
      gbp: '£'
    };

    let activeCurrency = 'usd';

    // Currency Switcher
    currencyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const curr = btn.dataset.currency;
        if (!curr || curr === activeCurrency) return;

        activeCurrency = curr;

        currencyBtns.forEach(b => {
          const isActive = b.dataset.currency === curr;
          b.classList.toggle('is-active', isActive);
          b.setAttribute('aria-pressed', String(isActive));
        });

        const symbol = currencySymbols[curr] || '$';
        symbolEls.forEach(el => { el.textContent = symbol; });

        valEls.forEach(el => {
          const targetVal = el.dataset[curr];
          if (targetVal) {
            el.textContent = targetVal;
          }
        });

        if (alertBox && !alertBox.hasAttribute('hidden')) {
          alertBox.setAttribute('hidden', '');
        }
      });
    });

    // Subscribe actions
    subscribeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const plan = btn.dataset.plan || 'Edition';
        const row = btn.closest('.pr-edit-row');
        const val = row?.querySelector('.pr-edit-val')?.textContent || '';
        const sym = row?.querySelector('.pr-edit-curr-sym')?.textContent || '$';

        if (alertBox) {
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo Colophon: You selected the ${plan} at ${sym}${val}/annum. In production, this would route to a direct escrow agreement. No funds were collected.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  });
}

export const initMinimalEditorial = initMinimalEditorialPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMinimalEditorialPricing());
  } else {
    initMinimalEditorialPricing();
  }
}
