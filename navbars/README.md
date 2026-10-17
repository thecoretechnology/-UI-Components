# Navigation Bar Components

A set of 10 standalone navigation bar components built with plain HTML, CSS, and JavaScript.

---

## Component Catalog

| # | Component | Directory | Description |
|---|---|---|---|
| 01 | Clean SaaS | [`01-clean-saas`](./01-clean-saas/) | Modern B2B SaaS layout with solutions dropdown and CTA button |
| 02 | Dark Product | [`02-dark-product`](./02-dark-product/) | Dark theme with monospace tag, search shortcut, and terminal styling |
| 03 | Editorial | [`03-editorial`](./03-editorial/) | Publication style with serif typography and double line borders |
| 04 | Centered Brand | [`04-centered-brand`](./04-centered-brand/) | Symmetrical three-column layout with center logo and shopping bag counter |
| 05 | Floating Pill | [`05-floating-pill`](./05-floating-pill/) | Floating island navbar with frosted glass background blur |
| 06 | E-commerce Two-Level | [`06-ecommerce-two-level`](./06-ecommerce-two-level/) | Top utility bar with search suggestions, secondary department links below |
| 07 | Sidebar Dashboard | [`07-sidebar-dashboard`](./07-sidebar-dashboard/) | Vertical sidebar navigation that collapses into a drawer on mobile |
| 08 | Brutalist | [`08-brutalist`](./08-brutalist/) | Thick black borders, high contrast, hard drop shadows, and marquee ticker |
| 09 | Gradient Startup | [`09-gradient-startup`](./09-gradient-startup/) | Dark theme with subtle violet/purple glow accents and badge pill |
| 10 | Minimal Utility | [`10-minimal-utility`](./10-minimal-utility/) | Low-key layout with circular utility action buttons and quick search |

---

## Architecture

- **No external dependencies**: Pure HTML, CSS, and ES6 JavaScript. All icons are inline SVGs.
- **Scoped styling**: Each component uses an isolated class prefix (`.nb-saas-*`, `.nb-dark-*`, etc.) and CSS variables.
- **Accessible**: Hamburger buttons and dropdown menus handle ARIA states (`aria-expanded`, `aria-controls`), focus, and close on `Escape`.
- **Flexible usage**: Use individual component folders directly, or import the master `navbars.css` and `navbars.js` bundles.

---

## Using a Component

```html
<!-- 1. Include component styles -->
<link rel="stylesheet" href="navbars/01-clean-saas/navbar.css">

<!-- 2. Add component HTML from navbars/01-clean-saas/navbar.html -->
<header class="nb-saas-header" data-navbar="clean-saas">
  ...
</header>

<!-- 3. Load script -->
<script type="module" src="navbars/01-clean-saas/navbar.js"></script>
```

---

## Master Bundle

```html
<link rel="stylesheet" href="navbars/navbars.css">
<script type="module" src="navbars/navbars.js"></script>
```
