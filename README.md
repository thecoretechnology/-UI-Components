# Navigation Bars

A collection of 10 responsive navigation bar components written in standard HTML, CSS, and vanilla JavaScript.

No frameworks, no build tools, and no external icon libraries. Every icon is an inline SVG, and each navbar has its own scoped CSS and independent JavaScript controller.

---

## Preview

Open `index.html` in any modern web browser to view all 10 navigation bars.

The showcase includes:
- Viewport switcher (Desktop 1200px, Tablet 768px, Mobile 375px)
- Real-time interaction feedback (dropdowns, mobile hamburger drawers, search bars, cart/bag badges, tab counters)
- Source code modal with tabs for HTML, CSS, and JS with one-click copy

To run locally with a local server (optional, but helpful for ES module imports):
```bash
# Using Python
python -m http.server 3000

# Or using Node
npx serve .
```
Then visit `http://localhost:3000`.

---

## File Structure

```
├── .gitignore               # Ignores reference files, node_modules, temp files
├── index.html               # Interactive showcase page for all 10 navbars
├── README.md                # Project documentation
└── navbars/                 # Component library
    ├── navbars.css          # Master stylesheet (imports all 10 components)
    ├── navbars.js           # Master script (imports and inits all 10 components)
    ├── README.md            # Component catalog reference
    │
    ├── 01-clean-saas/       # SaaS / B2B header with dropdown & CTA
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    ├── 02-dark-product/     # Dark developer / engineering header with terminal accents
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    ├── 03-editorial/        # Serif typography layout with issue number & double borders
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    ├── 04-centered-brand/   # Symmetrical 3-column luxury / lifestyle layout
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    ├── 05-floating-pill/    # Detached floating pill bar with frosted glass backdrop
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    ├── 06-ecommerce-two-level/  # Two-tier header with live search & category links
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    ├── 07-sidebar-dashboard/    # Left-hand admin sidebar that collapses to mobile drawer
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    ├── 08-brutalist/        # High-contrast bold borders, hard offset shadows, marquee
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    ├── 09-gradient-startup/ # Dark gradient banner with blurred glow accents
    │   ├── navbar.html
    │   ├── navbar.css
    │   ├── navbar.js
    │   └── README.md
    │
    └── 10-minimal-utility/  # Clean single-line layout with popover utilities
        ├── navbar.html
        ├── navbar.css
        ├── navbar.js
        └── README.md
```

---

## How to Use

### Option 1: Use a Single Component

Each folder inside `navbars/` is self-contained. To use one in your project:

1. Copy the HTML from `navbar.html` into your page.
2. Link the component's stylesheet in `<head>`:
   ```html
   <link rel="stylesheet" href="navbars/01-clean-saas/navbar.css">
   ```
3. Load the component script at the end of `<body>`:
   ```html
   <script type="module" src="navbars/01-clean-saas/navbar.js"></script>
   ```

Each component's JavaScript automatically runs when the DOM finishes loading. You can also import and call the initializer manually:

```javascript
import { initCleanSaaSNavbar } from './navbars/01-clean-saas/navbar.js';

initCleanSaaSNavbar(document);
```

### Option 2: Use All Components Together

If you are using several components or testing multiple layouts:

```html
<!-- In <head> -->
<link rel="stylesheet" href="navbars/navbars.css">

<!-- In <body> -->
<script type="module" src="navbars/navbars.js"></script>
```

---

## Customization

All components use scoped CSS variables defined in their `:root` block (e.g. `--nb-saas-primary`, `--nb-dark-bg`, `--nb-pill-blur`).

To customize colors, padding, or fonts, override the corresponding CSS variables in your own stylesheet:

```css
:root {
  --nb-saas-primary: #0ea5e9;
  --nb-saas-radius: 8px;
}
```

---

## Features

- **No dependencies**: Standard HTML5, CSS3, and ES6 JavaScript.
- **Accessible**: Hamburger toggles and dropdown menus manage `aria-expanded`, `aria-label`, and keyboard focus (`Escape` key closes open drawers).
- **Scoped classes**: Each component uses a distinct class prefix (like `.nb-saas-*`, `.nb-dark-*`, `.nb-edit-*`) so styles won't collide with existing page rules.
- **Responsive**: All headers switch cleanly between desktop layouts and mobile navigation menus below 860px width.
