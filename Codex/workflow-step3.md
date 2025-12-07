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

Scope all rules under the root VIS block class (e.g., .vs-login-form).

### Convert ALL hard-coded values to VIS tokens:

Colors → var(--primary-xxx), var(--neutral-xxx), var(--text-xxx)
Spacing → var(--space-xx)
Radius → var(--radius-xx)
Shadows → var(--elevation-xx)
Typography → use tokens from typography.css (--h1-size, --body-md-size, etc.)
DO NOT restyle inputs/buttons/checkboxes — they already have VIS styles.
Only style component layout, icons, spacing, wrappers, and state selectors.

Remove unused CSS.

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
