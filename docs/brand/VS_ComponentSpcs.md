# ⭐ **COMPONENT SPEC SHEET — PRIMARY BUTTON**

## **1. Component Name**

**Primary Button (Solid Fill Variant)**

---

## **2. Component Anatomy**

- Button Container
- Label Text
- (Optional) Leading Icon
- (Optional) Trailing Icon

---

## **3. Sizes (Dimensions & Spacing)**

| Property                 | Token / Value |
| ------------------------ | ------------- |
| Height                   | **40px**      |
| Horizontal Padding       | `space/16`    |
| Gap Between Icon & Label | `space/8`     |
| Border Radius            | **8px**       |
| Min Tap Area             | **40×40px**   |

(Values aligned with spacing tokens → )

---

## **4. Typography**

| Element    | Token                                      |
| ---------- | ------------------------------------------ |
| Label Text | `label/label-lg` → Inter 600 / 16px / 130% |

(Typography source → )

---

## **5. Color Tokens (All States)**

| State                | Background          | Text           | Border            |
| -------------------- | ------------------- | -------------- | ----------------- |
| **Default**          | `brand/primary-500` | `text/inverse` | none              |
| **Hover**            | `brand/primary-600` | `text/inverse` | none              |
| **Active / Pressed** | `brand/primary-700` | `text/inverse` | none              |
| **Focus**            | same as default     | same           | none + focus ring |
| **Disabled**         | `neutral/300`       | `neutral/500`  | none              |

(Token source – brand, neutral, text colors → )

---

## **6. Effects (Elevation, Focus, Blur)**

| State    | Effect Token        |
| -------- | ------------------- |
| Default  | `elevation/level-1` |
| Hover    | `elevation/level-2` |
| Active   | `elevation/level-1` |
| Focus    | `focus/ring-light`  |
| Disabled | `elevation/level-0` |

(Effect tokens → )

---

## **7. Motion (Transitions)**

| Interaction     | Motion Token                               |
| --------------- | ------------------------------------------ |
| Hover           | `motion/duration-fast` + `motion/ease-out` |
| Press           | `motion/duration-fast` + `motion/ease-in`  |
| Elevation shift | `motion/duration-md`                       |

(Motion tokens → )

---

## **8. Icon Rules**

| Requirement    | Value                      |
| -------------- | -------------------------- |
| Icon Size      | `icon/size-20` recommended |
| Icon Color     | Always `text/inverse`      |
| Icon Alignment | Left or Right              |
| Icon Spacing   | `space/8` from label       |
| Icon Stroke    | 2px (outline style)        |

(Aligned with your iconography system)

---

## **9. Accessibility**

- Minimum contrast:

  - `brand/primary-500` on `text/inverse` → AA compliant

- Tap target: **≥40×40px**
- Focus: Must display `focus/ring-light` token
- Disabled state must remove interactions
- Do not rely on color alone → keep text visible in all states

---

## **10. Usage Guidelines**

### ✔️ Use When:

- The action is the **primary action** on the screen
- CTA that requires user attention
- Submission, Next, Continue, Save, Confirm

### ❌ Avoid When:

- There are multiple primary actions (use Secondary instead)
- For destructive actions (use Destructive Button if introduced later)
- In dense UI (use Tertiary Button)

### Dos

- Keep text short (1–2 words)
- Use only one Primary Button per screen section

### Don’ts

- Don’t mix multiple button sizes
- Don’t apply shadows not defined in tokens
- Don’t recolor the button outside approved tokens

# ⭐ **COMPONENT SPEC SHEET — SECONDARY BUTTON (OUTLINE)**

## **1. Component Name**

**Secondary Button — Outline Variant**

---

## **2. Component Anatomy**

- Outline Container
- Label Text
- (Optional) Leading Icon
- (Optional) Trailing Icon

---

## **3. Sizes (Dimensions & Spacing)**

Same as Primary Button (to ensure consistency).

| Property                 | Token / Value |
| ------------------------ | ------------- |
| Height                   | **40px**      |
| Padding Left/Right       | `space/16`    |
| Gap Between Icon & Label | `space/8`     |
| Border Radius            | **8px**       |
| Min Tap Area             | **40 × 40px** |

