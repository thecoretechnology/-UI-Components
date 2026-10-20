// 05: Friendly Conversational Step Form Controller
export function initConversationalStepForm(root = document) {
  const forms = root.querySelectorAll('[data-form="conversational-step"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfConvForm');
    const step1 = container.querySelector('#cfConvStep1');
    const step2 = container.querySelector('#cfConvStep2');
    const step3 = container.querySelector('#cfConvStep3');
    const steps = [step1, step2, step3];

    const stepBadge = container.querySelector('#cfConvStepBadge');
    const stepTopic = container.querySelector('#cfConvStepTopic');
    const barFill = container.querySelector('#cfConvBarFill');
    const progressBar = container.querySelector('#cfConvProgressBar');

    const backBtn = container.querySelector('#cfConvBack');
    const nextBtn = container.querySelector('#cfConvNext');
    const submitBtn = container.querySelector('#cfConvSubmit');
    const status = container.querySelector('#cfConvStatus');

    // Inputs
    const nameInput = container.querySelector('#cf-conv-name');
    const emailInput = container.querySelector('#cf-conv-email');
    const notesInput = container.querySelector('#cf-conv-notes');

    const nameErr = container.querySelector('#cf-conv-name-err');
    const emailErr = container.querySelector('#cf-conv-email-err');
    const notesErr = container.querySelector('#cf-conv-notes-err');

    let currentStep = 1;

    const meta = {
      1: { topic: 'About You', pct: 33.3 },
      2: { topic: 'Project Focus', pct: 66.6 },
      3: { topic: 'Vision & Send', pct: 100 }
    };

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function clearErrors() {
      [nameInput, emailInput, notesInput].forEach(inp => inp && inp.classList.remove('is-invalid'));
      [nameErr, emailErr, notesErr].forEach(err => { if (err) err.textContent = ''; });
    }

    function updateStepView() {
      clearErrors();
      steps.forEach((s, idx) => {
        if (!s) return;
        const sNum = idx + 1;
        if (sNum === currentStep) {
          s.removeAttribute('hidden');
          s.classList.add('active');
        } else {
          s.setAttribute('hidden', '');
          s.classList.remove('active');
        }
      });

      // Update progress
      const curMeta = meta[currentStep];
      if (stepBadge) stepBadge.textContent = `Step ${currentStep} of 3`;
      if (stepTopic) stepTopic.textContent = curMeta.topic;
      if (barFill) barFill.style.width = `${curMeta.pct}%`;
      if (progressBar) progressBar.setAttribute('aria-valuenow', String(Math.round(curMeta.pct)));

      // Update buttons
      if (backBtn) backBtn.disabled = currentStep === 1;

      if (currentStep === 3) {
        if (nextBtn) nextBtn.setAttribute('hidden', '');
        if (submitBtn) submitBtn.removeAttribute('hidden');
      } else {
        if (nextBtn) nextBtn.removeAttribute('hidden');
        if (submitBtn) submitBtn.setAttribute('hidden', '');
      }

      // Auto focus first input in step
      const activeStep = steps[currentStep - 1];
      if (activeStep) {
        const firstInp = activeStep.querySelector('input:not([type="radio"]):not([type="checkbox"]), textarea, select');
        if (firstInp) firstInp.focus();
      }
    }

    function validateCurrentStep() {
      clearErrors();
      let isValid = true;

      if (currentStep === 1) {
        if (!nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'Please tell us your name.';
          isValid = false;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please provide your email address.';
          isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please enter a valid email address.';
          isValid = false;
        }
      } else if (currentStep === 3) {
        if (!notesInput.value.trim()) {
          notesInput.classList.add('is-invalid');
          if (notesErr) notesErr.textContent = 'Please provide details about your vision.';
          isValid = false;
        }
      }

      return isValid;
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (validateCurrentStep()) {
          if (currentStep < 3) {
            currentStep += 1;
            updateStepView();
          }
        }
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep -= 1;
          updateStepView();
        }
      });
    }

    // Enter key navigation inside inputs
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        if (currentStep < 3) {
          e.preventDefault();
          if (nextBtn) nextBtn.click();
        }
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validateCurrentStep()) return;

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.querySelector('span').textContent = 'Submitting...';
        }

        setTimeout(() => {
          if (status) {
            status.removeAttribute('hidden');
            status.textContent = '✓ Conversational inquiry completed in demo mode. No email was sent.';
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = 'Send Message';
          }
          form.reset();
          currentStep = 1;
          updateStepView();
        }, 600);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initConversationalStepForm());
  } else {
    initConversationalStepForm();
  }
}
