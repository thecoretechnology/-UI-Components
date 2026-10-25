# FAQ Sections Collection

A curated collection of 10 original, visually and structurally distinct FAQ and knowledge-base section designs built with plain HTML, CSS, and vanilla JavaScript.

## Architectural Constraints
- **Zero Dependencies**: Pure HTML5, CSS3, and native vanilla JavaScript ES modules. Zero npm packages, React, Tailwind, or bundlers.
- **Prefix Scoping**: Each variation has an isolated CSS prefix (e.g., `.faq-classic-*`, `.faq-split-*`, `.faq-tech-*`), ensuring zero style leaks.
- **Accessible & Tested**: Full WAI-ARIA accordions and dialogs, keyboard navigation (`ArrowUp`/`ArrowDown`/`Enter`/`Space`/`Escape`), high-contrast focus rings, `prefers-reduced-motion` compliance, and touch support.

---

## The 10 FAQ Variations

| # | Directory | Layout Archetype | Key Interactive & Design Features | Class Prefix |
|---|---|---|---|---|
| 01 | `01-classic-accordion` | Centered Cardless Column | Interactive runtime switch between **Single-Open (exclusive)** and **Multi-Open (simultaneous)** accordion behavior, arrow key navigation, subtle hairline dividers. | `.faq-classic-*` |
| 02 | `02-split-screen` | Asymmetric 35/65 Split | Left sticky support status desk with 24/7 online indicator, direct inquiry form, and question cards on the right. | `.faq-split-*` |
| 03 | `03-categorized-sidebar` | Sidebar Topic Rail | Left-hand category filter (All, Account, Billing, Features, Security) with active badges; converts to a horizontal swipe bar on mobile. | `.faq-cat-*` |
| 04 | `04-searchable` | Live Search Console | Case-insensitive live filtering, dynamic `<mark>` substring highlighting, quick topic tag pills, clear search button, and empty state. | `.faq-search-*` |
| 05 | `05-minimal-editorial` | Broadsheet Monograph | Warm parchment canvas (`#fdfbf7`), Playfair Display serif typography, publication folios, section glyphs (`§`), and bibliographic citations. | `.faq-edit-*` |
| 06 | `06-dark-technical` | Obsidian Engineering Console | Deep slate palette (`#0a0e17`), monospace HTTP method verbs, syntax-styled cURL probes & nginx configs with one-click copy buttons. | `.faq-tech-*` |
| 07 | `07-card-grid` | 2x2 Domain Matrix Grid | Grouped knowledge clusters (Architecture, Licensing, Accessibility, Performance) featuring colored icon boxes and self-contained accordions. | `.faq-grid-*` |
| 08 | `08-help-center` | Multi-Tier Help Portal | Help center hero search, 4 topic navigation tiles, popular questions list, and an interactive simulated support ticket intake modal. | `.faq-help-*` |
| 09 | `09-step-answers` | Procedural Walkthrough Guides | Numbered operational sequences with vertical guide lines, parameter chips, and a CSS/SVG network propagation diagram. | `.faq-step-*` |
| 10 | `10-horizontal-rows` | Wide-Format Briefing Ledger | Deliberate 3-column desktop alignment revealing an expansive dual-aspect answer ledger (direct answer narrative + empirical benchmark reference box). | `.faq-row-*` |

---

## Modular Usage

Each component is self-contained. To use an individual component:

```html
<!-- Example: 01 Classic Accordion -->
<link rel="stylesheet" href="./faqs/01-classic-accordion/faq.css">

<!-- Markup from ./faqs/01-classic-accordion/faq.html -->

<script type="module">
  import { initClassicAccordionFaq } from './faqs/01-classic-accordion/faq.js';
  initClassicAccordionFaq();
</script>
```

To load the entire master bundle:

```html
<link rel="stylesheet" href="./faqs/faqs.css">

<script type="module">
  import { initAllFaqs } from './faqs/faqs.js';
  initAllFaqs();
</script>
```
