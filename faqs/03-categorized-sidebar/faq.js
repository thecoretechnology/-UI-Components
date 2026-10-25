// 03: Categorized FAQ with Sidebar Controller
export function initCategorizedSidebarFaq(root = document) {
  const stages = root.querySelectorAll('[data-faq="categorized-sidebar"]');

  stages.forEach(stage => {
    if (stage.__faqInitialized) return;
    stage.__faqInitialized = true;

    const tabs = stage.querySelectorAll('.faq-cat-tab');
    const items = stage.querySelectorAll('.faq-cat-item');
    const activeTitle = stage.querySelector('#faqCatActiveTitle');
    const activeBadge = stage.querySelector('#faqCatBadge');

    const catNames = {
      all: 'All Topics',
      account: 'Account & Access',
      billing: 'Billing & Invoices',
      features: 'Features & Speed',
      security: 'Security & Privacy'
    };

    // Category filtering
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        const selectedCat = tab.dataset.category || 'all';
        let visibleCount = 0;

        items.forEach(item => {
          const itemCat = item.dataset.category;
          if (selectedCat === 'all' || itemCat === selectedCat) {
            item.style.display = 'block';
            item.removeAttribute('hidden');
            visibleCount++;
          } else {
            item.style.display = 'none';
            item.setAttribute('hidden', '');
          }
        });

        if (activeTitle) {
          activeTitle.textContent = selectedCat === 'all' 
            ? `Showing all ${visibleCount} questions` 
            : `Showing ${visibleCount} questions in ${catNames[selectedCat] || selectedCat}`;
        }

        if (activeBadge) {
          activeBadge.textContent = catNames[selectedCat] || 'Selected';
        }
      });
    });

    // Accordion handling inside list
    items.forEach(item => {
      const trigger = item.querySelector('.faq-cat-trigger');
      const panel = item.querySelector('.faq-cat-panel');
      const sign = item.querySelector('.faq-cat-toggle-sign');
      if (!trigger || !panel) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          panel.setAttribute('hidden', '');
          if (sign) sign.innerHTML = '&plus;';
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          panel.removeAttribute('hidden');
          if (sign) sign.innerHTML = '&minus;';
        }
      });
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCategorizedSidebarFaq());
  } else {
    initCategorizedSidebarFaq();
  }
}
