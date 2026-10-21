# UI Components Collection

A curated library of 50 responsive navigation bars, footers, hero sections, contact forms, and authentication screens built with plain HTML, CSS, and vanilla JavaScript.

No frameworks, build tools, or runtime dependencies. All icons and graphics (chronometer dials, CRT terminal wireframes, colonnade reliefs, vector isometric prisms, mascot faces, and geometric sculptures) are implemented purely with CSS and inline SVGs. Each component includes scoped styling and an independent JavaScript controller.

---

## Preview

Open `index.html` in any modern web browser to view the interactive showcase.

The showcase includes:
- Section toggle to switch between **Authentication (10)**, **Contact Forms (10)**, **Navigation Bars (10)**, **Footers (10)**, and **Hero Sections (10)**
- Viewport switcher (Desktop 1200px, Tablet 768px, Mobile 375px)
- Canvas background switcher (Light, White, Dark)
- Live interactive behaviors (dropdowns, mobile drawers, newsletter validation, chronograph stopwatches, retro CRT terminal commands, variable font weight morphers, material finishes, multi-step wizards, diagnostic report triage, adaptive department routing, password eye toggles, CLI curl token generators, guided registration progression, and login/register dynamic morphing)
- Source code modal with tabs for HTML, CSS, and JS with one-click copy (100% offline & `file://` compatible, 150 embedded cache entries)

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
├── index.html               # Interactive showcase page for all 50 components
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
├── footers/                 # Footers (Day 2)
│   ├── footers.css          # Master stylesheet bundle for all 10 footers
│   ├── footers.js           # Master script bundle for all 10 footers
│   ├── README.md            # Footer component catalog
│   │
│   ├── 01-clean-saas/       # Standard SaaS footer with newsletter validation & social links
│   ├── 02-editorial/        # Publication footer with serif masthead & smooth back-to-top
│   ├── 03-docs/             # Dark developer docs footer with live status ping & version copy
│   ├── 04-ecommerce/        # Storefront footer with 10% coupon reveal & mobile accordions
│   ├── 05-agency/           # Creative agency footer with headline CTA & click-to-copy email
│   ├── 06-conversion/       # Newsletter box with frequency pills (weekly/monthly)
│   ├── 07-app-utility/      # Compact dashboard status bar with keyboard shortcut modal (?)
│   ├── 08-asymmetric/       # Asymmetric editorial layout with live timezone clocks (LON, NYC, TYO)
│   ├── 09-brutalist/        # Neo-brutalist cards with tactile click states & email copy card
│   └── 10-global/           # Travel footer with dynamic language and currency selectors
│
├── heroes/                  # Hero Sections (Day 3 — 10 Design Movements)
│   ├── heroes.css           # Master stylesheet bundle for all 10 heroes
│   ├── heroes.js            # Master script bundle for all 10 heroes
│   ├── README.md            # Hero section component catalog
│   │
│   ├── 01-swiss-grid/             # Swiss/grid-based typography with ratio switcher & coordinate tracking
│   ├── 02-editorial-monograph/    # Classical architectural monograph with 3-tier solar lighting simulation
│   ├── 03-graphic-brutalism/      # High-voltage grid dispatch with 3px black borders & tactile rocker breakers
│   ├── 04-image-narrative/        # Svalbard glaciological survey with CSS aurora toggle & surveyor reticle
│   ├── 05-product-spec/           # Swiss mechanical chronometer with functional monopusher chronograph stopwatch
│   ├── 06-personal-portfolio/     # Scandinavian type foundry atelier with variable font weight slider (100-900)
│   ├── 07-retro-digital/          # 1980s vector storage terminal with CRT scanlines, phosphor modes & CLI prompt
│   ├── 08-modular-tectonic/       # Asymmetric tectonic formwork slabs with material switcher & carbon readouts
│   ├── 09-quiet-luxury/           # Radically restrained Didot serif, hand-turned guilloché medallion & salon drawer
│   └── 10-playful-constructivist/ # Bauhaus Dessau elemental geometric laboratory with kinetic shape rotation
│
├── forms/                   # Contact Forms (Day 4 — 10 Original Client-Ready Designs)
│   ├── forms.css            # Master stylesheet bundle for all 10 contact forms
│   ├── forms.js             # Master script bundle for all 10 contact forms
│   ├── README.md            # Contact form component catalog
│   │
│   ├── 01-minimal-studio/       # Restrained typography, generous whitespace, scope chips & thin borders
│   ├── 02-split-layout/         # Asymmetric 38/62 composition with studio coordinates, hours & subject pills
│   ├── 03-dark-premium/         # Low-contrast obsidian surface, Playfair Display serif & practice area select
│   ├── 04-agency-brief/         # Interactive multi-select service chips, segmented budget & timeline pills
│   ├── 05-conversational-step/  # 3-step wizard (Intro -> Focus -> Vision) with progress bar & state preservation
│   ├── 06-booking-request/      # Meeting type cards (30m, 60m, 45m), date picker & time window dropdown
│   ├── 07-technical-support/    # Engineering diagnostic intake console with P1-P4 severity & monospace log buffer
│   ├── 08-editorial-personal/   # Asymmetric literary colophon with PGP key & parchment-toned contact note
│   ├── 09-bold-brutalist/       # Neo-brutalist dispatch with 3px black borders, drop shadows & speed pills
│   └── 10-interactive-inquiry/  # Adaptive department router (Sales, Partner, Press, Careers) with dynamic fields
│
└── auth/                    # Authentication (Day 5 — 10 Login & Sign-up UI Designs)
    ├── auth.css             # Master stylesheet bundle for all 10 authentication interfaces
    ├── auth.js              # Master script bundle for all 10 authentication interfaces
    ├── README.md            # Authentication component catalog
    │
    ├── 01-minimal-login/        # Typography-led compact login, ghost borders, eye toggle & recovery card
    ├── 02-split-screen/         # Asymmetric 42/58 split, vector prism geometry, live telemetry coords & access tabs
    ├── 03-dark-developer/       # #0d1117 terminal console, cluster selector, dual Password/PAT & dynamic CLI curl
    ├── 04-editorial-luxury/     # Didot serif, warm ivory surface, brass checkmark, archival recovery & invitation gate
    ├── 05-playful-signup/       # Vector CSS mascot face, craft discipline pills, handle ticker & 3-tier strength meter
    ├── 06-multistep-register/   # 3-stage guided registration (Credentials -> Org -> Review) with state preservation
    ├── 07-social-sso/           # Google, Microsoft, Okta, GitHub SSO with demo disclosures & corporate magic link
    ├── 08-team-invitation/      # Contextual invite card, locked email pill, password confirmation & timezone select
    ├── 09-bold-brutalist/       # 3px hard black borders, 7px drop shadow, operator callsign, text toggle & clearance pills
    └── 10-combined-switcher/    # Segmented pill switcher morphing between Sign In and Register while preserving email
