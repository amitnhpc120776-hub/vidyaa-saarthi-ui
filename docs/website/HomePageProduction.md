# Home Page — Production Specification

(Using Token-Only Design System)

## 📁 Referenced Design System Files

1. docs/brand/VS_ColorPalette.md
2. docs/brand/VS_Typography.md
3. docs/brand/VS_ComponentBindingGuidance.md
4. docs/brand/VS_ComponentSpcs.md
5. docs/brand/VS_EffectStyle.md
6. docs/brand/VS_Iconography.md
7. docs/brand/VS_Motions.md
8. docs/brand/VS_Spacing.md
9. docs/brand/VS_LayoutAndGrid.md

All specifications below must reference tokens from these files only.

---

# Hero Section

## 1. Purpose

To introduce Vidyaa Saarthi’s core value proposition through a prominent headline, subheadline, dual CTAs, and a hero visual.

---

## 2. Layout Grid

| Device  | Grid Token   | Notes                              |
| ------- | ------------ | ---------------------------------- |
| Desktop | grid.desktop | Two-column layout (6 + 6)          |
| Tablet  | grid.tablet  | Stacked layout, image below text   |
| Mobile  | grid.mobile  | Fully stacked, full-width elements |

---

## 3. Section Container

| Property         | Token / Reference                      |
| ---------------- | -------------------------------------- |
| Background       | bg/base                                |
| Elevation        | elevation/level-0                      |
| Padding (Top)    | space/64–space/96                      |
| Padding (Bottom) | space/64–space/96                      |
| Content Width    | container.desktop                      |
| Alignment        | Left (Desktop), Center (Mobile/Tablet) |

---

## 4. Structure & Composition

### 4.1 Desktop Layout

| Block        | Columns (grid.desktop) | Notes      |
| ------------ | ---------------------- | ---------- |
| Text Block   | 6 columns              | Left side  |
| Visual Block | 6 columns              | Right side |

### 4.2 Tablet & Mobile Layout

| Device | Behavior                           |
| ------ | ---------------------------------- |
| Tablet | Stacked: Text Block → Visual Block |
| Mobile | Fully stacked, center-aligned      |

---

## 5. Typography

| Element     | Token          | Color Token                                           |
| ----------- | -------------- | ----------------------------------------------------- |
| Headline    | display-xl     | text/primary                                          |
| Subheadline | body/body-lg   | text/secondary                                        |
| CTA Text    | label/label-lg | text/inverse (primary), brand/primary-600 (secondary) |

---

## 6. Colors

| Element              | Color Token       |
| -------------------- | ----------------- |
| Background           | bg/base           |
| Headline Text        | text/primary      |
| Subheadline Text     | text/secondary    |
| Primary CTA Bg       | brand/primary-500 |
| Primary CTA Text     | text/inverse      |
| Primary CTA Hover    | brand/primary-600 |
| Secondary CTA Border | brand/primary-400 |
| Secondary CTA Text   | brand/primary-600 |
| Secondary CTA Hover  | brand/primary-50  |

---

## 7. Spacing

| Relationship             | Token    |
| ------------------------ | -------- |
| Headline → Subheadline   | space/16 |
| Subheadline → CTA Row    | space/24 |
| CTA → CTA Gap (Desktop)  | space/16 |
| CTA → CTA Gap (Mobile)   | space/12 |
| CTA Padding (Horizontal) | space/32 |
| CTA Padding (Vertical)   | space/16 |

---

## 8. Imagery / Icons

| Property                  | Specification                                     |
| ------------------------- | ------------------------------------------------- |
| Placeholder               | `< Image Placeholder — Student Learning Visual >` |
| Placement (Desktop)       | Right column, vertically centered                 |
| Placement (Mobile/Tablet) | Centered below text                               |
| Style                     | elevation/level-0                                 |
| Optional Radius           | radius/12                                         |
| Optional Blur             | blur/layer-soft                                   |

---

## 9. Components

### 9.1 Primary CTA (“Signup — It’s Free”)

| Property   | Token / Reference   |
| ---------- | ------------------- |
| Background | brand/primary-500   |
| Text       | text/inverse        |
| Typography | label/label-lg      |
| Padding    | space/32 + space/16 |
| Radius     | radius/8            |
| Shadow     | elevation/level-1   |
| Hover      | brand/primary-600   |
| Motion     | motion/ease-out     |

