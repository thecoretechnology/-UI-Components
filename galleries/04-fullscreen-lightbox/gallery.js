// 04: Fullscreen Lightbox Gallery Controller
export function initFullscreenLightboxGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="fullscreen-lightbox"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    const triggers = stage.querySelectorAll('.gal-lightbox-trigger');
    const modal = stage.querySelector('#galLightboxModal');
    const closeBtn = stage.querySelector('#galLightboxCloseBtn');
    const prevBtn = stage.querySelector('#galLightboxPrevBtn');
    const nextBtn = stage.querySelector('#galLightboxNextBtn');
    const activeImg = stage.querySelector('#galLightboxActiveImg');
    const activeTitle = stage.querySelector('#galLightboxActiveTitle');
    const activeDesc = stage.querySelector('#galLightboxActiveDesc');
    const counterEl = stage.querySelector('#galLightboxCounter');
    const thumbStrip = stage.querySelector('#galLightboxThumbStrip');

    if (!modal || !triggers.length) return;

    // Collect data from triggers
    const galleryItems = Array.from(triggers).map(btn => {
      const img = btn.querySelector('img');
      const title = btn.querySelector('.gal-lightbox-item-title')?.textContent.trim() || '';
      const desc = btn.querySelector('.gal-lightbox-item-alt')?.textContent.trim() || '';
      return {
        src: img?.getAttribute('src') || '',
        alt: img?.getAttribute('alt') || '',
        title,
        desc
      };
    });

    let currentIndex = 0;
    let lastActiveTrigger = null;
    let prevBodyOverflow = '';

    // Build thumbnail strip
    if (thumbStrip) {
      thumbStrip.innerHTML = '';
      galleryItems.forEach((item, idx) => {
        const mini = document.createElement('button');
        mini.type = 'button';
        mini.className = 'gal-lightbox-mini-thumb';
        mini.setAttribute('aria-label', `Jump to plate ${idx + 1}: ${item.title}`);
        mini.innerHTML = `<img src="${item.src}" alt="">`;
        mini.addEventListener('click', (e) => {
          e.stopPropagation();
          showImage(idx);
        });
        thumbStrip.appendChild(mini);
      });
    }

    function showImage(index) {
      if (index < 0) index = galleryItems.length - 1;
      if (index >= galleryItems.length) index = 0;
      currentIndex = index;

      const item = galleryItems[currentIndex];
      if (!item) return;

      if (activeImg) {
        activeImg.src = item.src;
        activeImg.alt = item.alt;
      }
      if (activeTitle) activeTitle.textContent = item.title;
      if (activeDesc) activeDesc.textContent = item.desc;
      if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${galleryItems.length}`;

      // Update thumbnail active state
      if (thumbStrip) {
        const thumbs = thumbStrip.querySelectorAll('.gal-lightbox-mini-thumb');
        thumbs.forEach((t, i) => {
          t.classList.toggle('is-active', i === currentIndex);
        });
      }
    }

    function openLightbox(index, triggerElement) {
      currentIndex = index;
      lastActiveTrigger = triggerElement || null;
      showImage(currentIndex);

      modal.removeAttribute('hidden');
      prevBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus close button
      if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
      modal.setAttribute('hidden', '');
      document.body.style.overflow = prevBodyOverflow;
      if (lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
        lastActiveTrigger.focus();
      }
    }

    // Attach trigger clicks
    triggers.forEach((btn, idx) => {
      btn.addEventListener('click', () => openLightbox(idx, btn));
    });

    // Close on button click
    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    // Close on backdrop click (click outside modal container)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeLightbox();
      }
    });

    // Prev / Next buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex + 1);
      });
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (modal.hasAttribute('hidden')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showImage(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showImage(currentIndex + 1);
      }
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initFullscreenLightboxGallery());
  } else {
    initFullscreenLightboxGallery();
  }
}
