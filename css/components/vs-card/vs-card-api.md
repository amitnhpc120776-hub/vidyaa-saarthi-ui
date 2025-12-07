# VIS Component API — vs-card

## Component Name
- **vs-card**

## Purpose
- A flexible content container for grouping media, titles, body text, actions, and supporting metadata in the VIS design system without external dependencies.

## Anatomy / Structure
- **vs-card** — Root wrapper controlling layout, spacing, and variant presentation.
- **vs-card__media** — Optional media slot for images, videos, or thumbnails.
- **vs-card__header** — Optional top-aligned header area for supporting content or metadata.
- **vs-card__body** — Primary content container stacking textual elements.
- **vs-card__title** — Main headline within the body.
- **vs-card__subtitle** — Optional subheading or supporting label.
- **vs-card__text** — Paragraph or descriptive copy.
- **vs-card__actions** — Container for buttons, links, or CTA elements.
- **vs-card__footer** — Optional footer for secondary metadata or actions.

## Variants (BEM Modifiers)
- **vs-card--default** — Standard card presentation with neutral surface and subtle border.
- **vs-card--outlined** — Emphasized border with transparent background.
- **vs-card--shadow** — Elevated card with shadow emphasis.
- **vs-card--filled** — Solid background emphasis.
- **vs-card--horizontal** — Media aligned to the left with stacked content to the right.
- **vs-card--media-top** — Media displayed above the body content.
- **vs-card--media-bottom** — Media displayed below the body content.
- **vs-card--inverted** — Dark surface with light text for high-contrast use.
- **vs-card--sm / vs-card--md / vs-card--lg** — Size adjustments for padding, spacing, and typography.

## Component States
- **.is-hoverable** — Enables hover affordance on interactive cards.
- **.is-pressed** — Indicates active/pressed interaction (e.g., on pointer down).
- **.is-selected** — Highlights a selected card state.
- **.is-disabled** — Renders the card non-interactive with muted visuals.

## Responsive Behavior
- Cards are fluid and adapt to their container. The horizontal layout stacks media above content below the small breakpoint; media blocks remain full-width in media-top and media-bottom variants. Spacing and typography rely on VIS tokens and typically require no additional breakpoint overrides.
