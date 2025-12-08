# vs-badge — Component API (Step 1)

## Component Type
Foundational Primitive

## Component Name
vs-badge

## Component Anatomy (BEM)
- **vs-badge** — Root inline wrapper representing the badge surface and typography container.
- **vs-badge__content** — Optional text or number node for label/count content.

## Variants (BEM Modifiers)
- **vs-badge--primary** — Primary emphasis badge.
- **vs-badge--secondary** — Secondary brand badge.
- **vs-badge--success** — Positive/confirmation badge.
- **vs-badge--warning** — Caution badge.
- **vs-badge--danger** — Error/destructive badge.
- **vs-badge--info** — Informational badge.
- **vs-badge--neutral** — Default muted/gray badge.
- **vs-badge--outline** — Bordered outline style.
- **vs-badge--inverted** — High-contrast style for dark surfaces.
- **vs-badge--pill** — Fully rounded pill shape.
- **vs-badge--dot** — Dot indicator with circular mark.

### Size Modifiers
- **vs-badge--sm** — Small badge sizing.
- **vs-badge--md** — Medium/default badge sizing.
- **vs-badge--lg** — Large badge sizing.

## Component States
- **.is-interactive** — Applied when the badge is clickable or used as a control trigger.
- **.is-disabled** — Badge is visually muted and non-interactive.

## Responsive Behavior
Badges are inline-flex primitives and inherit layout from their container. No breakpoint-specific structures are required.
