# STEP 1 — Analyse & Create Component BEM API

This file is part of the Six-Step VIS Component Conversion Workflow.  
Follow the instructions defined in conversion-master-agent.md.

Your task in Step 1 is to define the **canonical, authoritative specification** of the component’s structure, variants, and states.  
This is the single source of truth used by Steps 2–6.

## Your Role in Step 1

Analyse the external HTML component provided by the user and create a VIS Component API using:

- VIS namespace (`vs-*`)
- Strict BEM architecture
- VIS Component design philosophy
- No Bootstrap assumptions
- No styling decisions (CSS comes later)

This step does **not** produce HTML or CSS.  
It creates the Component API, which drives everything that follows.

## Input Files You Must Use

- conversion-master-agent.md
- VIS Design System:
  - tokens.css
  - base.css
  - typography.css
  - utilities.css
- External HTML snippet provided by the user (if any)

Do NOT use any previous component context unless explicitly given.

# 1. Primitive / Composed Validation

Before generating the API, Codex MUST classify the component as:

- **Foundational Primitive**
- **Dependent Primitive**
- **Composed Component**

(as defined in conversion-master-agent.md)

### Rules:

### ✔ If it is a **Primitive**

- Do NOT introduce elements that depend on composed components.
- Do NOT introduce wrappers around primitives.
- Do NOT recreate primitive controls internally.

### ✔ If it is a **Composed Component**

You MUST reuse existing VIS primitives:

- vs-btn
- vs-input
- vs-icon
- vs-close
- vs-badge
- vs-divider
- vs-spinner
- vs-checkbox / vs-radio / vs-switch

Replace any external markup representing these controls with the correct VIS primitive names.

# 2. Allowed vs Forbidden Wrapper Elements (CRITICAL)

Real components require layout wrappers, but wrappers must NOT imitate primitives.

### ✔ Allowed Layout/Semantic Wrappers

These **are allowed** because they do NOT replace primitive behavior:

- Flex/grid wrappers (e.g., `vs-navbar__actions`)
- Grouping containers (`vs-card__body`)
- Structural layout containers (`vs-modal__footer`)
- ARIA-required wrappers (role="group", role="list")
- Containers needed for spacing or alignment

### ❌ Forbidden Functional Wrappers

These **are NOT allowed** because they attempt to recreate primitives:

- Custom button wrappers
- Custom icon wrappers
- Custom close-button wrappers
- Fake toggles, checkmarks, radios
- Ad-hoc “input frames”
- Anything duplicating a primitive’s internal logic

If the external component uses functionality provided by a primitive,  
the API MUST reference the primitive directly.

# 3. Produce the Component BEM API Definition

You MUST define the following:

## Component Type

Choose one:

- Foundational Primitive
- Dependent Primitive
- Composed Component

## Component Name

Use VIS namespace:

```

vs-[component-name]

```

## Component Anatomy (BEM Elements)

List structural elements:

```

vs-[component]\_\_element-name — description

```

### Rules:

- Include only essential structural elements.
- No styling decisions.
- No attributes (handled later).
- DO NOT rename, wrap, or alias VIS primitives.

If the component includes a button, icon, input, spinner, etc.,
the anatomy MUST reference the **actual VIS primitive**.

## Variants (BEM Modifiers)

List all variants:

```

vs-[component]--[variant-name]

```

Include applicable categories:

- visual variants
- behavioral variants
- size variants
- layout variants (if any)

Variants MUST NOT recreate primitive variants.

## Component States

List dynamic states:

```

.is-[state-name]

```

Examples:

- `.is-active`
- `.is-open`
- `.is-visible`
- `.is-disabled`
- `.is-error`
- `.is-success`

Each MUST include a one-line description of when it applies.

States MUST NOT duplicate existing primitive internal states.

## Responsive Behavior (If Needed)

Include notes ONLY if the component has explicit responsive structural differences.
Default assumption: mobile-first using VIS breakpoints.

# 4. Canonical Anatomy Freeze (MANDATORY)

After defining:

- Component Type
- Component Anatomy
- Variants
- States

You MUST produce a **Canonical Anatomy Block** using a JSON-like structure:

```

{
"block": "vs-[component]",
"elements": [
"vs-[component]**element1",
"vs-[component]**element2"
],
"states": [
"is-active",
"is-disabled"
],
"variants": [
"vs-[component]--primary",
"vs-[component]--lg"
]
}

```

### Rules:

- This Anatomy Block becomes the authoritative model.
- Steps 2–6 MUST implement exactly this structure.
- NO later steps may introduce new elements, remove elements, rename elements, or add new states/variants.

Any change requires the **Anatomy Extension Protocol** (below).

# 5. Anatomy Extension Protocol (Version-Controlled)

Because real-world components evolve, Codex MUST follow this protocol
when adding a new element, state, or variant after Step 1:

### Changes allowed ONLY when:

- Required for **accessibility**
- Required for **layout correctness**
- Required for **JS behavior**
- Required for **performance**

### Protocol:

1. Update Step 1 API
   → Add new element/state/variant with justification
2. Add a version bump:
   `v1.0 → v1.1`
3. Regenerate **Steps 2–6** for consistency

NO step may introduce new structure silently.
This ensures system integrity and prevents “HTML drift.”

# 6. Structural Consistency Validation (Cross-Step Rule)

Codex MUST validate:

- BEM syntax correctness
- No element duplicates a primitive
- No primitive is wrapped or renamed
- States follow `.is-*` format
- Variants strictly follow BEM modifier rules
- No invented wrapper structures
- No external naming (Bootstrap, Tailwind, etc.)

If violations are found, Codex MUST correct the API before proceeding.

# 7. Primitive Reuse Enforcement (Mandatory)

Codex MUST NOT define new elements that duplicate existing VIS primitives.

Forbidden:

- `"icon-wrapper"` → use `vs-icon`
- `"close-button"` → use `vs-close`
- `"input-wrapper"` → use `vs-input`
- `"toggle-button"` → use `vs-btn`
- `"badge-container"` → use `vs-badge`
- `"divider-line"` → use `vs-divider`

Rules:

- Do NOT rename or alias primitives
- Do NOT wrap primitives with structural names
- Do NOT override primitive behavior
- Do NOT define states belonging to primitives
- ALWAYS reference primitives directly

If something looks like a primitive → it IS a primitive.

# Output

Store Step 1 output as:

```

css/components/vs-[component]/vs-[component]-api.md

```

Step 1 output MUST end with the **Canonical Anatomy Block**.

# Rules

- Do NOT generate HTML or CSS in this step.
- Use BEM naming strictly.
- No Bootstrap dependencies.
- Keep everything clean, minimal, and system-driven.
- All future steps MUST follow this API exactly.
- Changes after Step 1 require the Anatomy Extension Protocol.

========================

```

```