```

---

## Component Structure

Every component folder is self-contained and consists of:
- `auth.html` (or `form.html` / `hero.html` / `navbar.html` / `footer.html`): Semantic, accessible HTML markup with inline SVGs and ARIA attributes.
- `auth.css` (or `form.css` / `hero.css` / `navbar.css` / `footer.css`): Scoped CSS using dedicated class prefixes (`.auth-*`, `.cf-*`, `.hr-*`, `.nb-*`, `.ft-*`), container queries, and CSS custom properties (`:root`).
- `auth.js` (or `form.js` / `hero.js` / `navbar.js` / `footer.js`): ES module controller that manages responsive states, validations, multi-step wizards, toggles, and keyboard navigation.
- `README.md`: Specific usage instructions, design tokens, and documentation.

---

## How to Use

### 1. Standalone Component
Every component works completely on its own without external dependencies:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./auth/01-minimal-login/auth.css">
</head>
<body>
  <!-- Insert contents of auth/01-minimal-login/auth.html -->
  <script type="module" src="./auth/01-minimal-login/auth.js"></script>
</body>
</html>
```

### 2. Master Bundle
To use the entire collection together:
```html
<link rel="stylesheet" href="./navbars/navbars.css">
<link rel="stylesheet" href="./footers/footers.css">
<link rel="stylesheet" href="./heroes/heroes.css">
<link rel="stylesheet" href="./forms/forms.css">
<link rel="stylesheet" href="./auth/auth.css">

<script type="module">
  import { initAllNavbars } from './navbars/navbars.js';
  import { initAllFooters } from './footers/footers.js';
  import { initAllHeroes } from './heroes/heroes.js';
  import { initAllForms } from './forms/forms.js';
  import { initAllAuth } from './auth/auth.js';

  initAllNavbars();
  initAllFooters();
  initAllHeroes();
  initAllForms();
  initAllAuth();
</script>
```

---

## Quality & Accessibility Standards

- **Honest Demo Validation**: All authentication and contact forms prevent actual network transmission, validate inputs locally, display clear inline error messages, and show feedback such as *"Demo Simulation: Authenticated successfully. Client showcase only — no credentials persisted or transmitted."*
- **Accessible markup**: Native button and link elements, `aria-expanded`, `aria-selected`, `aria-pressed`, `aria-label`, and `aria-live` polite regions.
- **Keyboard navigation**: All interactive elements (tabs, radio cards, step controls, buttons, password toggles) are fully reachable and actionable via keyboard.
- **Zero remote images or fonts needed**: All graphics, vectors, indicators, and dials are drawn locally in CSS and SVG.
- **Zero layout shifts & horizontal overflow**: Strict `box-sizing: border-box`, fluid clamp typography, and dual-layer `@container` + `@media` query responsiveness.
