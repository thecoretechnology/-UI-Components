# Graphic Brutalism Hero (High-Voltage Grid Dispatch)

An industrial, hard-edged telemetry interface stripped of decorative consumer fluff. Built around raw monospaced registers, heavy 3px black framing, high-contrast hazard geometry, and an interactive mechanical circuit breaker relay board.

## Design Movement & Rationale
- **Movement**: Graphic Brutalism & Industrial Machinery Telemetry.
- **Visual Vocabulary**: 3px solid borders, offset box shadows (`5px 5px 0 #000`), hazard warning stripes, high-density monospace tables, and zero rounded fluff.
- **Rhythm & Structure**: Top warning banner, telemetry header strip with pulsing LED status, two-column split with a high-impact typographic statement on the left and a tactile physical breaker board on the right.
- **Zero Remote Image Dependencies**: All hardware enclosures, rocker switches, LEDs, and hazard patterns are rendered using pure CSS geometry and gradients.

## Interactive Features
- **Tactile Circuit Breakers**: Click physical rocker switches to toggle high-current bus bars (Feed 01, Feed 02, Cryogenic Loop, Ground Bypass) with live LED status changes.
- **Real-Time Telemetry & Log**: Automatically recalculates simulated GW grid load and appends timestamped events into the scrolling console log.
- **Emergency Coupling**: "Engage Grid Coupling" master override restores and locks all circuits with tactile feedback.

## Scoped Tokens
- Background: `#f4f3ee` (industrial off-white)
- Ink/Borders: `#0a0a0a` (pure dense black)
- Hazard Accent: `#fcd34d` (high-visibility safety amber)
- Active Signal: `#22c55e` (nominal green)
- Scope Prefix: `.hr-brutal-*`
