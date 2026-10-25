// 02: Masonry Grid Gallery Controller
export function initMasonryGridGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="masonry-grid"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    const favBtns = stage.querySelectorAll('.gal-masonry-fav-btn');
    const counterEl = stage.querySelector('#galMasonryFavCount');
    let favoritedCount = 0;

    favBtns.forEach(btn => {
      btn.setAttribute('aria-pressed', 'false');

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isFav = btn.classList.toggle('is-favorited');
        btn.setAttribute('aria-pressed', isFav ? 'true' : 'false');

        if (isFav) {
          favoritedCount++;
        } else {
          favoritedCount = Math.max(0, favoritedCount - 1);
        }

        if (counterEl) {
          counterEl.textContent = favoritedCount;
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initMasonryGridGallery());
  } else {
    initMasonryGridGallery();
  }
}
