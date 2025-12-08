# STEP 3 — Write VIS CSS (BEM + Token Driven)

This file is part of the Six-Step VIS Component Conversion Workflow. Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

- conversion-master-agent.md
- VIS Design System:
  - tokens.css
  - base.css
  - typography.css
  - utilities.css
- Component BEM API produced in STEP 1:
  - css/components/vs-[component]/vs-[component]-api.md
- VIS HTML produced in STEP 2:
  - css/components/vs-[component]/vs-[component].html

Use only previous steps’ outputs as inputs. No new assumptions are allowed.

## Your Tasks (Step 3)

Rewrite any external or prior CSS into a new VIS component CSS file.

### 1. Create the Component CSS File

Create a file named:

```text
css/components/vs-[component]/vs-[component].css
```

After generating `css/components/vs-[component]/vs-[component].css`, you MUST
append the following import to `css/component.css`:

```css
@import url("./components/vs-[component]/vs-[component].css");
```

Rules:

- Do NOT modify or reorder existing imports.
- Always append at the end.
- Do NOT inline component CSS anywhere else.

### 2. Scope All Rules to the Component Block

All CSS rules MUST be scoped under the root VIS block class, for example:

```css
.vs-[component] {
  ...;
}
.vs-[component]__element {
  ...;
}
.vs-[component]--variant {
  ...;
}
```

When referencing primitives inside the component, you may ONLY target them
as descendants of the component block. Never redefine the primitive globally.

**Correct:**

```css
.vs-navbar .vs-btn {
  margin-left: var(--space-12);
}
```

**Incorrect (forbidden):**

```css
.vs-btn {
  margin-left: var(--space-12);
} /* ❌ global override */
```

### 3. Convert ALL Hard-Coded Values to VIS Tokens

You MUST convert all raw values to VIS tokens:

- Colors → `var(--primary-xxx)`, `var(--neutral-xxx)`, `var(--text-xxx)`, etc.
- Spacing → `var(--space-xx)`
- Radius → `var(--radius-xx)`
- Shadows → `var(--elevation-xx)`
- Typography → use tokens from `typography.css`

  - e.g. `var(--text-body-md-size)`, `var(--text-label-sm-size)`, etc.

Rules:

- DO NOT use raw `px`, `rem`, `%`, or `em` values for spacing, radius, or typography.
- DO NOT use raw hex or `rgb/rgba()` color values.
- DO NOT restyle primitive controls (inputs/buttons/checkboxes/radios/switches) directly.

Your CSS should only control:

- Component layout
- Wrappers
- Spacing between children
- Positioning
- Variants & states for the component itself

### 4. Primitive CSS Protection Rule (Mandatory)

You MUST NOT override or restyle VIS primitive components such as:

- vs-btn
- vs-input
- vs-icon
- vs-close
- vs-checkbox
- vs-radio
- vs-switch
- vs-badge
- vs-divider
- vs-spinner

Their internal spacing, colors, radii, animations, focus rings, and icon
rendering are controlled by their own component files.

In this step, you may ONLY style:

- The component’s outer layout
- Structural wrappers defined in the Component API
- Spacing between internal primitives
- Positioning rules
- State selectors (e.g. `.is-open`, `.is-active`, `.is-visible`, etc.)
- Variant modifiers (e.g. `vs-[component]--[modifier]`)

You MUST NOT:

- Add new styles to primitive internals
- Override primitive default states
- Duplicate primitive CSS logic
- Redefine primitive tokens
- Change primitive radii, focus-ring logic, or animations

### 5. Structural Consistency Validation (Against Step 1 & Step 2)

Before finalizing the CSS, you MUST validate that:

- Every selector corresponds to:

  - The block `vs-[component]`, or
  - Elements defined in the Step 1 Canonical Anatomy Block, or
  - Modifiers / states defined in Step 1.

- You do NOT invent new elements or states not present in:

  - `vs-[component]-api.md` (Step 1)
  - The HTML snippet (Step 2)

Forbidden:

- Selectors for elements that are not defined in the API.
- Selectors for states not documented in Step 1.
- “Helper classes” that are not part of the BEM anatomy.

If any mismatch is found, update the CSS **or** request a correction to the API/HTML before proceeding.

### 6. Token Compliance & Verification

At the end of your CSS (for this step’s output), you MUST include a short
“Token Verification Note” (comment block) summarizing token use:

Example:

```css
/* Token Verification:
   - Spacing tokens used: --space-8, --space-12
   - Color tokens used: --primary-600, --neutral-200
   - Radius tokens used: --radius-md
   - Typography tokens used: --text-body-md-size
   - Raw px/hex values: NONE
*/
```

Rules:

- Ensure there are **no** raw px/hex values.
- If you detect any raw value that cannot be mapped to an existing token,
  you MUST call it out in the note and recommend adding a token
  (but do NOT invent new tokens in this file).

### 7. Produce Clean, Production-Ready CSS

Your final CSS MUST be:

- Token-driven
- Scoped to the component block
- Minimal (no unused rules)
- Free from Bootstrap classes or assumptions
- Free from inline-style emulation (e.g., no `!important` hacks)

## Output

When presenting results for this step, output **only** the full CSS for:

```text
css/components/vs-[component]/vs-[component].css
```

inside a code block.

## Notes

- If JavaScript for state classes is needed, append minimal CSS for `.is-*` state selectors only.

  - (The JS behavior itself will be defined in Step 4.)

- Keep file naming consistent with the canonical pattern above.
- Ensure `css/component.css` includes the `@import` for this component.

========================

```

```
