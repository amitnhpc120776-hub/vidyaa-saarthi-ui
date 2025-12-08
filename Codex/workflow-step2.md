# STEP 2 — Convert External HTML → VIS HTML Snippet

This file is part of the Six-Step VIS Component Conversion Workflow.  
Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

- conversion-master-agent.md
- VIS Design System:
  - tokens.css
  - base.css
  - typography.css
  - utilities.css
- External HTML snippet provided by the user
- Component BEM API produced in STEP 1:
  - css/components/vs-[component]/vs-[component]-api.md

Use only previous steps' outputs.  
No new assumptions are allowed.

# 1. Primitive Reuse Enforcement (HTML-Level Rules)

When generating HTML, you MUST reuse VIS primitive components exactly as defined:

- `vs-btn`
- `vs-icon`
- `vs-close`
- `vs-input`
- `vs-checkbox`
- `vs-radio`
- `vs-switch`
- `vs-badge`
- `vs-divider`
- `vs-spinner`

ANY markup representing a button, icon, input field, close action, badge, spinner, or divider MUST be replaced by the corresponding VIS primitive.

### Forbidden:

- Custom `<button>` markup
- Custom `<span class="icon">` wrappers
- Custom checkmark/radio SVG
- Custom input shells
- Custom badge/separator elements
- ANY wrapper attempting to imitate primitive logic

### Required replacements:

```html
<button class="vs-btn ..."></button>
<!-- buttons -->

<span class="vs-icon">...</span>
<!-- icons -->

<div class="vs-input">...</div>
<!-- inputs -->

<div class="vs-divider"></div>
<!-- dividers -->

<span class="vs-badge">...</span>
<!-- badges -->

<span class="vs-spinner"></span>
<!-- spinners -->
```

````

These rules are **strict and mandatory**.

# 2. Allowed vs Forbidden Wrapper Elements (Critical)

Step 2 HTML MUST follow wrapper rules from Step 1 and master-agent.md.

## ✔ Allowed (layout/support wrappers)

These wrappers are allowed because they do NOT recreate primitive behavior:

- Spacing/layout wrappers (flex, grid containers)
- Grouping wrappers:
  `vs-[component]__actions`, `vs-[component]__container`
- ARIA-required wrappers (`role="group"`, `role="list"`)
- Structural wrappers explicitly defined in Step 1's Anatomy Block

## ❌ Forbidden (functional wrappers)

These wrappers are NOT allowed:

- Icon wrappers (e.g., `<span class="icon-box">`)
- Custom close button wrappers
- Fake input frames
- Fake checkmark/circle wrappers
- Wrappers mimicking toggle/button/spinner behavior

If the wrapper's purpose is functional → it is forbidden.
If the wrapper's purpose is layout → it is allowed.

# 3. Generate the Pure HTML Snippet Using the Component API

You must generate HTML that adheres strictly to the Component API and Canonical Anatomy Block defined in Step 1.

### Rules:

- Use VIS namespace + strict BEM (`vs-[block]__element`, `vs-[block]--modifier`)
- No Bootstrap classes, attributes, or patterns
- No inline CSS or JS
- Minimal, semantic HTML only
- **Do NOT include variants or states.**
  The Step-2 snippet MUST be **pure**, containing:

  - NO `vs-[component]--[variant]`
  - NO `.is-[state]`

- Variants/states will be shown **only in Step-6 demo**, not here.

The output is **production HTML**, not demo HTML.

# 4. HTML Requirements (Strict)

HTML MUST:

- Match **exactly** the BEM anatomy from Step 1 API
- Include **every** element listed in the Step 1 Canonical Anatomy Block
- Use **no additional elements**, wrappers, or nesting
- Use primitives exactly where Step 1 requires them
- Include placeholder content where needed:

  - text
  - icons (`vs-icon`)
  - optional or dynamic slots

### Absolutely forbidden:

- Adding wrappers not listed in Step 1
- Renaming elements
- Introducing new elements
- Introducing new states or variants
- Expanding primitive markup internally

# 5. Structural Consistency Validation (Against Step 1)

Before finalizing Step 2, Codex MUST validate:

### Block

Root class is exactly:

```
vs-[component]
```

### Elements

- Every element in HTML appears in the Step 1 Anatomy Block
- No extra element is introduced

### Variants

- No variant modifiers (`--primary`, `--success`, etc.) may appear here

### States

- No `.is-*` states may appear here

### Primitive usage

- All primitives are used exactly as defined
- No wrapper/function duplication
- No custom internal markup for primitives

If any mismatch is detected →
**Codex must correct the HTML before presenting it.**

# 6. Output Format (MANDATORY)

Store this file as:

```
css/components/vs-[component]/vs-[component].html
```

Your output MUST include **two sections**:

## Section 1 → "VIS HTML Snippet"

- Full HTML block for the component
- No page-level wrappers
- No demo markup
- No sample container scaffolding
- This is the exact snippet developers will copy into production

## Section 2 → "Notes for Integration"

Include:

- Required ARIA or role attributes
- Required `data-*` hooks for JS (if Step 4 will need them)
- Parent container constraints (if applicable)
- Any behavior expectations for JS, layout, or accessibility

Do NOT include any CSS or JS code in this file.

```

---
````
