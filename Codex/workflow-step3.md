# STEP 3 — Write VIS CSS (BEM + Token Driven)

This file is part of the Six-Step VIS Component Conversion Workflow. Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

conversion-master-agent.md
VIS Design System:
tokens.css
base.css
typography.css
utilities.css
Component BEM API produced in STEP 1 (css/components/vs-[component]/vs-[component]-api.md)
VIS HTML produced in STEP 2 (css/components/vs-[component]/vs-[component].html)
Use only previous steps' outputs as inputs.

## Your Tasks (Step 3)

Rewrite external CSS into a new VIS component CSS file.

Create a file named:
css/components/vs-[component]/vs-[component].css

After generating css/components/vs-[component]/vs-[component].css, you MUST append the following import to css/component.css:
@import url("./components/vs-[component]/vs-[component].css");
Do NOT modify or reorder existing imports. Always append at the end.

Scope all rules under the root VIS block class (e.g., .vs-login-form).

When referencing primitives inside the component, you may ONLY target them
as descendants of the component block. Never redefine the primitive globally.

Correct:
.vs-navbar .vs-btn { margin-left: var(--space-12); }

Incorrect:
.vs-btn { margin-left: var(--space-12); } ❌ global override

### Convert ALL hard-coded values to VIS tokens:

Colors → var(--primary-xxx), var(--neutral-xxx), var(--text-xxx)
Spacing → var(--space-xx)
Radius → var(--radius-xx)
Shadows → var(--elevation-xx)
Typography → use tokens from typography.css (--h1-size, --body-md-size, etc.)
DO NOT restyle inputs/buttons/checkboxes — they already have VIS styles.
Only style component layout, icons, spacing, wrappers, and state selectors.

Remove unused CSS.

### Primitive CSS Protection Rule

You MUST NOT override or restyle VIS primitive components such as:
vs-btn, vs-input, vs-icon, vs-close, vs-checkbox, vs-radio, vs-switch,
vs-badge, vs-divider, vs-spinner.

Their internal spacing, colors, radii, animations, focus rings, and icon
rendering are controlled by their own component files.

In this step, you may ONLY style:

- The composed component's outer layout
- Structural wrappers defined in the Component API
- Spacing between internal primitives
- Positioning rules
- State selectors (.is-open, .is-active, etc.)
- Variant modifiers (vs-[component]--[modifier])

You MUST NOT:

- Add new styles to primitives
- Override primitive default states
- Duplicate primitive CSS logic
- Redefine primitive tokens

### Produce clean, production-ready CSS that is:

Token-driven
Scoped
Minimal

## Output

Output ONLY the full CSS for css/components/vs-[component]/vs-[component].css in a code block when presenting results.

## Notes:

If JavaScript for state classes is needed, append minimal CSS for .is-\* classes only (in Step 4 we will define JS behavior).
Keep file naming consistent with the canonical pattern above.
========================
