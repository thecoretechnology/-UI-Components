// 08: Workspace / Team Invitation Controller
export function initTeamInvitationAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="team-invitation"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authTeamForm');
    const alertBox = container.querySelector('#authTeamAlert');
    const nameInput = container.querySelector('#auth-team-name');
    const nameErr = container.querySelector('#auth-team-name-err');
    const passInput = container.querySelector('#auth-team-pass');
    const passErr = container.querySelector('#auth-team-pass-err');
    const confirmInput = container.querySelector('#auth-team-confirm');
    const confirmErr = container.querySelector('#auth-team-confirm-err');
    const termsCheck = container.querySelector('#auth-team-terms');
    const termsErr = container.querySelector('#auth-team-terms-err');
    const declineBtn = container.querySelector('#authTeamDecline');

    // Password Eye Toggles
    const eyeButtons = container.querySelectorAll('.auth-team-eye-btn');
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

    function clearErrors() {
      [nameInput, passInput, confirmInput].forEach(inp => inp?.classList.remove('is-invalid'));
      if (nameErr) nameErr.textContent = '';
      if (passErr) passErr.textContent = '';
      if (confirmErr) confirmErr.textContent = '';
      if (termsErr) termsErr.textContent = '';
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    // Decline Action (Demo Feedback)
    if (declineBtn) {
      declineBtn.addEventListener('click', () => {
        clearErrors();
        if (alertBox) {
          alertBox.className = 'auth-team-alert is-info';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = 'Demo Simulation: Invitation decline requested. In production, this revokes the invitation token and notifies the workspace administrator (Elena Rostova).';
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

        // Name Validation
        const nameVal = (nameInput?.value || '').trim();
        if (!nameVal) {
          nameInput?.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'Please enter your full legal name.';
          if (!hasError) nameInput?.focus();
          hasError = true;
        }

        // Password Validation
        const passVal = passInput?.value || '';
        if (!passVal) {
          passInput?.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Please enter a password for your workspace account.';
          if (!hasError) passInput?.focus();
          hasError = true;
        } else if (passVal.length < 8) {
          passInput?.classList.add('is-invalid');
          if (passErr) passErr.textContent = 'Password must be at least 8 characters long.';
          if (!hasError) passInput?.focus();
          hasError = true;
        }

        // Confirm Password Validation
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

        // Terms Checkbox Validation
        if (termsCheck && !termsCheck.checked) {
          if (termsErr) termsErr.textContent = 'You must agree to the Workspace Security Guidelines to join.';
          if (!hasError) termsCheck.focus();
          hasError = true;
        }

        if (hasError) return;

        // Honest Demo Feedback
        if (alertBox) {
          alertBox.className = 'auth-team-alert is-success';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `Demo Simulation: Account verified for ${nameVal} (alex.chen@hyperion.internal). Credentials are not saved to any server. In production, this would grant access to the Core Infrastructure workspace.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }
  });
}
