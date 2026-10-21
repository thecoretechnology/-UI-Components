// Master Authentication JavaScript Bundle

import { initMinimalLoginAuth } from './01-minimal-login/auth.js';
import { initSplitScreenAuth } from './02-split-screen/auth.js';
import { initDarkDeveloperAuth } from './03-dark-developer/auth.js';
import { initEditorialLuxuryAuth } from './04-editorial-luxury/auth.js';
import { initPlayfulSignupAuth } from './05-playful-signup/auth.js';
import { initMultistepRegisterAuth } from './06-multistep-register/auth.js';
import { initSocialSsoAuth } from './07-social-sso/auth.js';
import { initTeamInvitationAuth } from './08-team-invitation/auth.js';
import { initBoldBrutalistAuth } from './09-bold-brutalist/auth.js';
import { initCombinedSwitcherAuth } from './10-combined-switcher/auth.js';

export {
  initMinimalLoginAuth,
  initSplitScreenAuth,
  initDarkDeveloperAuth,
  initEditorialLuxuryAuth,
  initPlayfulSignupAuth,
  initMultistepRegisterAuth,
  initSocialSsoAuth,
  initTeamInvitationAuth,
  initBoldBrutalistAuth,
  initCombinedSwitcherAuth
};

// Initialize all authentication forms in document or scoped container
export function initAllAuth(root = document) {
  initMinimalLoginAuth(root);
  initSplitScreenAuth(root);
  initDarkDeveloperAuth(root);
  initEditorialLuxuryAuth(root);
  initPlayfulSignupAuth(root);
  initMultistepRegisterAuth(root);
  initSocialSsoAuth(root);
  initTeamInvitationAuth(root);
  initBoldBrutalistAuth(root);
  initCombinedSwitcherAuth(root);
}

// Auto-initialize if running in a browser environment
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAllAuth());
  } else {
    initAllAuth();
  }
}
