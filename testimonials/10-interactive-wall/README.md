# 10 Interactive Testimonial Wall

A dynamic, filterable testimonial directory wall featuring category tabs (All, Design, SaaS, Education, Services), real-time keyword search, active count readout, and an empty state with a reset trigger.

## Design Highlights
- **Real-Time Category Filtering**: Category pills with count indicators instantly filter cards.
- **Combined Keyword Search**: Search input filters cards simultaneously with the active category.
- **Dedicated Empty State**: Displays an accessible notice with an instant "Reset All Filters" button when 0 cards match.
- **Accessible ARIA Patterns**: Uses `tablist` and `tab` roles with live region count updates (`aria-live="polite"`).

## Class Prefix
All styles are strictly scoped under `.ts-wall-*`.
