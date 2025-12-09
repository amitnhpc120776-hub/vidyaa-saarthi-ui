# VIS Component API — vs-alerts (v1.0)

## Component type
- Dependent Primitive (reuses `vs-icon` and `vs-close`)

## Description
Responsive alert/banner for contextual feedback. Supports message text with leading icon and optional dismiss control.

## Anatomy
- `vs-alerts` — root alert container
- `vs-alerts__icon` — leading icon container (uses `vs-icon`)
- `vs-alerts__body` — content wrapper for message text
- `vs-alerts__message` — text node for the alert content
- `vs-alerts__close` — optional dismiss control (uses `vs-close`)

## Variants (modifiers)
- `vs-alerts--primary`
- `vs-alerts--success`
- `vs-alerts--danger`
- `vs-alerts--warning`
- `vs-alerts--discovery`

## States
- `.is-dismissed` — alert has been dismissed/hidden

## Responsive behavior
- Content and icon stack fluidly; no structural changes required across breakpoints.

## Canonical Anatomy Block
{
  "block": "vs-alerts",
  "elements": [
    "vs-alerts__icon",
    "vs-alerts__body",
    "vs-alerts__message",
    "vs-alerts__close"
  ],
  "states": ["is-dismissed"],
  "variants": [
    "vs-alerts--primary",
    "vs-alerts--success",
    "vs-alerts--danger",
    "vs-alerts--warning",
    "vs-alerts--discovery"
  ]
}
