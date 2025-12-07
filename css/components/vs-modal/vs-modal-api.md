# VIS Component API — vs-modal

## Component Name
- **vs-modal**

## Purpose
- Accessible dialog overlay for presenting focused content, confirmations, or forms with support for layered surfaces, responsive sizing, and behavioral controls.

## Anatomy / Structure
- **vs-modal** — Root container managing state, placement, and variant modifiers.
- **vs-modal__overlay** — Optional backdrop layer that dims the page and captures outside clicks.
- **vs-modal__dialog** — Dialog wrapper that sets max-width, positioning, and scrolling rules.
- **vs-modal__header** — Top bar containing the title and optional supporting content.
- **vs-modal__title** — Dialog title text.
- **vs-modal__subtitle** — Optional secondary description or meta text.
- **vs-modal__close** — Icon/button control to dismiss the modal.
- **vs-modal__body** — Main content region for text, forms, or media.
- **vs-modal__footer** — Bottom action bar for primary/secondary buttons.
- **vs-modal__actions** — Flex container aligning footer buttons.

## Variants (BEM Modifiers)
- **Size**: `vs-modal--sm`, `vs-modal--md` (default), `vs-modal--lg`, `vs-modal--xl`, `vs-modal--fullscreen`, `vs-modal--fullscreen-responsive`.
- **Scroll / Position**: `vs-modal--scrollable`, `vs-modal--centered`.
- **Backdrop & Behavior**: `vs-modal--backdrop` (default), `vs-modal--backdrop-static`, `vs-modal--no-backdrop`, `vs-modal--no-escape`.
- **Layout / Surface**: `vs-modal--default`, `vs-modal--headerless`, `vs-modal--footerless`, `vs-modal--bordered`, `vs-modal--shadow`.

## Component States
- **Open** — `.is-open` applied to the root when the dialog is mounted/visible and focus is trapped inside.
- **Hidden** — default state with dialog not visible and aria-hidden set to true.
- **Closing** — optional `.is-closing` hook for exit transitions if needed by animations.
- **Scrolling Content** — `.is-scrollable` may be applied when body overflows to adjust padding/shadows (driven via JS if needed).

## Responsive Behavior
- Mobile-first layout with full-width dialogs on small viewports; `vs-modal--fullscreen-responsive` behaves like standard size on larger screens but becomes fullscreen below the `--bp-md` breakpoint.
- Body content supports `vs-modal--scrollable` to allow internal scrolling while header/footer remain fixed.
- Centered alignment via `vs-modal--centered`; default aligns near top with safe spacing.
