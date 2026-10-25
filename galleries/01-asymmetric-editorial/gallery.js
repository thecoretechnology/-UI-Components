// 01: Asymmetric Editorial Gallery Controller
export function initAsymmetricEditorialGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="asymmetric-editorial"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    // Technical spec drawer toggle
    const inspectBtns = stage.querySelectorAll('.gal-editorial-inspect-btn');
    inspectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const target = stage.querySelector(`#${targetId}`);
        if (!target) return;

        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          btn.setAttribute('aria-expanded', 'false');
          target.setAttribute('hidden', '');
        } else {
          btn.setAttribute('aria-expanded', 'true');
          target.removeAttribute('hidden');
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAsymmetricEditorialGallery());
  } else {
    initAsymmetricEditorialGallery();
  }
}
