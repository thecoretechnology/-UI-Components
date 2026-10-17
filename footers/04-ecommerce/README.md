# 04 — E-commerce Storefront Footer

A two-tier storefront footer with brand description, 10% discount newsletter signup with automatic coupon display, mobile accordion menus, payment badges, and legal links.

## Files
- `footer.html`: Storefront markup with responsive mobile accordions.
- `footer.css`: Scoped stylesheet using `--ft-shop-*` CSS variables.
- `footer.js`: Mobile accordion toggle handler and coupon code clipboard script.

## Usage

```html
<link rel="stylesheet" href="footers/04-ecommerce/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/04-ecommerce/footer.js"></script>
```

### Theming
```css
:root {
  --ft-shop-bg: #f8f5f0;        /* Storefront background */
  --ft-shop-primary: #d85f37;   /* Terracotta primary accent */
}
```