### 9.2 Secondary CTA (“How It Works”)

| Property   | Token / Reference   |
| ---------- | ------------------- |
| Background | neutral/0           |
| Border     | brand/primary-400   |
| Text       | brand/primary-600   |
| Typography | label/label-lg      |
| Padding    | space/32 + space/16 |
| Radius     | radius/8            |
| Hover      | brand/primary-50    |
| Motion     | motion/ease-out     |

---

## 10. Interaction & Motion

| Interaction       | Token / Reference                      |
| ----------------- | -------------------------------------- |
| CTA Hover         | elevation/level-2                      |
| Focus State       | focus/ring-light                       |
| Motion Transition | motion/duration-fast + motion/ease-out |

---

## 11. Responsiveness

| Device  | Behavior                       |
| ------- | ------------------------------ |
| Desktop | Two columns, CTAs in one row   |
| Tablet  | Stacked, CTAs centered         |
| Mobile  | Fully stacked, CTAs full-width |

---

## 12. Accessibility

| Requirement      | Specification           |
| ---------------- | ----------------------- |
| Contrast         | All tokens AA compliant |
| Touch Targets    | Button spec compliant   |
| Alt Text         | Required for hero image |
| Focus Visibility | focus/ring-light        |

---

## 13. Tokens Used

| Category   | Tokens                                                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Colors     | bg/base, text/primary, text/secondary, brand/primary-500, brand/primary-600, brand/primary-400, brand/primary-50, neutral/0, text/inverse |
| Typography | display-xl, body/body-lg, label/label-lg                                                                                                  |
| Grid       | grid.desktop, grid.tablet, grid.mobile                                                                                                    |
| Spacing    | space/96, space/64, space/32, space/24, space/16, space/12                                                                                |
| Effects    | elevation/level-0, elevation/level-1, elevation/level-2                                                                                   |
| Radius     | radius/8, radius/12                                                                                                                       |
| Motion     | motion/ease-out, motion/duration-fast                                                                                                     |
| Focus      | focus/ring-light                                                                                                                          |

---

# Trust / Credibility Strip

## 1. Purpose

To display trusted partners, pilot schools, advisory members, or key metrics in a clean, minimal credibility strip.

---

## 2. Layout Grid

| Device  | Grid Token   | Notes                 |
| ------- | ------------ | --------------------- |
| Desktop | grid.desktop | Single row            |
| Tablet  | grid.tablet  | Centered row          |
| Mobile  | grid.mobile  | Stacked or scrollable |

---

## 3. Section Container

| Property         | Token / Reference |
| ---------------- | ----------------- |
| Background       | bg/subtle         |
| Elevation        | elevation/level-0 |
| Padding (Top)    | space/32–space/48 |
| Padding (Bottom) | space/32–space/48 |
| Content Width    | container.desktop |

---

## 4. Structure & Composition

### 4.1 Header

| Element | Token / Ref    |
| ------- | -------------- |
| Label   | label/label-md |
| Color   | text/secondary |
| Spacing | space/16       |

### 4.2 Logos Row

| Item      | Spec                      |
| --------- | ------------------------- |
| Logos     | Monochrome, equal spacing |
| Alignment | Center aligned            |
| Style     | icon/neutral              |

---

## 5. Typography

| Element      | Typography Token | Color Token    |
| ------------ | ---------------- | -------------- |
| Header Label | label/label-md   | text/secondary |
| Captions     | body/body-sm     | text/tertiary  |

---

## 6. Colors

| Element     | Color Token    |
| ----------- | -------------- |
| Background  | bg/subtle      |
| Header Text | text/secondary |
| Captions    | text/tertiary  |
| Logos/Icons | icon/neutral   |

---

## 7. Spacing

| Relationship       | Token    |
| ------------------ | -------- |
| Header → Logos Row | space/16 |
| Logo → Logo        | space/24 |

---

## 8. Imagery

| Property    | Spec                   |
| ----------- | ---------------------- |
| Placeholder | `< Logo Placeholder >` |
| Style       | Monochrome only        |

---

## 9. Components

