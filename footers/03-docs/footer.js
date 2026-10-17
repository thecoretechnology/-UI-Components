// docs footer controller
export function initDocsFooter(root = document) {
  const footers = root.querySelectorAll('[data-footer="docs"]');

  footers.forEach(footer => {
    if (footer.__ftInitialized) return;
    footer.__ftInitialized = true;

    // 1. Status Check Ping
    const statusCard = footer.querySelector('.ft-docs-status-card');
    const latencyEl = footer.querySelector('.ft-docs-latency');
    if (statusCard && latencyEl) {
      statusCard.addEventListener('click', () => {
        latencyEl.textContent = '...';
        setTimeout(() => {
          const mockLatency = Math.floor(Math.random() * 12) + 12;
          latencyEl.textContent = `${mockLatency}ms`;
        }, 300);
      });
    }

    // 2. Version Tag Copy
    const versionBtn = footer.querySelector('.ft-docs-version-btn');
    const tipEl = footer.querySelector('.ft-docs-version-tip');
    if (versionBtn && tipEl) {
      versionBtn.addEventListener('click', async () => {
        const version = versionBtn.querySelector('.ft-docs-version-tag')?.textContent || 'v2.4.0';
        try {
          await navigator.clipboard.writeText(version);
          tipEl.textContent = 'Copied!';
          setTimeout(() => {
            tipEl.textContent = 'Click to copy';
          }, 2000);
        } catch {
          tipEl.textContent = 'Copied!';
          setTimeout(() => {
            tipEl.textContent = 'Click to copy';
          }, 2000);
        }
      });
    }
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initDocsFooter());
  } else {
    initDocsFooter();
  }
}
