# prompt for Component creation

You must now create a new VIS Component using the Six-Step VIS Component Conversion Workflow.

## 1. Component Definition

- Component name: **vs-alerts**
- Component description:
  - Responsive Alerts is flash messages that shows contextual feedback messages for attracts the user’s attention without interrupting the user’s task.Alerts are available for any length of text, as well as an optional close button. Vrainats required : Primary, Success, Danger, Warning, Discovery. Each Variant should have an appropriate circle icon on the left.
- Component type: **[Dependent Primitive]**, uses vs-icon

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

# prompt for component modifications

I want to update an existing **VIS component** by adding new variants.
Follow the Anatomy Extension Protocol strictly.

1. Load the existing API file for this component from my repository:
   css/components/vs-[component]/vs-[component]-api.md

2. Modify the API by:

   - Adding the following new variants: **[LIST YOUR NEW VARIANTS HERE]**
   - Adding short descriptions for each new variant
   - Adding a version bump (e.g., v1.0 → v1.1)
   - Adding a one-line justification for the structural change

3. After updating API file, regenerate the entire component according to the VIS Workflow. Follow ALL rules defined in:

- conversion-master-agent.md
- workflow-step1.md
- workflow-step2.md
- workflow-step3.md
- workflow-step4.md
- workflow-step5.md
- workflow-step6.md

You MUST execute the workflow in strict order:

      - Step 2: VIS HTML Snippet

- Step 3: VIS CSS (base styles only)
- Step 4: Component JavaScript (if applicable)
- Step 5: Variant & Size Modifiers (include the new variants)
- Step 6: Final reusable component snippet and demo page

4. Ensure structural consistency across all steps.
   The new variants must:

   - Be valid BEM modifiers (vs-[component]--[variant])
   - Not modify or override primitive components
   - Use token-driven styling (no raw px, no hex values)
   - Use only elements defined in the Step-1 anatomy

5. Before producing each step, validate:

   - No invented elements
   - No missing elements
   - No HTML drifting from the Step-1 canonical structure
   - No modification of VIS primitives

6. Wait for my approval after Step-1 is presented before proceeding to Step-2.

Start by presenting ONLY the updated Step-1 API (with the version increment).
Do not generate Steps 2–6 until I approve Step-1.