| Component              | Token / Reference               |
| ---------------------- | ------------------------------- |
| Logo Item              | icon/neutral, elevation/level-0 |
| Optional Metric Number | heading/h4                      |
| Optional Metric Label  | body/body-sm                    |

---

## 10. Interaction & Motion

| Interaction | Token                                  |
| ----------- | -------------------------------------- |
| Motion      | motion/duration-fast + motion/ease-out |

---

## 11. Responsiveness

| Device  | Behavior                   |
| ------- | -------------------------- |
| Desktop | Single row                 |
| Tablet  | Adjusted spacing           |
| Mobile  | Stack or horizontal scroll |

---

## 12. Accessibility

| Requirement | Spec                   |
| ----------- | ---------------------- |
| Alt Text    | Required for each logo |

---

## 13. Tokens Used

| Category   | Tokens                                                 |
| ---------- | ------------------------------------------------------ |
| Colors     | bg/subtle, text/secondary, text/tertiary, icon/neutral |
| Typography | label/label-md, body/body-sm, heading/h4               |
| Grid       | grid.desktop, grid.tablet, grid.mobile                 |
| Spacing    | space/32, space/48, space/24, space/16                 |
| Effects    | elevation/level-0                                      |
| Motion     | motion/duration-fast, motion/ease-out                  |

---

# Testimonials Section

## 1. Purpose

To provide social proof through testimonials and metrics.

---

## 2. Layout Grid

| Device  | Grid Token   | Notes               |
| ------- | ------------ | ------------------- |
| Desktop | grid.desktop | Metrics + Carousel  |
| Tablet  | grid.tablet  | Fewer visible cards |
| Mobile  | grid.mobile  | Single card view    |

---

## 3. Section Container

| Property         | Token / Reference |
| ---------------- | ----------------- |
| Background       | bg/base           |
| Elevation        | elevation/level-0 |
| Padding (Top)    | space/48–space/64 |
| Padding (Bottom) | space/48–space/64 |
| Content Width    | container.desktop |

---

## 4. Structure & Composition

### 4.1 Section Header

| Element | Token / Ref  |
| ------- | ------------ |
| Title   | heading/h3   |
| Color   | text/primary |
| Spacing | space/24     |

### 4.2 Metrics Row

| Element   | Description           |
| --------- | --------------------- |
| Metric    | Icon → Number → Label |
| Alignment | Center                |
| Style     | icon/neutral          |

### 4.3 Testimonial Carousel

| Component | Description                   |
| --------- | ----------------------------- |
| Card      | Portrait → Text → Name → Role |
| Spacing   | space/24 between cards        |

---

## 5. Typography

| Element          | Token        | Color          |
| ---------------- | ------------ | -------------- |
| Section Header   | heading/h3   | text/primary   |
| Metric Number    | heading/h2   | text/primary   |
| Metric Label     | body/body-sm | text/secondary |
| Testimonial Text | body/body-md | text/primary   |
| Person Name      | heading/h5   | text/primary   |
| Person Role      | body/body-sm | text/tertiary  |

---

## 6. Colors

| Element        | Color Token    |
| -------------- | -------------- |
| Background     | bg/base        |
| Text Primary   | text/primary   |
| Text Secondary | text/secondary |
| Text Tertiary  | text/tertiary  |
| Icons          | icon/neutral   |

---

## 7. Spacing

| Relationship          | Token             |
| --------------------- | ----------------- |
| Header → Metrics Row  | space/24          |
| Metrics → Carousel    | space/32–space/48 |
| Card Internal Padding | space/24          |
| Card → Card           | space/24          |

---

## 8. Imagery

| Property    | Specification              |
| ----------- | -------------------------- |
| Portrait    | radius/full or radius/12   |
| Placeholder | `< Portrait Placeholder >` |
| Elevation   | elevation/level-1          |

---

## 9. Components

### 9.1 Testimonial Card

| Property   | Token             |
| ---------- | ----------------- |
| Background | neutral/0         |
| Radius     | radius/12         |
| Shadow     | elevation/level-1 |
| Hover      | elevation/level-2 |
| Motion     | motion/ease-out   |

---

## 10. Interaction & Motion

| Interaction | Token                                    |
| ----------- | ---------------------------------------- |
| Carousel    | motion/duration-normal + motion/ease-out |

---

