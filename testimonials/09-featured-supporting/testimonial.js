// 09: Featured Testimonial with Supporting Quotes Controller
export function initFeaturedSupportingTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="featured-supporting"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;

    // Enable keyboard focus on cards
    container.querySelectorAll('.ts-feat-primary-card, .ts-feat-sub-card').forEach(card => {
      card.setAttribute('tabindex', '0');
    });
  });
}

export const initFeaturedSupporting = initFeaturedSupportingTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initFeaturedSupportingTestimonial());
  } else {
    initFeaturedSupportingTestimonial();
  }
}