(Spacing tokens source → )

---

## **4. Typography**

| Element    | Token                               |
| ---------- | ----------------------------------- |
| Label Text | `label/label-lg` (Inter 600 / 16px) |

(Typography source → )

---

## **5. Color Tokens (All States)**

| State              | Background          | Text                | Border              |
| ------------------ | ------------------- | ------------------- | ------------------- |
| **Default**        | `transparent`       | `brand/primary-600` | `brand/primary-400` |
| **Hover**          | `brand/primary-50`  | `brand/primary-700` | `brand/primary-500` |
| **Active/Pressed** | `brand/primary-100` | `brand/primary-700` | `brand/primary-600` |
| **Focus**          | same as default     | same                | border + focus ring |
| **Disabled**       | `transparent`       | `neutral/400`       | `neutral/300`       |

(Color tokens source → )

---

## **6. Effects**

| State    | Effects             |
| -------- | ------------------- |
| Default  | `elevation/level-0` |
| Hover    | `elevation/level-1` |
| Active   | `elevation/level-0` |
| Focus    | `focus/ring-light`  |
| Disabled | no elevation        |

(Effect tokens → )

---

## **7. Motion (Transitions)**

| Interaction | Motion Tokens                              |
| ----------- | ------------------------------------------ |
| Hover       | `motion/duration-fast` + `motion/ease-out` |
| Press       | `motion/duration-fast` + `motion/ease-in`  |
| Focus ring  | `motion/duration-md`                       |

(Motion tokens → )

---

## **8. Icon Rules**

| Requirement         | Value               |
| ------------------- | ------------------- |
| Icon Size           | `icon/size-20`      |
| Default Icon Color  | `brand/primary-600` |
| Hover Icon Color    | `brand/primary-700` |
| Disabled Icon Color | `neutral/400`       |
| Icon + Text Gap     | `space/8`           |
| Icon Stroke         | 2px                 |

---

## **9. Accessibility**

- Contrast meets WCAG AA with outline + text
- Must show `focus/ring-light` when focused
- Tap target ≥ 40×40px
- Disabled state must disable pointer events
- Do not rely on color alone to indicate selection

---

## **10. Usage Guidelines**

### ✔️ Use When:

- There is already a Primary Button on the screen
- For secondary actions (e.g., “Cancel”, “Back”, “View More”)
- When a less dominant UI choice is needed

### ❌ Avoid When:

- The action is primary (use Primary Button instead)
- For irreversible/destructive actions
- In very dense layouts → use Tertiary Button

### Dos

- Maintain consistent padding with Primary Button
- Use outline to keep visual hierarchy clear

### Don’ts

- Do not fill the secondary button with colors not defined
- Do not use outline variants for primary CTAs

---

# ⭐ **COMPONENT SPEC SHEET — INPUT FIELD (TEXT INPUT)**

## **1. Component Name**

**Input Field — Single-Line Text Input**

---

## **2. Component Anatomy**

- Label
- Input Container
- Text (User Input)
- Placeholder Text
- Optional Leading Icon
- Optional Trailing Icon (clear, show/hide, etc.)
- Helper Text (optional)
- Error Text (optional)

---

## **3. Sizes (Dimensions & Spacing)**

| Property                | Token / Value         |
| ----------------------- | --------------------- |
| Height                  | **44px**              |
| Padding L/R             | `space/12`            |
| Gap between icon & text | `space/8`             |
| Corner Radius           | **8px**               |
| Helper Text Top Spacing | `space/4`             |
| Label Bottom Spacing    | `space/4`             |
| Minimum Width           | Flexible / responsive |
| Min Tap Target          | 44px height compliant |

(Spacing tokens → )

---

## **4. Typography**

| Element          | Token                                          |
| ---------------- | ---------------------------------------------- |
| Label            | `label/label-md`                               |
| Input Text       | `body/body-md`                                 |
| Placeholder Text | `text/tertiary`                                |
| Helper Text      | `caption/caption`                              |
| Error Text       | `caption/caption` (colored semantic/error-700) |

