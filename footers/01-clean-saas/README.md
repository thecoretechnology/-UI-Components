# 01 — Clean SaaS Footer

A balanced SaaS footer with company info, social links, categorized product and company navigation, and an interactive newsletter signup form.

## Files
- `footer.html`: Semantic markup with inline SVGs and ARIA attributes.
- `footer.css`: Scoped stylesheet using `--ft-saas-*` CSS variables.
- `footer.js`: Form submission controller with email validation and status feedback.

## Usage

```html
<link rel="stylesheet" href="footers/01-clean-saas/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/01-clean-saas/footer.js"></script>
```

### Theming
```css
:root {
  --ft-saas-primary: #2563eb;       /* Primary brand color */
  --ft-saas-primary-hover: #1d4ed8; /* Button hover state */
  --ft-saas-radius: 6px;            /* Border radius */
}
```
