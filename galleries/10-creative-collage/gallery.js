// 10: Creative Collage Gallery Controller
export function initCreativeCollageGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="creative-collage"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    const canvas = stage.querySelector('#galCollageCanvas');
    const shuffleBtn = stage.querySelector('#galCollageShuffleBtn');
    const shuffleLabel = stage.querySelector('#galCollageShuffleLabel');

    if (shuffleBtn && canvas) {
      let isShuffled = false;

      shuffleBtn.addEventListener('click', () => {
        isShuffled = !isShuffled;
        canvas.classList.toggle('is-shuffled', isShuffled);

        if (shuffleLabel) {
          shuffleLabel.textContent = isShuffled ? 'Reset Collage Order' : 'Shuffle Collage Layout';
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCreativeCollageGallery());
  } else {
    initCreativeCollageGallery();
  }
}
