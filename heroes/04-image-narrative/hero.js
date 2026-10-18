// 04: Image-First Visual Narrative Controller
export function initImageNarrativeHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="image-narrative"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const canvas = hero.querySelector('#hrPolarCanvas');
    const aurora = hero.querySelector('#hrPolarAurora');
    const auroraToggle = hero.querySelector('#hrPolarAuroraToggle');
    const crosshair = hero.querySelector('#hrPolarCrosshair');
    const reticleTag = hero.querySelector('#hrPolarReticleTag');
    const depthBtns = hero.querySelectorAll('.hr-polar-depth-btn');
    const deckText = hero.querySelector('#hrPolarDeck');
    const sampleBtn = hero.querySelector('#hrPolarSampleBtn');
    const toast = hero.querySelector('#hrPolarToast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
    }

    // Interactive Aurora Toggle
    let auroraActive = true;
    if (auroraToggle && aurora) {
      auroraToggle.addEventListener('click', () => {
        auroraActive = !auroraActive;
        aurora.classList.toggle('inactive', !auroraActive);
        auroraToggle.classList.toggle('active', auroraActive);
        auroraToggle.setAttribute('aria-pressed', String(auroraActive));

        const span = auroraToggle.querySelector('span:not(.dot)');
        if (span) {
          span.textContent = auroraActive ? 'AURORA BOREALIS [ACTIVE]' : 'AURORA BOREALIS [STANDBY]';
        }
        showToast(auroraActive ? 'Ionospheric emission simulation active' : 'Aurora illumination paused');
      });
    }

    // Stratigraphic Depth Profiles
    const depthProfiles = {
      surface: {
        deck: 'Surface firn layer (0m to -30m) captures modern atmospheric isotopic shifts, microplastic deposition, and rapid seasonal melt cycles from the 2020–2026 observation series.',
        tag: 'SURFACE FIRN [2026]'
      },
      intermediate: {
        deck: 'Sub-glacial firn matrix (-180m) records the pre-industrial atmospheric baseline (circa 1840), exhibiting unpolluted compressed hexagonal crystalline ice structures.',
        tag: 'SUB-GLACIAL ICE [1840]'
      },
      basal: {
        deck: 'Basal contact layer (-540m) reaches the underlying Svalbard metamorphic bedrock, locking in climatic transitions from the Younger Dryas epoch 14,000 to 11,700 years ago.',
        tag: 'BASAL BEDROCK [12,000 BCE]'
      }
    };

    depthBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        depthBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const depth = btn.dataset.depth || 'surface';
        hero.dataset.probeDepth = depth;
        const profile = depthProfiles[depth] || depthProfiles.surface;

        if (deckText) {
          deckText.textContent = profile.deck;
        }

        showToast(`Stratigraphic layer locked: ${profile.tag}`);
      });
    });

    // Cursor Surveyor Reticle Tracking
    if (canvas && crosshair) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        crosshair.style.left = `${x}px`;
        crosshair.style.top = `${y}px`;

        if (reticleTag) {
          const lat = (78.2 + (y / rect.height) * 0.05).toFixed(4);
          const lon = (15.6 + (x / rect.width) * 0.08).toFixed(4);
          reticleTag.textContent = `RETICLE: ${lat}°N / ${lon}°E`;
        }
      });
    }

    // Sample Drill Core Button
    if (sampleBtn) {
      sampleBtn.addEventListener('click', () => {
        const depth = hero.dataset.probeDepth || 'surface';
        showToast(`Drill core [${depth.toUpperCase()}] dispatched to cryogenic mass spectrometer`);
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initImageNarrativeHero());
  } else {
    initImageNarrativeHero();
  }
}
