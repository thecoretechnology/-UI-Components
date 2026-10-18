// 02: Editorial Monograph Controller
export function initEditorialMonographHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="editorial-monograph"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const lightBtns = hero.querySelectorAll('.hr-mono-light-btn');
    const toast = hero.querySelector('#hrMonoToast');
    const audioBtn = hero.querySelector('#hrMonoAudioBtn');
    const audioLabel = hero.querySelector('#hrMonoAudioLabel');
    const audioIcon = hero.querySelector('.hr-mono-audio-icon');
    const bookmarkBtn = hero.querySelector('#hrMonoBookmarkBtn');
    const bookmarkIcon = hero.querySelector('#hrMonoBookmarkIcon');
    const bookmarkText = hero.querySelector('#hrMonoBookmarkText');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
    }

    // Sunlight Angle Switcher
    const lightLabels = {
      morning: 'Morning grazing light (09:30) — Extended westward shadows',
      noon: 'Midday solar zenith (12:00) — Direct vertical shadows',
      golden: 'Golden hour dusk (18:00) — Deep, warm cast shadows'
    };

    lightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        lightBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const mode = btn.dataset.light || 'golden';
        hero.dataset.light = mode;
        showToast(lightLabels[mode] || `Sunlight angle set to ${mode}`);
      });
    });

    // Audio Dispatch Simulation
    let isPlaying = false;
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
          audioBtn.classList.add('is-playing');
          if (audioIcon) audioIcon.textContent = '⏸';
          if (audioLabel) audioLabel.textContent = 'PAUSE LECTURE [03:42 / 24:10]';
          showToast('Audio stream started: Lecture by Antoine de Vigny');
        } else {
          audioBtn.classList.remove('is-playing');
          if (audioIcon) audioIcon.textContent = '▶';
          if (audioLabel) audioLabel.textContent = 'LISTEN TO LECTURE [24:10]';
          showToast('Audio playback paused');
        }
      });
    }

    // Personal Library Bookmark Toggle
    let isSaved = false;
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', () => {
        isSaved = !isSaved;
        if (isSaved) {
          bookmarkBtn.classList.add('is-saved');
          if (bookmarkIcon) bookmarkIcon.textContent = '✓';
          if (bookmarkText) bookmarkText.textContent = 'Saved to Your Library (p. 42)';
          showToast('Essay saved to your offline research library');
        } else {
          bookmarkBtn.classList.remove('is-saved');
          if (bookmarkIcon) bookmarkIcon.textContent = '🔖';
          if (bookmarkText) bookmarkText.textContent = 'Save to My Library';
          showToast('Essay removed from library');
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initEditorialMonographHero());
  } else {
    initEditorialMonographHero();
  }
}
