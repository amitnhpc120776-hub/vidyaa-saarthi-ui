This file defines the **official typography scale** for the Vidyaa Saarthi design system.
All text styles use **Inter** as the primary font.

---

## **Typography Scale**

```markdown
| Text Style Name | Font Name | Weight | Size (px) | Line Height (%) | Letter Spacing | Usage               |
| --------------- | --------- | ------ | --------- | --------------- | -------------- | ------------------- |
| display-xl      | Inter     | 700    | 48px      | 120%            | -1%            | Main hero headers   |
| display-lg      | Inter     | 700    | 40px      | 120%            | -1%            | Section hero titles |
| heading/h1      | Inter     | 700    | 32px      | 120%            | -0.5%          | Page titles         |
| heading/h2      | Inter     | 600    | 28px      | 130%            | -0.5%          | Section headings    |
| heading/h3      | Inter     | 600    | 24px      | 130%            | 0%             | Card titles         |
| heading/h4      | Inter     | 600    | 20px      | 130%            | 0%             | Subtitles           |
| body/body-lg    | Inter     | 400    | 18px      | 150%            | 0%             | Large body text     |
| body/body-md    | Inter     | 400    | 16px      | 150%            | 0%             | Default body text   |
| body/body-sm    | Inter     | 400    | 14px      | 150%            | 0%             | Secondary text      |
| label/label-lg  | Inter     | 600    | 16px      | 130%            | 0%             | Primary button text |
| label/label-md  | Inter     | 600    | 14px      | 130%            | 0%             | Form labels         |
| label/label-sm  | Inter     | 600    | 12px      | 130%            | 0%             | Compact UI labels   |
| caption/caption | Inter     | 400    | 12px      | 150%            | 0%             | Captions & metadata |
```

---

## **Specifications**

### **1. Font Family**

```
Inter, sans-serif
```

### **2. Responsive Behavior**

- Display styles scale down proportionally on mobile.
- Small text (≤14px) keeps 150% line height for clarity.

### **3. Token Naming Conventions**

- `display-*` → Largest brand-level headings
- `heading/*` → Structured page/section hierarchy
- `body/*` → All paragraph-level content
- `label/*` → Buttons, form labels, micro-interactions
- `caption` → Metadata, helper text, footnotes

---

## **Tailwind Mapping (for frontend team)**

Add to `tailwind.config.js`:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
}
```

Text styles will be implemented using `text-[size]`, `font-[weight]`, `leading-[value]`, and utility classes.

---