(Typography source → )

---

## **5. Color Tokens (All States)**

| State        | Background        | Border               | Text           | Placeholder     | Icon                 |
| ------------ | ----------------- | -------------------- | -------------- | --------------- | -------------------- |
| **Default**  | `surface/default` | `border/default`     | `text/primary` | `text/tertiary` | `text/tertiary`      |
| **Hover**    | `surface/default` | `border/strong`      | same           | same            | `text/secondary`     |
| **Focus**    | `surface/default` | `brand/primary-500`  | same           | same            | `brand/primary-600`  |
| **Disabled** | `neutral/100`     | `border/subtle`      | `neutral/500`  | `neutral/400`   | `neutral/400`        |
| **Error**    | `surface/default` | `semantic/error-500` | `text/primary` | `text/tertiary` | `semantic/error-600` |

(Color tokens → )

---

## **6. Effects**

| State    | Effect              |
| -------- | ------------------- |
| Default  | `elevation/level-0` |
| Hover    | `elevation/level-0` |
| Focus    | `focus/ring-light`  |
| Disabled | none                |
| Error    | none (color only)   |

(Effects → )

---

## **7. Motion (Transitions)**

| Interaction     | Tokens                                     |
| --------------- | ------------------------------------------ |
| Hover           | `motion/duration-fast` + `motion/ease-out` |
| Focus           | `motion/duration-md` + `motion/ease-out`   |
| Error indicator | `motion/duration-md`                       |

(Motion system → )

---

## **8. Icon Rules**

| Rule           | Token / Value             |
| -------------- | ------------------------- |
| Icon Size      | `icon/size-20`            |
| Default Color  | `text/tertiary`           |
| Hover Color    | `text/secondary`          |
| Focus Color    | `brand/primary-600`       |
| Disabled Color | `neutral/400`             |
| Icon Margin    | `space/8` from input text |

---

## **9. Accessibility**

- Label must always be visible (no placeholder-only labels)
- Input must show `focus/ring-light` for keyboard navigation
- Minimum contrast:

  - Text: meets AA
  - Placeholder: lighter but readable

- Minimum height: 44px
- Error state must include:

  - Red border
  - Error message
  - Error icon (if present)

---

## **10. Usage Guidelines**

### ✔️ Use When:

- Collecting a single-line text value
- Forms, login flows, search fields, profile editing, etc.

### ❌ Avoid When:

- Multiple lines → use Textarea (different component)
- For selections → use Select/Dropdown
- For complex inputs → use Custom Input (later phase)

### Do:

- Place label above input
- Use helper text for instructions
- Use error text for validation

### Don’t:

- Use placeholder as label
- Apply unapproved colors or shadows
- Mix icons without spacing token rules

---

# ⭐ **COMPONENT SPEC SHEET — BASIC CARD (NO IMAGE)**

## **1. Component Name**

**Basic Information Card (No Image)**

---

## **2. Component Anatomy**

- Card Container
- Title
- Description / Body Text
- (Optional) Icon (top-left)
- (Optional) CTA (link or button)

---

## **3. Sizes (Dimensions & Spacing)**

| Property                          | Token / Value         |
| --------------------------------- | --------------------- |
| Padding                           | `space/24`            |
| Vertical Spacing Between Elements | `space/12`            |
| Max Width                         | Flexible (responsive) |
| Corner Radius                     | **12px**              |
| Min Height                        | Content-driven        |

(Spacing tokens → )

---

## **4. Typography**

| Element        | Token            |
| -------------- | ---------------- |
| Title          | `heading/h3`     |
| Body Text      | `body/body-md`   |
| CTA (optional) | `label/label-md` |

(Typography source → )

---

## **5. Color Tokens**

| Element               | Token               |
| --------------------- | ------------------- |
| Background            | `surface/default`   |
| Text (Title)          | `text/primary`      |
| Text (Body)           | `text/secondary`    |
| Border (optional)     | `border/default`    |
| Icon Color (optional) | `brand/primary-600` |

(Colors → )

