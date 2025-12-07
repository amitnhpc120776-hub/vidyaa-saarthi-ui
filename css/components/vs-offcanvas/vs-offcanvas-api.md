# VIS Component API — vs-offcanvas

## Component Name
- **vs-offcanvas**

## Purpose
- Sliding panel for navigation, filters, or secondary content that can overlay the page or persist as a responsive sidebar while respecting backdrop, scroll, and keyboard behaviors.

## Anatomy / Structure
- **vs-offcanvas** — Root container managing visibility, placement, and behavioral modifiers.
- **vs-offcanvas__backdrop** — Optional dimming layer capturing outside clicks.
- **vs-offcanvas__panel** — Sliding surface that holds all content.
- **vs-offcanvas__header** — Top bar for the title and optional supporting actions.
- **vs-offcanvas__title** — Primary heading for the panel.
- **vs-offcanvas__subtitle** — Optional secondary description or helper text.
- **vs-offcanvas__close** — Icon/button control to dismiss the panel.
- **vs-offcanvas__body** — Main scrollable content area.
- **vs-offcanvas__footer** — Optional action bar for buttons or links.

## Variants (BEM Modifiers)
- **Placement**: `vs-offcanvas--start` (default), `vs-offcanvas--end`, `vs-offcanvas--top`, `vs-offcanvas--bottom`.
- **Backdrop & Keyboard Behavior**: `vs-offcanvas--backdrop` (default), `vs-offcanvas--backdrop-static`, `vs-offcanvas--no-backdrop`, `vs-offcanvas--no-escape`.
- **Scroll Behavior**: `vs-offcanvas--no-scroll` (default), `vs-offcanvas--scrollable` (page scroll remains enabled while open).
- **Responsive / Persistent Sidebar**: `vs-offcanvas--persistent-sm`, `vs-offcanvas--persistent-md`, `vs-offcanvas--persistent-lg`, `vs-offcanvas--persistent-xl`, `vs-offcanvas--persistent-xxl`.
- **Structural**: `vs-offcanvas--with-header` (default), `vs-offcanvas--no-header`, `vs-offcanvas--with-close` (default), `vs-offcanvas--no-close`.

## Component States
- **Open** — `.is-open` on the root indicates the panel is visible and interactive.
- **Closing** — `.is-closing` optional hook for exit transitions.
- **Persistent** — CSS-driven state when a persistent breakpoint is reached; backdrop is hidden and panel stays visible without toggling.

## Responsive Behavior
- Mobile-first overlay that slides in from the selected edge; panel width/height caps adjust fluidly with viewport.
- Persistent variants convert the panel into a static sidebar at the specified breakpoint while remaining toggleable on smaller screens.
- Internal body region supports vertical scrolling while header/footer remain fixed; page scroll can be locked or allowed via scroll variants.
