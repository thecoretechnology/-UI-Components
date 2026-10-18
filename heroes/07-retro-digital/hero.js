// 07: Retro Digital CAD Workstation Controller
export function initRetroDigitalHero(root = document) {
  const heroes = root.querySelectorAll('[data-hero="retro-digital"]');

  heroes.forEach(hero => {
    if (hero.__hrInitialized) return;
    hero.__hrInitialized = true;

    const phosphorBtns = hero.querySelectorAll('.hr-retro-ph-btn');
    const scanlineToggle = hero.querySelector('#hrRetroScanlineToggle');
    const scanlines = hero.querySelector('#hrRetroScanlines');
    const cliForm = hero.querySelector('#hrRetroCliForm');
    const cliInput = hero.querySelector('#hrRetroInput');
    const stdout = hero.querySelector('#hrRetroStdout');
    const chips = hero.querySelectorAll('.hr-retro-chip');
    const wireGroup = hero.querySelector('#hrRetroWireGroup');
    const plotMode = hero.querySelector('#hrRetroPlotMode');
    const toast = hero.querySelector('#hrRetroToast');

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(hero.__toastTimer);
      hero.__toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2000);
    }

    function addStdout(msg) {
      if (!stdout) return;
      const line = document.createElement('div');
      line.className = 'hr-retro-line';
      line.textContent = msg;
      stdout.appendChild(line);
      stdout.scrollTop = stdout.scrollHeight;
    }

    // Phosphor Color Switcher
    phosphorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        phosphorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const ph = btn.dataset.phosphor || 'green';
        hero.dataset.phosphor = ph;
        showToast(`CRT Phosphor set: P${ph === 'green' ? '1' : ph === 'amber' ? '3' : '4'} ${ph.toUpperCase()}`);
      });
    });

    // Scanline Toggle
    let scanlinesEnabled = true;
    if (scanlineToggle && scanlines) {
      scanlineToggle.addEventListener('click', () => {
        scanlinesEnabled = !scanlinesEnabled;
        scanlines.classList.toggle('hidden', !scanlinesEnabled);
        scanlineToggle.textContent = scanlinesEnabled ? 'SCANLINES: ON' : 'SCANLINES: OFF';
        showToast(scanlinesEnabled ? 'CRT Cathode Raster Scanlines: Active' : 'Scanlines Filter Bypassed');
      });
    }

    // Command Processor
    function executeCommand(raw) {
      const cmd = (raw || '').trim().toUpperCase();
      if (!cmd) return;

      addStdout(`> ${cmd}`);

      if (cmd === 'HELP') {
        addStdout('[SYS]: COMMANDS: PLOT, SPECS, ORBIT, CLS, HELP');
      } else if (cmd === 'PLOT' || cmd === 'PLOT 3D') {
        if (wireGroup) {
          const deg = Math.floor(Math.random() * 360);
          wireGroup.style.transform = `rotate(${deg}deg)`;
        }
        if (plotMode) plotMode.textContent = '3D ISOMETRIC AZIMUTH';
        addStdout('[SYS]: VECTOR PLOT GENERATED: 12 EDGES, 8 VERTICES.');
        showToast('Vector Plot Coordinates Rendered');
      } else if (cmd === 'SPECS' || cmd === 'SYS SPECS') {
        addStdout('[SYS]: HARDWARE: TEKTRONIX 4014 EMULATOR · 64KB CORE · 4.77 MHZ COP.');
        showToast('System Hardware Profile Dumped');
      } else if (cmd === 'ORBIT' || cmd === 'ORBIT WIRE') {
        if (wireGroup) {
          const isOrbiting = wireGroup.classList.toggle('rotating');
          if (plotMode) plotMode.textContent = isOrbiting ? 'KINETIC ORBIT ACTIVE' : 'STATIC ISOMETRIC';
          addStdout(`[SYS]: CONTINUOUS ORBIT COPROCESSOR: ${isOrbiting ? 'ENGAGED' : 'HALTED'}.`);
          showToast(isOrbiting ? 'Continuous Wireframe Orbit Engaged' : 'Orbit Paused');
        }
      } else if (cmd === 'CLS' || cmd === 'CLEAR') {
        if (stdout) {
          stdout.innerHTML = '<div class="hr-retro-line">[SYS]: BUFFER FLUSHED. CONSOLE READY.</div>';
        }
        showToast('Terminal Screen Cleared');
      } else {
        addStdout(`[ERR]: UNRECOGNIZED DIRECTIVE: "${cmd}". TYPE 'HELP' FOR LIST.`);
      }
    }

    if (cliForm && cliInput) {
      cliForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = cliInput.value;
        cliInput.value = '';
        executeCommand(val);
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd;
        if (cmd) executeCommand(cmd);
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initRetroDigitalHero());
  } else {
    initRetroDigitalHero();
  }
}
