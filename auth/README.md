# Day 5: Authentication (Login & Sign-up Forms)

A curated collection of 10 original, polished, visually and structurally distinct authentication UI designs built with pure vanilla HTML, CSS, and JavaScript.

## Designs Overview

| # | Design Name | Directory | Scoped Prefix | Form Concept |
|---|-------------|-----------|---------------|--------------|
| 01 | Minimal Login | `01-minimal-login/` | `.auth-min-*` | Typography-led, ghost borders, eye toggle, simulated passphrase recovery |
| 02 | Split-screen Authentication | `02-split-screen/` | `.auth-split-*` | Asymmetric 42/58 split, vector prism geometry, live telemetry coords, access request tabs |
| 03 | Dark Developer Login | `03-dark-developer/` | `.auth-dev-*` | Terminal console, target cluster selector, dual Password vs PAT modes, live CLI curl generator |
| 04 | Editorial / Luxury | `04-editorial-luxury/` | `.auth-lux-*` | Serif typography, warm ivory palette, brass accents, archival recovery & invitation access |
| 05 | Playful Sign-up | `05-playful-signup/` | `.auth-play-*` | Vector CSS mascot face, craft discipline pills, handle ticker, 3-tier password strength meter |
| 06 | Multi-step Registration | `06-multistep-register/` | `.auth-step-*` | 3-stage guided wizard (Credentials → Organization → Review), input preservation, back navigation |
| 07 | Social / SSO-first Login | `07-social-sso/` | `.auth-sso-*` | Google, Microsoft, Okta, GitHub SSO with clear demo disclosures + corporate email magic link |
| 08 | Workspace / Team Invitation | `08-team-invitation/` | `.auth-team-*` | Contextual invite with inviter quote, locked email, password confirm, timezone selector |
| 09 | Brutalist Authentication | `09-bold-brutalist/` | `.auth-brutal-*` | 3px hard black borders, 7px hard drop shadow, operator callsign, text passkey toggle, clearance pills |
| 10 | Combined Login / Sign-up | `10-combined-switcher/` | `.auth-dual-*` | Segmented pill switcher, smooth field morphing, email preservation across modes, eye toggles |

## Technical Characteristics
- **Zero Dependencies**: Pure HTML, CSS, and Vanilla JavaScript. No npm, libraries, CDNs, or bundlers.
- **Strict CSS Isolation**: Every component has a dedicated 3-4 letter class prefix preventing style collisions.
- **Responsive Architecture**: Built with modern CSS `@container` queries and media queries for fluid scaling across desktop, tablet, and mobile views.
- **Honest Demo Simulation**: Accessible client-side validation and clear simulation notifications without insecure local credential storage or fake backend claims.
- **Keyboard & Screen Reader Accessible**: Proper semantic form elements, explicit label associations, ARIA live regions, and `aria-pressed` states on toggles.
