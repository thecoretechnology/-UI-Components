// Master Galleries JavaScript Bundle
// Exports individual and batch initializers for all 10 gallery layouts

import { initAsymmetricEditorialGallery } from './01-asymmetric-editorial/gallery.js';
import { initMasonryGridGallery } from './02-masonry-grid/gallery.js';
import { initMinimalUniformGallery } from './03-minimal-uniform/gallery.js';
import { initFullscreenLightboxGallery } from './04-fullscreen-lightbox/gallery.js';
import { initFilterablePortfolioGallery } from './05-filterable-portfolio/gallery.js';
import { initHorizontalScrollingGallery } from './06-horizontal-scrolling/gallery.js';
import { initFullBleedImmersiveGallery } from './07-full-bleed-immersive/gallery.js';
import { initCaptionsDescriptionsGallery } from './08-captions-descriptions/gallery.js';
import { initImageComparisonGallery } from './09-image-comparison/gallery.js';
import { initCreativeCollageGallery } from './10-creative-collage/gallery.js';

export {
  initAsymmetricEditorialGallery,
  initMasonryGridGallery,
  initMinimalUniformGallery,
  initFullscreenLightboxGallery,
  initFilterablePortfolioGallery,
  initHorizontalScrollingGallery,
  initFullBleedImmersiveGallery,
  initCaptionsDescriptionsGallery,
  initImageComparisonGallery,
  initCreativeCollageGallery
};

// Initialize all gallery layouts in document or scoped container
export function initAllGalleries(root = document) {
  initAsymmetricEditorialGallery(root);
  initMasonryGridGallery(root);
  initMinimalUniformGallery(root);
  initFullscreenLightboxGallery(root);
  initFilterablePortfolioGallery(root);
  initHorizontalScrollingGallery(root);
  initFullBleedImmersiveGallery(root);
  initCaptionsDescriptionsGallery(root);
  initImageComparisonGallery(root);
  initCreativeCollageGallery(root);
}

// Auto-initialize if running in a browser environment
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAllGalleries());
  } else {
    initAllGalleries();
  }
}
