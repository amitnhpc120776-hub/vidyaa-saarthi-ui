# VIS Component API — vs-spinner

## Component Type
Foundational Primitive — universal loading/processing indicator with no dependency on other VIS components.

## Component Anatomy (BEM)
- **vs-spinner** — root wrapper that controls sizing, color, speed, and animation style.
- **vs-spinner__circle** — visual spinner element that renders the animated stroke or pulse.
- **vs-spinner__label** — optional accessible text accompanying the spinner for context.

## Variants (BEM Modifiers)
- **vs-spinner--sm** — small spinner footprint using condensed size tokens.
- **vs-spinner--md** — medium/default spinner footprint.
- **vs-spinner--lg** — large spinner footprint for prominent loading states.
- **vs-spinner--primary** — primary brand color treatment.
- **vs-spinner--secondary** — secondary brand color treatment.
- **vs-spinner--success** — success/confirmation treatment.
- **vs-spinner--warning** — caution/warning treatment.
- **vs-spinner--danger** — error/critical treatment.
- **vs-spinner--inverse** — inverse treatment for dark surfaces.
- **vs-spinner--fast** — faster animation speed.
- **vs-spinner--slow** — slower animation speed.
- **vs-spinner--pulse** — alternate pulse animation style (non-rotational).

## Component States
- **.is-active** — spinner is running (default behavior).
- **.is-paused** — animation is paused for reduce-motion or manual control scenarios.
- **.is-hidden** — visually hides the spinner while preserving layout for async completion.

## Responsive Behavior
Spinner sizing is token-driven and scales fluidly with surrounding text. No additional responsive breakpoints are required beyond inheriting layout spacing from parent containers.
