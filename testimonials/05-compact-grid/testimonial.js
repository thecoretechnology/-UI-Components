// 05: Compact Testimonial Grid Controller
export function initCompactGridTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="compact-grid"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;

    // Enable keyboard focus on cards for screen-readers
    const cards = container.querySelectorAll('.ts-grid-card');
    cards.forEach(card => {
      card.setAttribute('tabindex', '0');
    });
  });
}

export const initCompactGrid = initCompactGridTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCompactGridTestimonial());
  } else {
    initCompactGridTestimonial();
  }
}
