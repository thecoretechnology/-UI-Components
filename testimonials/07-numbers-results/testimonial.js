// 07: Numbers and Results Testimonial Controller
export function initNumbersResultsTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="numbers-results"]');

  const metricData = {
    uptime: {
      title: '99.999% Availability Uptime',
      desc: 'By dropping client-side runtime hydration layers, each page renders static semantic HTML instantly, preventing memory thrashing on low-end devices and guaranteeing predictable uptime.'
    },
    velocity: {
      title: '4.2x Acceleration in Deploy Velocity',
      desc: 'Removing heavy npm bundler steps in internal applications compressed build validation times from 19 minutes down to 4.5 minutes per continuous integration pipeline run.'
    },
    cost: {
      title: '-64% Egress & Memory Overhead',
      desc: 'Clean zero-dependency components drastically reduced JavaScript payloads to a few kilobytes, slashing network bandwidth costs and freeing up browser thread memory.'
    }
  };

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;

    const cards = container.querySelectorAll('.ts-metrics-card');
    const titleEl = container.querySelector('#tsMetricFocusTitle');
    const descEl = container.querySelector('#tsMetricFocusDesc');

    cards.forEach(card => {
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-pressed', card.classList.contains('is-active') ? 'true' : 'false');

      function activate() {
        cards.forEach(c => {
          c.classList.remove('is-active');
          c.setAttribute('aria-pressed', 'false');
        });
        card.classList.add('is-active');
        card.setAttribute('aria-pressed', 'true');

        const key = card.dataset.metric;
        if (key && metricData[key]) {
          if (titleEl) titleEl.textContent = metricData[key].title;
          if (descEl) descEl.textContent = metricData[key].desc;
        }
      }

      card.addEventListener('click', activate);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
      });
    });
  });
}

export const initNumbersResults = initNumbersResultsTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initNumbersResultsTestimonial());
  } else {
    initNumbersResultsTestimonial();
  }
}
