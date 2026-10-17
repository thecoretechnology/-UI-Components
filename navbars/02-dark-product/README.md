# 02 — Dark Developer / Product Navbar (Codebase)

A high-contrast dark theme navbar designed for developer tools, APIs, and technical SaaS products. Features monospace accents, version badge, and a neon lime CTA.

## Files
- `navbar.html`: Dark navbar markup with code brackets SVG logo and ARIA attributes.
- `navbar.css`: Scoped dark theme stylesheet using `--nb-dark-*` CSS variables.
- `navbar.js`: Responsive drawer controller with keyboard accessibility.

## Usage

```html
<link rel="stylesheet" href="navbars/02-dark-product/navbar.css">

<!-- Paste navbar.html snippet here -->

<script type="module" src="navbars/02-dark-product/navbar.js"></script>
```

### Theming
```css
:root {
  --nb-dark-accent: #38bdf8;        /* Change lime to cyan or your brand color */
  --nb-dark-bg: #030712;            /* Ultra-deep black background */
}
```
