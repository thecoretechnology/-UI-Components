# 01. Swiss / Grid-Based Typography Hero

A disciplined, asymmetrical typographic composition inspired by the Swiss Style (*Die Neue Typografie*, Müller-Brockmann, and Karl Gerstner). Features mathematical baseline divisions, coordinate crosshairs, dynamic layout proportion toggling (`DIN 1:√2`, `Golden Ratio 1:φ`, `Square 1:1`), and real-time mouse coordinate tracking.

---

## Design Principles

- **Mathematical Asymmetry**: Rather than centering or splitting 50/50, the layout uses dynamic column weight ratios with hairline baseline divisions.
- **Micro-Technical Hierarchy**: High contrast between oversized grotesk letterforms (`Aa`, headline) and hyper-dense tabular catalog columns with technical registration codes.
- **Restrained Swiss Palette**: Paper bone `#f5f4ef`, deep carbon `#111111`, and a single calibrated vermilion `#e63920` accent.
- **Zero External Media**: All registration marks, specimen plates, and bounding boxes are rendered with pure CSS and inline SVGs.

---

## Interaction Points

1. **Proportion Matrix Selector**: Toggles `data-ratio="din"`, `data-ratio="golden"`, or `data-ratio="square"` on the container, recalculating column grid fractions in real time.
2. **Specimen Plate Switcher**: Tabs `01 Taxonomy`, `02 Rationale`, and `03 Geometry` update the specimen glyph and historical attribution.
3. **Interactive Coordinate Tracking**: Moving the cursor across the hero dynamically updates the `X: ... / Y: ...` coordinate register in the plate header.

---

## Theming Tokens

```css
:root {
  --hr-swiss-bg: #f5f4ef;
  --hr-swiss-ink: #111111;
  --hr-swiss-vermilion: #e63920;
  --hr-swiss-border: #d4d2c7;
}
```
