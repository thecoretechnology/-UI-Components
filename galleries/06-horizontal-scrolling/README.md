# Horizontal Scrolling Gallery

An editorial horizontal panorama gallery with CSS scroll-snap, dynamic scroll progress tracking, arrow step controls, and keyboard navigation.

## Architecture
- **Class Prefix:** `.gal-hscroll-*`
- **Native CSS Scroll-Snap:** Built with `scroll-snap-type: x mandatory` and smooth scrolling behavior for natural mobile swiping and desktop interaction.
- **Scroll Progress Tracker:** Dynamic scroll event listener updates the custom top indicator bar from 0% to 100%.
- **Keyboard Navigation:** Native `ArrowLeft` / `ArrowRight` listener when the gallery track is focused.
- **Zero Dependencies:** Pure HTML, CSS, and vanilla JavaScript without forced autoplay.
