// Master FAQ JavaScript Bundle
// Exports individual and batch initializers for all 10 FAQ layouts

import { initClassicAccordionFaq } from './01-classic-accordion/faq.js';
import { initSplitScreenFaq } from './02-split-screen/faq.js';
import { initCategorizedSidebarFaq } from './03-categorized-sidebar/faq.js';
import { initSearchableFaq } from './04-searchable/faq.js';
import { initMinimalEditorialFaq } from './05-minimal-editorial/faq.js';
import { initDarkTechnicalFaq } from './06-dark-technical/faq.js';
import { initCardGridFaq } from './07-card-grid/faq.js';
import { initHelpCenterFaq } from './08-help-center/faq.js';
import { initStepAnswersFaq } from './09-step-answers/faq.js';
import { initHorizontalRowsFaq } from './10-horizontal-rows/faq.js';

export {
  initClassicAccordionFaq,
  initSplitScreenFaq,
  initCategorizedSidebarFaq,
  initSearchableFaq,
  initMinimalEditorialFaq,
  initDarkTechnicalFaq,
  initCardGridFaq,
  initHelpCenterFaq,
  initStepAnswersFaq,
  initHorizontalRowsFaq
};

// Initialize all FAQ sections in document or scoped container
export function initAllFaqs(root = document) {
  initClassicAccordionFaq(root);
  initSplitScreenFaq(root);
  initCategorizedSidebarFaq(root);
  initSearchableFaq(root);
  initMinimalEditorialFaq(root);
  initDarkTechnicalFaq(root);
  initCardGridFaq(root);
  initHelpCenterFaq(root);
  initStepAnswersFaq(root);
  initHorizontalRowsFaq(root);
}

// Auto-initialize if running in a browser environment
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAllFaqs());
  } else {
    initAllFaqs();
  }
}
