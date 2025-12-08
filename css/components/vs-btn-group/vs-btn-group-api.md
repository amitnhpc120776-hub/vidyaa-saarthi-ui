# vs-btn-group — Component API

**Component Type:** Composed Component (reuses `vs-btn` primitives)

**Purpose:** Provides a flexible wrapper to align multiple `vs-btn` instances into unified horizontal or vertical groups with cohesive spacing, borders, and accessible keyboard navigation.

## Anatomy / Structure
- `vs-btn-group` — root container that manages layout, orientation, and grouping behavior.
- `vs-btn-group__item` — optional wrapper for each `vs-btn` to control sizing and alignment within the group.

## Variants (BEM Modifiers)
- Orientation: `vs-btn-group--horizontal` (default), `vs-btn-group--vertical`
- Shape & Radius: `vs-btn-group--rounded`, `vs-btn-group--smooth`, `vs-btn-group--pill`
- Layout & Behavior: `vs-btn-group--block`, `vs-btn-group--segmented`, `vs-btn-group--justified`
- Sizes: `vs-btn-group--sm`, `vs-btn-group--md` (default), `vs-btn-group--lg`

## States
- `.is-disabled` — disables pointer interactions for the entire group.
- `.is-focus-within` — optional helper state when any child `vs-btn` holds focus (for custom outlines if needed).

## Notes
- Internal buttons remain native `vs-btn` elements; the group must not redefine button internals.
- Collapsed radii apply only to outer edges; interior buttons stay squared for seamless grouping.
- Segmented groups support arrow-key navigation (horizontal: Left/Right, vertical: Up/Down).
