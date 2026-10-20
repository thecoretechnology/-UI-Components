// Master Contact Forms JavaScript bundle

import { initMinimalStudioForm } from './01-minimal-studio/form.js';
import { initSplitLayoutForm } from './02-split-layout/form.js';
import { initDarkPremiumForm } from './03-dark-premium/form.js';
import { initAgencyBriefForm } from './04-agency-brief/form.js';
import { initConversationalStepForm } from './05-conversational-step/form.js';
import { initBookingRequestForm } from './06-booking-request/form.js';
import { initTechnicalSupportForm } from './07-technical-support/form.js';
import { initEditorialPersonalForm } from './08-editorial-personal/form.js';
import { initBoldBrutalistForm } from './09-bold-brutalist/form.js';
import { initInteractiveInquiryForm } from './10-interactive-inquiry/form.js';

export {
  initMinimalStudioForm,
  initSplitLayoutForm,
  initDarkPremiumForm,
  initAgencyBriefForm,
  initConversationalStepForm,
  initBookingRequestForm,
  initTechnicalSupportForm,
  initEditorialPersonalForm,
  initBoldBrutalistForm,
  initInteractiveInquiryForm
};

// Initialize all forms in the document or within a specific root container
export function initAllForms(root = document) {
  initMinimalStudioForm(root);
  initSplitLayoutForm(root);
  initDarkPremiumForm(root);
  initAgencyBriefForm(root);
  initConversationalStepForm(root);
  initBookingRequestForm(root);
  initTechnicalSupportForm(root);
  initEditorialPersonalForm(root);
  initBoldBrutalistForm(root);
  initInteractiveInquiryForm(root);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAllForms());
  } else {
    initAllForms();
  }
}
