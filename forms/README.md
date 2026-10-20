# Contact Form Components

A collection of 10 standalone, accessible contact form components built with plain HTML, CSS, and vanilla ES6 JavaScript. Each component embodies a distinct architectural layout, functional purpose, and typographic identity—avoiding repetitive centered card templates.

---

## Component Catalog

| # | Component | Directory | Highlights |
|---|---|---|---|
| 01 | **Minimal Studio Contact** | [`01-minimal-studio`](./01-minimal-studio/) | Restrained Swiss-inspired typography, generous whitespace, scope chips, thin borders, inline validation, and demo transmission banner. |
| 02 | **Split Contact Layout** | [`02-split-layout`](./02-split-layout/) | Asymmetrical 38/62 split layout pairing physical studio coordinates, hours, and dispatch protocol with a right-hand inquiry form and custom subject pills. |
| 03 | **Dark Premium Contact** | [`03-dark-premium`](./03-dark-premium/) | Deep obsidian console surface (`#090a0f`), Playfair Display serif titles, practice area selector, communication preference checkboxes, and subtle 1px borders. |
| 04 | **Creative Agency Brief** | [`04-agency-brief`](./04-agency-brief/) | Multi-select service capability chips (Brand, Product, Systems, Engineering), segmented budget selector pills, timeline options, and work email validation. |
| 05 | **Friendly Conversational Form** | [`05-conversational-step`](./05-conversational-step/) | Step-by-step 3-stage wizard (Introduction &rarr; Focus &rarr; Vision) with animated progress bar, state preservation, per-step validation, and keyboard advance. |
| 06 | **Booking / Consultation Request** | [`06-booking-request`](./06-booking-request/) | Consultation appointment intake with meeting type cards (30m discovery, 60m deep dive, 45m critique), auto-defaulted date picker, time window dropdown, and honest scheduling disclaimer. |
| 07 | **Developer / Technical Support** | [`07-technical-support`](./07-technical-support/) | Engineering diagnostic intake console with issue domain selector, P1–P4 severity pills, OS/runtime/SDK version inputs, and monospace log/trace buffer. |
| 08 | **Editorial / Personal Contact** | [`08-editorial-personal`](./08-editorial-personal/) | Asymmetric literary colophon pairing an essayist narrative, archive coordinates, and PGP key with an unpretentious parchment-toned contact note. |
| 09 | **Bold Brutalist Contact** | [`09-bold-brutalist`](./09-bold-brutalist/) | Neo-brutalist dispatch terminal with 3px solid black borders, hard tactile drop shadows, indexed input cells (`[01] SENDER`, `[02] VECTOR`), and dispatch speed pills. |
| 10 | **Interactive Inquiry Form** | [`10-interactive-inquiry`](./10-interactive-inquiry/) | Adaptive department routing console (Sales, Partnerships, Press, Careers) dynamically swapping relevant contextual fields and updating validation rules in real-time. |

---

## Architectural Principles

1. **Zero External Dependencies**: Pure vanilla HTML, CSS, and modern JavaScript. No npm packages, external build steps, CDNs, or external fonts/images.
2. **Honest Demo Handling**: Submissions prevent default browser actions, validate inputs locally, provide clear error states, and display an explicit confirmation notice (*"Demo inquiry received — no live transmission was initiated"*).
3. **Strict Class Scoping**: Every form uses an isolated prefix (`.cf-studio-*`, `.cf-split-*`, `.cf-dark-*`, `.cf-agency-*`, `.cf-conv-*`, `.cf-book-*`, `.cf-tech-*`, `.cf-edit-*`, `.cf-brutal-*`, `.cf-inquiry-*`) to prevent style collisions.
4. **Dual-Layer Fluid Responsiveness**: Complete responsive behavior across desktop, tablet, and mobile views using both `@container` and `@media` queries with zero horizontal overflow.
5. **Full Accessibility**: Semantic `<form>`, `<label>` associations with `for`/`id` bindings, ARIA roles (`role="radiogroup"`, `role="alert"`, `role="status"`, `aria-live`), and visible keyboard focus states.

---

## Usage

### Individual Component
```html
<!-- 1. Stylesheet -->
<link rel="stylesheet" href="forms/01-minimal-studio/form.css">

<!-- 2. Markup from forms/01-minimal-studio/form.html -->
<section class="cf-studio-root" data-form="minimal-studio">
  ...
</section>

<!-- 3. Controller -->
<script type="module" src="forms/01-minimal-studio/form.js"></script>
```

### Master Bundle
```html
<link rel="stylesheet" href="forms/forms.css">
<script type="module" src="forms/forms.js"></script>
```
