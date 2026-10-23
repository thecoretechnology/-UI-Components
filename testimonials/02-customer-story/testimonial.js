// 02: Customer Story with Portrait Controller
export function initCustomerStoryTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="customer-story"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;

    const toggleBtn = container.querySelector('#tsStoryToggle');
    const details = container.querySelector('#tsStoryDetails');

    if (toggleBtn && details) {
      toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        const newExpanded = !isExpanded;

        toggleBtn.setAttribute('aria-expanded', String(newExpanded));
        if (newExpanded) {
          details.removeAttribute('hidden');
          toggleBtn.querySelector('.ts-story-btn-text').textContent = 'Hide Architecture Details';
        } else {
          details.setAttribute('hidden', '');
          toggleBtn.querySelector('.ts-story-btn-text').textContent = 'Read Architecture Details';
        }
      });
    }
  });
}

export const initCustomerStory = initCustomerStoryTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCustomerStoryTestimonial());
  } else {
    initCustomerStoryTestimonial();
  }
}
