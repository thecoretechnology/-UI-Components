# Gallery Sections Collection

A curated collection of 10 visually and structurally distinct, professionally designed gallery layouts built with plain HTML, CSS, and vanilla JavaScript.

## Architectural Constraints
- **Zero Dependencies**: Pure HTML5, CSS3, and native vanilla JavaScript ES modules. Zero npm packages, React, Tailwind, or external bundlers.
- **Prefix Scoping**: Each variation has an isolated CSS prefix (e.g., `.gal-editorial-*`, `.gal-masonry-*`, `.gal-compare-*`), guaranteeing zero style collisions with previous sections.
- **Reliable Fallbacks & Object-Fit**: High-resolution curated imagery paired with inline SVG error fallbacks, intentional object-fit/cropping, and descriptive alt texts.
- **WAI-ARIA & Accessibility**: Full keyboard support (`ArrowLeft`/`ArrowRight`/`Escape`/`Home`/`End`), visible focus rings, `aria-expanded`, `aria-selected`, `role="slider"`, `role="dialog"`, and `prefers-reduced-motion` compliance.

---

## The 10 Gallery Variations

| # | Directory | Layout Archetype | Key Interactive & Design Features | Class Prefix |
|---|---|---|---|---|
| 01 | `01-asymmetric-editorial` | Art-Directed Monograph | Asymmetric 7/5 magazine column grid, dominant hero plate, Playfair Display typography, and technical camera spec drawer. | `.gal-editorial-*` |
| 02 | `02-masonry-grid` | Photojournalism Archive | Pure CSS columns masonry (`column-count: 3; break-inside: avoid`), varied aspect ratios, dark slate theme, and hover metadata with live bookmark counters. | `.gal-masonry-*` |
| 03 | `03-minimal-uniform` | Modernist Exhibition Catalog | Swiss precision 1:1 square grid with catalog index numbers and interactive grid density controls (2, 3, or 4 columns). | `.gal-uniform-*` |
| 04 | `04-fullscreen-lightbox` | Alpine Landscape Lightbox | Interactive 6-plate landscape print grid with a full-featured modal lightbox viewer, previous/next buttons, thumbnail strip, scroll locking, and Escape/arrow key navigation. | `.gal-lightbox-*` |
| 05 | `05-filterable-portfolio` | Multidisciplinary Studio Index | Live category filtering (`All`, `Architecture`, `Portraits`, `Nature`) with active result counters, smooth transitions, and empty-state recovery. | `.gal-filter-*` |
| 06 | `06-horizontal-scrolling` | Continuous Expedition Strip | Horizontal panorama track with CSS scroll-snap, dynamic scroll progress percentage bar, manual arrow navigation, and keyboard arrow controls. | `.gal-hscroll-*` |
| 07 | `07-full-bleed-immersive` | Widescreen Cinematic Panorama | Edge-to-edge 21:9 panorama with coordinate stamps, smooth opacity cross-fades, clickable chapter timeline, and optional auto-cycle toggle. | `.gal-immersive-*` |
| 08 | `08-captions-descriptions` | Pelagic Field Journal | Four typographically distinct caption treatments: side-by-side drop-caps, full-width metadata ledgers, expandable curator notes, and simulated acoustic audio guides. | `.gal-caption-*` |
| 09 | `09-image-comparison` | Longitudinal Diagnostic Comparator | Draggable before-and-after split slider with keyboard arrows, preset jump buttons (25%, 50%, 75%), and dual-scene switcher (Cathedral restoration vs Glacier retreat). | `.gal-compare-*` |
| 10 | `10-creative-collage` | Avant-Garde Multi-Planar Collage | 12-column grid with deliberate cell overlaps, subtle rotational tilts, hover elevation to top layer, and interactive layout shuffle button. | `.gal-collage-*` |

---

## Modular Usage

Each component is self-contained. To use an individual component:

```html
<!-- Example: 04 Fullscreen Lightbox -->
<link rel="stylesheet" href="./galleries/04-fullscreen-lightbox/gallery.css">

<!-- Markup from ./galleries/04-fullscreen-lightbox/gallery.html -->

<script type="module">
  import { initFullscreenLightboxGallery } from './galleries/04-fullscreen-lightbox/gallery.js';
  initFullscreenLightboxGallery();
</script>
```

To load the entire master bundle:

```html
<link rel="stylesheet" href="./galleries/galleries.css">

<script type="module">
  import { initAllGalleries } from './galleries/galleries.js';
  initAllGalleries();
</script>
```
