# STEP 1 — Define the Component BEM API (MANDATORY)

    1. Component Name : example vs-tooltip, vs-modal, vs-dropdown
    2. Anatomy / Structure of the component - List all required BEM elements (e.g., __trigger, __bubble, __arrow).
    3. List out all the Variants needed
    4. List out all the component states

## Execution Prompt

    I want to create a new UI component for my custom design system called VIS.
    Your task is to produce the Component BEM API definition only.
    Follow the structure below strictly.
    - Input you will receive: I will provide the component name and a short description of what the component does
    - Your output must include these 4 sections:
        a. Component Name : Write the full VIS component name using BEM namespace rules., Format: vs-[component-name]
        b. List all internal structural elements using BEM syntax. Format each as: vs-[component-name]__[element-name] — with a short description of its role.Include only what is logically required for the component.
        c. Variants Needed (BEM Modifiers) : List ALL relevant variants this component may require. Examples:
            * Visual variants (primary, secondary, warning, light, dark)
            * Behavioral variants (click, hover, persistent, dismissible)
            * Size variants (sm, md, lg, xl)
            * Format variants as: vs-[component-name]--[variant-name]
        d. Component States : List all dynamic states the component may enter. Examples: .is-active, .is-open, .is-visible, .is-disabled,
        .is-error. Describe when each state is used.
    - Rules
        1. Do NOT generate HTML or CSS now. Only the Component API.
        2. Use BEM naming strictly.
        3. No Bootstrap dependencies.
        4. Keep everything clear, minimal, and system-driven.
    - After this explanation, ask me: “Please provide the component name and a short description.”

# STEP 2 - Create VIS HTML Snippet

    1. Write the HTML manually using your BEM API.
    2. Rules
        a. Use VIS namespace (vs-*)
        b. Use BEM structure
        c. No Bootstrap attributes (data-bs-*)
        d. No Bootstrap classes (.tooltip, .dropdown-menu, .modal, etc.)

## Execution Prompt

    I want you to generate the pure HTML snippet for a VIS design-system component, based on the Component BEM API that I will provide to you.Follow these instructions strictly:

    - Your task: Create the VIS HTML snippet
    - Use the Component API (anatomy, variants, states) that I will give you and produce clean, minimal HTML using:
        ✔ VIS namespace (vs-*)
        ✔ BEM elements (__)
        ✔ BEM modifiers (--)
        ✔ No Bootstrap dependencies
        ✔ No Bootstrap classes
        ✔ No Bootstrap attributes (no data-bs-*)
        ✔ No JS inline code
        ✔ No styling inside HTML
    - HTML Requirements
        * The HTML must follow the exact BEM anatomy from the Component API.
        * Include placeholders for text, icons, or content where required.
        * Demonstrate at least one variant in the markup if useful.
        * Demonstrate at least one state using classes like .is-active, if applicable.
    - Do NOT include CSS or JS—HTML only.
    - Output should be clean, semantic, and ready for styling. Output Format
        * Section 1 → “VIS HTML Snippet” : Provide the full HTML block.
        * Section 2 → “Notes for Integration” : List any attributes or container rules needed for CSS or JS.
    - After producing the output, ask me: “Do you want to proceed to Step 3 (Write VIS CSS)?”
    - I will now provide you the Component BEM API as input.
    - WAIT for the API before generating HTML.

# STEP 3 - Write VIS CSS (BEM + Token Driven)

    1. CSS must:
        A. Position component
        B. Style all states
        C. Style all variants
        D. Use VIS tokens system only
        E. Responsive Behavior (Required)

