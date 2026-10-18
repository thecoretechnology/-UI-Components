// Master Hero Sections JavaScript bundle

import { initSwissGridHero } from './01-swiss-grid/hero.js';
import { initEditorialMonographHero } from './02-editorial-monograph/hero.js';
import { initGraphicBrutalismHero } from './03-graphic-brutalism/hero.js';
import { initImageNarrativeHero } from './04-image-narrative/hero.js';
import { initProductSpecHero } from './05-product-spec/hero.js';
import { initPersonalPortfolioHero } from './06-personal-portfolio/hero.js';
import { initRetroDigitalHero } from './07-retro-digital/hero.js';
import { initModularTectonicHero } from './08-modular-tectonic/hero.js';
import { initQuietLuxuryHero } from './09-quiet-luxury/hero.js';
import { initPlayfulConstructivistHero } from './10-playful-constructivist/hero.js';

export {
  initSwissGridHero,
  initEditorialMonographHero,
  initGraphicBrutalismHero,
  initImageNarrativeHero,
  initProductSpecHero,
  initPersonalPortfolioHero,
  initRetroDigitalHero,
  initModularTectonicHero,
  initQuietLuxuryHero,
  initPlayfulConstructivistHero
};

// Initialize all heroes in the document or container
export function initAllHeroes(root = document) {
  initSwissGridHero(root);
  initEditorialMonographHero(root);
  initGraphicBrutalismHero(root);
  initImageNarrativeHero(root);
  initProductSpecHero(root);
  initPersonalPortfolioHero(root);
  initRetroDigitalHero(root);
  initModularTectonicHero(root);
  initQuietLuxuryHero(root);
  initPlayfulConstructivistHero(root);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAllHeroes());
  } else {
    initAllHeroes();
  }
}
