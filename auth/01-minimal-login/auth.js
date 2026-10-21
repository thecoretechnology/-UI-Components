// 01: Minimal Login Controller
export function initMinimalLoginAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="minimal-login"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authMinForm');
    const emailInput = container.querySelector('#auth-min-email');
    const passInput = container.querySelector('#auth-min-pass');
    const emailErr = container.querySelector('#auth-min-email-err');
    const passErr = container.querySelector('#auth-min-pass-err');
    const eyeBtn = container.querySelector('#authMinEyeBtn');
    const eyeShow = container.querySelector('.eye-show');
    const eyeHide = container.querySelector('.eye-hide');
    const alertBox = container.querySelector('#authMinAlert');
    const forgotBtn = container.querySelector('#authMinForgotBtn');
    const recoveryBox = container.querySelector('#authMinRecoveryBox');
    const recoveryClose = container.querySelector('#authMinRecoveryClose');
    const submitBtn = container.querySelector('#authMinSubmit');

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      if (emailInput) emailInput.classList.remove('is-invalid');
      if (passInput) passInput.classList.remove('is-invalid');
      if (emailErr) emailErr.textContent = '';
      if (passErr) passErr.textContent = '';
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    // Password Visibility Toggle
    if (eyeBtn && passInput) {
      eyeBtn.addEventListener('click', () => {
        const isPassword = passInput.getAttribute('type') === 'password';
        passInput.setAttribute('type', isPassword ? 'text' : 'password');
        eyeBtn.setAttribute('aria-pressed', String(isPassword));
        eyeBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
        if (eyeShow && eyeHide) {
          if (isPassword) {
            eyeShow.setAttribute('hidden', '');
            eyeHide.removeAttribute('hidden');
          } else {
            eyeShow.removeAttribute('hidden');
            eyeHide.setAttribute('hidden', '');
          }
        }
      });
    }

    // Lost Passphrase Trigger (Demo Feedback)
    if (forgotBtn && recoveryBox) {
      forgotBtn.addEventListener('click', () => {
        recoveryBox.removeAttribute('hidden');
        recoveryBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    if (recoveryClose && recoveryBox) {
      recoveryClose.addEventListener('click', () => {
        recoveryBox.setAttribute('hidden', '');
      });
    }

    // Form Submission with Local Validation
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;
        const emailVal = (emailInput?.value || '').trim();
        const passVal = (passInput?.value || '').trim();

        if (!emailVal) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter your work email or handle.';
          hasError = true;
        } else if (!validateEmail(emailVal) && !/^[a-zA-Z0-9._-]{3,}$/.test(emailVal)) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid email or handle.';
          hasError = true;
        }

        if (!passVal) {
          if (passInput) passInput.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Please enter your passphrase.';
          hasError = true;
        } else if (passVal.length < 6) {
          if (passInput) passInput.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Passphrase must be at least 6 characters.';
          hasError = true;
        }

        if (hasError) {
          const firstErr = container.querySelector('.is-invalid');
          if (firstErr) firstErr.focus();
          return;
        }

        // Simulate local validation success
        if (submitBtn) {
          submitBtn.disabled = true;
          const origText = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span>Verifying...</span>';

          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
            if (alertBox) {
              alertBox.className = 'auth-min-alert is-success';
              alertBox.removeAttribute('hidden');
              alertBox.textContent = '✓ Credentials validated locally. Demo mode: authentication is not connected to a server.';
            }
          }, 450);
        }
      });
    }
  });
}

export const initMinimalLoginForm = initMinimalLoginAuth;
export const initMinimalLogin = initMinimalLoginAuth;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMinimalLoginAuth());
  } else {
    initMinimalLoginAuth();
  }
}
