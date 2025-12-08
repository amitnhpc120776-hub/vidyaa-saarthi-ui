# VIS Component API — vs-close

## Component Name
- **vs-close**

## Purpose
- A reusable close control for dismissing UI surfaces (alerts, chips, modals) or triggering custom close actions using accessible keyboard and screen-reader semantics.

## Anatomy / Structure
- **vs-close** — Root interactive element (button) containing the visual glyph.
- **vs-close__icon** — Wrapper for the glyph (text or SVG) to ensure consistent sizing and alignment.
- **vs-close__glyph** — Text glyph (×) used when the text variant is selected.

## Variants (BEM Modifiers)
- **vs-close--square** — Default squared corners.
- **vs-close--rounded** — Slightly rounded corners.
- **vs-close--circle** — Circular shape.
- **vs-close--default** — Minimal neutral styling (transparent background, subtle hover).
- **vs-close--subtle** — Low-emphasis surface background.
- **vs-close--solid** — Filled background using the assigned color role.
- **vs-close--bordered** — Outlined styling using the assigned color role.
- **vs-close--text** — Renders the text glyph (×) within the icon wrapper.
- **vs-close--icon** — Renders an SVG icon within the icon wrapper.
- **vs-close--primary** — Uses the primary color role.
- **vs-close--secondary** — Uses the secondary color role.
- **vs-close--success** — Uses the success/positive color role.
- **vs-close--warning** — Uses the warning/attention color role.
- **vs-close--danger** — Uses the danger/error color role.
- **vs-close--neutral** — Uses neutral/grayscale color role.
- **vs-close--sm** — Small dimensions.
- **vs-close--md** — Medium dimensions (default).
- **vs-close--lg** — Large dimensions.
- **vs-close--dismiss-parent** — Clicking removes the nearest parent container (or custom selector) and emits a dismiss event.
- **vs-close--no-dismiss** — Disables auto-dismiss behavior; acts as a regular button.
- **vs-close--hover-strong** — Applies stronger hover emphasis.
- **vs-close--hover-subtle** — Applies subtle hover emphasis.

## Component States
- **:hover** — Indicates pointer hover with hover-specific emphasis.
- **:focus-visible** — Shows focus ring for keyboard navigation.
- **:active** — Pressed interaction feedback.
- **.is-hidden** — Optional utility state for programmatic hiding of the target element after dismissal.

## Responsive Behavior
- Mobile-first sizing. Close button dimensions remain consistent across breakpoints; surrounding layout should manage its own responsiveness.
