// 08: Image Gallery with Captions Controller
export function initCaptionsDescriptionsGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="captions-descriptions"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    // Curator drawer toggle
    const expandBtns = stage.querySelectorAll('.gal-caption-expand-btn');
    expandBtns.forEach(btn => {
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

    // Audio guide simulator
    const audioBtn = stage.querySelector('#galCaptionAudioBtn');
    const playerBox = stage.querySelector('.gal-caption-audio-player');
    const audioStatus = stage.querySelector('#galCaptionAudioStatus');
    const transcript = stage.querySelector('#galCaptionTranscript');

    if (audioBtn && playerBox) {
      let isPlaying = false;

      audioBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playerBox.classList.toggle('is-playing', isPlaying);

        if (isPlaying) {
          if (audioStatus) audioStatus.textContent = 'Playing Guide... (00:14 / 01:24)';
          if (transcript) transcript.removeAttribute('hidden');
        } else {
          if (audioStatus) audioStatus.textContent = 'Audio Guide (01:24)';
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCaptionsDescriptionsGallery());
  } else {
    initCaptionsDescriptionsGallery();
  }
}
