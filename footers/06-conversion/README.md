# 06 — Newsletter Conversion Footer

A dedicated newsletter signup footer featuring an isolated focus card, frequency preferences (weekly digest vs monthly summary), email validation, and a minimal bottom navigation strip.

## Files
- `footer.html`: Focused subscription markup with preference selectors.
- `footer.css`: Scoped stylesheet using `--ft-conv-*` CSS variables.
- `footer.js`: Form submission and frequency selection controller.

## Usage

```html
<link rel="stylesheet" href="footers/06-conversion/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/06-conversion/footer.js"></script>
```

### Theming
```css
:root {
  --ft-conv-primary: #4338ca;   /* Brand button & highlight color */
  --ft-conv-radius: 12px;       /* Focus card border radius */
}
```
