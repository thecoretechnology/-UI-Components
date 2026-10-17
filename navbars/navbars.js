// Master JavaScript bundle

import { initCleanSaaSNavbar } from './01-clean-saas/navbar.js';
import { initDarkProductNavbar } from './02-dark-product/navbar.js';
import { initEditorialNavbar } from './03-editorial/navbar.js';
import { initCenteredBrandNavbar } from './04-centered-brand/navbar.js';
import { initFloatingPillNavbar } from './05-floating-pill/navbar.js';
import { initEcommerceNavbar } from './06-ecommerce-two-level/navbar.js';
import { initSidebarDashboard } from './07-sidebar-dashboard/navbar.js';
import { initBrutalistNavbar } from './08-brutalist/navbar.js';
import { initGradientStartupNavbar } from './09-gradient-startup/navbar.js';
import { initMinimalUtilityNavbar } from './10-minimal-utility/navbar.js';

export {
  initCleanSaaSNavbar,
  initDarkProductNavbar,
  initEditorialNavbar,
  initCenteredBrandNavbar,
  initFloatingPillNavbar,
  initEcommerceNavbar,
  initSidebarDashboard,
  initBrutalistNavbar,
  initGradientStartupNavbar,
  initMinimalUtilityNavbar,
};

// Initialize all navbars in the document or container
export function initAllNavbars(root = document) {
  initCleanSaaSNavbar(root);
  initDarkProductNavbar(root);
  initEditorialNavbar(root);
  initCenteredBrandNavbar(root);
  initFloatingPillNavbar(root);
  initEcommerceNavbar(root);
  initSidebarDashboard(root);
  initBrutalistNavbar(root);
  initGradientStartupNavbar(root);
  initMinimalUtilityNavbar(root);
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAllNavbars());
  } else {
    initAllNavbars();
  }
}
