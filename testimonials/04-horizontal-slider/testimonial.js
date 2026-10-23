// 04: Horizontal Testimonial Slider Controller
export function initHorizontalSliderTestimonial(root = document) {
  const containers = root.querySelectorAll('[data-testimonial="horizontal-slider"]');

  containers.forEach(container => {
    if (container.__tsInitialized) return;
    container.__tsInitialized = true;

    const track = container.querySelector('#tsSliderTrack');
    const viewport = container.querySelector('#tsSliderViewport');
    const prevBtn = container.querySelector('#tsSliderPrev');
    const nextBtn = container.querySelector('#tsSliderNext');
    const counter = container.querySelector('#tsSliderCounter');
    const dots = container.querySelectorAll('.ts-slider-dot');
    const slides = container.querySelectorAll('.ts-slider-card');
    const totalSlides = slides.length;

    let currentIndex = 0;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;

      if (track) {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      if (counter) {
        counter.textContent = `0${currentIndex + 1} / 0${totalSlides}`;
      }

      slides.forEach((slide, i) => {
        if (i === currentIndex) {
          slide.classList.add('is-active');
        } else {
          slide.classList.remove('is-active');
        }
      });

      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('is-active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('is-active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const target = parseInt(dot.dataset.slide, 10) || 0;
        goToSlide(target);
      });
    });

    // Keyboard navigation on viewport focus
    if (viewport) {
      viewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToSlide(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToSlide(currentIndex + 1);
        }
      });

      // Touch swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      viewport.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });

      function handleSwipe() {
        const threshold = 40;
        const diff = touchEndX - touchStartX;
        if (diff > threshold) {
          goToSlide(currentIndex - 1);
        } else if (diff < -threshold) {
          goToSlide(currentIndex + 1);
        }
      }
    }

    goToSlide(0);
  });
}

export const initHorizontalSlider = initHorizontalSliderTestimonial;

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initHorizontalSliderTestimonial());
  } else {
    initHorizontalSliderTestimonial();
  }
}
