// 01: Swiss / Grid-Based Typography Controller
export function initSwissGridHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="swiss-grid"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    // Ratio Matrix Buttons
    const ratioBtns = hero.querySelectorAll('.hr-swiss-ratio-btn');
    const toast = hero.querySelector('#hrSwissToast');

    ratioBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        ratioBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const ratio = btn.dataset.ratio;
        hero.dataset.ratio = ratio;

        if (toast) {
          toast.textContent = `Grid matrix: ${btn.textContent.trim()}`;
          toast.classList.add('is-visible');
          setTimeout(() => toast.classList.remove('is-visible'), 1800);
        }
      });
    });

    // Specimen Plate Switcher
    const tabs = hero.querySelectorAll('.hr-swiss-tab-btn');
    const stageSymbol = hero.querySelector('.hr-swiss-specimen-symbol');
    const stageDesc = hero.querySelector('#hrSwissPlateDesc');
    const stageBoxText = hero.querySelector('.hr-swiss-box-text');
    const coordsEl = hero.querySelector('#hrSwissCoords');

    const specimenData = {
      '01': {
        symbol: 'Aa',
        tag: 'HAAS GROTESK · 1957',
        desc: 'Systematic classification of sans-serif proportions based on Max Miedinger\'s 1957 drawings.',
        coords: 'X: 184 / Y: 092'
      },
      '02': {
        symbol: 'Gg',
        tag: 'AKZIDENZ GROTESK · 1896',
        desc: 'The foundational Berlin grotesque with rational stroke modulation and horizontal terminal cuts.',
        coords: 'X: 240 / Y: 148'
      },
      '03': {
        symbol: '§9',
        tag: 'MODULAR RASTER · 1968',
        desc: 'Karl Gerstner\'s programmable kinetic typography based on mathematical coordinate systems.',
        coords: 'X: 312 / Y: 216'
      }
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const key = tab.dataset.spec;
        const data = specimenData[key] || specimenData['01'];

        if (stageSymbol) stageSymbol.textContent = data.symbol;
        if (stageBoxText) stageBoxText.textContent = data.tag;
        if (stageDesc) stageDesc.textContent = data.desc;
        if (coordsEl) coordsEl.textContent = data.coords;
      });
    });

    // Dynamic mouse coordinate tracking inside hero
    hero.addEventListener('mousemove', (e) => {
      if (!coordsEl) return;
      const rect = hero.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      coordsEl.textContent = `X: ${String(x).padStart(3, '0')} / Y: ${String(y).padStart(3, '0')}`;
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initSwissGridHero());
  } else {
    initSwissGridHero();
  }
}
