# Asymmetric Editorial Gallery

An art-directed, magazine-inspired gallery layout with intentional whitespace, varied aspect ratios, archival typography, and a technical camera spec drawer.

## Architecture
- **Class Prefix:** `.gal-editorial-*`
- **Typography:** *Playfair Display* for titles and pullquote, clean sans-serif for metadata and colophon.
- **Asymmetric Composition:** Dominant hero image (4:3 aspect ratio) balanced against a right-hand stack of vertical portrait (3:4) and panoramic wide (16:10) frames with an editorial quote block.
- **Accessibility:** Semantic `<figure>` and `<figcaption>` elements, descriptive alt text, accessible expand/collapse technical spec drawers with `aria-expanded`.
- **Zero Dependencies:** Pure HTML, CSS, and vanilla JavaScript.