---

## **6. Effects**

| State                  | Effect              |
| ---------------------- | ------------------- |
| Default                | `elevation/level-1` |
| Hover (if clickable)   | `elevation/level-2` |
| Active                 | `elevation/level-1` |
| Focus (if interactive) | `focus/ring-light`  |

(Effects → )

---

## **7. Motion**

| Element         | Motion Token                             |
| --------------- | ---------------------------------------- |
| Hover elevation | `motion/duration-md` + `motion/ease-out` |
| CTA (optional)  | `motion/duration-fast`                   |

(Motion tokens → )

---

## **8. Icon Rules (If Icon Included)**

| Feature       | Token / Value             |
| ------------- | ------------------------- |
| Icon Size     | `icon/size-24`            |
| Icon Color    | `brand/primary-600`       |
| Icon Position | Top-left or left of title |
| Icon Spacing  | `space/12` from title     |

---

## **9. Accessibility**

- Text contrast meets WCAG AA
- If clickable → must show focus ring
- Maintain large, touch-friendly padding
- Do not remove border or shadow for users with motion reduction

---

## **10. Usage Guidelines**

### ✔️ Use For:

- Feature descriptions
- USPs
- Highlighting a benefit
- Explaining a concept
- Marketing blocks

### ❌ Avoid For:

- Cards requiring images or thumbnails
- Data-heavy content
- Testimonials or pricing (use their own card types)

# ⭐ **COMPONENT SPEC SHEET — BASIC CARD WITH IMAGE**

_Component #4.2_

## **1. Component Name**

**Basic Card — With Image Header / Thumbnail**

---

## **2. Component Anatomy**

- Card Container
- Image (top, full width OR left thumbnail)
- Title
- Body Text / Description
- (Optional) CTA (button or link)

**Layout Variants (both supported):**

1. **Image on Top (Full-width header)**
2. **Image Left (Thumbnail beside text)**

---

## **3. Sizes (Dimensions & Spacing)**

### **Common to All Variants**

| Property                                | Token / Value         |
| --------------------------------------- | --------------------- |
| Padding (text area)                     | `space/24`            |
| Vertical Spacing (between title & body) | `space/12`            |
| Gap (image-left variant)                | `space/16`            |
| Corner Radius                           | **12px**              |
| Max Width                               | Responsive / flexible |
| Min Height                              | Content-driven        |

### **Image Specifications**

| Variant        | Spec                                                                            |
| -------------- | ------------------------------------------------------------------------------- |
| **Image Top**  | Full-width, height auto (usually 160–240px), corner radius top-left & top-right |
| **Image Left** | Fixed width 96–120px image, height auto, aligned top                            |

Spacing tokens →

---

## **4. Typography**

| Element     | Token            |
| ----------- | ---------------- |
| Title       | `heading/h3`     |
| Description | `body/body-md`   |
| CTA         | `label/label-md` |

Typography tokens →

---

## **5. Color Tokens**

| Element           | Token               |
| ----------------- | ------------------- |
| Background        | `surface/default`   |
| Title Text        | `text/primary`      |
| Body Text         | `text/secondary`    |
| Border (optional) | `border/default`    |
| CTA Text          | `brand/primary-600` |

(Color tokens → )

Image is external content → no token applies directly.

---

## **6. Effects**

| State                | Effect              |
| -------------------- | ------------------- |
| Default              | `elevation/level-1` |
| Hover (if clickable) | `elevation/level-2` |
| Active               | `elevation/level-1` |
| Focus (interactive)  | `focus/ring-light`  |

Effects →

---

## **7. Motion (Transitions)**

| Element         | Token                                    |
| --------------- | ---------------------------------------- |
| Hover elevation | `motion/duration-md` + `motion/ease-out` |
| CTA motion      | `motion/duration-fast`                   |

Motion tokens →

---

## **8. Image Rules**

| Requirement   | Spec                            |
| ------------- | ------------------------------- |
| Ratio         | 16:9 recommended (top variant)  |
| Corner Radius | 12px top corners only           |
| Object Fit    | `cover`                         |
| Allowed Sizes | 96–240px height                 |
| Margins       | None (image touches card edges) |

