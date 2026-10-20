// 10: Interactive Inquiry Form Controller
export function initInteractiveInquiryForm(root = document) {
  const forms = root.querySelectorAll('[data-form="interactive-inquiry"]');

  forms.forEach(container => {
    if (container.__cfInitialized) return;
    container.__cfInitialized = true;

    const form = container.querySelector('#cfInquiryForm');
    const typeCards = container.querySelectorAll('.cf-inquiry-type-card');
    const deptRadios = container.querySelectorAll('input[name="inquiry_dept"]');
    const deptHeader = container.querySelector('#cfInquiryDeptHeader');
    const panes = container.querySelectorAll('.cf-inquiry-pane');

    // Common inputs
    const nameInput = container.querySelector('#cf-inq-name');
    const emailInput = container.querySelector('#cf-inq-email');
    const msgInput = container.querySelector('#cf-inq-message');

    const nameErr = container.querySelector('#cf-inq-name-err');
    const emailErr = container.querySelector('#cf-inq-email-err');
    const msgErr = container.querySelector('#cf-inq-message-err');

    // Conditional inputs
    const orgInput = container.querySelector('#cf-inq-org');
    const orgErr = container.querySelector('#cf-inq-org-err');
    const websiteInput = container.querySelector('#cf-inq-partner-website');
    const websiteErr = container.querySelector('#cf-inq-partner-website-err');
    const pubInput = container.querySelector('#cf-inq-publication');
    const pubErr = container.querySelector('#cf-inq-publication-err');
    const portInput = container.querySelector('#cf-inq-portfolio');
    const portErr = container.querySelector('#cf-inq-portfolio-err');

    const submitBtn = container.querySelector('#cfInquirySubmit');
    const banner = container.querySelector('#cfInquiryBanner');

    const deptLabels = {
      sales: 'Directing inquiry to Enterprise Solutions',
      partnership: 'Directing inquiry to Ecosystem & Strategic Partnerships',
      press: 'Directing inquiry to Global Press Office',
      careers: 'Directing inquiry to Fellowships & Talent Operations'
    };

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).toLowerCase());
    }

    function switchDept(dept) {
      typeCards.forEach(card => {
        const inp = card.querySelector('input');
        if (inp && inp.value === dept) {
          card.classList.add('active');
          inp.checked = true;
        } else {
          card.classList.remove('active');
        }
      });

      if (deptHeader && deptLabels[dept]) {
        deptHeader.textContent = deptLabels[dept];
      }

      panes.forEach(pane => {
        if (pane.dataset.pane === dept) {
          pane.removeAttribute('hidden');
          pane.classList.add('active');
        } else {
          pane.setAttribute('hidden', '');
          pane.classList.remove('active');
        }
      });

      // Clear any stale errors from inactive panes
      [orgInput, websiteInput, pubInput, portInput].forEach(inp => {
        if (inp) inp.classList.remove('is-invalid');
      });
      [orgErr, websiteErr, pubErr, portErr].forEach(err => {
        if (err) err.textContent = '';
      });
    }

    // Bind radio changes
    deptRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        switchDept(radio.value);
      });
    });

    // Make typeCards keyboard accessible and click-friendly
    typeCards.forEach(card => {
      card.addEventListener('click', () => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio && !radio.checked) {
          radio.checked = true;
          switchDept(radio.value);
        }
      });
    });

    function clearErrors() {
      [nameInput, emailInput, msgInput, orgInput, websiteInput, pubInput, portInput].forEach(inp => {
        if (inp) inp.classList.remove('is-invalid');
      });
      [nameErr, emailErr, msgErr, orgErr, websiteErr, pubErr, portErr].forEach(err => {
        if (err) err.textContent = '';
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let hasError = false;
        const currentDept = (container.querySelector('input[name="inquiry_dept"]:checked') || {}).value || 'sales';

        // Validate common fields
        if (!nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          if (nameErr) nameErr.textContent = 'Please enter your full name.';
          hasError = true;
        }

        if (!emailInput.value.trim()) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Work email address is required.';
          hasError = true;
        } else if (!validateEmail(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          if (emailErr) emailErr.textContent = 'Please provide a valid email format.';
          hasError = true;
        }

        // Validate conditional fields
        if (currentDept === 'sales') {
          if (!orgInput.value.trim()) {
            orgInput.classList.add('is-invalid');
            if (orgErr) orgErr.textContent = 'Organization name is required for sales.';
            hasError = true;
          }
        } else if (currentDept === 'partnership') {
          if (!websiteInput.value.trim()) {
            websiteInput.classList.add('is-invalid');
            if (websiteErr) websiteErr.textContent = 'Organization website is required.';
            hasError = true;
          }
        } else if (currentDept === 'press') {
          if (!pubInput.value.trim()) {
            pubInput.classList.add('is-invalid');
            if (pubErr) pubErr.textContent = 'Publication or outlet name is required.';
            hasError = true;
          }
        } else if (currentDept === 'careers') {
          if (!portInput.value.trim()) {
            portInput.classList.add('is-invalid');
            if (portErr) portErr.textContent = 'Portfolio, GitHub, or profile link is required.';
            hasError = true;
          }
        }

        if (!msgInput.value.trim()) {
          msgInput.classList.add('is-invalid');
          if (msgErr) msgErr.textContent = 'Please provide details regarding your inquiry.';
          hasError = true;
        }

        if (hasError) {
          const first = container.querySelector('.is-invalid');
          if (first) first.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          const textEl = submitBtn.querySelector('.cf-inquiry-btn-text');
          if (textEl) textEl.textContent = 'Routing Inquiry...';
        }

        setTimeout(() => {
          if (banner) {
            banner.removeAttribute('hidden');
            const deptUpper = currentDept.toUpperCase();
            banner.textContent = `✓ [${deptUpper}] Inquiry routing recorded in demo mode for ${emailInput.value}. No live dispatch was performed.`;
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            const textEl = submitBtn.querySelector('.cf-inquiry-btn-text');
            if (textEl) textEl.textContent = 'Route Inquiry →';
          }
          form.reset();
          // Reset to default sales dept
          switchDept('sales');
        }, 600);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initInteractiveInquiryForm());
  } else {
    initInteractiveInquiryForm();
  }
}
