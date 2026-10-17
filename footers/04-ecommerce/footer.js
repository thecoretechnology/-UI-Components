// ecommerce controller
export function initEcommerceFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="ecommerce"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    // 1. Mobile Accordions
    const accordionBtns = footer.querySelectorAll('.ft-shop-accordion-btn');
    accordionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const col = btn.closest('.ft-shop-col');
        const isOpen = col.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(isOpen));
        const icon = btn.querySelector('.ft-shop-icon-toggle');
        if (icon) icon.textContent = isOpen ? '−' : '+';
      });
    });

    // 2. Newsletter Signup with Coupon Reveal
    const form = footer.querySelector('.ft-shop-form');
    const input = footer.querySelector('.ft-shop-input');
    const status = footer.querySelector('.ft-shop-status');

    if (form && input && status) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = input.value.trim();

        if (!input.checkValidity() || !email) {
          status.innerHTML = '<span style="color:#b91c1c;">Please enter a valid email.</span>';
          input.focus();
          return;
        }

        const couponCode = 'GOODGOODS10';
        status.innerHTML = `
          <div class="ft-shop-coupon-card">
            <span>Code: <span class="ft-shop-coupon-code">${couponCode}</span> (10% off)</span>
            <button type="button" class="ft-shop-coupon-copy">Copy</button>
          </div>
        `;
        form.reset();

        const copyBtn = status.querySelector('.ft-shop-coupon-copy');
        if (copyBtn) {
          copyBtn.addEventListener('click', async () => {
            try {
              await navigator.clipboard.writeText(couponCode);
              copyBtn.textContent = 'Copied!';
              setTimeout(() => {
                copyBtn.textContent = 'Copy';
              }, 2000);
            } catch {
              copyBtn.textContent = 'Copied!';
            }
          });
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initEcommerceFooter());
  } else {
    initEcommerceFooter();
  }
}
