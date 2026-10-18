# Retro Digital CAD Workstation Hero (Vector-Graph System 80)

An authentic, late-1970s / early-1980s vector graphics workstation hero section. Inspired by direct-view storage tubes (Tektronix 4014) and early UNIX CAD consoles, avoiding superficial 8-bit pixel art tropes in favor of deep structural computing conventions.

## Design Movement & Rationale
- **Movement**: Early Vector CAD Graphics & Storage Tube Computing (Tektronix, DEC).
- **Physical Bezel Architecture**: Molded chassis with cooling vents, hardware status LEDs, curved CRT screen bezel, and realistic cathode scanlines.
- **Color Systems**: Accurate phosphor tube representations (P1 Green, P3 Amber, P4 White) with luminescence bloom.
- **Zero Remote Image Dependencies**: All screen bezels, vents, and polyhedral wireframe structures are drawn purely with CSS and SVGs.

## Interactive Features
- **Integrated Command-Line Interface (CLI)**: Type interactive commands (`HELP`, `PLOT`, `SPECS`, `ORBIT`, `CLEAR`) or click one-touch command chips to execute simulated system routines.
- **Kinetic Wireframe Plotter**: Rotate or continuously orbit the 3D vector polyhedral wireframe model via the coprocessor.
- **Phosphor Switcher**: Toggle between P1 Green, P3 Amber, and P4 Paper White phosphor emission modes.
- **Scanline Toggle**: Switch the physical raster scanline simulation filter on or off.

## Scoped Tokens
- Chassis: `#262930` (industrial aerospace gray)
- Screen Phosphor: `#22c55e` (P1 green) / `#f59e0b` (P3 amber) / `#f1f5f9` (P4 white)
- Scope Prefix: `.hr-retro-*`
