# Footer Components

A set of 10 standalone footer components built with plain HTML, CSS, and vanilla JavaScript.

---

## Component Catalog

| # | Component | Directory | Description |
|---|---|---|---|
| 01 | Clean SaaS | [`01-clean-saas`](./01-clean-saas/) | Product and company columns, social links, and an email signup form |
| 02 | Editorial | [`02-editorial`](./02-editorial/) | Serif publication masthead, issue metadata, horizontal rule, and smooth back-to-top button |
| 03 | Docs | [`03-docs`](./03-docs/) | Dark engineering theme with live status ping simulation and click-to-copy version tag |
| 04 | E-commerce | [`04-ecommerce`](./04-ecommerce/) | Storefront footer with 10% discount signup, coupon code copy, and mobile accordions |
| 05 | Agency | [`05-agency`](./05-agency/) | Large headline callout, studio availability badge, and click-to-copy email with toast |
| 06 | Conversion | [`06-conversion`](./06-conversion/) | Focused newsletter box with frequency pills (weekly/monthly) and instant validation |
| 07 | App Utility | [`07-app-utility`](./07-app-utility/) | Single-row dashboard utility bar with system status, version pill, and keyboard shortcut modal (`?`) |
| 08 | Asymmetric | [`08-asymmetric`](./08-asymmetric/) | Large brand statement with live international clocks (London, New York, Tokyo) |
| 09 | Brutalist | [`09-brutalist`](./09-brutalist/) | Neo-brutalist borders, hard offset shadows, numbered cards, and email clipboard block |
| 10 | Global | [`10-global`](./10-global/) | Multi-region travel footer with dynamic language and currency selectors |

---

## Architecture

- **No external dependencies**: Pure HTML, CSS, and ES6 JavaScript. All icons are inline SVGs.
- **Scoped styling**: Each component uses an isolated class prefix (`.ft-saas-*`, `.ft-docs-*`, etc.) and CSS variables.
- **Accessible**: Semantic elements, `aria-expanded` attributes on collapsible sections, live regions for form status, and keyboard navigation.
- **Flexible usage**: Use individual component folders directly, or import the master `footers.css` and `footers.js` bundles.

---

## Using an Individual Footer

```html
<!-- 1. Include component stylesheet -->
<link rel="stylesheet" href="footers/01-clean-saas/footer.css">

<!-- 2. Add component HTML from footers/01-clean-saas/footer.html -->
<footer class="ft-saas-root" data-footer="clean-saas">
  ...
</footer>

<!-- 3. Load script -->
<script type="module" src="footers/01-clean-saas/footer.js"></script>
```

---

## Master Bundle

```html
<link rel="stylesheet" href="footers/footers.css">
<script type="module" src="footers/footers.js"></script>
```
