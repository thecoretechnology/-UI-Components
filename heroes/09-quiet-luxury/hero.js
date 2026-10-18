// 09: Quiet Luxury Controller
export function initQuietLuxuryHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="quiet-luxury"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const ambBtns = hero.querySelectorAll('.hr-lux-amb-btn');
    const salonBtn = hero.querySelector('#hrLuxSalonBtn');
    const drawer = hero.querySelector('#hrLuxSalonDrawer');
    const drawerClose = hero.querySelector('#hrLuxDrawerClose');
    const choiceBtns = hero.querySelectorAll('.hr-lux-choice-btn');
    const medallion = hero.querySelector('#hrLuxMedallion');
    const sheen = hero.querySelector('#hrLuxSheen');
    const toast = hero.querySelector('#hrLuxToast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
    }

    // Ambiance Lighting Toggle
    const ambDescriptions = {
      daylight: 'Ambiance: Diffuse morning daylight in Le Brassus',
      candlelight: 'Ambiance: Warm salon candlelight (Place Vendôme)',
      atelier: 'Ambiance: High-precision directional jeweler beam'
    };

    ambBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        ambBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const mode = btn.dataset.ambiance || 'daylight';
        hero.dataset.ambiance = mode;
        showToast(ambDescriptions[mode] || `Ambiance: ${mode}`);
      });
    });

    // Salon Drawer Toggle
    if (salonBtn && drawer) {
      salonBtn.addEventListener('click', () => {
        const isHidden = drawer.hasAttribute('hidden');
        if (isHidden) {
          drawer.removeAttribute('hidden');
          drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          showToast('Private appointment drawer expanded');
        } else {
          drawer.setAttribute('hidden', '');
        }
      });
    }

    if (drawerClose && drawer) {
      drawerClose.addEventListener('click', () => {
        drawer.setAttribute('hidden', '');
      });
    }

    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        const labels = {
          vendome: 'Place Vendôme salon private viewing confirmed.',
          brassus: 'Le Brassus workshop tour and master consultation logged.',
          residence: 'Confidential concierge residence consultation requested.'
        };
        showToast(labels[choice] || 'Private consultation confirmed.');
        setTimeout(() => {
          if (drawer) drawer.setAttribute('hidden', '');
        }, 1200);
      });
    });

    // Subtle Sheen Tracking on Medallion Hover
    if (medallion && sheen) {
      medallion.addEventListener('mousemove', (e) => {
        const rect = medallion.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        sheen.style.background = `radial-gradient(circle at ${x}% ${y}%, var(--hr-lux-sheen-color) 0%, transparent 60%)`;
      });

      medallion.addEventListener('mouseleave', () => {
        sheen.style.background = '';
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initQuietLuxuryHero());
  } else {
    initQuietLuxuryHero();
  }
}
