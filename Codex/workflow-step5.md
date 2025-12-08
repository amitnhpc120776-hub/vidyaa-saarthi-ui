# STEP 5 — Add Variants & Sizes (BEM Modifiers)

This file is part of the Six-Step VIS Component Conversion Workflow.  
Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

- conversion-master-agent.md
- VIS Design System:
  - tokens.css
  - base.css
  - typography.css
  - utilities.css
- The external HTML snippet provided by the user
- Component BEM API produced in STEP 1:
  - css/components/vs-[component]/vs-[component]-api.md
- VIS HTML snippet produced in STEP 2:
  - css/components/vs-[component]/vs-[component].html
- VIS CSS produced in STEP 3:
  - css/components/vs-[component]/vs-[component].css
- VIS JS produced in STEP 4 (if applicable):
  - js/components/vs-[component]/vs-[component].js

Use only previous steps of this workflow.  
No new assumptions are allowed.

## Tasks (Step 5)

Modify:

```

css/components/vs-[component]/vs-[component].css

```

by **appending** variant and size modifiers at the **bottom** of the file, following the required structure.

---

## Rules (Strict)

### 1. Required Header Position

You MUST append all variant + size CSS under this exact header:

```css
/* ========================================================================
   VARIANTS & SIZE MODIFIERS
   ======================================================================== */
```

Do NOT modify or overwrite the base CSS above this header.

---

### 2. Variants MUST Follow BEM Modifier Rules

All variants MUST be implemented using modifiers:

```
.vs-[component]--primary
.vs-[component]--secondary
.vs-[component]--error
.vs-[component]--success
...
```

Element-specific overrides MUST use:

```
.vs-[component]--primary .vs-[component]__element { ... }
```

Variants may override ONLY **visual properties**, such as:

- background-color
- border-color
- text color
- box-shadow
- padding (only if required, and **must still use tokens**)

---

### 3. Size Modifiers MUST Follow BEM Modifier Rules

Size modifiers follow:

```
.vs-[component]--sm
.vs-[component]--md  (default)
.vs-[component]--lg
```

Size rules may override ONLY:

- spacing
- padding
- typography tokens
- dimensions

All values MUST come from VIS tokens.

---

### 4. Token Compliance (Mandatory)

All new CSS added in Step 5 MUST:

- Use VIS tokens only
- Use NO raw px, rem, or hex values
- Use NO hard-coded colors
- Use NO custom spacing values

If a required value has **no existing token**, you MUST:

- Call it out in a comment
- Do NOT use a raw value
- Do NOT create new tokens

---

### 5. Primitive Variant Protection (Strict)

You MUST NOT redefine internal variants of VIS primitives.

❌ Forbidden:

```css
.vs-btn--primary {
  ...;
} /* illegal */
.vs-radio--danger {
  ...;
} /* illegal unless inside a composed component */
```

✔ Allowed ONLY when scoped inside the composed component:

```css
.vs-navbar--primary .vs-btn { … }  /* allowed */
```

Rules:

- Primitives (vs-btn, vs-input, vs-icon, vs-close, vs-checkbox, vs-radio, vs-switch, vs-badge, vs-divider, vs-spinner) MUST NOT be visually redefined.
- Variants MUST apply ONLY to the **outer block** of the component.
- NEVER modify primitive CSS variables, radii, borders, or states in Step 5.

---

### 6. Variant Source Rule

You MUST implement ONLY the variants and sizes explicitly listed in Step 1 API.

Forbidden:

- Inventing variants not present in Step 1
- Adding extra size modifiers
- Adding undocumented states

If a variant appears missing, ask the user before proceeding.

---

## Structural Consistency Validation (Against Step 1–4)

Before finalizing Step 5, validate:

- Every modifier exists in Step 1 API:

  - `vs-[component]--[variant]`
  - `vs-[component]--[size]`

- No modifier touches primitives directly.
- Every selector references ONLY elements defined in Step 1 anatomy.
- No new elements, wrappers, or states are introduced.
- CSS is consistent with:

  - Step 2 HTML
  - Step 3 base CSS
  - Step 4 JS states

If mismatches occur, request revisions.

---

## Output Format (MANDATORY)

Your output MUST follow this exact structure:

---

### OUTPUT SECTION 1 — Visual Variants (BEM Modifiers)

Provide token-driven CSS for all visual variants.
Override ONLY essential properties.

Example:

```css
/* PRIMARY */
.vs-[component]--primary .vs-[component]__element {
  ...;
}

/* ERROR */
.vs-[component]--error .vs-[component]__element {
  ...;
}
```

---

### OUTPUT SECTION 2 — Size Modifiers (BEM Modifiers)

Provide CSS for:

- `--sm`
- `--md`
- `--lg`

Override ONLY spacing, padding, typography, and dimensions using tokens.

Example:

```css
/* SMALL */
.vs-[component]--sm .vs-[component]__element {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-body-sm-size);
}
```

---

### OUTPUT SECTION 3 — Notes & Variant Behavior Rules

Explain:

- When each variant should be used
- Priority rules (e.g., `.is-disabled` overrides all variants)
- How variants interact with states
- Any responsiveness considerations
- How developers should apply variants correctly

---

### OUTPUT SECTION 4 — Quality Checklist (MANDATORY)

Before finalizing, verify:

- BEM compliance
- Token compliance (no raw values)
- Proper scoping to `.vs-[component]` only
- No CSS duplication
- No modification of primitives
- Correct variant/state interaction
- No invented variants or states
- No Bootstrap classes or patterns

---

### OUTPUT SECTION 5 — Storage Instructions (MANDATORY)

Append the generated CSS to:

```
css/components/vs-[component]/vs-[component].css
```

Place it under the required header:

```css
/* ========================================================================
   VARIANTS & SIZE MODIFIERS
   ======================================================================== */
```

Do NOT create a new file.

```

---

```