## 11. Responsiveness

| Device  | Behavior               |
| ------- | ---------------------- |
| Desktop | Multiple cards visible |
| Tablet  | 2 cards visible        |
| Mobile  | 1 card visible         |

---

## 12. Accessibility

| Requirement | Spec                   |
| ----------- | ---------------------- |
| Alt Text    | Required for portraits |
| Focus       | focus/ring-light       |

---

## 13. Tokens Used

| Category   | Tokens                                                             |
| ---------- | ------------------------------------------------------------------ |
| Colors     | bg/base, text/primary, text/secondary, text/tertiary, icon/neutral |
| Typography | heading/h2, heading/h3, heading/h5, body/body-md, body/body-sm     |
| Grid       | grid.desktop, grid.tablet, grid.mobile                             |
| Spacing    | space/48, space/32, space/24                                       |
| Effects    | elevation/level-1, elevation/level-2                               |
| Radius     | radius/full, radius/12                                             |
| Motion     | motion/ease-out, motion/duration-normal                            |

---

# Vidyaa Saarthi Advantages Section

## 1. Purpose

To present four core benefits of the platform using visually consistent cards.

---

## 2. Layout Grid

| Device  | Grid Token   | Notes          |
| ------- | ------------ | -------------- |
| Desktop | grid.desktop | 4 cards in row |
| Tablet  | grid.tablet  | 2 per row      |
| Mobile  | grid.mobile  | 1 per row      |

---

## 3. Section Container

| Property         | Token / Reference |
| ---------------- | ----------------- |
| Background       | bg/base           |
| Elevation        | elevation/level-0 |
| Padding (Top)    | space/64–space/80 |
| Padding (Bottom) | space/64–space/80 |
| Content Width    | container.desktop |

---

## 4. Structure & Composition

### 4.1 Section Header

| Element | Token / Ref  |
| ------- | ------------ |
| Title   | heading/h3   |
| Color   | text/primary |
| Spacing | space/32     |

### 4.2 Cards Grid

| Card Element | Description                  |
| ------------ | ---------------------------- |
| Illustration | Icon/graphic per token rules |
| Title        | heading/h5                   |
| Body         | body/body-md                 |
| Alignment    | Center-aligned               |

---

## 5. Typography

| Element    | Token        | Color Token    |
| ---------- | ------------ | -------------- |
| Title      | heading/h3   | text/primary   |
| Card Title | heading/h5   | text/primary   |
| Card Text  | body/body-md | text/secondary |

---

## 6. Colors

| Element            | Token          |
| ------------------ | -------------- |
| Background         | bg/base        |
| Card Background    | neutral/0      |
| Card Title         | text/primary   |
| Card Text          | text/secondary |
| Illustration Color | icon/brand     |

---

## 7. Spacing

| Relationship                | Token             |
| --------------------------- | ----------------- |
| Header → Cards              | space/32          |
| Card Internal Padding       | space/24–space/32 |
| Illustration → Title        | space/16          |
| Title → Text                | space/12          |
| Card → Card (desktop)       | space/24          |
| Card → Card (tablet/mobile) | space/32–space/40 |

---

## 8. Imagery

| Property    | Spec                                     |
| ----------- | ---------------------------------------- |
| Placeholder | `< Advantage Illustration Placeholder >` |
| Radius      | radius/12                                |
| Elevation   | elevation/level-0 or elevation/level-1   |

---

## 9. Components

### 9.1 Advantage Card

| Property   | Token             |
| ---------- | ----------------- |
| Background | neutral/0         |
| Radius     | radius/12         |
| Shadow     | elevation/level-1 |
| Hover      | elevation/level-2 |
| Motion     | motion/ease-out   |

---

## 10. Interaction & Motion

| Interaction | Token                                  |
| ----------- | -------------------------------------- |
| Hover       | elevation/level-2                      |
| Motion      | motion/duration-fast + motion/ease-out |

---

## 11. Responsiveness

| Device  | Behavior       |
| ------- | -------------- |
| Desktop | 4 cards in row |
| Tablet  | 2 per row      |
| Mobile  | 1 per row      |

---

## 12. Accessibility

| Requirement | Spec             |
| ----------- | ---------------- |
| Alt Text    | Required         |
| Focus       | focus/ring-light |

