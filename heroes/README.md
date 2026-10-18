# Hero Section Components

A collection of 10 standalone hero section components built with plain HTML, CSS, and ES6 JavaScript. Each component is modeled on a distinct visual design tradition with scoped styles, inline SVGs, and independent interaction controllers.

---

## Component Catalog

| # | Component | Directory | Highlights |
|---|---|---|---|
| 01 | **Swiss / Grid-Based Typography** | [`01-swiss-grid`](./01-swiss-grid/) | Asymmetric 12-column grid with coordinate markers, ratio matrix switcher (DIN, Golden, Square), specimen tabs, and live cursor tracking. |
| 02 | **Editorial Monograph** | [`02-editorial-monograph`](./02-editorial-monograph/) | Architectural broadsheet layout with top running folio, dropped initial cap, fluted colonnade relief, 3-tier sunlight angle switcher, and reading bookmark. |
| 03 | **Graphic Brutalism** | [`03-graphic-brutalism`](./03-graphic-brutalism/) | Industrial grid dispatch terminal with 3px solid borders, hazard stripes, circuit registry tables, tactile physical rocker switches, and event log. |
| 04 | **Image-First Narrative** | [`04-image-narrative`](./04-image-narrative/) | Arctic glaciological survey layout with SVG mountain landscape, ionospheric aurora toggle, edge-anchored telemetry, and reticle crosshair. |
| 05 | **Product-Led Precision Spec** | [`05-product-spec`](./05-product-spec/) | Mechanical chronometer study with titanium/DLC/bronze metallurgy switcher, caliper annotations, and working column-wheel monopusher stopwatch. |
| 06 | **Personal Portfolio** | [`06-personal-portfolio`](./06-personal-portfolio/) | Type designer portfolio with variable font weight slider (`wght` 100–900), editable custom glyph matrix, and commissioned specimen ledger. |
| 07 | **Retro Digital CAD Workstation** | [`07-retro-digital`](./07-retro-digital/) | 1980s vector storage terminal with CRT chassis vents, scanline filter, P1/P3/P4 phosphor switcher, 3D wireframe model, and interactive CLI prompt. |
| 08 | **Modular Tectonic Arrangement** | [`08-modular-tectonic`](./08-modular-tectonic/) | Asymmetric architectural formwork slabs separated by 4px seams, mass timber/earth/basalt surface switcher, and embodied carbon readout. |
| 09 | **Quiet Luxury** | [`09-quiet-luxury`](./09-quiet-luxury/) | Restrained serif typography with ample whitespace, hand-turned guilloché dial with specular sheen, and private viewing appointment drawer. |
| 10 | **Playful Constructivist** | [`10-playful-constructivist`](./10-playful-constructivist/) | Bauhaus Dessau geometric shapes (circle, triangle, semicircle, pillar) in primary colors with kinetic equilibrium modes and interactive form rotation. |

---

## Architectural Principles

1. **Zero External Dependencies**: Pure vanilla HTML, CSS, and modern JavaScript. No npm packages, remote icon fonts, CDNs, or external images.
2. **Pure CSS & SVG Assets**: All architectural colonnades, chronometer dials, vector polyhedra, aurora gradients, and geometric sculptures are rendered locally.
3. **Rigorous Class Scoping**: Every component is isolated behind a distinct class prefix (`.hr-swiss-*`, `.hr-mono-*`, `.hr-brutal-*`, `.hr-polar-*`, `.hr-spec-*`, `.hr-folio-*`, `.hr-retro-*`, `.hr-tect-*`, `.hr-lux-*`, `.hr-play-*`) preventing style leakage.
4. **Dual-Layer Responsiveness**: Complete fluid adaptability across desktop, tablet, and mobile using both `@media` queries and `@container` queries.
5. **Full Accessibility**: Semantic HTML5 elements (`<section>`, `<header>`, `<main>`, `<aside>`, `<footer>`), `aria-pressed`, `aria-selected`, `aria-live`, and clear keyboard focus indicators.

---

## Usage

### Individual Component
```html
<!-- 1. Stylesheet -->
<link rel="stylesheet" href="heroes/01-swiss-grid/hero.css">

<!-- 2. Markup from heroes/01-swiss-grid/hero.html -->
<section class="hr-swiss-hero" data-hero="swiss-grid">
  ...
</section>

<!-- 3. Controller -->
<script type="module" src="heroes/01-swiss-grid/hero.js"></script>
```

### Master Bundle
```html
<link rel="stylesheet" href="heroes/heroes.css">
<script type="module" src="heroes/heroes.js"></script>
```