## Execution Prompt

    I want you to generate the VIS CSS for a component based on the Component API and the VIS HTML snippet that I will provide.
    Follow these instructions strictly:
        - CSS Requirements
            ✔ Use BEM Architecture
                All selectors must follow:
                .vs-[component] {}
                .vs-[component]__[element] {}
                .vs-[component]--[variant] {}
                .vs-[component]--[size] {}
                .is-[state] {}

            ✔ Use VIS Token System ONLY
                Every color, spacing, radius, typography, shadow, and motion value must come from:
                tokens.css, base.css, typography.css, utilities.css
                Meaning: No hardcoded colors, No hardcoded px values unless absolutely required
                Use: var(--space-*), var(--radius-*), var(--surface-*),var(--primary-600), var(--text-primary), etc.

            ✔ CSS Must Include the Following:
                A. Positioning
                    Handle layout and positioning using CSS properties like:
                    position: relative/absolute;
                    display: flex/block/grid;
                    transforms, alignment, sizing, etc.

                B. Component States
                    Implement styles for state classes: .is-active, .is-open, .is-visible, .is-disabled, etc.

                C. Variants
                    Implement all variants defined in BEM API: Colors, Modes (dark/light), Visual themes, Interaction variants. Each variant must override the core component anatomy only.

                D. Size Variants (if defined)
                    Implement spacing & typography changes based on VIS tokens.

                E. Responsive Behavior (Required)
                    Provide responsive blocks ONLY if the component genuinely requires them
                    Implement responsive styles based on VIS breakpoints.Use mobile-first CSS and apply media queries only where necessary.
                    Default rules = mobile layout
                        * Apply responsive changes using VIS breakpoints (matching Bootstrap’s grid):

                            @media (min-width: 576px) { ... }
                            @media (min-width: 768px) { ... }
                            @media (min-width: 992px) { ... }
                            @media (min-width: 1200px) { ... }
                            @media (min-width: 1400px) { ... }
                        * Use tokens for spacing and typography inside breakpoints
                        * Ensure the component scales fluidly (no fixed pixel widths unless required)
                        * Alignments, spacing, layout direction, and typography should adapt to screen size
                        * Do NOT use container classes from Bootstrap (component must stay independent)
                        * All responsive adjustments must preserve the BEM structure
                        * No hardcoded magic numbers (use tokens + relative units)

        - Output Format
            * Section 1 → “Base Component CSS” : Core structure + default styles.
            * Section 2 → “State Styles” All .is-\* classes.
            * Section 3 → “Variants (BEM Modifiers)” All --primary, --error, --dark, etc.
            * Section 4 → “Size Variants (if applicable)”
            * Section 5 → “Optional Notes/Dependencies” (If JS is required to toggle states)
        - Rules
            * No Bootstrap classes
            * No Bootstrap variables
            * No Bootstrap resets
            * No external libraries
            * Pure VIS design system CSS
            * Keep the CSS clean and minimal
            * Do NOT write HTML or JS here
        - After generating the CSS, ask me:
            * “Do you want to proceed to Step 4 (Add JavaScript behavior)?”
            * WAIT for me to provide the Component API and HTML Snippet before writing CSS.

# STEP 4 — Add JavaScript

    1. Write independent JS for the component ( if required)
    2. Modify CS by adding JS

## Execution Prompt

    I want you to generate pure JavaScript for my VIS component.
    I will provide the Component BEM API, the VIS HTML snippet, and the VIS CSS from previous steps.
    Your task is to add all required JavaScript behavior to make the component functional.
    Follow these rules strictly:
        1. JS must be independent (NO Bootstrap, NO jQuery).Use only vanilla JavaScript. Do NOT use Bootstrap’s data-bs-* attributes, JS modules. Do NOT use external libraries. All logic must work with our VIS markup only.
        2. JS must implement the functional behavior defined in the Component API.  You must handle all interactive behavior that the component requires.Examples (depending on component):
            * tooltip → show/hide bubble
            * dropdown → toggle menu open/close
            * modal → open, close, ESC key, backdrop
            * accordion → expansion
            * tabs → activate tab/panel
            * carousel → slide left/right
        3. JS must toggle BEM state classes. Use the states defined in the API, such as: .is-visible, .is-active, .is-open, .is-expanded,.is-disabled
        JS should add/remove these classes to trigger CSS transitions.

        4. JS must be structured like a VIS component script. Required structure:
            document.addEventListener("DOMContentLoaded", () => {
                const components = document.querySelectorAll(".vs-[component]");
                components.forEach(component => {
                    // Query internal elements (BEM)
                    // Add event listeners
                    // Toggle state classes
                    // Handle accessibility
                    // Handle cleanup if needed
                });
            });
        5. Accessibility Requirements (if applicable)
            Add ARIA attributes:
                - role="tooltip", role="dialog", role="tab", etc.
                - aria-expanded, aria-hidden, aria-controls
                - ESC key handling
            Only if relevant to the component.

        6. CSS Updates Required for JS State Classes
            Update the CSS to include any new interactive states:
            Example:
                .vs-tooltip__bubble.is-visible {
                opacity: 1;
                pointer-events: auto;
                transform: translateY(-4px);
                }


            Or for dropdown:
                .vs-dropdown.is-open .vs-dropdown__menu {
                display: block;
                }
            You must:
            ✔ Add CSS only for state classes
            ✔ Do NOT rewrite existing CSS
            ✔ Keep CSS minimal and token-driven

    Output Format
        Your output must contain the following sections:
            Section 1 → “JavaScript for Component Behavior” Full JS code block.
            Section 2 → “Required CSS Additions for State Classes” ONLY new CSS needed for .is-* classes.
            Section 3 → “Usage Notes” Explain how to include JS file or initialize the component (if needed).
    After generating the output, ask me:
        “Do you want to proceed to Step 5 (Variants & Sizes)?”

