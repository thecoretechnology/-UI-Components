// 02: Split-screen Authentication Controller
export function initSplitScreenAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="split-screen"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authSplitForm');
    const tabSignIn = container.querySelector('#authSplitTabSignIn');
    const tabRequest = container.querySelector('#authSplitTabRequest');
    const title = container.querySelector('#authSplitTitle');
    const subtitle = container.querySelector('#authSplitSubtitle');
    const nameGroup = container.querySelector('#authSplitNameGroup');
    const nameInput = container.querySelector('#auth-split-name');
    const passGroup = container.querySelector('#authSplitPassGroup');
    const passInput = container.querySelector('#auth-split-pass');
    const emailInput = container.querySelector('#auth-split-email');
    const emailErr = container.querySelector('#auth-split-email-err');
    const passErr = container.querySelector('#auth-split-pass-err');
    const nameErr = container.querySelector('#auth-split-name-err');
    const utilsGroup = container.querySelector('#authSplitUtils');
    const submitBtn = container.querySelector('#authSplitSubmit');
    const submitText = container.querySelector('#authSplitSubmitText');
    const alertBox = container.querySelector('#authSplitAlert');
    const eyeBtn = container.querySelector('#authSplitEye');
    const eyeShow = eyeBtn?.querySelector('.eye-show');
    const eyeHide = eyeBtn?.querySelector('.eye-hide');
    const ssoBtns = container.querySelectorAll('.auth-split-sso-btn');
    const forgotBtn = container.querySelector('#authSplitForgot');

    let currentMode = 'signin'; // 'signin' | 'request'

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, emailInput, passInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [nameErr, emailErr, passErr].forEach(err => { if (err) err.textContent = ''; });
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    function setMode(mode) {
      currentMode = mode;
      clearErrors();

      if (mode === 'signin') {
        tabSignIn?.classList.add('active');
        tabSignIn?.setAttribute('aria-selected', 'true');
        tabRequest?.classList.remove('active');
        tabRequest?.setAttribute('aria-selected', 'false');

        if (title) title.textContent = 'Sign in to console';
        if (subtitle) subtitle.textContent = 'Enter your enterprise work email to access the studio repository.';
        if (nameGroup) nameGroup.setAttribute('hidden', '');
        if (passGroup) passGroup.removeAttribute('hidden');
        if (utilsGroup) utilsGroup.removeAttribute('hidden');
        if (submitText) submitText.textContent = 'Sign In to Workspace';
      } else {
        tabRequest?.classList.add('active');
        tabRequest?.setAttribute('aria-selected', 'true');
        tabSignIn?.classList.remove('active');
        tabSignIn?.setAttribute('aria-selected', 'false');

        if (title) title.textContent = 'Request studio access';
        if (subtitle) subtitle.textContent = 'Submit your professional credentials to receive an invitation token.';
        if (nameGroup) nameGroup.removeAttribute('hidden');
        if (passGroup) passGroup.setAttribute('hidden', '');
        if (utilsGroup) utilsGroup.setAttribute('hidden', '');
        if (submitText) submitText.textContent = 'Submit Access Request';
      }
    }

    if (tabSignIn) tabSignIn.addEventListener('click', () => setMode('signin'));
    if (tabRequest) tabRequest.addEventListener('click', () => setMode('request'));

    // Password Toggle
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

    // SSO buttons feedback
    ssoBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const provider = btn.dataset.sso || 'SSO Provider';
        if (alertBox) {
          alertBox.className = 'auth-split-alert is-error';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo mode: ${provider} OAuth integration requires an active backend callback. Please use email sign-in.`;
        }
      });
    });

    if (forgotBtn) {
      forgotBtn.addEventListener('click', () => {
        if (alertBox) {
          alertBox.className = 'auth-split-alert is-success';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = 'Demo recovery: An automated password reset signal was simulated for your workstation.';
        }
      });
    }

    // Submit Validation
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;
        const emailVal = (emailInput?.value || '').trim();
        const passVal = (passInput?.value || '').trim();
        const nameVal = (nameInput?.value || '').trim();

        if (currentMode === 'request') {
          if (!nameVal) {
            if (nameInput) nameInput.classList.add('is-invalid');
            if (nameErr) nameErr.textContent = 'Full name is required for access requests.';
            hasError = true;
          }
        }

        if (!emailVal) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Work email address is required.';
          hasError = true;
        } else if (!validateEmail(emailVal)) {
          if (emailInput) emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid work email address.';
          hasError = true;
        }

        if (currentMode === 'signin') {
          if (!passVal) {
            if (passInput) passInput.classList.add('is-invalid');
            if (passErr) passErr.textContent = 'Password is required.';
            hasError = true;
          } else if (passVal.length < 6) {
            if (passInput) passInput.classList.add('is-invalid');
            if (passErr) passErr.textContent = 'Password must be at least 6 characters.';
            hasError = true;
          }
        }

        if (hasError) {
          const firstErr = container.querySelector('.is-invalid');
          if (firstErr) firstErr.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          const orig = submitBtn.innerHTML;
          submitBtn.innerHTML = '<span>Processing...</span>';

          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = orig;
            if (alertBox) {
              alertBox.className = 'auth-split-alert is-success';
              alertBox.removeAttribute('hidden');
              alertBox.textContent = currentMode === 'signin'
                ? '✓ Credentials validated locally. Demo mode: authentication is not connected.'
                : '✓ Access request registered locally. No data was transmitted.';
            }
          }, 450);
        }
      });
    }
  });
}

export const initSplitScreen = initSplitScreenAuth;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSplitScreenAuth());
  } else {
    initSplitScreenAuth();
  }
}
