You must now create a new VIS Component using the Six-Step VIS Component Conversion Workflow.

## 1. Component Definition

- Component name: **vs-[component]**
- Component description: **[Describe functional purpose of component]**
- Component type: **[Foundational Primitive / Dependent Primitive / Composed Component]**

There is **NO external HTML/CSS** provided for this component unless explicitly included by the user.

## 2. Mandatory Workflow

Follow ALL rules defined in:

- conversion-master-agent.md
- workflow-step1.md
- workflow-step2.md
- workflow-step3.md
- workflow-step4.md
- workflow-step5.md
- workflow-step6.md

You MUST execute the workflow in strict order:

1. Step 1 → Create Component BEM API
2. Step 2 → Convert to VIS HTML
3. Step 3 → Write VIS CSS
4. Step 4 → Add JS (if required)
5. Step 5 → Add variants & sizes
6. Step 6 → Produce final snippet + demo page

Stop after each step and wait for approval.

## 3. VIS Design System Requirements

All styling MUST strictly use tokens from:

- tokens.css
- base.css
- typography.css
- utilities.css

You MUST follow:

- VIS namespace: `vs-[block]`, `vs-[block]__element`, `vs-[block]--modifier`
- Token-driven design
- Strict primitive reuse (no recreation of buttons, inputs, icons, checkboxes, radios, switches, spinners, badges, dividers)
- Strict BEM structure
- No inline styles or inline scripts
- No Bootstrap classes, no jQuery, no external libraries

## 4. Variant, Size & State Requirements (Generic Template)

When designing the Component API in **Step 1**, you MUST define variants, sizes, and states appropriate for the component.  
Examples (YOU MUST CUSTOMIZE PER COMPONENT):

### Visual Variants (examples)

- `vs-[component]--default`
- `vs-[component]--primary`
- `vs-[component]--success`
- `vs-[component]--warning`
- `vs-[component]--danger`
- `vs-[component]--info`

### Size Variants

- `vs-[component]--sm`
- `vs-[component]--md` (default)
- `vs-[component]--lg`

### Layout Variants (examples)

- `vs-[component]--inline`
- `vs-[component]--block`
- `vs-[component]--with-icon-left`
- `vs-[component]--with-icon-right`

### Functional States (.is-\* states)

- `.is-active`
- `.is-disabled`
- `.is-focused`
- `.is-selected`
- `.is-loading` (must use `vs-spinner`)
- `.is-success`
- `.is-error`

### Optional BEM Elements (examples)

- `vs-[component]__label`
- `vs-[component]__icon`
- `vs-[component]__description`
- `vs-[component]__wrapper`
- `vs-[component]__content`

(You must define the exact canonical anatomy in Step 1.)

## 5. Codex MUST NOT:

- Invent variants not defined in Step 1
- Invent elements not defined in Step 1
- Add wrappers not defined in Step 1
- Modify primitives (`vs-btn`, `vs-input`, `vs-icon`, `vs-checkbox`, etc.)
- Introduce raw px/rem/hex values (tokens only)
- Modify primitive internal behavior
- Use Bootstrap logic, naming, or attributes

## 6. Final Output Expectation

Across Steps 1–6, Codex must generate:

- A complete Component API
- A production-ready VIS HTML snippet
- Token-driven VIS CSS
- Optional VIS JS (only if component requires interaction)
- Variant and size modifiers
- A fully working demo page

All outputs must follow the VIS Design System, BEM, and token rules.

Codex must ALWAYS request clarification when something is ambiguous.
