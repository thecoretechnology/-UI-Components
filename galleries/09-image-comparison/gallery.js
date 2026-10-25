// 09: Interactive Image Comparison Controller
export function initImageComparisonGallery(root = document) {
  const stages = root.querySelectorAll('[data-gallery="image-comparison"]');

  stages.forEach(stage => {
    if (stage.__galInitialized) return;
    stage.__galInitialized = true;

    const viewport = stage.querySelector('#galCompareViewport');
    const handle = stage.querySelector('#galCompareHandle');
    const splitLabel = stage.querySelector('#galCompareSplitLabel');
    const presetBtns = stage.querySelectorAll('.gal-compare-preset-btn');
    const sceneBtns = stage.querySelectorAll('.gal-compare-scene-btn');
    const imgBefore = stage.querySelector('#galCompareImgBefore');
    const imgAfter = stage.querySelector('#galCompareImgAfter');
    const badgeBefore = stage.querySelector('#galCompareBadgeBefore');
    const badgeAfter = stage.querySelector('#galCompareBadgeAfter');

    if (!viewport || !handle) return;

    let splitPct = 50;
    let isDragging = false;

    function setSplit(pct) {
      pct = Math.max(0, Math.min(100, pct));
      splitPct = pct;

      viewport.style.setProperty('--split-pos', `${pct.toFixed(1)}%`);
      handle.setAttribute('aria-valuenow', Math.round(pct));

      if (splitLabel) {
        splitLabel.textContent = `Split Position: ${Math.round(pct)}%`;
      }

      presetBtns.forEach(btn => {
        const btnPos = parseFloat(btn.dataset.pos);
        btn.classList.toggle('is-active', Math.abs(btnPos - pct) < 2);
      });
    }

    function calculatePosFromClientX(clientX) {
      const rect = viewport.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = (x / rect.width) * 100;
      setSplit(pct);
    }

    // Pointer event handling
    function onPointerDown(e) {
      isDragging = true;
      calculatePosFromClientX(e.clientX || (e.touches && e.touches[0].clientX));
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      calculatePosFromClientX(e.clientX);
    }

    function onPointerUp() {
      isDragging = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    }

    // Mouse & Touch events on handle/viewport
    handle.addEventListener('mousedown', onPointerDown);
    viewport.addEventListener('mousedown', (e) => {
      if (e.target !== handle && !handle.contains(e.target)) {
        calculatePosFromClientX(e.clientX);
      }
    });

    handle.addEventListener('touchstart', (e) => {
      isDragging = true;
      const touch = e.touches[0];
      if (touch) calculatePosFromClientX(touch.clientX);
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      if (touch) calculatePosFromClientX(touch.clientX);
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Keyboard accessibility on slider handle
    handle.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSplit(splitPct - 2);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setSplit(splitPct + 2);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setSplit(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setSplit(100);
      }
    });

    // Quick Presets
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetPos = parseFloat(btn.dataset.pos);
        if (!isNaN(targetPos)) {
          setSplit(targetPos);
          handle.focus();
        }
      });
    });

    // Scene Switcher
    const scenes = {
      cathedral: {
        beforeSrc: 'https://images.unsplash.com/photo-1548625361-195973c9d7d2?auto=format&fit=crop&w=1200&h=750&q=80',
        beforeAlt: 'Weathered limestone cathedral facade with centuries of soot and pollution patina',
        beforeBadge: 'Before: Pre-Intervention',
        afterSrc: 'https://images.unsplash.com/photo-1548625361-1ac9a4216892?auto=format&fit=crop&w=1200&h=750&q=80',
        afterAlt: 'Restored limestone cathedral facade detailing following precision conservation',
        afterBadge: 'After: 2024 Laser Cleaning'
      },
      glacier: {
        beforeSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&h=750&q=80',
        beforeAlt: 'Winter high-altitude alpine snowpack across Bernese glacial basin',
        beforeBadge: 'Winter Baseline: 100% Snowpack',
        afterSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=750&q=80',
        afterAlt: 'Late summer exposed glacial moraine revealing bedrock recession',
        afterBadge: 'Summer Observation: Moraine Retreat'
      }
    };

    sceneBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sceneKey = btn.dataset.scene;
        const scene = scenes[sceneKey];
        if (!scene) return;

        sceneBtns.forEach(b => {
          const isActive = (b === btn);
          b.classList.toggle('is-active', isActive);
          b.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        if (imgBefore) {
          imgBefore.src = scene.beforeSrc;
          imgBefore.alt = scene.beforeAlt;
        }
        if (imgAfter) {
          imgAfter.src = scene.afterSrc;
          imgAfter.alt = scene.afterAlt;
        }
        if (badgeBefore) badgeBefore.textContent = scene.beforeBadge;
        if (badgeAfter) badgeAfter.textContent = scene.afterBadge;

        setSplit(50);
      });
    });

    // Initialize at 50%
    setSplit(50);
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initImageComparisonGallery());
  } else {
    initImageComparisonGallery();
  }
}
