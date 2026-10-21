// 10: Combined Login / Sign-up Experience Controller
export function initCombinedSwitcherAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="combined-switcher"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authDualForm');
    const tabLogin = container.querySelector('#authDualTabLogin');
    const tabRegister = container.querySelector('#authDualTabRegister');
    const title = container.querySelector('#authDualTitle');
    const subtitle = container.querySelector('#authDualSubtitle');
    const alertBox = container.querySelector('#authDualAlert');
    const submitBtnText = container.querySelector('#authDualSubmitText');
    const promptText = container.querySelector('#authDualPromptText');
    const promptBtn = container.querySelector('#authDualPromptBtn');
    const forgotBtn = container.querySelector('#authDualForgotLink');

    // Groups & Inputs
    const nameGroup = container.querySelector('#authDualNameGroup');
    const nameInput = container.querySelector('#auth-dual-name');
    const nameErr = container.querySelector('#auth-dual-name-err');

    const emailInput = container.querySelector('#auth-dual-email');
    const emailErr = container.querySelector('#auth-dual-email-err');

    const passInput = container.querySelector('#auth-dual-pass');
    const passErr = container.querySelector('#auth-dual-pass-err');

    const confirmGroup = container.querySelector('#authDualConfirmGroup');
    const confirmInput = container.querySelector('#auth-dual-confirm');
    const confirmErr = container.querySelector('#auth-dual-confirm-err');

    const rememberWrap = container.querySelector('#authDualRememberWrap');
    const termsWrap = container.querySelector('#authDualTermsWrap');
    const termsCheck = container.querySelector('#auth-dual-terms');
    const termsErr = container.querySelector('#auth-dual-terms-err');

    let currentMode = 'login';

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, emailInput, passInput, confirmInput].forEach(inp => inp?.classList.remove('is-invalid'));
      if (nameErr) nameErr.textContent = '';
      if (emailErr) emailErr.textContent = '';
      if (passErr) passErr.textContent = '';
      if (confirmErr) confirmErr.textContent = '';
      if (termsErr) termsErr.textContent = '';
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    function setMode(mode) {
      currentMode = mode;
      clearErrors();

      if (mode === 'login') {
        tabLogin?.classList.add('is-active');
        tabLogin?.setAttribute('aria-selected', 'true');
        tabRegister?.classList.remove('is-active');
        tabRegister?.setAttribute('aria-selected', 'false');

        if (title) title.textContent = 'Welcome back';
        if (subtitle) subtitle.textContent = 'Enter your account credentials to access your console.';
        if (submitBtnText) submitBtnText.textContent = 'Sign In to Account';
        if (promptText) promptText.textContent = "Don't have an account yet?";
        if (promptBtn) promptBtn.textContent = 'Create account';

        nameGroup?.setAttribute('hidden', '');
        confirmGroup?.setAttribute('hidden', '');
        termsWrap?.setAttribute('hidden', '');
        rememberWrap?.removeAttribute('hidden');
        if (forgotBtn) forgotBtn.style.display = 'inline-block';

        if (form) form.dataset.currentMode = 'login';
      } else {
        tabRegister?.classList.add('is-active');
        tabRegister?.setAttribute('aria-selected', 'true');
        tabLogin?.classList.remove('is-active');
        tabLogin?.setAttribute('aria-selected', 'false');

        if (title) title.textContent = 'Create an account';
        if (subtitle) subtitle.textContent = 'Get started with your enterprise developer workspace.';
        if (submitBtnText) submitBtnText.textContent = 'Create Developer Account';
        if (promptText) promptText.textContent = 'Already have an account?';
        if (promptBtn) promptBtn.textContent = 'Sign in';

        nameGroup?.removeAttribute('hidden');
        confirmGroup?.removeAttribute('hidden');
        termsWrap?.removeAttribute('hidden');
        rememberWrap?.setAttribute('hidden', '');
        if (forgotBtn) forgotBtn.style.display = 'none';

        if (form) form.dataset.currentMode = 'register';
      }
    }

    tabLogin?.addEventListener('click', () => setMode('login'));
    tabRegister?.addEventListener('click', () => setMode('register'));
    promptBtn?.addEventListener('click', () => {
      setMode(currentMode === 'login' ? 'register' : 'login');
    });

    // Eye Toggles
    const eyeButtons = container.querySelectorAll('.auth-dual-eye-btn');
    eyeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.toggle;
        const targetInput = container.querySelector(`#${targetId}`);
        if (!targetInput) return;

        const isPassword = targetInput.type === 'password';
        targetInput.type = isPassword ? 'text' : 'password';
        btn.setAttribute('aria-pressed', isPassword ? 'true' : 'false');
        btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');

        const eyeShow = btn.querySelector('.eye-show');
        const eyeHide = btn.querySelector('.eye-hide');
        if (eyeShow && eyeHide) {
          eyeShow.style.display = isPassword ? 'none' : 'block';
          eyeHide.style.display = isPassword ? 'block' : 'none';
        }
      });
    });

    // Forgot Password Simulation Link
    if (forgotBtn) {
      forgotBtn.addEventListener('click', () => {
        clearErrors();
        const emailVal = (emailInput?.value || '').trim();
        if (alertBox) {
          alertBox.className = 'auth-dual-alert is-info';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = emailVal 
            ? `Demo Simulation: Password recovery instruction link dispatched to ${emailVal}. Check inbox.`
            : 'Demo Simulation: Enter your work email above and click "Forgot password?" to trigger recovery dispatch.';
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    // Form Submission
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;

        // Shared Email Validation
        const emailVal = (emailInput?.value || '').trim();
        if (!emailVal) {
          emailInput?.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter your work email.';
          if (!hasError) emailInput?.focus();
          hasError = true;
        } else if (!validateEmail(emailVal)) {
          emailInput?.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid email address.';
          if (!hasError) emailInput?.focus();
          hasError = true;
        }

        // Shared Password Validation
        const passVal = passInput?.value || '';
        if (!passVal) {
          passInput?.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Please enter your password.';
          if (!hasError) passInput?.focus();
          hasError = true;
        }

        if (currentMode === 'login') {
          if (hasError) return;

          if (alertBox) {
            alertBox.className = 'auth-dual-alert is-success';
            alertBox.removeAttribute('hidden');
            alertBox.textContent = `Demo Simulation: Authenticated successfully as ${emailVal}. Client showcase only — no session persisted or transmitted.`;
            alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          // Register Mode Specific Validation
          const nameVal = (nameInput?.value || '').trim();
          if (!nameVal) {
            nameInput?.classList.add('is-invalid');
            if (nameErr) nameErr.textContent = 'Please enter your full name.';
            if (!hasError) nameInput?.focus();
            hasError = true;
          }

          if (passVal && passVal.length < 8) {
            passInput?.classList.add('is-invalid');
            if (passErr) passErr.textContent = 'Registration password must be at least 8 characters.';
            if (!hasError) passInput?.focus();
            hasError = true;
          }

          const confirmVal = confirmInput?.value || '';
          if (!confirmVal) {
            confirmInput?.classList.add('is-invalid');
            if (confirmErr) confirmErr.textContent = 'Please confirm your chosen password.';
            if (!hasError) confirmInput?.focus();
            hasError = true;
          } else if (passVal && confirmVal !== passVal) {
            confirmInput?.classList.add('is-invalid');
            if (confirmErr) confirmErr.textContent = 'Passwords do not match.';
            if (!hasError) confirmInput?.focus();
            hasError = true;
          }

          if (termsCheck && !termsCheck.checked) {
            if (termsErr) termsErr.textContent = 'You must acknowledge the Developer Terms of Service to register.';
            if (!hasError) termsCheck.focus();
            hasError = true;
          }

          if (hasError) return;

          if (alertBox) {
            alertBox.className = 'auth-dual-alert is-success';
            alertBox.removeAttribute('hidden');
            alertBox.textContent = `Demo Simulation: Account registration validated for ${nameVal} (${emailVal}). Zero credentials saved or transmitted.`;
            alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }
      });
    }
  });
}
