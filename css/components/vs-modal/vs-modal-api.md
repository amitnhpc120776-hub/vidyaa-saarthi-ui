# vs-Modal — Component API (v1.0)

## Component Type
Composed Component

## Description
Responsive modal dialog that displays layered content above the page for prompts, confirmations, and other focused interactions.

## Anatomy (BEM Elements)
- `vs-modal` — root container that controls positioning and visibility.
- `vs-modal__overlay` — full-screen overlay behind the dialog that dims background content.
- `vs-modal__dialog` — modal shell that houses header, body, and footer content.
- `vs-modal__header` — top section containing title and optional close control.
- `vs-modal__title` — heading text describing the modal purpose.
- `vs-modal__body` — scrollable content area for primary information or form controls.
- `vs-modal__footer` — bottom section for actions such as confirm or cancel.
- `vs-modal__actions` — flex container for grouping action buttons.
- `vs-modal__close` — close control using the `vs-close` primitive.

## Variants (BEM Modifiers)
- `vs-modal--centered` — vertically centers the dialog within the viewport.
- `vs-modal--full-screen` — expands dialog to use the viewport for immersive experiences.

## States
- `.is-open` — modal is visible and interactive.
- `.is-closing` — modal is transitioning out.

## Responsive Behavior Notes
- Dialog width adjusts fluidly with max-width constraints; body becomes scrollable when content exceeds viewport height.

## Canonical Anatomy Block
{
  "block": "vs-modal",
  "elements": [
    "vs-modal__overlay",
    "vs-modal__dialog",
    "vs-modal__header",
    "vs-modal__title",
    "vs-modal__body",
    "vs-modal__footer",
    "vs-modal__actions",
    "vs-modal__close"
  ],
  "states": ["is-open", "is-closing"],
  "variants": ["vs-modal--centered", "vs-modal--full-screen"]
}
