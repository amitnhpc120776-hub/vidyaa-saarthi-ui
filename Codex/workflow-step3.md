# STEP 3 — Write VIS CSS (BEM + Token Driven)

This file is part of the Six-Step VIS Component Conversion Workflow.  
Follow the instructions defined in conversion-master-agent.md.

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

```

css/components/vs-[component]/vs-[component].css

```

After generating `css/components/vs-[component]/vs-[component].css`,
you MUST append the following import to `css/component.css`:

```css
@import url("./components/vs-[component]/vs-[component].css");
```

Rules:

- Do NOT modify or reorder existing imports.
- Always append at the end.
- Do NOT inline component CSS anywhere else.

### 2. Scope All Rules to the Component Block

All CSS rules MUST be scoped under the root VIS block class:

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

Primitives must only be targeted **as descendants** of the block and must never be modified globally.

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

- Colors → `var(--primary-xxx)`, `var(--neutral-xxx)`, etc.
- Spacing → `var(--space-xx)`
- Radius → `var(--radius-xx)`
- Shadows → `var(--elevation-xx)`
- Typography → token-based sizes, weights, line-heights

Rules:

- DO NOT use raw `px`, `rem`, `%`, or `em` values for spacing, radius, or typography.
- DO NOT use raw hex or `rgb/rgba()` colors.
- DO NOT restyle primitive controls (inputs/buttons/checkboxes/radios/switches).

CSS in this step should only control:

- Component layout
- Structural wrappers
- Spacing between children
- Positioning
- Component-level variants & states

### 4. Primitive CSS Protection Rule (Mandatory)

You MUST NOT override or restyle VIS primitives:

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

Primitives manage their own spacing, colors, focus rings, animation, and behavior.

In this step, you may ONLY style:

- The component’s outer layout
- Structural wrappers defined in Step 1
- Spacing between primitives
- Positioning
- Component-level `.is-*` state selectors defined in Step 1
- Component-level modifier classes (`vs-[component]--[modifier]`)

You MUST NOT:

- Add new styles to primitive internals
- Override primitive internal states
- Duplicate primitive CSS logic
- Change primitive radii, animations, or focus-handling logic

### 5. Structural Consistency Validation (Against Step 1 & Step 2)

Before finalizing the CSS, validate:

- All selectors correspond to:

  - `vs-[component]`
  - Elements defined in Step 1
  - Modifiers/states defined in Step 1

- No invented elements or states
- No “helper classes” not present in Step 1 API
- No structure deviations from the Step 2 HTML snippet

### 6. Token Compliance & Verification

At the **end of the CSS**, include a token audit comment:

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

- There must be **no raw values**.
- If a required value has no suitable token, CALL IT OUT in this note.
  Do NOT create new tokens here.

### 7. Produce Clean, Production-Ready CSS

Final CSS MUST be:

- Token-driven
- Minimal
- Scoped only to the component block
- Free from unused rules
- Free from inline-style workarounds
- Free from Bootstrap classes or dependencies

> **Important Clarification:**
> Only _static_ styling is written in Step 3.
> If JS-driven `.is-*` states require additional CSS, that additional CSS
> will be appended later in **Step 4**, not here.

## Output

When presenting results for this step, output **only**:

```
css/components/vs-[component]/vs-[component].css
```

inside a code block.

## Notes

- Step 3 defines **static + API-declared** parts of the stylesheet.
- Step 4 may append **only minimal `.is-*` dynamic state CSS** required by the JS.
- Ensure `css/component.css` includes the `@import` for this component.

```

---

```
