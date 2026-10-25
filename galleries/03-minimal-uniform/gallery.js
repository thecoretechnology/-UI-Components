// 03: Minimal Uniform Grid Gallery Controller
export function initMinimalUniformGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="minimal-uniform"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    const grid = stage.querySelector('#galUniformGrid');
    const densityBtns = stage.querySelectorAll('.gal-uniform-density-btn');

    densityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cols = btn.dataset.cols;
        if (!grid || !cols) return;

        // Update active button state
        densityBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        // Apply grid column class
        grid.classList.remove('gal-cols-2', 'gal-cols-3', 'gal-cols-4');
        grid.classList.add(`gal-cols-${cols}`);
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMinimalUniformGallery());
  } else {
    initMinimalUniformGallery();
  }
}
