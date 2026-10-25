# 04 Searchable FAQ

A live-searchable FAQ console featuring case-insensitive keyword filtering, matching substring highlights with `<mark>`, popular search tags, a clear button, and an empty state.

## Design Highlights
- **Real-Time Substring Highlighting**: Safely wraps matched keywords inside questions and answers in warm amber highlight pills (`<mark>`).
- **Auto-Expansion on Body Match**: If a search keyword is detected inside an answer body, the corresponding panel automatically opens to reveal context.
- **Empty State & Reset**: Clear visual feedback when a search term produces 0 results, offering an instant reset button.

## Class Prefix
All styles are strictly scoped under `.faq-search-*`.
