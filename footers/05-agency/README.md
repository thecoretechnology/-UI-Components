# 05 — Creative Agency Footer

A bold, dark-themed agency footer featuring an oversized call-to-action headline, studio availability notice, interactive email copy buttons with toast notifications, and studio links.

## Files
- `footer.html`: High-contrast semantic markup with toast notification container.
- `footer.css`: Scoped stylesheet using `--ft-agency-*` CSS variables.
- `footer.js`: Clipboard copy handler with animated toast feedback.

## Usage

```html
<link rel="stylesheet" href="footers/05-agency/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/05-agency/footer.js"></script>
```

### Theming
```css
:root {
  --ft-agency-bg: #141416;      /* Main background */
  --ft-agency-accent: #d4fb66;  /* Lime highlight color */
}
```
