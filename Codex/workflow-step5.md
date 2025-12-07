# STEP 5 — Add Variants & Sizes (BEM Modifiers)

This file is part of the Six-Step VIS Component Conversion Workflow. Follow the instructions defined in conversion-master-agent.md.

## Input Files You Must Use

conversion-master-agent.md
VIS Design System:
tokens.css
base.css
typography.css
utilities.css
The external HTML snippet provided by the user
Component BEM API produced in STEP 1 (css/components/vs-[component]/vs-[component]-api.md)
VIS HTML snippet produced in STEP 2 (css/components/vs-[component]/vs-[component].html)
VIS CSS produced in STEP 3 (css/components/vs-[component]/vs-[component].css)
VIS JS produced in STEP 4 (js/components/vs-[component]/vs-[component].js) — if applicable
Only use previous steps of this workflow.

## Tasks (Step 5)

Modify css/components/vs-[component]/vs-[component].css by appending variant and size modifiers.

### Rules:

Append code at the bottom of the file under this exact header:

/_ ========================================================================   VARIANTS & SIZE MODIFIERS   ======================================================================== _/
Do NOT overwrite or touch the base CSS.

Variants must be implemented ONLY as BEM modifiers:

.vs-[component]--primary
.vs-[component]--error
.vs-[component]--light
.vs-[component]--success
Size modifiers must follow:

.vs-[component]--sm
.vs-[component]--md (default)
.vs-[component]--lg
Variants override ONLY visual properties:

background-color, border-color, color, box-shadow, padding (only if required)
Sizes override ONLY:

spacing, padding, typography, and dimensions (use tokens)
All new CSS must:

Use VIS tokens only
Avoid raw px/hex values
Be minimal and clean
Use BEM and be scoped
All selectors MUST follow BEM and be scoped:

.vs-[component]--primary .vs-[component]\_\_element { ... }

## Output Format (MANDATORY)

Your output must follow this structure exactly:

### OUTPUT SECTION 1 — Visual Variants (BEM Modifiers)

Provide token-driven CSS for these visual variants using BEM modifier selectors. Only override minimal properties required.

Example (format):

/_ PRIMARY _/.vs-[component]--primary .vs-[component]**element { … }/_ ERROR _/.vs-[component]--error .vs-[component]**element { … }/_ SUCCESS _/.vs-[component]--success .vs-[component]\_\_element { … }

### OUTPUT SECTION 2 — Size Modifiers (BEM Modifiers)

Provide CSS for sizes: --sm, --md, --lg. Modify spacing, padding, and typography only, using VIS tokens.

Example:

/_ SMALL _/.vs-[component]--sm .vs-[component]\_\_element {  padding: var(--space-4) var(--space-8);  font-size: var(--body-sm-size);}

### OUTPUT SECTION 3 — Notes & Variant Behavior Rules

Explain:

Where each variant is intended to be applied.
How variants interact with component states (e.g., .is-active, .is-disabled).
Priority rules (e.g., .is-disabled overrides visual variants).
Responsiveness considerations.
Any extra developer guidance.

### OUTPUT SECTION 4 — Quality Check List (MANDATORY)

Before finalizing, verify:

BEM compliance
Token compliance (no raw values)
Scope and no duplication
Bootstrap independence
State interaction correctness

### OUTPUT SECTION 5 — Storage Instructions (MANDATORY)

Append the generated variant & size CSS to:

css/components/vs-[component]/vs-[component].css

under the required header. Do not create a new file.

========================
