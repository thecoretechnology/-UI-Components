# 06 Feature Matrix Pricing

A comprehensive tabular comparison matrix comparing three editions (Standard, Pro Team, Enterprise) across computing quotas, storage, security, and SLA response guarantees.

## Design Highlights
- **Structured tabular comparison**: Explicit row categories, aligned metric specifications, and column highlight for the featured Pro Team plan.
- **Interactive "Show differences only" filter**: Allows prospective buyers to instantly collapse baseline features identical across all plans (like TLS encryption) to focus exclusively on key differentiators.
- **Responsive container scroll protection**: Horizontal scroll wrapper with keyboard focus prevents the table from squishing or truncating text on mobile devices.
- **Accessible checkmarks**: Status indicators feature screen-reader accessible labels (`.pr-matrix-sr`) rather than purely visual glyphs.

## Class Prefix
All styles are strictly scoped under `.pr-matrix-*`.
