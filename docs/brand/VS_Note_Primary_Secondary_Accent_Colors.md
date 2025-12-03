**Primary, Secondary & Accent Colors — Functional Roles & Shade Usage**  
In a design system,

the _Primary_ color represents the core brand identity and is used for the most important actions such as main buttons, active states, and key interactive highlights, typically using mid-tones like the 500 shade for default states and darker 600–700 shades for hover and pressed states.

## Primary Color (Your Main Brand Color)

The primary color is the color most associated with the brand identity.
It drives the core actions and recognition.

Used for:

Main buttons (Primary CTA)
Active states (active tabs, active menu item)
Links
Key illustrations
Branding elements

Why only one primary?
Because you need one clear visual driver that users can instantly recognize.

In Vidya Saarthi:
brand/primary-500 → #1565C0
This is your core identity color, aligned with the logo.

## Secondary\_ color

supports the primary brand color by defining structure and hierarchy—appearing in navigation bars, headers, sections, and secondary actions—usually relying on darker, more stable tones such as 500–800 for strong contrast and readability.

The secondary color is used to support layouts, differentiate sections, add contrast, and build hierarchy.

Used for:

Navigation bars
Headers
Secondary buttons
Section dividers
Background accents
Charts (second data series)

Secondary is not competing with Primary
It should be darker, more stable, or more neutral.

In Vidya Saarthi:

brand/secondary-500 → #002060
Navy works perfectly for:

Strong UI structure
Footers & headers
Academic/serious tone

## The _Accent_ color

is a complementary highlight color used sparingly to draw attention to badges, tags, metrics, or emphasized UI elements without competing with primary actions, commonly using its 400–500 range for highlights and lighter 50–200 shades for subtle backgrounds. Together, this functional trio creates a predictable visual hierarchy: primary for main actions, secondary for structural emphasis, and accent for subtle emphasis—while lighter shades (50–200) serve backgrounds, mid tones (300–500) serve components, and darker tones (600–900) serve text, hover, and high-contrast states.

he accent color draws attention, creates emphasis, and guides the eye.

Used for:

Highlights

Badges

Notification indicators

Important numbers

Charts (third data series)

Accent is not for main buttons

Because accents are meant to "pop," not to become the main action.

In Vidya Saarthi:

brand/accent-500 → #F59E0B

Warm, energetic, motivational — perfect for student dashboards.

So How Does a Designer Decide Which Shade to Use?

Designers follow formal rules based on:

🔵 Rule 1: Use the Middle Tone (500) for Most UI Elements

Almost every modern design system uses 500 as the "base" color.

Reason:

500 is visually balanced

Works well on light backgrounds

Sits between subtle and loud

Examples:

Primary button = primary-500

Accent highlight = accent-500

🔵 Rule 2: Use Lighter Shades (50–200) for Backgrounds

Why?

They are soft and low-attention

Provide padding and grouping

Don’t overwhelm content

Examples:

Input background = neutral-50

Table row hover = primary-50

🔵 Rule 3: Use Darker Shades (600–800) for Text or Hover

Why?

Higher contrast

Better readability

Clearer active/hover states

Examples:

Button hover = primary-600

Navigation active = secondary-700

Headings = neutral-900

🔵 Rule 4: Use Strong Colors Sparingly (700–900)

These are for strong contrast moments:

Header backgrounds (secondary-800)

Modal overlays

High-priority actions

Using these too much makes UI feel heavy.

🔵 Rule 5: Semantic Colors Override Brand Colors

If something is “Error”, use only error colors.
If something is “Success”, use only green semantic tokens.

Brand colors should never override meaning.

🔵 Rule 6: Contrast Rules (WCAG) Decide Shade Selection

This is the most important formal rule.

A foreground + background color MUST have:

4.5:1 contrast for normal text

3:1 contrast for large text

Example:

Using accent-500 (#F59E0B) on white has only 4.4:1 contrast → borderline.
Therefore:

Use it for badges

NOT for small text

Use darker accents for text

🔵 Rule 7: Hierarchy → Primary = Action, Secondary = Structure, Accent = Highlight
Level Purpose Color Type
Primary Main CTA primary-500
Secondary Layout structure secondary-500
Tertiary Highlights & attention accent-500
Neutral Backgrounds, text, surfaces neutral-100 to neutral-900

This hierarchy keeps UI predictable and polished.

🎯 Practical Example (Vidya Saarthi Dashboard)
Primary Button

→ primary-500
→ Hover = primary-600

Navigation Bar

→ secondary-500
→ Active menu = secondary-700

Highlights (score badges)

→ accent-500

Info message box

→ primary-100 background
→ text/primary-700

Error banner

→ error-100 background
→ error-700 text
