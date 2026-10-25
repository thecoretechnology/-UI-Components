# Interactive Image Comparison Gallery

A dual-layer comparative visual analyzer featuring a draggable divider handle, full keyboard accessibility, quick-jump preset buttons, and a dual-scene inspection switcher.

## Architecture
- **Class Prefix:** `.gal-compare-*`
- **Dual-Layer Clipping:** High-performance CSS `clip-path: inset(0 calc(100% - var(--split-pos)) 0 0)` hardware-accelerated revelation without image distortion.
- **WAI-ARIA Slider:** Implements `role="slider"`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-valuenow`, and keyboard arrows (`ArrowLeft`, `ArrowRight`, `Home`, `End`).
- **Touch & Pointer Support:** Unified pointer and touch tracking supporting seamless drag across desktop, tablet, and mobile browsers.
- **Scene Switching:** Allows toggling between historical architectural laser restoration and glaciological moraine retreat surveys.
