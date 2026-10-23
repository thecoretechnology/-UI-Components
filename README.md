# UI Components Collection

A curated library of 70 responsive navigation bars, footers, hero sections, contact forms, authentication screens, pricing sections, and testimonials built with plain HTML, CSS, and vanilla JavaScript.

No frameworks, build tools, or runtime dependencies. All icons, graphs, indicators, and dials are implemented purely with CSS and inline SVGs. Each component includes scoped styling and an independent JavaScript controller.

---

## Preview

Open `index.html` in any modern web browser to view the interactive showcase.

The showcase includes:
- Section toggle to switch between **Testimonials (10)**, **Pricing Sections (10)**, **Authentication (10)**, **Contact Forms (10)**, **Navigation Bars (10)**, **Footers (10)**, and **Hero Sections (10)**
- Viewport switcher (Desktop 1200px, Tablet 768px, Mobile 375px)
- Canvas background switcher (Light, White, Dark)
- Live interactive behaviors (dynamic testimonial carousels, video interview modals, category directory filters, metric deep-dive ledgers, billing-period toggles, usage sliders, currency converters, feature diff filters, transparent cost calculators, token estimators, statement of work modals, custom scope intake generators, multi-step wizards, diagnostic report triage, password eye toggles, and variable font morphers)
- Source code modal with tabs for HTML, CSS, and JS with one-click copy (100% offline & `file://` compatible, 210 embedded cache entries)

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
├── index.html               # Interactive showcase page for all 70 components
├── README.md                # Project documentation
│
├── testimonials/            # Testimonials (Day 7 — 10 Distinct Client-Ready Variations)
│   ├── testimonials.css     # Master stylesheet bundle for all 10 testimonials
│   ├── testimonials.js      # Master script bundle for all 10 testimonials
│   ├── README.md            # Testimonial catalog & design tokens
│   │
│   ├── 01-editorial-quote/      # Print-inspired broadsheet quote, generous whitespace & publication folios
│   ├── 02-customer-story/       # Asymmetric 40/60 split with author details, location & architecture expander
│   ├── 03-dark-contrast/        # Stark obsidian surface (`#050505`), deployment specs & cryptographic verification
│   ├── 04-horizontal-slider/    # Fluid carousel with prev/next buttons, pagination, touch swipe & reduced-motion
│   ├── 05-compact-grid/         # 3-column irregular density matrix (compact, medium technical, full architectural)
│   ├── 06-video-preview/        # Video thumbnail layout with duration badge & simulated player modal with transcript
│   ├── 07-numbers-results/      # 3 quantified engineering metric cards with interactive deep-dive ledger
│   ├── 08-minimal-logo/         # Ultra-restrained monochrome wordmark, single quote line & generous whitespace
│   ├── 09-featured-supporting/  # Asymmetric 60/40 layout with dominant spotlight review & supporting peer stack
│   └── 10-interactive-wall/     # Filterable directory wall with category tabs (All, Design, SaaS, Edu, Services) & search
│
├── pricing/                 # Pricing Sections (Day 6 — 10 Distinct Client-Ready Designs)
│   ├── pricing.css          # Master stylesheet bundle for all 10 pricing sections
│   ├── pricing.js           # Master script bundle for all 10 pricing sections
│   ├── README.md            # Pricing section catalog & design tokens
│   │
│   ├── 01-classic-tier/         # Restrained tabular aligned Free / Pro / Business grid with hairline dividers
│   ├── 02-minimal-editorial/    # Broadsheet serif typography, Didot manifesto & live 3-currency switcher (USD, EUR, GBP)
│   ├── 03-usage-based/          # Light engineering telemetry console, unit pricing ($0.002/1k), 100k free tier & live ledger
│   ├── 04-billing-toggle/       # Accessible switch, dynamic 20% annual discount price swapping & mathematical savings
│   ├── 05-single-plan/          # Lifetime software license ($189 one-time), deliverable checklist & interactive add-ons
│   ├── 06-feature-matrix/       # Deep comparison table, screen-reader checkmarks & "Show differences only" filter
│   ├── 07-service-packages/     # Fixed-scope agency packages (2-Wk Sprint, 6-Wk Turnkey, Retainer) & SOW modal
│   ├── 08-pricing-calculator/   # Multi-parameter estimator for seats, storage, SLA & 15% team volume discount
│   ├── 09-credit-bundles/       # Modern fintech token wallet, 4 coin-stack tiers ($0.050 to $0.018) & workload burn tool
│   └── 10-enterprise-contact/   # Executive institutional governance suite, 5 compliance shields, 3 pillars & MSA intake
│
├── auth/                    # Authentication (Day 5 — 10 Login & Sign-up UI Designs)
│   ├── auth.css             # Master stylesheet bundle for all 10 authentication interfaces
│   ├── auth.js              # Master script bundle for all 10 authentication interfaces
│   ├── README.md            # Authentication component catalog
│   │
│   ├── 01-minimal-login/        # Typography-led compact login, ghost borders, eye toggle & recovery card
│   ├── 02-split-screen/         # Asymmetric 42/58 split, vector prism geometry, live telemetry coords & access tabs
│   ├── 03-dark-developer/       # #0d1117 terminal console, cluster selector, dual Password/PAT & dynamic CLI curl
│   ├── 04-editorial-luxury/     # Didot serif, warm ivory surface, brass checkmark, archival recovery & invitation gate
│   ├── 05-playful-signup/       # Vector CSS mascot face, craft discipline pills, handle ticker & 3-tier strength meter
│   ├── 06-multistep-register/   # 3-stage guided registration (Credentials -> Org -> Review) with state preservation
│   ├── 07-social-sso/           # Google, Microsoft, Okta, GitHub SSO with demo disclosures & corporate magic link
│   ├── 08-team-invitation/      # Contextual invite card, locked email pill, password confirmation & timezone select
│   ├── 09-bold-brutalist/       # 3px hard black borders, 7px drop shadow, operator callsign, text toggle & clearance pills
│   └── 10-combined-switcher/    # Segmented pill switcher morphing between Sign In and Register while preserving email
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
└── heroes/                  # Hero Sections (Day 3 — 10 Design Movements)
    ├── heroes.css           # Master stylesheet bundle for all 10 heroes
    ├── heroes.js            # Master script bundle for all 10 heroes
    ├── README.md            # Hero section component catalog
    │
    ├── 01-swiss-grid/             # Swiss/grid-based typography with ratio switcher & coordinate tracking
    ├── 02-editorial-monograph/    # Classical architectural monograph with 3-tier solar lighting simulation
    ├── 03-graphic-brutalism/      # High-voltage grid dispatch with 3px black borders & tactile rocker breakers
    ├── 04-image-narrative/        # Svalbard glaciological survey with CSS aurora toggle & surveyor reticle
    ├── 05-product-spec/           # Swiss mechanical chronometer with functional monopusher chronograph stopwatch
    ├── 06-personal-portfolio/     # Scandinavian type foundry atelier with variable font weight slider (100-900)
    ├── 07-retro-digital/          # 1980s vector storage terminal with CRT scanlines, phosphor modes & CLI prompt
    ├── 08-modular-tectonic/       # Asymmetric tectonic formwork slabs with material switcher & carbon readouts
    ├── 09-quiet-luxury/           # Radically restrained Didot serif, hand-turned guilloché medallion & salon drawer
    └── 10-playful-constructivist/ # Bauhaus Dessau elemental geometric laboratory with kinetic shape rotation
