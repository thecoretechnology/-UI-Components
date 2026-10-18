// 05: Product-Led with Technical Annotations Controller
export function initProductSpecHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="product-spec"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const finishBtns = hero.querySelectorAll('.hr-spec-finish-btn');
    const toast = hero.querySelector('#hrSpecToast');
    const pusherBtn = hero.querySelector('#hrSpecPusher');
    const startBtn = hero.querySelector('#hrSpecStartBtn');
    const stopBtn = hero.querySelector('#hrSpecStopBtn');
    const resetBtn = hero.querySelector('#hrSpecResetBtn');
    const chronoHand = hero.querySelector('#hrSpecChronoHand');
    const subHand = hero.querySelector('#hrSpecSubHand');
    const timeDisplay = hero.querySelector('#hrSpecChronoTime');
    const downloadBtn = hero.querySelector('#hrSpecDownloadBtn');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
    }

    // Material Finish Switcher
    const finishNames = {
      titanium: 'Casing: Grade 5 Titanium (Micro-blasted)',
      dlc: 'Casing: Carbon DLC Matte Black',
      bronze: 'Casing: Hand-patinated CuSn8 Marine Bronze'
    };

    finishBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        finishBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const finish = btn.dataset.finish || 'titanium';
        hero.dataset.finish = finish;
        showToast(finishNames[finish] || `Metallurgy: ${finish}`);
      });
    });

    // Chronograph Stopwatch Engine
    let startTime = 0;
    let accumulatedTime = 0;
    let timerId = null;
    let isRunning = false;

    function formatTime(ms) {
      const totalSec = Math.floor(ms / 1000);
      const minutes = Math.floor(totalSec / 60);
      const seconds = totalSec % 60;
      const hundredths = Math.floor((ms % 1000) / 10);
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(hundredths).padStart(2, '0')}`;
    }

    function updateChrono() {
      const currentElapsed = accumulatedTime + (Date.now() - startTime);
      if (timeDisplay) timeDisplay.textContent = formatTime(currentElapsed);

      const sec = currentElapsed / 1000;
      const degChrono = (sec % 60) * 6; // 360 deg / 60s = 6 deg/s
      const degSub = ((sec / 60) % 30) * 12; // 360 deg / 30m = 12 deg/m

      if (chronoHand) chronoHand.style.transform = `translateX(-50%) rotate(${degChrono}deg)`;
      if (subHand) subHand.style.transform = `translateX(-50%) rotate(${degSub}deg)`;
    }

    function startChrono() {
      if (isRunning) return;
      isRunning = true;
      startTime = Date.now();
      timerId = setInterval(updateChrono, 30);

      if (startBtn) startBtn.disabled = true;
      if (stopBtn) stopBtn.disabled = false;
      if (resetBtn) resetBtn.disabled = true;

      showToast('Column-wheel engaged: Chronograph running');
    }

    function stopChrono() {
      if (!isRunning) return;
      isRunning = false;
      clearInterval(timerId);
      accumulatedTime += Date.now() - startTime;

      if (startBtn) startBtn.disabled = false;
      if (stopBtn) stopBtn.disabled = true;
      if (resetBtn) resetBtn.disabled = false;

      showToast('Chronograph sweep stopped');
    }

    function resetChrono() {
      isRunning = false;
      clearInterval(timerId);
      accumulatedTime = 0;

      if (timeDisplay) timeDisplay.textContent = '00:00.00';
      if (chronoHand) chronoHand.style.transform = 'translateX(-50%) rotate(0deg)';
      if (subHand) subHand.style.transform = 'translateX(-50%) rotate(0deg)';

      if (startBtn) startBtn.disabled = false;
      if (stopBtn) stopBtn.disabled = true;
      if (resetBtn) resetBtn.disabled = true;

      showToast('Flyback reset: Hands returned to zero');
    }

    // Monopusher toggle (Start -> Stop -> Reset sequence)
    if (pusherBtn) {
      pusherBtn.addEventListener('click', () => {
        if (!isRunning && accumulatedTime === 0) {
          startChrono();
        } else if (isRunning) {
          stopChrono();
        } else {
          resetChrono();
        }
      });
    }

    if (startBtn) startBtn.addEventListener('click', startChrono);
    if (stopBtn) stopBtn.addEventListener('click', stopChrono);
    if (resetBtn) resetBtn.addEventListener('click', resetChrono);

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        showToast('Initiating blueprint download: CALIBRE_CHR09_SPEC.PDF');
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initProductSpecHero());
  } else {
    initProductSpecHero();
  }
}
