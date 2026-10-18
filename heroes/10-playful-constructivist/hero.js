// 10: Playful Graphic Constructivist Controller
export function initPlayfulConstructivistHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="playful-constructivist"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const modeBtns = hero.querySelectorAll('.hr-play-mode-btn');
    const studyName = hero.querySelector('#hrPlayStudyName');
    const rotateBtn = hero.querySelector('#hrPlayRotateBtn');
    const shapes = hero.querySelectorAll('.hr-play-shape');
    const toast = hero.querySelector('#hrPlayToast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2000);
    }

    const studyLabels = {
      equilibrium: 'KINETIC EQUILIBRIUM',
      tension: 'DIAGONAL TENSION',
      centrifugal: 'CENTRIFUGAL HARMONY'
    };

    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const study = btn.dataset.study || 'equilibrium';
        hero.dataset.study = study;

        if (studyName) studyName.textContent = studyLabels[study] || study.toUpperCase();
        showToast(`Study Set: ${studyLabels[study] || study}`);
      });
    });

    // Global Rotate Forms Action
    let globalAngle = 0;
    if (rotateBtn) {
      rotateBtn.addEventListener('click', () => {
        globalAngle += 45;
        shapes.forEach((shape, idx) => {
          const mult = idx % 2 === 0 ? 1 : -1;
          shape.style.transform = `rotate(${globalAngle * mult}deg)`;
        });
        showToast(`Geometric forms rotated by ${globalAngle}°`);
      });
    }

    // Individual Shape Click Playfulness
    shapes.forEach(shape => {
      let angle = 0;
      shape.addEventListener('click', () => {
        angle += 90;
        shape.style.transform = `rotate(${angle}deg) scale(1.08)`;
        setTimeout(() => {
          shape.style.transform = `rotate(${angle}deg) scale(1)`;
        }, 250);
        showToast('Shape actuated');
      });

      shape.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          shape.click();
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initPlayfulConstructivistHero());
  } else {
    initPlayfulConstructivistHero();
  }
}
