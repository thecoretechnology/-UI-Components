# Fullscreen Lightbox Gallery

An interactive exhibition gallery with a full-screen modal viewer supporting previous/next navigation, direct thumbnail jumping, scroll locking, and keyboard shortcuts (`Escape`, `ArrowLeft`, `ArrowRight`).

## Architecture
- **Class Prefix:** `.gal-lightbox-*`
- **Modal System:** Fullscreen fixed backdrop (`rgba(5, 8, 15, 0.95)` with backdrop-filter blur) isolated via `[hidden]` attribute.
- **Scroll Lock:** Automatically preserves and restores `document.body.style.overflow` upon open and close.
- **Focus Management:** Focuses close button on modal launch and returns focus to the triggering element upon closure.
- **Keyboard Navigation:** Native listeners for `Escape` (dismiss), `ArrowLeft` (previous slide), and `ArrowRight` (next slide).
- **Thumbnail Strip:** Live interactive miniature bar allowing rapid jumping between slides.
