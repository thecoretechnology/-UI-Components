# 10 — Global Multi-Region Footer

A multi-regional travel and lifestyle footer with dynamic language and currency selectors, regional destination links, support navigation, and live locale status display.

## Files
- `footer.html`: Global layout markup with accessible native dropdowns.
- `footer.css`: Scoped stylesheet using `--ft-global-*` CSS variables in deep oceanic navy.
- `footer.js`: Locale preference state listener and status badge updater.

## Usage

```html
<link rel="stylesheet" href="footers/10-global/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/10-global/footer.js"></script>
```

### Theming
```css
:root {
  --ft-global-bg: #102438;      /* Deep navy background */
  --ft-global-accent: #83d9e5;  /* Soft cyan highlight */
}
```