```

---

## Component Structure

Every component folder is self-contained and consists of:
- `pricing.html` (or `auth.html` / `form.html` / `hero.html` / `navbar.html` / `footer.html`): Semantic, accessible HTML markup with inline SVGs and ARIA attributes.
- `pricing.css` (or `auth.css` / `form.css` / `hero.css` / `navbar.css` / `footer.css`): Scoped CSS using dedicated class prefixes (`.pr-*`, `.auth-*`, `.cf-*`, `.hr-*`, `.nb-*`, `.ft-*`), container queries, and CSS custom properties (`:root`).
- `pricing.js` (or `auth.js` / `form.js` / `hero.js` / `navbar.js` / `footer.js`): ES module controller that manages live calculations, currency conversions, sliders, toggles, filters, and keyboard navigation.
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
  <link rel="stylesheet" href="./pricing/04-billing-toggle/pricing.css">
</head>
<body>
  <!-- Insert contents of pricing/04-billing-toggle/pricing.html -->
  <script type="module" src="./pricing/04-billing-toggle/pricing.js"></script>
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
<link rel="stylesheet" href="./pricing/pricing.css">
<link rel="stylesheet" href="./testimonials/testimonials.css">

<script type="module">
  import { initAllNavbars } from './navbars/navbars.js';
  import { initAllFooters } from './footers/footers.js';
  import { initAllHeroes } from './heroes/heroes.js';
  import { initAllForms } from './forms/forms.js';
  import { initAllAuth } from './auth/auth.js';
  import { initAllPricing } from './pricing/pricing.js';
  import { initAllTestimonials } from './testimonials/testimonials.js';

  initAllNavbars();
  initAllFooters();
  initAllHeroes();
  initAllForms();
  initAllAuth();
  initAllPricing();
  initAllTestimonials();
</script>
```

---

## Quality & Accessibility Standards

- **Honest Demo Simulation & Math**: All pricing components perform transparent client-side calculations based on displayed unit rates. Volume discounts, annual savings, currency conversions, and usage estimates are calculated truthfully with explicit formulas and disclaimers.
- **Accessible Markup**: Native button and link elements, `role="switch"`, `aria-checked`, `role="radiogroup"`, `aria-label`, and `aria-live="polite"` regions.
- **Keyboard Navigation**: All interactive elements (toggles, sliders, radio cards, step controls, buttons, filter checkboxes) are fully reachable and actionable via keyboard (`Tab`, `Space`, `Enter`).
- **Zero Remote Dependencies**: Zero npm packages, frameworks, or remote CDN fonts/icons. All graphics, vectors, indicators, and dials are drawn in vanilla CSS and inline SVG.
- **Zero Layout Shifts & Horizontal Overflow**: Strict `box-sizing: border-box`, fluid typography, table scroll protection, and dual-layer `@container` + `@media` query responsiveness.
