# UI Components Collection

A library of responsive navigation bars and footers built with plain HTML, CSS, and vanilla JavaScript.

No frameworks, no build tools, and no external icon libraries. Every icon is an inline SVG, and each component has its own scoped CSS and independent JavaScript controller.

---

## Preview

Open `index.html` in any modern web browser to view the interactive showcase.

The showcase includes:
- Section toggle to switch between **Navigation Bars (10)** and **Footers (10)**
- Viewport switcher (Desktop 1200px, Tablet 768px, Mobile 375px)
- Canvas background switcher (Default, White, Dark)
- Live interactive behaviors (dropdowns, mobile drawers, newsletter forms with validation, studio time clocks, clipboard helpers, and mobile accordions)
- Source code modal with tabs for HTML, CSS, and JS with one-click copy

To run locally with a static server (recommended for ES module imports):
```bash
# Using Python
python -m http.server 3000

# Or using Node
npx serve .
```
Then open `http://localhost:3000`.

---

## File Structure

```
├── .gitignore               # Ignores references/, node_modules/, temp files
├── index.html               # Interactive showcase page for all components
├── README.md                # Project documentation
│
├── navbars/                 # Navigation Bars (Day 1)
│   ├── navbars.css          # Master stylesheet bundle for all 10 navbars
│   ├── navbars.js           # Master script bundle for all 10 navbars
│   ├── README.md            # Navbar component catalog
│   │
│   ├── 01-clean-saas/       # SaaS / B2B header with solutions dropdown & CTA
│   ├── 02-dark-product/     # Dark developer header with monospace logo & terminal styling
│   ├── 03-editorial/        # Serif typography layout with issue number & double borders
│   ├── 04-centered-brand/   # Symmetrical 3-column luxury layout with bag counter
│   ├── 05-floating-pill/    # Detached floating pill bar with frosted glass backdrop
│   ├── 06-ecommerce-two-level/  # Two-tier header with live search & department links
│   ├── 07-sidebar-dashboard/    # Left-hand admin sidebar that collapses to mobile drawer
│   ├── 08-brutalist/        # High-contrast bold borders, hard offset shadows, marquee
│   ├── 09-gradient-startup/ # Dark gradient banner with glow accents
│   └── 10-minimal-utility/  # Clean single-line layout with popover utilities
│
└── footers/                 # Footers (Day 2)
    ├── footers.css          # Master stylesheet bundle for all 10 footers
    ├── footers.js           # Master script bundle for all 10 footers
    ├── README.md            # Footer component catalog
    │
    ├── 01-clean-saas/       # Standard SaaS footer with newsletter validation & social links
    ├── 02-editorial/        # Publication footer with serif masthead & smooth back-to-top
    ├── 03-docs/             # Dark developer docs footer with live status ping & version copy
    ├── 04-ecommerce/        # Storefront footer with 10% coupon reveal & mobile accordions
    ├── 05-agency/           # Creative agency footer with headline CTA & click-to-copy email
    ├── 06-conversion/       # Newsletter box with frequency pills (weekly/monthly)
    ├── 07-app-utility/      # Compact dashboard status bar with keyboard shortcut modal (?)
    ├── 08-asymmetric/       # Asymmetric editorial layout with live timezone clocks (LON, NYC, TYO)
    ├── 09-brutalist/        # Neo-brutalist cards with tactile click states & email copy card
    └── 10-global/           # Travel footer with dynamic language and currency selectors
```

---

## Component Structure

Every component folder is self-contained and consists of:
- `navbar.html` or `footer.html`: Semantic, accessible HTML markup with inline SVGs and ARIA attributes.
- `navbar.css` or `footer.css`: Scoped CSS using dedicated class prefixes (`.nb-*` for navbars, `.ft-*` for footers) and CSS custom properties (`:root`).
- `navbar.js` or `footer.js`: ES module controller that manages responsive state, keyboard navigation (`Escape`, `?`), and interactions.
- `README.md`: Specific usage instructions and theming variables.

---

## How to Use

### Using a Single Component

To use any component individually in your own project:

1. Copy the component's HTML file into your page.
2. Link the component's stylesheet in `<head>`:
   ```html
   <link rel="stylesheet" href="footers/01-clean-saas/footer.css">
   ```
3. Load the component's script at the end of `<body>`:
   ```html
   <script type="module" src="footers/01-clean-saas/footer.js"></script>
   ```

Each component's JavaScript automatically runs when the DOM finishes loading. You can also import and call initializers manually:

```javascript
import { initCleanSaaSFooter } from './footers/01-clean-saas/footer.js';

initCleanSaaSFooter(document);
```

### Using Bundles

If you want to use multiple components across an application:

```html
<!-- Load all navbar or footer styles -->
<link rel="stylesheet" href="navbars/navbars.css">
<link rel="stylesheet" href="footers/footers.css">

<!-- Load all scripts -->
<script type="module" src="navbars/navbars.js"></script>
<script type="module" src="footers/footers.js"></script>
```

---

## Customization

All components expose scoped CSS custom properties at the top of their stylesheet. To change colors, fonts, or radiuses, override them in your own CSS:

```css
:root {
  /* Customize SaaS navbar */
  --nb-saas-primary: #0ea5e9;

  /* Customize SaaS footer */
  --ft-saas-primary: #0ea5e9;
  --ft-saas-radius: 8px;
}
```

---

## Features

- **Zero dependencies**: No npm packages, frameworks, or external icon fonts required.
- **Strictly scoped**: Prefixes like `.nb-saas-*` and `.ft-shop-*` prevent styling leaks or conflicts with your host application styles.
- **Accessible**: Managed ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`, `aria-live`), keyboard focus management, and `Escape` key listeners.
- **Responsive**: Tested across Desktop (1200px), Tablet (768px), and Mobile (375px) breakpoints.