---

## 13. Tokens Used

| Category   | Tokens                                                               |
| ---------- | -------------------------------------------------------------------- |
| Colors     | bg/base, neutral/0, text/primary, text/secondary, icon/brand         |
| Typography | heading/h3, heading/h5, body/body-md                                 |
| Grid       | grid.desktop, grid.tablet, grid.mobile                               |
| Spacing    | space/80, space/64, space/40, space/32, space/24, space/16, space/12 |
| Effects    | elevation/level-0, elevation/level-1, elevation/level-2              |
| Radius     | radius/12                                                            |
| Motion     | motion/ease-out, motion/duration-fast                                |

---

# Who We Serve Section

## 1. Purpose

To communicate the three audience groups (Students, Parents, Schools).

---

## 2. Layout Grid

| Device  | Grid Token   | Notes             |
| ------- | ------------ | ----------------- |
| Desktop | grid.desktop | 3 cards           |
| Tablet  | grid.tablet  | 2 cards + 1 below |
| Mobile  | grid.mobile  | 1 card per row    |

---

## 3. Section Container

| Property         | Token             |
| ---------------- | ----------------- |
| Background       | bg/base           |
| Elevation        | elevation/level-0 |
| Padding (Top)    | space/64–space/80 |
| Padding (Bottom) | space/64–space/80 |
| Content Width    | container.desktop |

---

## 4. Structure & Composition

### 4.1 Header

| Element | Token        |
| ------- | ------------ |
| Title   | heading/h3   |
| Color   | text/primary |
| Spacing | space/32     |

### 4.2 Cards Grid

Each card includes:

- Icon
- Title
- One-line description

---

## 5. Typography

| Element    | Token        | Color Token    |
| ---------- | ------------ | -------------- |
| Title      | heading/h3   | text/primary   |
| Card Title | heading/h5   | text/primary   |
| Card Body  | body/body-md | text/secondary |

---

## 6. Colors

| Element         | Token          |
| --------------- | -------------- |
| Background      | bg/base        |
| Card Background | neutral/0      |
| Icon            | icon/brand     |
| Card Text       | text/secondary |

---

## 7. Spacing

| Relationship          | Token                                                 |
| --------------------- | ----------------------------------------------------- |
| Header → Cards        | space/32                                              |
| Card Internal Padding | space/24–space/32                                     |
| Icon → Title          | space/16                                              |
| Title → Description   | space/12                                              |
| Card → Card           | space/24 (desktop), space/32–space/40 (tablet/mobile) |

---

## 8. Imagery / Icons

| Property | Token      |
| -------- | ---------- |
| Icon     | icon/brand |
| Radius   | radius/12  |

---

## 9. Components

### Audience Card

| Property   | Token             |
| ---------- | ----------------- |
| Background | neutral/0         |
| Radius     | radius/12         |
| Shadow     | elevation/level-1 |
| Hover      | elevation/level-2 |
| Motion     | motion/ease-out   |

---

## 10. Interaction & Motion

| Interaction | Token             |
| ----------- | ----------------- |
| Hover       | elevation/level-2 |
| Focus       | focus/ring-light  |

---

## 11. Responsiveness

| Device  | Behavior |
| ------- | -------- |
| Desktop | 3 cards  |
| Tablet  | 2 + 1    |
| Mobile  | 1 card   |

---

## 12. Accessibility

| Requirement | Spec             |
| ----------- | ---------------- |
| Alt Text    | Required         |
| Focus       | focus/ring-light |

---

## 13. Tokens Used

| Category   | Tokens                                                               |
| ---------- | -------------------------------------------------------------------- |
| Colors     | bg/base, neutral/0, text/primary, text/secondary, icon/brand         |
| Typography | heading/h3, heading/h5, body/body-md                                 |
| Grid       | grid.desktop, grid.tablet, grid.mobile                               |
| Spacing    | space/80, space/64, space/40, space/32, space/24, space/16, space/12 |
| Effects    | elevation/level-0, elevation/level-1, elevation/level-2              |
| Radius     | radius/12                                                            |
| Motion     | motion/ease-out, motion/duration-fast                                |

---

# Final CTA Section

## 1. Purpose

To provide a strong concluding call-to-action that encourages signups or school demos.

