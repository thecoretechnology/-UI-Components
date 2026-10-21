// 07: Social / SSO-first Login Controller
export function initSocialSsoAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="social-sso"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authSsoForm');
    const ssoButtons = container.querySelectorAll('.auth-sso-btn');
    const alertBox = container.querySelector('#authSsoAlert');
    const emailInput = container.querySelector('#auth-sso-email');
    const emailErr = container.querySelector('#auth-sso-email-err');
    const submitBtn = container.querySelector('#authSsoSubmit');

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      if (emailInput) emailInput.classList.remove('is-invalid');
      if (emailErr) emailErr.textContent = '';
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    // SSO Provider Buttons Interaction (Honest Demo Disclosure)
    ssoButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        clearErrors();
        const provider = btn.dataset.provider || 'SSO Provider';
        if (alertBox) {
          alertBox.className = 'auth-sso-alert is-error';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo Simulation: ${provider} handshake initiated locally. Real OAuth/SAML authentication requires server-side callback endpoints. Use corporate email below to test the magic link flow.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    // Email Magic Link Submission
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        const emailVal = (emailInput?.value || '').trim();

        if (!emailVal) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please provide your corporate email address.';
          emailInput?.focus();
          return;
        }

        if (!validateEmail(emailVal)) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid corporate email (e.g. name@company.com).';
          emailInput?.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          const orig = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span>Dispatching...</span>';

          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = orig;
            if (alertBox) {
              alertBox.className = 'auth-sso-alert is-success';
              alertBox.removeAttribute('hidden');
              alertBox.textContent = `✓ Single-use magic authentication link simulated for ${emailVal}. Check local demo inbox.`;
            }
          }, 450);
        }
      });
    }
  });
}

export const initSocialSso = initSocialSsoAuth;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSocialSsoAuth());
  } else {
    initSocialSsoAuth();
  }
}
