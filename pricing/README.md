# Day 6: Pricing Sections

A curated collection of 10 original, polished, visually and structurally distinct pricing section designs built with pure vanilla HTML, CSS, and JavaScript.

## Designs Overview

| # | Design Name | Directory | Scoped Prefix | Pricing Concept |
|---|-------------|-----------|---------------|-----------------|
| 01 | Classic Tier Comparison | `01-classic-tier/` | `.pr-classic-*` | Tabular aligned 3-column layout (Community, Pro, Business) with hairline dividers, no floating card gimmicks |
| 02 | Minimal Editorial Pricing | `02-minimal-editorial/` | `.pr-edit-*` | Broadsheet serif typography, Didot manifesto, 3-row stacked edition ledger, live 3-currency switcher (USD, EUR, GBP) |
| 03 | Usage-Based Pricing | `03-usage-based/` | `.pr-usage-*` | Light engineering cloud telemetry console (`#ffffff`/`#f8fafc`/`#2563eb`), unit rate ($0.002/1k calls), complimentary 100k quota, interactive volume scrubber (100k–50M), live simulated billing ledger, sandbox token generator, and terminal curl snippet |
| 04 | Monthly / Annual Toggle | `04-billing-toggle/` | `.pr-toggle-*` | Accessible switch (`role="switch"`, `aria-checked`), dynamic 20% annual discount price swapping, honest mathematical savings |
| 05 | Single-Plan Pricing | `05-single-plan/` | `.pr-single-*` | Focused lifetime perpetual license ($189 one-time), deliverable checklist, interactive add-on checkboxes with live total calculation |
| 06 | Feature Matrix | `06-feature-matrix/` | `.pr-matrix-*` | Deep tabular comparison table with category groups, screen-reader accessible checkmarks, and an interactive "Show differences only" filter |
| 07 | Product / Service Packages | `07-service-packages/` | `.pr-pack-*` | Agency deliverables, fixed scopes, and timelines (2-Week Sprint, 6-Week Turnkey, Retainer) with interactive SOW preview modal |
| 08 | Pricing Calculator | `08-pricing-calculator/` | `.pr-calc-*` | Multi-parameter estimator: seats slider, NVMe storage slider, SLA tier selector, live invoice ledger, and 15% team volume discount |
| 09 | Credit / Token Bundles | `09-credit-bundles/` | `.pr-bundle-*` | Modern fintech prepaid token wallet on warm ivory/cream (`#faf8f5`/`#7c3aed`/`#f59e0b`), tenant ledger status bar, 4 tiered coin-stack cards ($0.050 down to $0.018/credit), and workload burn-rate recommender with card highlight |
| 10 | Contact-for-Pricing / Enterprise | `10-enterprise-contact/` | `.pr-ent-*` | Executive institutional suite on warm platinum ivory (`#fbfbfa`/`#09090b`/`#1e3a8a`), 5 compliance accreditation shields (SOC 2, ISO 27001, HIPAA, GDPR), 3 governance pillars, and formal RFP intake generator |

## Technical Characteristics
- **Zero Dependencies**: Pure HTML, CSS, and Vanilla JavaScript. No npm packages, libraries, CDNs, or bundlers.
- **Strict CSS Isolation**: Every design operates under an isolated CSS class prefix (`.pr-classic-*`, `.pr-edit-*`, `.pr-usage-*`, etc.) to prevent style leakage.
- **Responsive Architecture**: Built with CSS `@container` queries and responsive media queries for fluid layouts across desktop, tablet, and mobile views.
- **Accessible & Transparent**: Semantic HTML5 markup, screen-reader accessible attributes (`role="switch"`, `aria-checked`, `role="radiogroup"`, `.pr-matrix-sr`), visible focus outlines, and transparent client-side simulation disclosures.
