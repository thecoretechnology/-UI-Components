# 08 — Asymmetric Layout Footer

An asymmetrical editorial/agency footer featuring an oversized brand statement, live local studio clocks (London, New York, Tokyo), and unbalanced navigation groups.

## Files
- `footer.html`: Unbalanced grid markup with timezone elements.
- `footer.css`: Scoped stylesheet using `--ft-asym-*` CSS variables and muted sage green palette.
- `footer.js`: Live international timezone clock formatter.

## Usage

```html
<link rel="stylesheet" href="footers/08-asymmetric/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/08-asymmetric/footer.js"></script>
```

### Theming
```css
:root {
  --ft-asym-bg: #edf5f2;       /* Sage green background */
  --ft-asym-ink: #163d32;      /* Deep forest text color */
}
```
