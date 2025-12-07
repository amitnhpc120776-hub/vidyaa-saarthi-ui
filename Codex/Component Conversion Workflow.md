# STEP 1 — ANALYSE & CREATE VIS COMPONENT API

## ATTACH:

    tokens.css , base.css, typography.css, utilities.css, custom.css, The raw HTML + CSS you found on internet.

## PROMPT :

    You are a frontend system architect.

    I am using a design system called VIS. I want to convert the attached external HTML/CSS into a VIS component.

    Your task in this step:

    1. Analyze the attached component.
    2. Create a VIS Component API in clean Markdown containing:
    - Component Name (use namespace `vs-...`)
    - Purpose (1–2 lines)
    - Anatomy / Structure (required & optional parts)
    - BEM class names for all parts (vs-component, vs-component\_\_element)
    - Possible states (default, error, disabled…)
    - Possible variants (if any)
    3. DO NOT generate HTML.
    4. DO NOT generate CSS.
    5. Ensure the API follows VIS principles and uses existing VIS components where appropriate (input, button, checkbox, etc.).

    Output ONLY the Component API in Markdown.

# STEP 2 — CONVERT HTML TO VIS HTML (Namespace + BEM + Tokens)

## ATTACH:

    Approved Component API (from Step 1), Raw HTML (same as Step 1), tokens.css, custom.css

## Prompt

    You are a frontend developer.

    Using the approved VIS Component API and the attached external HTML, transform the HTML into VIS-compliant markup.

    Your task in this step:

    1. Apply VIS namespace and BEM class names exactly as defined in the Component API.
    2. Replace generic inputs with VIS input: `<input class="vs-input__field">`
    3. Replace buttons with VIS button: `<button class="vs-btn vs-btn--primary">`
    4. Replace checkbox/radio with VIS patterns where needed.
    5. Remove all inline CSS.
    6. Do NOT write any CSS here—HTML only.
    7. Keep SVG icons but wrap them in appropriate VIS BEM classes.

    Output ONLY the final VIS HTML snippet in a code block.

# STEP 3 - CONVERT CSS TO VIS TOKENS & VIS ARCHITECTURE

## Attach

    Approved Component API , VIS HTML from Step 2, Original external CSS, tokens.css, base.css, utilities.css

    Any VIS component CSS files (inputs, buttons, etc.)

## Prompt

    You are a CSS architect.

    Your task:
    1. Rewrite the attached external CSS into a new VIS component file called `_component-name.css`
    (component name must match the Component API).
    2. Scope all rules under the root VIS block class (e.g., .vs-login-form).
    3. Convert ALL hard-coded values to VIS tokens:
    - Colors → var(--primary-xxx), var(--neutral-xxx), var(--text-xxx)
    - Spacing → var(--space-xx)
    - Radius → var(--radius-xx)
    - Shadows → var(--elevation-xx)
    - Typography → use `typography.css` tokens
    4. DO NOT restyle inputs/buttons/checkboxes—they already have VIS styles.
    Only style component layout, icons, spacing, and wrapper.
    5. Remove all unused CSS.
    6. Produce clean, production-ready CSS.

    Output ONLY the full CSS for `_component-name.css` in a code block.

# STEP 4 - UPDATE custom.css TO IMPORT NEW COMPONENT

## attach

    custom.css, The file name of the new CSS (e.g., _login-form.css)

## prompt

    You are maintaining my CSS system.

    Your task:

    1. Add an @import line for the new component CSS into custom.css.
    2. Match the ordering style used by existing imports.
    3. Show ONLY the updated import section of custom.css with the new line inserted.

    Output a code block containing ONLY the modified portion.

# STEP 5 — GENERATE TEST PAGE SNIPPET

## Attach

    Final VIS HTML from Step 2

## Prompt

    You are my frontend integrator.

    Create a small test section that I can paste inside my component test page.

    Your task:
    1. Wrap the VIS HTML snippet in a <section>.
    2. Add a heading, e.g., <h2>Component Test: [Component Name]</h2>
    3. Do NOT modify the component's internal HTML.
    4. Output ONLY the final <section>...</section> block in a code block.
