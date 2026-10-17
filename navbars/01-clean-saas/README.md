# 01 — Clean SaaS Navbar (Orbit)

A clean, modern SaaS header designed for web apps and B2B products. Includes balanced navigation links, a prominent CTA, and a responsive animated hamburger menu.

## Files
- `navbar.html`: Reusable semantic markup with accessible SVG icons and ARIA attributes.
- `navbar.css`: Modular scoped stylesheet using `--nb-saas-*` CSS variables.
- `navbar.js`: Mobile menu controller with ESC key and outside-click handling.

## Usage

### 1. In Any HTML Page
Include the stylesheet in your `<head>` and script at the bottom of `<body>`:

```html
<link rel="stylesheet" href="navbars/01-clean-saas/navbar.css">

<!-- Paste navbar.html snippet here -->

<script type="module" src="navbars/01-clean-saas/navbar.js"></script>
```

### 2. Customizing Theme Colors
Override any CSS variable in your own CSS:

```css
:root {
  --nb-saas-primary: #2563eb;       /* Primary brand color */
  --nb-saas-primary-hover: #1d4ed8; /* Button hover state */
  --nb-saas-radius: 8px;            /* Change pill buttons to rounded squares */
}
```
