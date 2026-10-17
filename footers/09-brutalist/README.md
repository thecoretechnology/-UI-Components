# 09 — Brutalist / Experimental Footer

A high-contrast neo-brutalist footer with thick 2px borders, tactile offset click shadows, numbered navigation cards, and an interactive email clipboard block.

## Files
- `footer.html`: Brutalist grid markup with tactile action blocks.
- `footer.css`: Scoped stylesheet using `--ft-brutal-*` CSS variables and hard box-shadows.
- `footer.js`: Clipboard copy controller for the email card.

## Usage

```html
<link rel="stylesheet" href="footers/09-brutalist/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/09-brutalist/footer.js"></script>
```

### Theming
```css
:root {
  --ft-brutal-bg: #e8ff45;      /* Main background */
  --ft-brutal-ink: #111111;     /* Ink and border color */
}
```
