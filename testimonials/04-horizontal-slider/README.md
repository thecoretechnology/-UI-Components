# 04 Horizontal Testimonial Slider

An accessible, fully responsive horizontal carousel slider with tactile previous/next buttons, pagination indicators, slide counter, keyboard navigation (`ArrowLeft` / `ArrowRight`), touch swipe gesture support, and reduced-motion compliance.

## Design Highlights
- **Fluid Carousel Track**: Hardware-accelerated CSS `transform: translateX(...)` transitions with smooth easing.
- **Comprehensive Accessibility**: Keyboard navigation on viewport focus, ARIA role markup (`carousel`, `slide`, `tablist`), and visible focus outlines.
- **Touch Gesture Support**: Native `touchstart` and `touchend` swipe delta detection.
- **Reduced-Motion Compliant**: Gracefully turns off sliding animations when `prefers-reduced-motion` is detected in system preferences.

## Class Prefix
All styles are strictly scoped under `.ts-slider-*`.
