// 06: Horizontal Scrolling Gallery Controller
export function initHorizontalScrollingGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="horizontal-scrolling"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    const track = stage.querySelector('#galHScrollTrack');
    const prevBtn = stage.querySelector('#galHScrollPrevBtn');
    const nextBtn = stage.querySelector('#galHScrollNextBtn');
    const progressBar = stage.querySelector('#galHScrollProgress');

    if (!track) return;

    // Update progress bar
    function updateProgress() {
      if (!progressBar) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) {
        progressBar.style.width = '100%';
        return;
      }
      const scrollPct = Math.min(100, Math.max(0, (track.scrollLeft / maxScroll) * 100));
      progressBar.style.width = `${scrollPct.toFixed(1)}%`;
    }

    track.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // Scroll step buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const step = Math.max(300, track.clientWidth * 0.75);
        track.scrollBy({ left: -step, behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const step = Math.max(300, track.clientWidth * 0.75);
        track.scrollBy({ left: step, behavior: 'smooth' });
      });
    }

    // Keyboard navigation when track is focused
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        track.scrollBy({ left: -320, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        track.scrollBy({ left: 320, behavior: 'smooth' });
      }
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initHorizontalScrollingGallery());
  } else {
    initHorizontalScrollingGallery();
  }
}
