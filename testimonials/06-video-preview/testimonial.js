// 06: Video Testimonial Preview Controller
export function initVideoPreviewTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="video-preview"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;

    const thumb = container.querySelector('#tsVideoThumb');
    const actionBtn = container.querySelector('#tsVideoActionBtn');
    const modal = container.querySelector('#tsVideoModal');
    const closeBtn = container.querySelector('#tsVideoModalClose');
    const playPauseBtn = container.querySelector('#tsSimPlayPause');

    let previousActiveElement = null;

    function openModal() {
      if (!modal) return;
      previousActiveElement = document.activeElement;
      modal.removeAttribute('hidden');
      if (closeBtn) closeBtn.focus();
      document.addEventListener('keydown', handleKeydown);
    }

    function closeModal() {
      if (!modal) return;
      modal.setAttribute('hidden', '');
      document.removeEventListener('keydown', handleKeydown);
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    }

    function handleKeydown(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    if (thumb) {
      thumb.addEventListener('click', openModal);
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal();
        }
      });
    }

    if (actionBtn) {
      actionBtn.addEventListener('click', openModal);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    // Simulated play/pause toggle inside modal
    if (playPauseBtn) {
      let isPlaying = false;
      playPauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
          playPauseBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
          playPauseBtn.setAttribute('aria-label', 'Pause simulated audio stream');
        } else {
          playPauseBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>';
          playPauseBtn.setAttribute('aria-label', 'Play simulated audio stream');
        }
      });
    }
  });
}

export const initVideoPreview = initVideoPreviewTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initVideoPreviewTestimonial());
  } else {
    initVideoPreviewTestimonial();
  }
}
