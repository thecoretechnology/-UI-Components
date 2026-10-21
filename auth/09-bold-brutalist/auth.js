// 09: Brutalist Authentication Controller
export function initBoldBrutalistAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="bold-brutalist"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authBrutalForm');
    const alertBox = container.querySelector('#authBrutalAlert');
    const callsignInput = container.querySelector('#auth-brutal-callsign');
    const callsignErr = container.querySelector('#auth-brutal-callsign-err');
    const passkeyInput = container.querySelector('#auth-brutal-passkey');
    const passkeyErr = container.querySelector('#auth-brutal-passkey-err');
    const eyeBtn = container.querySelector('#authBrutalEyeBtn');
    const confirmCheck = container.querySelector('#auth-brutal-confirm');
    const confirmErr = container.querySelector('#auth-brutal-confirm-err');

    // Brutalist Text Toggle [SHOW] / [HIDE]
    if (eyeBtn && passkeyInput) {
      eyeBtn.addEventListener('click', () => {
        const isPassword = passkeyInput.type === 'password';
        passkeyInput.type = isPassword ? 'text' : 'password';
        eyeBtn.textContent = isPassword ? '[HIDE]' : '[SHOW]';
        eyeBtn.setAttribute('aria-pressed', isPassword ? 'true' : 'false');
        eyeBtn.setAttribute('aria-label', isPassword ? 'Hide passkey characters' : 'Show passkey characters');
      });
    }

    function clearErrors() {
      container.querySelectorAll('.auth-brutal-input-box').forEach(el => el.classList.remove('is-invalid'));
      if (callsignErr) callsignErr.textContent = '';
      if (passkeyErr) passkeyErr.textContent = '';
      if (confirmErr) confirmErr.textContent = '';
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;

        // Callsign validation
        const callsignVal = (callsignInput?.value || '').trim();
        if (!callsignVal) {
          callsignInput?.closest('.auth-brutal-input-box')?.classList.add('is-invalid');
          if (callsignErr) callsignErr.textContent = 'ERROR // OPERATOR CALLSIGN IS MANDATORY.';
          if (!hasError) callsignInput?.focus();
          hasError = true;
        } else if (callsignVal.length < 3) {
          callsignInput?.closest('.auth-brutal-input-box')?.classList.add('is-invalid');
          if (callsignErr) callsignErr.textContent = 'ERROR // CALLSIGN REQUIRES MINIMUM 3 CHARACTERS.';
          if (!hasError) callsignInput?.focus();
          hasError = true;
        }

        // Passkey validation
        const passVal = passkeyInput?.value || '';
        if (!passVal) {
          passkeyInput?.closest('.auth-brutal-input-box')?.classList.add('is-invalid');
          if (passkeyErr) passkeyErr.textContent = 'ERROR // ACCESS PASSKEY IS MANDATORY.';
          if (!hasError) passkeyInput?.focus();
          hasError = true;
        } else if (passVal.length < 6) {
          passkeyInput?.closest('.auth-brutal-input-box')?.classList.add('is-invalid');
          if (passkeyErr) passkeyErr.textContent = 'ERROR // PASSKEY REQUIRES MINIMUM 6 CHARACTERS.';
          if (!hasError) passkeyInput?.focus();
          hasError = true;
        }

        // Directive confirm checkbox validation
        if (confirmCheck && !confirmCheck.checked) {
          if (confirmErr) confirmErr.textContent = 'ERROR // MUST CONFIRM LOCAL TEST BENCH DIRECTIVE.';
          if (!hasError) confirmCheck.focus();
          hasError = true;
        }

        if (hasError) return;

        // Read clearance level
        const selectedRadio = container.querySelector('input[name="clearance"]:checked');
        const clearanceLvl = selectedRadio?.value || 'LEVEL 1 (READ ONLY)';

        // Feedback
        if (alertBox) {
          alertBox.className = 'auth-brutal-alert is-success';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = `AUTHENTICATION DISPATCH VERIFIED // OPERATOR: ${callsignVal.toUpperCase()} // ${clearanceLvl}. Simulation bench only: zero credentials stored or transmitted.`;
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }
  });
}
