// 05: Playful Sign-up Controller
export function initPlayfulSignupAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="playful-signup"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authPlayForm');
    const nameInput = container.querySelector('#auth-play-name');
    const handleInput = container.querySelector('#auth-play-handle');
    const emailInput = container.querySelector('#auth-play-email');
    const passInput = container.querySelector('#auth-play-pass');
    const agreeCheck = container.querySelector('#auth-play-agree');

    const nameErr = container.querySelector('#auth-play-name-err');
    const handleErr = container.querySelector('#auth-play-handle-err');
    const emailErr = container.querySelector('#auth-play-email-err');
    const passErr = container.querySelector('#auth-play-pass-err');
    const agreeErr = container.querySelector('#auth-play-agree-err');

    const handleStatus = container.querySelector('#authPlayHandleStatus');
    const alertBox = container.querySelector('#authPlayAlert');
    const submitBtn = container.querySelector('#authPlaySubmit');

    const eyeBtn = container.querySelector('#authPlayEye');
    const eyeShow = eyeBtn?.querySelector('.eye-show');
    const eyeHide = eyeBtn?.querySelector('.eye-hide');

    const bar1 = container.querySelector('#authPlayBar1');
    const bar2 = container.querySelector('#authPlayBar2');
    const bar3 = container.querySelector('#authPlayBar3');
    const meterLabel = container.querySelector('#authPlayMeterLabel');

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, handleInput, emailInput, passInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [nameErr, handleErr, emailErr, passErr, agreeErr].forEach(err => { if (err) err.textContent = ''; });
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    // Handle Availability Ticker
    if (handleInput && handleStatus) {
      handleInput.addEventListener('input', () => {
        const val = handleInput.value.trim();
        if (val.length >= 3 && /^[a-zA-Z0-9_]+$/.test(val)) {
          handleStatus.textContent = '✓ available';
          handleStatus.classList.add('is-visible');
        } else {
          handleStatus.classList.remove('is-visible');
        }
      });
    }

    // Password Strength Meter
    if (passInput) {
      passInput.addEventListener('input', () => {
        const pass = passInput.value;
        if (!bar1 || !bar2 || !bar3 || !meterLabel) return;

        // Reset bars
        [bar1, bar2, bar3].forEach(b => {
          b.className = 'auth-play-meter-bar';
        });

        if (!pass) {
          meterLabel.textContent = 'Enter password';
          return;
        }

        let score = 0;
        if (pass.length >= 6) score++;
        if (pass.length >= 10 && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) score++;
        if (pass.length >= 12 && /[^A-Za-z0-9]/.test(pass)) score++;

        if (score === 0) {
          bar1.classList.add('active-weak');
          meterLabel.textContent = 'Too short';
        } else if (score === 1) {
          bar1.classList.add('active-weak');
          meterLabel.textContent = 'Basic';
        } else if (score === 2) {
          bar1.classList.add('active-medium');
          bar2.classList.add('active-medium');
          meterLabel.textContent = 'Good';
        } else {
          bar1.classList.add('active-strong');
          bar2.classList.add('active-strong');
          bar3.classList.add('active-strong');
          meterLabel.textContent = 'Stellar ✨';
        }
      });
    }

    // Password Visibility Toggle
    if (eyeBtn && passInput) {
      eyeBtn.addEventListener('click', () => {
        const isPass = passInput.getAttribute('type') === 'password';
        passInput.setAttribute('type', isPass ? 'text' : 'password');
        eyeBtn.setAttribute('aria-pressed', String(isPass));
        eyeBtn.setAttribute('aria-label', isPass ? 'Hide password' : 'Show password');
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

    // Form Submission & Validation
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;
        const nameVal = (nameInput?.value || '').trim();
        const handleVal = (handleInput?.value || '').trim();
        const emailVal = (emailInput?.value || '').trim();
        const passVal = (passInput?.value || '').trim();
        const agreed = agreeCheck?.checked;

        if (!nameVal) {
          if (nameInput) nameInput.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'Please provide your full name.';
          hasError = true;
        }

        if (!handleVal) {
          if (handleInput) handleInput.classList.add('is-invalid');
          if (handleErr) handleErr.textContent = 'Handle is required.';
          hasError = true;
        } else if (!/^[a-zA-Z0-9_]{3,20}$/.test(handleVal)) {
          if (handleInput) handleInput.classList.add('is-invalid');
          if (handleErr) handleErr.textContent = '3-20 letters, numbers, or underscores only.';
          hasError = true;
        }

        if (!emailVal) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Email address is required.';
          hasError = true;
        } else if (!validateEmail(emailVal)) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid email address.';
          hasError = true;
        }

        if (!passVal) {
          if (passInput) passInput.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Password is required.';
          hasError = true;
        } else if (passVal.length < 6) {
          if (passInput) passInput.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Password must be at least 6 characters.';
          hasError = true;
        }

        if (!agreed) {
          if (agreeErr) agreeErr.textContent = 'Please accept the atelier collaboration terms.';
          hasError = true;
        }

        if (hasError) {
          const firstErr = container.querySelector('.is-invalid') || (agreeCheck && !agreed ? agreeCheck : null);
          if (firstErr) firstErr.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          const orig = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span>Creating artisan profile...</span>';

          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = orig;
            if (alertBox) {
              const craft = container.querySelector('input[name="craft"]:checked')?.value || 'Creator';
              alertBox.className = 'auth-play-alert is-success';
              alertBox.removeAttribute('hidden');
              alertBox.textContent = `🎉 Welcome to the atelier, @${handleVal} (${craft})! Demo mode: account created in local state.`;
            }
          }, 450);
        }
      });
    }
  });
}

export const initPlayfulSignup = initPlayfulSignupAuth;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initPlayfulSignupAuth());
  } else {
    initPlayfulSignupAuth();
  }
}
