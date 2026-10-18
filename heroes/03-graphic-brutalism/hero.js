// 03: Graphic Brutalism Controller
export function initGraphicBrutalismHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="graphic-brutalism"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const breakers = hero.querySelectorAll('.hr-brutal-breaker');
    const boardStatus = hero.querySelector('#hrBrutalBoardStatus');
    const logScreen = hero.querySelector('#hrBrutalLog');
    const loadDisplay = hero.querySelector('#hrBrutalLoad');
    const dispatchBtn = hero.querySelector('#hrBrutalDispatchBtn');
    const toast = hero.querySelector('#hrBrutalToast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2000);
    }

    function addLog(text) {
      if (!logScreen) return;
      const line = document.createElement('div');
      line.className = 'hr-brutal-log-line';
      line.textContent = `> ${new Date().toTimeString().split(' ')[0]} : ${text}`;
      logScreen.appendChild(line);
      logScreen.scrollTop = logScreen.scrollHeight;
    }

    function updateSystemState() {
      const activeSwitches = hero.querySelectorAll('.hr-brutal-rocker-switch.active');
      const count = activeSwitches.length;
      const total = breakers.length;

      // Update base simulated load
      const baseLoad = (count * 1.045).toFixed(2);
      if (loadDisplay) loadDisplay.textContent = `${baseLoad} GW`;

      if (boardStatus) {
        if (count === total) {
          boardStatus.textContent = 'ALL CIRCUITS ENERGIZED';
          boardStatus.style.color = '#22c55e';
          boardStatus.style.background = '#064e3b';
          boardStatus.style.borderColor = '#059669';
        } else if (count === 0) {
          boardStatus.textContent = 'CRITICAL: TOTAL BLACKOUT';
          boardStatus.style.color = '#ef4444';
          boardStatus.style.background = '#450a0a';
          boardStatus.style.borderColor = '#dc2626';
        } else {
          boardStatus.textContent = `PARTIAL LOAD: ${count}/${total} ENERGIZED`;
          boardStatus.style.color = '#fcd34d';
          boardStatus.style.background = '#451a03';
          boardStatus.style.borderColor = '#d97706';
        }
      }
    }

    breakers.forEach(breaker => {
      const switchBtn = breaker.querySelector('.hr-brutal-rocker-switch');
      const led = breaker.querySelector('.hr-brutal-b-led');
      const circuitName = switchBtn ? switchBtn.dataset.circuit : 'CIRCUIT';

      if (switchBtn) {
        switchBtn.addEventListener('click', () => {
          const isActive = switchBtn.classList.toggle('active');
          switchBtn.setAttribute('aria-pressed', String(isActive));

          if (led) {
            led.classList.toggle('active', isActive);
          }

          if (isActive) {
            addLog(`${circuitName}: CONTACT CLOSED // CONTINUOUS FEED`);
            showToast(`${circuitName} ENERGIZED`);
          } else {
            addLog(`WARNING: ${circuitName}: BREAKER TRIPPED MANUAL OVERRIDE`);
            showToast(`${circuitName} DISCONNECTED`);
          }

          updateSystemState();
        });
      }
    });

    if (dispatchBtn) {
      dispatchBtn.addEventListener('click', () => {
        addLog('COMMAND: GRID COUPLING SYNCHRONIZATION ENGAGED');
        breakers.forEach(b => {
          const sw = b.querySelector('.hr-brutal-rocker-switch');
          const led = b.querySelector('.hr-brutal-b-led');
          if (sw && !sw.classList.contains('active')) {
            sw.classList.add('active');
            sw.setAttribute('aria-pressed', 'true');
          }
          if (led) led.classList.add('active');
        });
        updateSystemState();
        showToast('FULL GRID COUPLING SECURED [4.18 GW]');
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initGraphicBrutalismHero());
  } else {
    initGraphicBrutalismHero();
  }
}
