// Master Pricing Sections JavaScript Bundle

import { initClassicTierPricing } from './01-classic-tier/pricing.js';
import { initMinimalEditorialPricing } from './02-minimal-editorial/pricing.js';
import { initUsageBasedPricing } from './03-usage-based/pricing.js';
import { initBillingTogglePricing } from './04-billing-toggle/pricing.js';
import { initSinglePlanPricing } from './05-single-plan/pricing.js';
import { initFeatureMatrixPricing } from './06-feature-matrix/pricing.js';
import { initServicePackagesPricing } from './07-service-packages/pricing.js';
import { initPricingCalculatorPricing } from './08-pricing-calculator/pricing.js';
import { initCreditBundlesPricing } from './09-credit-bundles/pricing.js';
import { initEnterpriseContactPricing } from './10-enterprise-contact/pricing.js';

export {
  initClassicTierPricing,
  initMinimalEditorialPricing,
  initUsageBasedPricing,
  initBillingTogglePricing,
  initSinglePlanPricing,
  initFeatureMatrixPricing,
  initServicePackagesPricing,
  initPricingCalculatorPricing,
  initCreditBundlesPricing,
  initEnterpriseContactPricing
};

// Initialize all pricing sections in document or scoped container
export function initAllPricing(root = document) {
  initClassicTierPricing(root);
  initMinimalEditorialPricing(root);
  initUsageBasedPricing(root);
  initBillingTogglePricing(root);
  initSinglePlanPricing(root);
  initFeatureMatrixPricing(root);
  initServicePackagesPricing(root);
  initPricingCalculatorPricing(root);
  initCreditBundlesPricing(root);
  initEnterpriseContactPricing(root);
}

// Auto-initialize if running in a browser environment
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAllPricing());
  } else {
    initAllPricing();
  }
}
