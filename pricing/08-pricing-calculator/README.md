# 08 Pricing Calculator

An interactive, multi-parameter pricing estimator enabling users to customize team seats, storage allocations, and SLA tiers with real-time transparent ledger calculations and volume discount rules.

## Design Highlights
- **Multi-variable live calculation**: Evaluates team seats ($12/seat/mo), NVMe storage ($0.10/GB beyond 50 free GB), and tiered SLA support ($0 / $49 / $199).
- **Rule-based volume discount**: Automatically applies an explicit 15% discount on seats when configuring 25 or more seats, rendered directly in the invoice ledger.
- **Formula transparency ledger**: Plaintext mathematical formula readout confirms precisely how the invoice total is computed from the component inputs.
- **Reset & quote save actions**: One-click restoration of defaults alongside client-side simulated quote saving.

## Class Prefix
All styles are strictly scoped under `.pr-calc-*`.
