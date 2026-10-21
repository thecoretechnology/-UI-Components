// 03: Dark Developer Login Controller
export function initDarkDeveloperAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="dark-developer"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authDevForm');
    const tabPass = container.querySelector('#authDevTabPass');
    const tabToken = container.querySelector('#authDevTabToken');
    const passGroup = container.querySelector('#authDevPassGroup');
    const tokenGroup = container.querySelector('#authDevTokenGroup');
    const handleInput = container.querySelector('#auth-dev-handle');
    const passInput = container.querySelector('#auth-dev-pass');
    const tokenInput = container.querySelector('#auth-dev-token');
    const handleErr = container.querySelector('#auth-dev-handle-err');
    const passErr = container.querySelector('#auth-dev-pass-err');
    const tokenErr = container.querySelector('#auth-dev-token-err');
    const alertBox = container.querySelector('#authDevAlert');
    const submitBtn = container.querySelector('#authDevSubmit');
    const submitText = container.querySelector('#authDevSubmitText');
    const copyCmdBtn = container.querySelector('#authDevCopyCmd');
    const codeSnippet = container.querySelector('#authDevCodeSnippet');
    const forgotBtn = container.querySelector('#authDevForgot');
    const clusterRadios = container.querySelectorAll('input[name="cluster"]');

    // Eye buttons
    const eyePass = container.querySelector('#authDevEye');
    const eyeToken = container.querySelector('#authDevTokenEye');

    let currentMethod = 'pass'; // 'pass' | 'token'

    function updateCliSnippet() {
      if (!codeSnippet) return;
      const handle = (handleInput?.value || '').trim() || 'operator.name';
      const cluster = container.querySelector('input[name="cluster"]:checked')?.value || 'prod-us';
      const clusterMap = {
        'prod-us': 'us-east-1',
        'staging-eu': 'eu-west-1',
        'isolated-lab': 'lab-sandbox-0'
      };
      const clusterRegion = clusterMap[cluster] || 'us-east-1';

      if (currentMethod === 'pass') {
        codeSnippet.textContent = `curl -sSf https://auth.cluster.internal/login \\\n  -H "X-Identity: dev@${handle}" \\\n  -d '{"cluster": "${clusterRegion}"}'`;
      } else {
        codeSnippet.textContent = `export CLUSTER_TOKEN="pat_live_..."\ncurl -sSf https://auth.cluster.internal/v2/auth \\\n  -H "Authorization: Bearer $CLUSTER_TOKEN" \\\n  -H "X-Cluster: ${clusterRegion}"`;
      }
    }

    function setupEyeToggle(button, input) {
      if (!button || !input) return;
      const showIcon = button.querySelector('.eye-show');
      const hideIcon = button.querySelector('.eye-hide');

      button.addEventListener('click', () => {
        const isPass = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPass ? 'text' : 'password');
        button.setAttribute('aria-pressed', String(isPass));
        button.setAttribute('aria-label', isPass ? 'Hide secret' : 'Show secret');
        if (showIcon && hideIcon) {
          if (isPass) {
            showIcon.setAttribute('hidden', '');
            hideIcon.removeAttribute('hidden');
          } else {
            showIcon.removeAttribute('hidden');
            hideIcon.setAttribute('hidden', '');
          }
        }
      });
    }

    setupEyeToggle(eyePass, passInput);
    setupEyeToggle(eyeToken, tokenInput);

    function clearErrors() {
      [handleInput, passInput, tokenInput].forEach(inp => {
        if (inp) {
          inp.closest('.auth-dev-input-group')?.classList.remove('has-error');
        }
      });
      [handleErr, passErr, tokenErr].forEach(err => { if (err) err.textContent = ''; });
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    function setMethod(method) {
      currentMethod = method;
      clearErrors();

      if (method === 'pass') {
        tabPass?.classList.add('active');
        tabPass?.setAttribute('aria-selected', 'true');
        tabToken?.classList.remove('active');
        tabToken?.setAttribute('aria-selected', 'false');

        passGroup?.removeAttribute('hidden');
        tokenGroup?.setAttribute('hidden', '');
        if (submitText) submitText.textContent = 'auth --exec cluster-connect';
      } else {
        tabToken?.classList.add('active');
        tabToken?.setAttribute('aria-selected', 'true');
        tabPass?.classList.remove('active');
        tabPass?.setAttribute('aria-selected', 'false');

        passGroup?.setAttribute('hidden', '');
        tokenGroup?.removeAttribute('hidden');
        if (submitText) submitText.textContent = 'pat --verify --attach-cluster';
      }
      updateCliSnippet();
    }

    if (tabPass) tabPass.addEventListener('click', () => setMethod('pass'));
    if (tabToken) tabToken.addEventListener('click', () => setMethod('token'));

    clusterRadios.forEach(r => r.addEventListener('change', updateCliSnippet));
    handleInput?.addEventListener('input', updateCliSnippet);

    // Copy command
    if (copyCmdBtn && codeSnippet) {
      copyCmdBtn.addEventListener('click', async () => {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(codeSnippet.textContent);
            const orig = copyCmdBtn.textContent;
            copyCmdBtn.textContent = 'Copied!';
            setTimeout(() => { copyCmdBtn.textContent = orig; }, 1800);
          }
        } catch(e) {}
      });
    }

    // Emergency reset
    if (forgotBtn) {
      forgotBtn.addEventListener('click', () => {
        if (alertBox) {
          alertBox.className = 'auth-dev-alert is-error';
          alertBox.removeAttribute('hidden');
          alertBox.textContent = '[SEC-FAILSAFE] Operator secret rotation initiated in demo mode. Contact security-ops@internal.';
        }
      });
    }

    // Submit Validation
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;
        const handleVal = (handleInput?.value || '').trim();
        const passVal = (passInput?.value || '').trim();
        const tokenVal = (tokenInput?.value || '').trim();

        if (!handleVal) {
          handleInput?.closest('.auth-dev-input-group')?.classList.add('has-error');
          if (handleErr) handleErr.textContent = 'ERR_EMPTY_IDENTITY: Operator handle required.';
          hasError = true;
        } else if (!/^[a-zA-Z0-9._-]+$/.test(handleVal)) {
          handleInput?.closest('.auth-dev-input-group')?.classList.add('has-error');
          if (handleErr) handleErr.textContent = 'ERR_INVALID_IDENTITY: Characters [a-z0-9._-] permitted only.';
          hasError = true;
        }

        if (currentMethod === 'pass') {
          if (!passVal) {
            passInput?.closest('.auth-dev-input-group')?.classList.add('has-error');
            if (passErr) passErr.textContent = 'ERR_EMPTY_PASSPHRASE: Security secret is required.';
            hasError = true;
          } else if (passVal.length < 6) {
            passInput?.closest('.auth-dev-input-group')?.classList.add('has-error');
            if (passErr) passErr.textContent = 'ERR_ENTROPY_LOW: Minimum length is 6 characters.';
            hasError = true;
          }
        } else {
          if (!tokenVal) {
            tokenInput?.closest('.auth-dev-input-group')?.classList.add('has-error');
            if (tokenErr) tokenErr.textContent = 'ERR_EMPTY_TOKEN: Personal Access Token required.';
            hasError = true;
          } else if (!tokenVal.startsWith('pat_')) {
            tokenInput?.closest('.auth-dev-input-group')?.classList.add('has-error');
            if (tokenErr) tokenErr.textContent = 'ERR_TOKEN_SYNTAX: Tokens must begin with "pat_".';
            hasError = true;
          }
        }

        if (hasError) {
          const firstErr = container.querySelector('.has-error input');
          if (firstErr) firstErr.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          const origText = submitText?.textContent || '';
          if (submitText) submitText.textContent = 'authenticating-tls-handshake...';

          setTimeout(() => {
            submitBtn.disabled = false;
            if (submitText) submitText.textContent = origText;
            if (alertBox) {
              const cluster = container.querySelector('input[name="cluster"]:checked')?.value || 'prod-us';
              alertBox.className = 'auth-dev-alert is-success';
              alertBox.removeAttribute('hidden');
              alertBox.textContent = `[OK:200] Identity verified for ${handleVal}@${cluster}. Demo mode: no network packets dispatched.`;
            }
          }, 450);
        }
      });
    }
  });
}

export const initDarkDeveloper = initDarkDeveloperAuth;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initDarkDeveloperAuth());
  } else {
    initDarkDeveloperAuth();
  }
}