# STEP 5 — Add Variants & Sizes Using BEM Modifiers

## Execution Prompt

    I want you to generate **BEM Variant CSS and Size Modifier CSS** for my VIS component.
    I will provide you the Component API, HTML snippet, and base CSS from previous steps.
    Follow the instructions strictly:
    - Your task :
        * Expand the component by generating:
            ✔ All required visual variants (using `vs-[component]--[variant]`)
            ✔ All required size modifiers (using `vs-[component]--sm`, `vs-[component]--lg`, etc.) Variants must override **only the necessary CSS properties**, such as:
                * background
                * border
                * text color
                * surface color
                * elevation
                * padding
                * animation behavior (if applicable)
            Sizes must modify:
                * spacing
                * padding
                * typography
                * dimensions (if applicable)
        * Rules for Writing Variant & Size CSS
            1. Use VIS tokens only. Examples:
                * Colors: `var(--primary-600)`, `var(--surface-default)`
                * Spacing: `var(--space-8)`, `var(--space-16)`
                * Typography: `var(--body-sm-size)`
                * Radius: `var(--radius-sm)`
                * Shadow: `var(--elevation-2)`
                No hardcoded colors or px values unless absolutely unavoidable.
            2. Do NOT modify component structure. Only override visual styles.
            3. All selectors must follow BEM. Example:
                .vs-tooltip--primary .vs-tooltip__bubble { … }
                .vs-tooltip--error .vs-tooltip__bubble { … }
                .vs-tooltip--sm .vs-tooltip__bubble { … }
            4. Keep overrides minimal & clean. Each variant should override only what is necessary to distinguish it.

    - Output Format - Your output must contain the following three sections:
        * Section 1 → “Visual Variants (BEM Modifiers)" :  Write all color/mode variants defined in the API(e.g., primary, secondary, light, dark, success, error, warning)
        * Section 2 → “Size Modifiers (BEM Modifiers)" : Write CSS for all size variations defined in the API (e.g., sm, md, lg, xl)
        * Section 3 → “Notes & Variant Behavior Rules”** Explain:
            * where variants should be applied
            * how they interact with states
            * any important usage guidelines

    - After generating your output, ask me: Do you want to proceed to Step 6 (Demo/Test Page)?

# STEP 6 — Create a Demo/Test Page

## Execution Prompt

    I want you to generate a Demo/Test HTML Page for my VIS component. I will provide you with:
        - Component API
        - VIS HTML snippet
        - VIS CSS
        - VIS JS (if any)
    Your job is to create a fully working test page that imports all VIS design system files and demonstrates the component correctly.Follow these instructions strictly:
    A. Demo/Test Page Requirements
        1.Include VIS system stylesheet imports At the top of <head> include:

        <link rel="stylesheet" href="../css/tokens.css" />
        <link rel="stylesheet" href="../css/base.css" />
        <link rel="stylesheet" href="../css/typography.css" />
        <link rel="stylesheet" href="../css/utilities.css" />
        <link rel="stylesheet" href="../css/custom.css" />

        No Bootstrap CSS should be used.
        Include VIS JavaScript (if applicable)

        2. At the bottom of <body> include:

        <script src="../js/custom.js"></script>

        Do NOT include: Bootstrap JS, jQuery,External libraries
        Include only Only VIS JavaScript.

        3. Place the exact VIS HTML snippet provided earlier inside a preview container. Example structure required:

        <section class="test-area">
            <!-- Component HTML goes here -->
        </section>

        4. Provide multiple test examples (when useful). Show: Default version, At least one variant, At least one size, At least one interactive state (if possible).Each preview must be separated clearly using

        <div class="demo-block">...</div>.

        5. Page Layout Requirements : Use simple layout, Add spacing using VIS utility classes, No external frameworks or resetsCenter elements using utilities if needed

        6. Output Format - Your output must contain:
            - Section 1 → “Full Demo/Test HTML Page”
            - Section 2 → “Usage Notes”
    B Rules:
    - Do NOT include CSS inside <style>
    - Do NOT include inline JS
    - Do NOT include external CDNs
    - Only VIS system files + component HTML
    - The demo page should be copy-paste ready
