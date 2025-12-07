# vs-popover — Component API (Step 1)

## Component Name
vs-popover

## Component Anatomy
- vs-popover__trigger — Interactive element that opens or toggles the popover.
- vs-popover__panel — Container that holds the popover content.
- vs-popover__arrow — Directional arrow pointing toward the trigger (optional).
- vs-popover__header — Wrapper for the popover title area (optional).
- vs-popover__title — Title text when a heading is present (optional).
- vs-popover__body — Main content area of the popover.
- vs-popover__close — Optional action element to dismiss the popover.

## Variants (BEM Modifiers)
**Placement Variants**
- vs-popover--top — Positions the panel above the trigger.
- vs-popover--bottom — Positions the panel below the trigger.
- vs-popover--start — Aligns the panel to start/left relative to trigger.
- vs-popover--end — Aligns the panel to end/right relative to trigger.
- vs-popover--auto — Chooses placement automatically based on available space.

**Trigger Variants**
- vs-popover--click — Opens via click/tap interaction.
- vs-popover--hover — Opens when hovering over the trigger.
- vs-popover--focus — Opens when the trigger gains focus.
- vs-popover--manual — Requires manual control to open/close.

**Style Variants**
- vs-popover--default — Standard surface styling.
- vs-popover--light — Light-surface popover style.
- vs-popover--dark — Dark-surface popover style.
- vs-popover--bordered — Adds a visible border treatment.

**Arrow Variants**
- vs-popover--with-arrow — Displays the directional arrow.
- vs-popover--no-arrow — Hides the directional arrow.

**Content Variants**
- vs-popover--with-title — Includes a title/header section.
- vs-popover--no-title — No title/header section.
- vs-popover--html — Accepts rich HTML content within the body.
- vs-popover--text — Plain text content in the body.

**Behavior Variants**
- vs-popover--dismiss-on-blur — Closes when focus moves away from trigger/panel.
- vs-popover--dismiss-on-action — Closes when an action inside the panel is taken.
- vs-popover--persistent — Stays open until explicitly closed.

**Size Variants**
- vs-popover--sm — Compact sizing.
- vs-popover--md — Medium/default sizing.
- vs-popover--lg — Spacious sizing.

## Component States
- .is-open — Applied when the popover panel is visible.
- .is-hovered — Applied when the trigger is hovered (for hover interactions).
- .is-focused — Applied when the trigger is focused.
- .is-disabled — Applied when the trigger is disabled or non-interactive.
- .is-error — Applied when presenting an error state or validation message.

## Responsive Behavior
- Mobile-first layout; panel width adapts to available space and uses fluid sizing within viewport.
- Placement may switch to auto when constrained to prevent overflow.
- Ensure focus management and visibility remain accessible on touch devices.
