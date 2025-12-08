# STEP 5 — Add Variants & Sizes (BEM Modifiers)

This file is part of the Six-Step VIS Component Conversion Workflow. Follow the instructions defined in conversion-master-agent.md.

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

Use only previous steps of this workflow. No new assumptions are allowed.

## Tasks (Step 5)

Modify:

```

css/components/vs-[component]/vs-[component].css

```

by **appending** variant and size modifiers at the **bottom** of the file, following the required structure.

## Rules (Strict)

### 1. Required Header Position

You MUST append all variant + size CSS under this exact header:

```css
/* ========================================================================
   VARIANTS & SIZE MODIFIERS
   ======================================================================== */
```

Do NOT modify or overwrite the base CSS above this header.

### 2. Variants MUST Follow BEM Modifier Rules

All variants MUST be implemented using modifiers:

```
.vs-[component]--primary
.vs-[component]--secondary
.vs-[component]--error
.vs-[component]--success
...
```

And element-specific overrides MUST use:

```
.vs-[component]--primary .vs-[component]__element { ... }
```

Variant rules may override ONLY **visual properties**, such as:

- background-color
- border-color
- text color
- box-shadow
- padding (only if required)

### 3. Size Modifiers MUST Follow BEM Modifier Rules

Sizes must follow:

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

All such values MUST come from VIS tokens.

### 4. Token Compliance (Mandatory)

All new CSS added in Step 5 MUST:

- Use VIS tokens only
- Use NO raw px, rem, or hex values
- Use NO hard-coded colors
- Use NO ad-hoc spacing values

If a required value has **no matching token**, you MUST:

- Call it out in a comment at the end of the output
- Do NOT generate custom raw values
- Do NOT create new tokens unless the user explicitly instructs

### 5. Primitive Variant Protection (Strict)

**You MUST NOT redefine the internal variants of VIS primitives.**

Forbidden examples:

```css
.vs-btn--primary {
  ...;
} /* ❌ illegal: overriding a primitive */
.vs-radio--danger {
  ...;
} /* ❌ illegal unless working inside a composed component */
```

Allowed ONLY when scoped inside the block:

```css
.vs-navbar--primary .vs-btn { … }   /* ✔ allowed: modifying placement inside composed component */
```

Rules:

- Primitives (vs-btn, vs-input, vs-icon, vs-close, vs-checkbox, vs-radio, vs-switch, vs-badge, vs-divider, vs-spinner)
  MUST NOT be visually redefined.
- Variants MUST apply only to the **outer block** of the component being defined.
- NEVER modify primitive CSS variables, radii, borders, or states inside Step 5.

### 6. Variant Source Rule

You MUST implement only those variants and sizes that appear **explicitly** in the Component API (Step 1).

Forbidden:

- Creating additional variants not listed in Step 1
- Inventing size modifiers
- Adding undocumented behavior states

If a required variant is missing from Step 1, you MUST ask the user before proceeding.

---

## Structural Consistency Validation (Against Step 1–4)

Before finalizing Step 5 output, you MUST validate that:

- Every modifier class exists in the Step 1 API:

  - `vs-[component]--[variant]`
  - `vs-[component]--[size]`

- No modifier touches primitives directly.
- Every selector references elements defined in the Step 1 Canonical Anatomy Block.
- No new elements, wrappers, or state classes are invented.
- CSS remains consistent with:

  - Step 2 HTML structure
  - Step 3 base CSS
  - Step 4 JS states

If inconsistencies are found, correct them OR request an API/HTML/CSS revision.

---

## Output Format (MANDATORY)

Your output MUST follow **exactly** this structure:

---

### OUTPUT SECTION 1 — Visual Variants (BEM Modifiers)

Provide token-driven CSS for all visual variants.
Override ONLY minimal necessary properties.

Example format:

```css
/* PRIMARY */
.vs-[component]--primary .vs-[component]__element {
  ...;
}

/* ERROR */
.vs-[component]--error .vs-[component]__element {
  ...;
}

/* SUCCESS */
.vs-[component]--success .vs-[component]__element {
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
- How variants interact with component states
- Which variant has priority (e.g., `.is-disabled` overrides visual variants)
- Responsiveness considerations
- Any guidance for developers using the variants

---

### OUTPUT SECTION 4 — Quality Checklist (MANDATORY)

Before finalizing, verify:

- BEM compliance
- Token compliance (no raw values)
- Proper scoping to `.vs-[component]` only
- No duplication of CSS rules
- No Bootstrap dependencies
- Variant/state interaction correctness
- No redefinition of primitives
- No invented variants or states

---

### OUTPUT SECTION 5 — Storage Instructions (MANDATORY)

Append the generated variant & size CSS to:

```
css/components/vs-[component]/vs-[component].css
```

Place it **under the required header**:

```css
/* ========================================================================
   VARIANTS & SIZE MODIFIERS
   ======================================================================== */
```

Do NOT create a new file.

========================

```

```
