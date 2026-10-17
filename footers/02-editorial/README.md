# 02 — Minimal Editorial Footer

A publication-style footer with serif typography, issue metadata, a horizontal dividing line, and an integrated smooth back-to-top button.

## Files
- `footer.html`: Editorial layout markup with semantic tags.
- `footer.css`: Scoped typography styles using `--ft-edit-*` CSS variables.
- `footer.js`: Smooth back-to-top scroll handler.

## Usage

```html
<!-- Optional: Import Playfair Display font -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="footers/02-editorial/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/02-editorial/footer.js"></script>
```

### Theming
```css
:root {
  --ft-edit-bg: #fcfaf6;       /* Background tone */
  --ft-edit-ink: #28251f;      /* Text color */
  --ft-edit-accent: #8b3a22;   /* Link hover accent */
}
```
