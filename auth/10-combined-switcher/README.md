# 10 Combined Login / Sign-up Experience

A single, unified interface that seamlessly transitions between authentication ("Sign In") and onboarding ("Create Account") while preserving entered email context, updating validation rules, and maintaining accessibility.

## Design Highlights
- **Segmented pill switcher**: High-contrast tab control with active state transition and `role="tab"` accessibility attributes.
- **Form morphing & state preservation**: Dynamically reveals full name, confirmation password, and terms checkboxes without losing previously entered email addresses.
- **Dual password toggles**: Independent password show/hide controls with accessible ARIA states.
- **Inline recovery & dual prompts**: Working simulated password recovery dispatch with honest disclosure.

## Class Prefix
All classes are strictly scoped under `.auth-dual-*`.
