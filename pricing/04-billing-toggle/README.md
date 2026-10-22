# 04 Monthly / Annual Toggle Pricing

A clean, responsive pricing comparison featuring a functional billing-cycle switch with live price updates, annual discount badges, and accurate mathematical savings calculations based on the displayed sample data.

## Design Highlights
- **Accessible billing switch**: Implements `role="switch"`, `aria-checked`, and full keyboard toggle support (`Space` / `Enter`).
- **Mathematical savings accuracy**: Calculates and updates displayed prices ($18 → $14, $48 → $38, $120 → $96) and true annual savings ($48/yr, $120/yr, $288/yr) matching the advertised 20% discount.
- **Visual hierarchy**: Highlighted Growth tier with distinct accent border and badge without generic glowing slop.
- **Interactive selection feedback**: Clear client-side simulation banners showing selected plan, billing cycle, and rate.

## Class Prefix
All styles are strictly scoped under `.pr-toggle-*`.
