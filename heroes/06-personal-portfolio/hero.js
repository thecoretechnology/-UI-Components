// 06: Personal Portfolio Controller
export function initPersonalPortfolioHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="personal-portfolio"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const slider = hero.querySelector('#hrFolioWeightSlider');
    const weightVal = hero.querySelector('#hrFolioWeightVal');
    const hugeGlyph = hero.querySelector('#hrFolioHugeGlyph');
    const livePhrase = hero.querySelector('#hrFolioLivePhrase');
    const optBtns = hero.querySelectorAll('.hr-folio-opt-btn');
    const ledgerItems = hero.querySelectorAll('.hr-folio-ledger-item');
    const specimenTag = hero.querySelector('#hrFolioSpecimenTag');
    const specimenBtn = hero.querySelector('#hrFolioSpecimenBtn');
    const toast = hero.querySelector('#hrFolioToast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2000);
    }

    function getWeightName(w) {
      if (w <= 150) return `${w} (Thin)`;
      if (w <= 250) return `${w} (Extra Light)`;
      if (w <= 350) return `${w} (Light)`;
      if (w <= 450) return `${w} (Regular)`;
      if (w <= 550) return `${w} (Medium)`;
      if (w <= 650) return `${w} (Semibold)`;
      if (w <= 750) return `${w} (Bold)`;
      if (w <= 850) return `${w} (Extra Bold)`;
      return `${w} (Black)`;
    }

    // Weight Axis Slider
    if (slider) {
      slider.addEventListener('input', (e) => {
        const val = e.target.value;
        hero.style.setProperty('--hr-folio-dyn-weight', val);
        hero.dataset.weight = val;

        if (weightVal) weightVal.textContent = getWeightName(val);
        if (hugeGlyph) hugeGlyph.style.fontWeight = val;
        if (livePhrase) livePhrase.style.fontWeight = val;
      });
    }

    // Optical Size Selection
    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        optBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const opt = btn.dataset.optical || 'text';
        if (livePhrase) {
          if (opt === 'caption') {
            livePhrase.style.letterSpacing = '0.06em';
            livePhrase.style.fontSize = '11px';
          } else if (opt === 'display') {
            livePhrase.style.letterSpacing = '-0.02em';
            livePhrase.style.fontSize = '15px';
          } else {
            livePhrase.style.letterSpacing = 'normal';
            livePhrase.style.fontSize = '12px';
          }
        }
        showToast(`Optical size set: ${opt.toUpperCase()}`);
      });
    });

    // Ledger Specimens Switcher
    const specimenPresets = {
      nordisk: {
        tag: 'NORDISK GROTESK · GLYPH MATRIX',
        glyph: 'Å',
        phrase: 'Kungliga Dramatiska Teatern — Säsongsprogram 2026/27. ÅÄÖ åäö 1234567890'
      },
      epigraph: {
        tag: 'EPIGRAPH ANTIQUA · 36 CUTS',
        glyph: 'Q',
        phrase: 'Quod erat demonstrandum. Architectural monographs and stone epigraphy in Sweden.'
      },
      runic: {
        tag: 'SIGTUNA MONUMENTAL · HERITAGE CUT',
        glyph: 'ᚱ',
        phrase: 'Uplands runinskrifter nr 379 — Runic inscriptions translated to modern vector metrics.'
      }
    };

    ledgerItems.forEach(item => {
      item.addEventListener('click', () => {
        ledgerItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const key = item.dataset.specimen || 'nordisk';
        const preset = specimenPresets[key] || specimenPresets.nordisk;

        if (specimenTag) specimenTag.textContent = preset.tag;
        if (hugeGlyph) hugeGlyph.textContent = preset.glyph;
        if (livePhrase) livePhrase.textContent = preset.phrase;

        showToast(`Loaded Specimen: ${preset.tag}`);
      });
    });

    if (specimenBtn) {
      specimenBtn.addEventListener('click', () => {
        showToast('Foundry specimen package generated: LINDQVIST_FOUNDRY_2026.PDF');
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initPersonalPortfolioHero());
  } else {
    initPersonalPortfolioHero();
  }
}
