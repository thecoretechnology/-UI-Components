// 07: Full-Bleed Immersive Gallery Controller
export function initFullBleedImmersiveGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="full-bleed-immersive"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    const slides = stage.querySelectorAll('.gal-immersive-slide');
    const tabs = stage.querySelectorAll('.gal-immersive-tab');
    const playBtn = stage.querySelector('#galImmersivePlayBtn');
    const playLabel = stage.querySelector('#galImmersivePlayLabel');
    const iconPlay = stage.querySelector('.gal-icon-play');
    const iconPause = stage.querySelector('.gal-icon-pause');

    let currentSlide = 0;
    let autoInterval = null;

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentSlide = index;

      // Update slides
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === currentSlide);
      });

      // Update tabs
      tabs.forEach((tab, i) => {
        const isActive = (i === currentSlide);
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    // Attach click listeners to tabs
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        goToSlide(i);
        stopAutoCycle();
      });
    });

    // Auto-cycle handling
    function startAutoCycle() {
      if (autoInterval) clearInterval(autoInterval);
      autoInterval = setInterval(() => {
        goToSlide((currentSlide + 1) % slides.length);
      }, 4500);

      if (playBtn) playBtn.classList.add('is-playing');
      if (playLabel) playLabel.textContent = 'Auto-Cycle: On';
      if (iconPlay) iconPlay.style.display = 'none';
      if (iconPause) iconPause.style.display = 'block';
    }

    function stopAutoCycle() {
      if (autoInterval) {
        clearInterval(autoInterval);
        autoInterval = null;
      }
      if (playBtn) playBtn.classList.remove('is-playing');
      if (playLabel) playLabel.textContent = 'Auto-Cycle: Off';
      if (iconPlay) iconPlay.style.display = 'block';
      if (iconPause) iconPause.style.display = 'none';
    }

    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (autoInterval) {
          stopAutoCycle();
        } else {
          startAutoCycle();
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initFullBleedImmersiveGallery());
  } else {
    initFullBleedImmersiveGallery();
  }
}