---

## 2. Layout Grid

| Device  | Grid Token   | Notes                |
| ------- | ------------ | -------------------- |
| Desktop | grid.desktop | CTA buttons centered |
| Tablet  | grid.tablet  | May wrap             |
| Mobile  | grid.mobile  | Stacked              |

---

## 3. Section Container

| Property         | Token                         |
| ---------------- | ----------------------------- |
| Background       | bg/subtle or brand/primary-50 |
| Elevation        | elevation/level-0             |
| Padding (Top)    | space/64–space/80             |
| Padding (Bottom) | space/64–space/80             |
| Content Width    | container.desktop             |
| Alignment        | Center                        |

---

## 4. Structure & Composition

### 4.1 Header

| Element | Token        |
| ------- | ------------ |
| Title   | heading/h3   |
| Color   | text/primary |
| Spacing | space/24     |

### 4.2 CTA Row

| Element       | Description                           |
| ------------- | ------------------------------------- |
| Primary CTA   | “Signup — It's Free”                  |
| Secondary CTA | “Book a School Demo”                  |
| Spacing       | space/16 (desktop), space/12 (mobile) |

---

## 5. Typography

| Element       | Token          | Color Token       |
| ------------- | -------------- | ----------------- |
| Title         | heading/h3     | text/primary      |
| Primary CTA   | label/label-lg | text/inverse      |
| Secondary CTA | label/label-lg | brand/primary-600 |

---

## 6. Colors

| Element              | Token                         |
| -------------------- | ----------------------------- |
| Background           | bg/subtle or brand/primary-50 |
| Primary CTA Bg       | brand/primary-500             |
| Primary CTA Hover    | brand/primary-600             |
| Primary CTA Text     | text/inverse                  |
| Secondary CTA Border | brand/primary-400             |
| Secondary CTA Text   | brand/primary-600             |
| Secondary CTA Hover  | brand/primary-50              |

---

## 7. Spacing

| Relationship      | Token                      |
| ----------------- | -------------------------- |
| Header → CTA Row  | space/24                   |
| CTA Gap (desktop) | space/16                   |
| CTA Gap (mobile)  | space/12                   |
| CTA Padding       | space/32 (H), space/16 (V) |

---

## 8. Imagery

None.

---

## 9. Components

### Primary CTA

| Property   | Token             |
| ---------- | ----------------- |
| Background | brand/primary-500 |
| Hover      | brand/primary-600 |
| Radius     | radius/8          |
| Shadow     | elevation/level-1 |
| Motion     | motion/ease-out   |

### Secondary CTA

| Property | Token             |
| -------- | ----------------- |
| Text     | brand/primary-600 |
| Border   | brand/primary-400 |
| Hover    | brand/primary-50  |
| Radius   | radius/8          |
| Motion   | motion/ease-out   |

---

## 10. Interaction & Motion

| Interaction | Token                                  |
| ----------- | -------------------------------------- |
| Hover       | elevation/level-2                      |
| Focus       | focus/ring-light                       |
| Motion      | motion/duration-fast + motion/ease-out |

---

## 11. Responsiveness

| Device  | Behavior                    |
| ------- | --------------------------- |
| Desktop | Buttons centered in one row |
| Tablet  | May wrap                    |
| Mobile  | Buttons stacked full-width  |

---

## 12. Accessibility

| Requirement | Spec             |
| ----------- | ---------------- |
| Contrast    | AA Compliant     |
| Focus       | focus/ring-light |
| Touch       | Button spec      |

---

## 13. Tokens Used

| Category   | Tokens                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Colors     | bg/subtle, brand/primary-50, brand/primary-500, brand/primary-600, brand/primary-400, text/primary, text/inverse |
| Typography | heading/h3, label/label-lg                                                                                       |
| Grid       | grid.desktop, grid.tablet, grid.mobile                                                                           |
| Spacing    | space/80, space/64, space/32, space/24, space/16, space/12                                                       |
| Effects    | elevation/level-0, elevation/level-1, elevation/level-2                                                          |
| Radius     | radius/8                                                                                                         |
| Motion     | motion/ease-out, motion/duration-fast                                                                            |
| Focus      | focus/ring-light                                                                                                 |

---

# ✔ End of Home Page Production Specification
