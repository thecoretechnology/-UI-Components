// 03: Dark, High-Contrast Testimonial Controller
export function initDarkContrastTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="dark-contrast"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;

    const copyBtn = container.querySelector('#tsDarkCopySig');
    const sigCode = container.querySelector('#tsDarkSigCode');

    if (copyBtn && sigCode) {
      copyBtn.addEventListener('click', () => {
        const text = sigCode.textContent.trim();
        const copyTextEl = copyBtn.querySelector('.ts-dark-copy-text');

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).catch(() => {});
        }

        if (copyTextEl) {
          copyTextEl.textContent = 'Copied!';
          setTimeout(() => {
            copyTextEl.textContent = 'Copy';
          }, 2000);
        }
      });
    }
  });
}

export const initDarkContrast = initDarkContrastTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initDarkContrastTestimonial());
  } else {
    initDarkContrastTestimonial();
  }
}
