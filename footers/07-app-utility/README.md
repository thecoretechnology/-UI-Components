# 07 — Application Utility Footer

A compact, single-row status bar for SaaS consoles, dashboards, and internal developer workspaces. Includes live system operational state, keyboard shortcut helper (`?` modal), and release version tags.

## Files
- `footer.html`: Dense utility bar markup with keyboard shortcut modal.
- `footer.css`: Scoped stylesheet using `--ft-util-*` CSS variables.
- `footer.js`: Keyboard shortcuts dialog controller (`?` key toggle and Escape close).

## Usage

```html
<link rel="stylesheet" href="footers/07-app-utility/footer.css">

<!-- Insert footer.html here -->

<script type="module" src="footers/07-app-utility/footer.js"></script>
```

### Theming
```css
:root {
  --ft-util-bg: #f8fafc;       /* Bar background */
  --ft-util-border: #e2e8f0;   /* Border line */
}
```
