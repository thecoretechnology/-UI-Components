# 07 Card-Based FAQ Grid

A multi-card topic matrix structuring complex technical knowledge into distinct domain pods (Architecture, Licensing, Accessibility, Performance) with self-contained expandable items.

## Design Highlights
- **Domain Matrix Hierarchy**: Replaces generic single-list accordions with categorized cards containing thematic icons and descriptions.
- **Independent Scoped Accordions**: Each card manages internal question states cleanly without global layout shifts.
- **Fluid 2x2 to Single-Column Grid**: Responsive CSS grid adapting gracefully from multi-column desktop to mobile card stacks.

## Class Prefix
All styles are strictly scoped under `.faq-grid-*`.
