# 06 Multi-step Registration

A progressive 3-stage enterprise onboarding workflow dividing account creation into Credentials, Organization profile, and Final Review with preserved state.

## Features
- **3-step guided flow**: Visual indicator nodes tracking Active, Completed, and Upcoming states.
- **Strict per-step validation**: Progress is blocked until the active step's required inputs are satisfied.
- **Value preservation**: Going backward with "Previous Step" preserves all entered values across panels.
- **Live review summary**: Step 3 dynamically pulls values from Steps 1 and 2 into an overview ledger.
- **Dual password eye toggles**: Independent visibility toggles for password and confirm password.

## Class Prefix
All classes are scoped under `.auth-step-*`.
