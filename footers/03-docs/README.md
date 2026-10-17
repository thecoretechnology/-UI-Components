# 03 — Developer Documentation Footer

A dark-mode footer designed for technical documentation, developer platforms, and cloud consoles. Features categorized technical links, an interactive system status indicator, and a click-to-copy version tag.

## Files
- `footer.html`: Dark semantic markup with ARIA roles and monospace typography.
- `footer.css`: Scoped stylesheet using `--ft-docs-*` CSS variables.
- `footer.js`: Status latency simulation and version clipboard copy.

## Usage

```html
<link rel="stylesheet" href="footers/03-docs/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/03-docs/footer.js"></script>
```

### Theming
```css
:root {
  --ft-docs-bg: #0b0f19;        /* Main background */
  --ft-docs-accent: #a3e635;    /* Monospace accent color */
}
```
