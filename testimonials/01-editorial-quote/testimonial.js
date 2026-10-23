// 01: Editorial Quote Controller
export function initEditorialQuoteTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="editorial-quote"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;
    // Static editorial layout — keyboard accessibility setup
    container.setAttribute('tabindex', '0');
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', 'Editorial Testimonial Critique');
  });
}

export const initEditorialQuote = initEditorialQuoteTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initEditorialQuoteTestimonial());
  } else {
    initEditorialQuoteTestimonial();
  }
}
