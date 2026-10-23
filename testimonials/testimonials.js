// Master Testimonials JavaScript Bundle

import { initEditorialQuoteTestimonial } from './01-editorial-quote/testimonial.js';
import { initCustomerStoryTestimonial } from './02-customer-story/testimonial.js';
import { initDarkContrastTestimonial } from './03-dark-contrast/testimonial.js';
import { initHorizontalSliderTestimonial } from './04-horizontal-slider/testimonial.js';
import { initCompactGridTestimonial } from './05-compact-grid/testimonial.js';
import { initVideoPreviewTestimonial } from './06-video-preview/testimonial.js';
import { initNumbersResultsTestimonial } from './07-numbers-results/testimonial.js';
import { initMinimalLogoTestimonial } from './08-minimal-logo/testimonial.js';
import { initFeaturedSupportingTestimonial } from './09-featured-supporting/testimonial.js';
import { initInteractiveWallTestimonial } from './10-interactive-wall/testimonial.js';

export {
  initEditorialQuoteTestimonial,
  initCustomerStoryTestimonial,
  initDarkContrastTestimonial,
  initHorizontalSliderTestimonial,
  initCompactGridTestimonial,
  initVideoPreviewTestimonial,
  initNumbersResultsTestimonial,
  initMinimalLogoTestimonial,
  initFeaturedSupportingTestimonial,
  initInteractiveWallTestimonial
};

// Initialize all testimonial sections in document or scoped container
export function initAllTestimonials(root = document) {
  initEditorialQuoteTestimonial(root);
  initCustomerStoryTestimonial(root);
  initDarkContrastTestimonial(root);
  initHorizontalSliderTestimonial(root);
  initCompactGridTestimonial(root);
  initVideoPreviewTestimonial(root);
  initNumbersResultsTestimonial(root);
  initMinimalLogoTestimonial(root);
  initFeaturedSupportingTestimonial(root);
  initInteractiveWallTestimonial(root);
}

// Auto-initialize if running in a browser environment
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAllTestimonials());
  } else {
    initAllTestimonials();
  }
}
