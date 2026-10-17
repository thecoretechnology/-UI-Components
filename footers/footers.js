// Master footers JavaScript bundle

import { initCleanSaaSFooter } from './01-clean-saas/footer.js';
import { initEditorialFooter } from './02-editorial/footer.js';
import { initDocsFooter } from './03-docs/footer.js';
import { initEcommerceFooter } from './04-ecommerce/footer.js';
import { initAgencyFooter } from './05-agency/footer.js';
import { initConversionFooter } from './06-conversion/footer.js';
import { initAppUtilityFooter } from './07-app-utility/footer.js';
import { initAsymmetricFooter } from './08-asymmetric/footer.js';
import { initBrutalistFooter } from './09-brutalist/footer.js';
import { initGlobalFooter } from './10-global/footer.js';

export {
  initCleanSaaSFooter,
  initEditorialFooter,
  initDocsFooter,
  initEcommerceFooter,
  initAgencyFooter,
  initConversionFooter,
  initAppUtilityFooter,
  initAsymmetricFooter,
  initBrutalistFooter,
  initGlobalFooter,
};

// Initialize all footers in document or container
export function initAllFooters(root = document) {
  initCleanSaaSFooter(root);
  initEditorialFooter(root);
  initDocsFooter(root);
  initEcommerceFooter(root);
  initAgencyFooter(root);
  initConversionFooter(root);
  initAppUtilityFooter(root);
  initAsymmetricFooter(root);
  initBrutalistFooter(root);
  initGlobalFooter(root);
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAllFooters());
  } else {
    initAllFooters();
  }
}
