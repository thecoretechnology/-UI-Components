// 10: Contact-for-Pricing / Enterprise Controller
export function initEnterpriseContactPricing(root = document) {
  const containers = root.querySelectorAll('[data-pricing="enterprise-contact"]');

  containers.forEach(container => {
    if (container.__prInitialized) return;
    container.__prInitialized = true;

    const form = container.querySelector('#prEntForm');
    const alertBox = container.querySelector('#prEntAlert');
    const orgInput = container.querySelector('#prEntOrg');
    const emailInput = container.querySelector('#prEntEmail');
    const depSelect = container.querySelector('#prEntDeployment');
    const tpSelect = container.querySelector('#prEntThroughput');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const org = (orgInput?.value || '').trim();
        const email = (emailInput?.value || '').trim();
        const deployment = depSelect?.value || 'Dedicated VPC';
        const throughput = tpSelect?.value || 'Standard Enterprise';

        if (!org || !email) {
          if (alertBox) {
            alertBox.removeAttribute('hidden');
            alertBox.textContent = 'Please provide both your organization name and work email address.';
            alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          return;
        }

        // Generate demo scope tracking token
        const randomToken = 'MSA-' + Math.floor(1000 + Math.random() * 9000);

        if (alertBox) {
          alertBox.removeAttribute('hidden');
          alertBox.innerHTML = `
            <strong>Scope Request Generated (${randomToken}):</strong><br>
            Preliminary brief recorded for <em>${org}</em> (${email}) targeting <em>${deployment}</em> at <em>${throughput}</em>.<br>
            <span style="font-size:12px;opacity:0.9;">Client-side prototype simulation &bull; No outbound communication dispatched.</span>
          `;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        form.reset();
      });
    }
  });
}

export const initEnterpriseContact = initEnterpriseContactPricing;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initEnterpriseContactPricing());
  } else {
    initEnterpriseContactPricing();
  }
}
