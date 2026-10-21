// 04: Editorial / Luxury Authentication Controller
export function initEditorialLuxuryAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="editorial-luxury"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authLuxForm');
    const emailInput = container.querySelector('#auth-lux-email');
    const passInput = container.querySelector('#auth-lux-pass');
    const emailErr = container.querySelector('#auth-lux-email-err');
    const passErr = container.querySelector('#auth-lux-pass-err');
    const eyeBtn = container.querySelector('#authLuxEye');
    const eyeShow = eyeBtn?.querySelector('.eye-show');
    const eyeHide = eyeBtn?.querySelector('.eye-hide');
    const alertBox = container.querySelector('#authLuxAlert');
    const forgotBtn = container.querySelector('#authLuxForgot');
    const inquireBtn = container.querySelector('#authLuxInquire');
    const submitBtn = container.querySelector('#authLuxSubmit');

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
        const isPass = passInput.getAttribute('type') === 'password';
        passInput.setAttribute('type', isPass ? 'text' : 'password');
        eyeBtn.setAttribute('aria-pressed', String(isPass));
        eyeBtn.setAttribute('aria-label', isPass ? 'Hide passphrase' : 'Show passphrase');
        if (eyeShow && eyeHide) {
          if (isPass) {
            eyeShow.setAttribute('hidden', '');
            eyeHide.removeAttribute('hidden');
          } else {
            eyeShow.removeAttribute('hidden');
            eyeHide.setAttribute('hidden', '');
          }
        }
      });
    }

    // Forgotten Passkey Action
    if (forgotBtn) {
      forgotBtn.addEventListener('click', () => {
        if (alertBox) {
          alertBox.className = 'auth-lux-alert is-success';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = 'A dispatch has been recorded for the Archival Registry desk. In demo mode, no postal or electronic dispatch was initiated.';
        }
      });
    }

    // Request Patronage Action
    if (inquireBtn) {
      inquireBtn.addEventListener('click', () => {
        if (alertBox) {
          alertBox.className = 'auth-lux-alert is-success';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = 'Patronage invitation folio opened in demo mode. Admission is subject to committee review.';
        }
      });
    }

    // Form Submission & Validation
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;
        const emailVal = (emailInput?.value || '').trim();
        const passVal = (passInput?.value || '').trim();

        if (!emailVal) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter your registered patron identifier or email.';
          hasError = true;
        } else if (!validateEmail(emailVal) && !/^[a-zA-Z0-9._-]{3,}$/.test(emailVal)) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please provide a valid archival patron address.';
          hasError = true;
        }

        if (!passVal) {
          if (passInput) passInput.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Please provide your vault passkey.';
          hasError = true;
        } else if (passVal.length < 6) {
          if (passInput) passInput.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Passkey must consist of at least 6 characters.';
          hasError = true;
        }

        if (hasError) {
          const firstErr = container.querySelector('.is-invalid');
          if (firstErr) firstErr.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          const orig = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span>Verifying Registry...</span>';

          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = orig;
            if (alertBox) {
              alertBox.className = 'auth-lux-alert is-success';
              alertBox.removeAttribute('hidden');
              alertBox.textContent = '✓ Patron identity recognized. Demo mode: private salon access is simulated locally.';
            }
          }, 450);
        }
      });
    }
  });
}

export const initEditorialLuxury = initEditorialLuxuryAuth;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initEditorialLuxuryAuth());
  } else {
    initEditorialLuxuryAuth();
  }
}
