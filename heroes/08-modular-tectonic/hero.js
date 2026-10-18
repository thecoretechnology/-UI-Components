// 08: Modular Tectonic Arrangement Controller
export function initModularTectonicHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="modular-tectonic"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const matBtns = hero.querySelectorAll('.hr-tect-mat-btn');
    const matName = hero.querySelector('#hrTectMatName');
    const carbonVal = hero.querySelector('#hrTectCarbonVal');
    const auditBtn = hero.querySelector('#hrTectAuditBtn');
    const toast = hero.querySelector('#hrTectToast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2000);
    }

    const materialData = {
      timber: {
        name: 'EUROPEAN SPRUCE (MASS CLT)',
        carbon: '-48.2 kg CO₂e / m² (Carbon Sinking)',
        label: 'Spruce Mass Timber: Sequesters 48.2 kg CO₂e per square meter.'
      },
      earth: {
        name: 'UNSTABILIZED RAMMED EARTH',
        carbon: '+12.4 kg CO₂e / m² (Thermal Mass)',
        label: 'Rammed Earth: Zero chemical binders, high thermal flywheel.'
      },
      basalt: {
        name: 'SPLIT ALPINE BASALT SLAB',
        carbon: '+18.1 kg CO₂e / m² (Zero Degradation)',
        label: 'Alpine Basalt: 400-year structural compression lifecycle.'
      }
    };

    matBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        matBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const mat = btn.dataset.mat || 'timber';
        hero.dataset.material = mat;

        const data = materialData[mat] || materialData.timber;
        if (matName) matName.textContent = data.name;
        if (carbonVal) carbonVal.textContent = data.carbon;

        showToast(data.label);
      });
    });

    if (auditBtn) {
      auditBtn.addEventListener('click', () => {
        showToast('EPD (Environmental Product Declaration) verification loaded.');
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initModularTectonicHero());
  } else {
    initModularTectonicHero();
  }
}
