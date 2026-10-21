// 06: Multi-step Registration Controller
export function initMultiStepRegisterAuth(root = document) {
  const containers = root.querySelectorAll('[data-auth="multistep-register"]');

  containers.forEach(container => {
    if (container.__authInit) return;
    container.__authInit = true;

    const form = container.querySelector('#authStepForm');
    const headerTitle = container.querySelector('#authStepHeaderTitle');
    const alertBox = container.querySelector('#authStepAlert');

    // Panels
    const panel1 = container.querySelector('#authStepPanel1');
    const panel2 = container.querySelector('#authStepPanel2');
    const panel3 = container.querySelector('#authStepPanel3');

    // Indicators
    const ind1 = container.querySelector('#authStepInd1');
    const ind2 = container.querySelector('#authStepInd2');
    const ind3 = container.querySelector('#authStepInd3');

    // Step 1 Inputs
    const emailInput = container.querySelector('#auth-step-email');
    const passInput = container.querySelector('#auth-step-pass');
    const confirmInput = container.querySelector('#auth-step-confirm');
    const emailErr = container.querySelector('#auth-step-email-err');
    const passErr = container.querySelector('#auth-step-pass-err');
    const confirmErr = container.querySelector('#auth-step-confirm-err');
    const eyePass = container.querySelector('#authStepEyePass');
    const eyeConfirm = container.querySelector('#authStepEyeConfirm');

    // Step 2 Inputs
    const nameInput = container.querySelector('#auth-step-name');
    const compInput = container.querySelector('#auth-step-company');
    const roleSelect = container.querySelector('#auth-step-role');
    const nameErr = container.querySelector('#auth-step-name-err');
    const compErr = container.querySelector('#auth-step-company-err');

    // Step 3 Elements
    const sumEmail = container.querySelector('#authStepSumEmail');
    const sumName = container.querySelector('#authStepSumName');
    const sumOrg = container.querySelector('#authStepSumOrg');
    const sumRole = container.querySelector('#authStepSumRole');
    const termsCheck = container.querySelector('#auth-step-terms');
    const termsErr = container.querySelector('#auth-step-terms-err');

    // Buttons
    const btnBack = container.querySelector('#authStepBtnBack');
    const btnNext = container.querySelector('#authStepBtnNext');
    const btnSubmit = container.querySelector('#authStepBtnSubmit');

    let currentStep = 1;

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function setupEyeToggle(btn, input) {
      if (!btn || !input) return;
      const showIcon = btn.querySelector('.eye-show');
      const hideIcon = btn.querySelector('.eye-hide');

      btn.addEventListener('click', () => {
        const isPass = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPass ? 'text' : 'password');
        btn.setAttribute('aria-pressed', String(isPass));
        btn.setAttribute('aria-label', isPass ? 'Hide password' : 'Show password');
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
    setupEyeToggle(eyeConfirm, confirmInput);

    function clearPanelErrors(panel) {
      if (!panel) return;
      panel.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      panel.querySelectorAll('.auth-step-error').forEach(el => el.textContent = '');
      if (alertBox) alertBox.setAttribute('hidden', '');
    }

    function updateStepUI() {
      // Hide all panels
      [panel1, panel2, panel3].forEach(p => p?.setAttribute('hidden', ''));
      [ind1, ind2, ind3].forEach(ind => {
        ind?.classList.remove('is-active', 'is-complete');
      });

      if (currentStep === 1) {
        panel1?.removeAttribute('hidden');
        ind1?.classList.add('is-active');
        btnBack?.setAttribute('hidden', '');
        btnNext?.removeAttribute('hidden');
        btnSubmit?.setAttribute('hidden', '');
        if (headerTitle) headerTitle.textContent = 'Create your workspace account';
      } else if (currentStep === 2) {
        panel2?.removeAttribute('hidden');
        ind1?.classList.add('is-complete');
        ind2?.classList.add('is-active');
        btnBack?.removeAttribute('hidden');
        btnNext?.removeAttribute('hidden');
        btnSubmit?.setAttribute('hidden', '');
        if (headerTitle) headerTitle.textContent = 'Tell us about your organization';
      } else if (currentStep === 3) {
        panel3?.removeAttribute('hidden');
        ind1?.classList.add('is-complete');
        ind2?.classList.add('is-complete');
        ind3?.classList.add('is-active');
        btnBack?.removeAttribute('hidden');
        btnNext?.setAttribute('hidden', '');
        btnSubmit?.removeAttribute('hidden');
        if (headerTitle) headerTitle.textContent = 'Review & complete registration';

        // Populate summary
        if (sumEmail) sumEmail.textContent = emailInput?.value.trim() || '—';
        if (sumName) sumName.textContent = nameInput?.value.trim() || '—';
        const teamSize = container.querySelector('input[name="teamSize"]:checked')?.value || '1-10';
        if (sumOrg) sumOrg.textContent = (compInput?.value.trim() || 'Acme Global') + ` (${teamSize} members)`;
        if (sumRole) sumRole.textContent = roleSelect?.value || 'Lead';
      }
    }

    function validateStep1() {
      clearPanelErrors(panel1);
      let isValid = true;
      const email = (emailInput?.value || '').trim();
      const pass = (passInput?.value || '').trim();
      const confirm = (confirmInput?.value || '').trim();

      if (!email) {
        emailInput?.classList.add('is-invalid');
        if (emailErr) emailErr.textContent = 'Work email address is required.';
        isValid = false;
      } else if (!validateEmail(email)) {
        emailInput?.classList.add('is-invalid');
        if (emailErr) emailErr.textContent = 'Please enter a valid work email address.';
        isValid = false;
      }

      if (!pass) {
        passInput?.classList.add('is-invalid');
        if (passErr) passErr.textContent = 'Password is required.';
        isValid = false;
      } else if (pass.length < 8) {
        passInput?.classList.add('is-invalid');
        if (passErr) passErr.textContent = 'Password must be at least 8 characters.';
        isValid = false;
      }

      if (!confirm) {
        confirmInput?.classList.add('is-invalid');
        if (confirmErr) confirmErr.textContent = 'Please confirm your password.';
        isValid = false;
      } else if (confirm !== pass) {
        confirmInput?.classList.add('is-invalid');
        if (confirmErr) confirmErr.textContent = 'Passwords do not match.';
        isValid = false;
      }

      if (!isValid) {
        panel1?.querySelector('.is-invalid')?.focus();
      }
      return isValid;
    }

    function validateStep2() {
      clearPanelErrors(panel2);
      let isValid = true;
      const name = (nameInput?.value || '').trim();
      const comp = (compInput?.value || '').trim();

      if (!name) {
        nameInput?.classList.add('is-invalid');
        if (nameErr) nameErr.textContent = 'Full name is required.';
        isValid = false;
      }

      if (!comp) {
        compInput?.classList.add('is-invalid');
        if (compErr) compErr.textContent = 'Organization name is required.';
        isValid = false;
      }

      if (!isValid) {
        panel2?.querySelector('.is-invalid')?.focus();
      }
      return isValid;
    }

    function validateStep3() {
      clearPanelErrors(panel3);
      let isValid = true;
      const agreed = termsCheck?.checked;

      if (!agreed) {
        if (termsErr) termsErr.textContent = 'You must confirm these details and accept the agreement.';
        termsCheck?.focus();
        isValid = false;
      }
      return isValid;
    }

    // Step button actions
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentStep === 1) {
          if (validateStep1()) {
            currentStep = 2;
            updateStepUI();
          }
        } else if (currentStep === 2) {
          if (validateStep2()) {
            currentStep = 3;
            updateStepUI();
          }
        }
      });
    }

    if (btnBack) {
      btnBack.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          updateStepUI();
        }
      });
    }

    // Enter Key Advances Form
    if (form) {
      form.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
          e.preventDefault();
          if (currentStep < 3) {
            btnNext?.click();
          } else {
            form.requestSubmit ? form.requestSubmit() : btnSubmit?.click();
          }
        }
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (currentStep !== 3) return;

        if (!validateStep3()) return;

        if (btnSubmit) {
          btnSubmit.disabled = true;
          const orig = btnSubmit.innerHTML;
          btnSubmit.innerHTML = '<span>Creating workspace...</span>';

          setTimeout(() => {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = orig;
            if (alertBox) {
              const org = compInput?.value.trim() || 'Organization';
              const name = nameInput?.value.trim() || 'Member';
              alertBox.className = 'auth-step-alert is-success';
              alertBox.removeAttribute('hidden');
              alertBox.textContent = `✓ Account for ${name} at ${org} registered in demo mode. No server transmission occurred.`;
            }
          }, 450);
        }
      });
    }

    updateStepUI();
  });
}

export const initMultiStepRegister = initMultiStepRegisterAuth;
export const initMultistepRegisterAuth = initMultiStepRegisterAuth;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMultiStepRegisterAuth());
  } else {
    initMultiStepRegisterAuth();
  }
}
