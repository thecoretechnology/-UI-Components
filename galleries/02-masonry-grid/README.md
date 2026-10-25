# Masonry Gallery

A pure CSS column-based masonry gallery featuring varied image heights, natural reading order, dark photojournalism theme, and hover metadata with live bookmark counters.

## Architecture
- **Class Prefix:** `.gal-masonry-*`
- **Dependency-Free Columns:** Built with CSS multi-column layout (`column-count: 3; column-gap: 24px; break-inside: avoid`), gracefully degrading to 2 columns on tablet and 1 on mobile without third-party libraries.
- **Hover & Focus Scrim:** Ambient gradient overlays reveal capture location, photo title, and camera technical parameters (Leica, Sony, Nikon, Canon lenses and exposure settings).
- **Interactive Bookmarking:** Working client-side bookmark button updating state and live counter.
