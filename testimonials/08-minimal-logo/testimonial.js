// 08: Minimal Logo and Quote Controller
export function initMinimalLogoTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="minimal-logo"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;
    container.setAttribute('tabindex', '0');
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', 'Minimal Logo Testimonial');
  });
}

export const initMinimalLogo = initMinimalLogoTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMinimalLogoTestimonial());
  } else {
    initMinimalLogoTestimonial();
  }
}