---

## **9. Accessibility**

- Image must include descriptive `alt` text
- Card hover states must show elevation for clarity
- Title must meet WCAG AA contrast
- For image-left layout → ensure minimum tap target maintained

---

## **10. Usage Guidelines**

### ✔️ Use For:

- Feature highlights with visuals
- Learning-category cards
- Benefits & value propositions
- Section highlights on landing pages
- “How it works” steps

### ❌ Avoid For:

- Testimonials
- KPI metrics
- Very text-heavy content
- Product dashboards (use product card set)

### DO:

- Keep image clean, uncluttered
- Maintain consistent corner radius
- Add CTA only if the card is actionable

### DON’T:

- Place text directly over the image
- Use images that clash with brand colors
- Use mismatched image sizes

---

# ⭐ **COMPONENT SPEC SHEET — TESTIMONIAL CARD**

_Component #4.3_

## **1. Component Name**

**Testimonial Card**

---

## **2. Component Anatomy**

- Container
- Quote Icon (optional)
- Testimonial Text
- Author Section:

  - Author Name
  - Author Role (optional)
  - Author Image (optional, round avatar)

---

## **3. Sizes (Dimensions & Spacing)**

| Element                              | Size / Token          |
| ------------------------------------ | --------------------- |
| Padding                              | `space/24`            |
| Vertical spacing (line-to-line)      | `space/12`            |
| Gap between Testimonial & Author Row | `space/20`            |
| Avatar Size                          | 48px (if included)    |
| Avatar Radius                        | full circle           |
| Card Corner Radius                   | 12px                  |
| Minimum Width                        | Responsive            |
| Maximum Width                        | 360–480px recommended |

Spacing source →

---

## **4. Typography**

| Element          | Token            |
| ---------------- | ---------------- |
| Testimonial Text | `body/body-md`   |
| Author Name      | `label/label-md` |
| Author Role      | `body/body-sm`   |

Typography tokens →

---

## **5. Color Tokens**

| Element                 | Token               |
| ----------------------- | ------------------- |
| Background              | `surface/default`   |
| Quote Icon              | `brand/primary-500` |
| Testimonial Text        | `text/primary`      |
| Author Name             | `text/primary`      |
| Author Role             | `text/secondary`    |
| Border (optional style) | `border/default`    |

Colors →

---

## **6. Effects**

| Element                | Effect Token        |
| ---------------------- | ------------------- |
| Default                | `elevation/level-1` |
| Hover (if interactive) | `elevation/level-2` |
| Active                 | `elevation/level-1` |
| Focus (if clickable)   | `focus/ring-light`  |

Effects →

---

## **7. Motion**

| Interaction             | Motion Token                             |
| ----------------------- | ---------------------------------------- |
| Hover elevation         | `motion/duration-md` + `motion/ease-out` |
| Avatar hover (optional) | `motion/duration-fast`                   |

Motion →

---

## **8. Image Rules (If Avatar Included)**

| Element      | Rule                                 |
| ------------ | ------------------------------------ |
| Avatar Shape | Circular                             |
| Avatar Size  | 48px                                 |
| Alignment    | Left of Author Details               |
| Spacing      | `space/12` gap between avatar & name |
| Image Fit    | Cover                                |

---

## **9. Accessibility**

- Testimonial text must meet minimum contrast AA
- If card is interactive: must have `focus/ring-light`
- Avatar must include alt text (e.g. “Photo of <name>”)
- Do not rely solely on testimonial color for meaning

---

## **10. Usage Guidelines**

### ✔️ Use For:

- Landing page testimonials
- Success stories
- Parent/teacher/student quotes
- Social proof sections

### ❌ Avoid For:

- Dense product UI
- KPI or numeric summaries
- Complex layouts with multiple actions

### DO:

- Keep testimonial short (2–4 lines)
- Highlight key phrases with bold text sparingly
- Use high-quality avatars if included

### DON’T:

- Use long paragraphs
- Mix too many testimonial layouts
- Overuse quotation icons
