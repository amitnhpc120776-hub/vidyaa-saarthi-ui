_Updated: 03 Dec 2025_

This specification defines the official **Elevation, Shadow, Focus, Blur, and Border tokens** for the Vidyaa Saarthi Design System, plus **Tailwind-ready mappings**.

---

# **1️⃣ Elevation / Shadow Tokens**

```
elevation/level-0:
  type: drop-shadow
  x: 0
  y: 0
  blur: 0
  spread: 0
  color: none

elevation/level-1:
  x: 0
  y: 1px
  blur: 2px
  spread: 0
  color: rgba(0,0,0,0.04)

elevation/level-2:
  x: 0
  y: 2px
  blur: 4px
  spread: 0
  color: rgba(0,0,0,0.06)

elevation/level-3:
  x: 0
  y: 4px
  blur: 8px
  spread: 0
  color: rgba(0,0,0,0.08)

elevation/level-4:
  x: 0
  y: 8px
  blur: 16px
  spread: 0
  color: rgba(0,0,0,0.12)

elevation/level-5:
  x: 0
  y: 12px
  blur: 24px
  spread: 0
  color: rgba(0,0,0,0.16)
```

### Usage Mapping

- Level 0 → flat
- Level 1 → subtle UI surfaces
- Level 2 → inputs, basic cards
- Level 3 → standard cards, dropdowns
- Level 4 → raised surfaces
- Level 5 → modals & overlays

---

# **2️⃣ Focus Ring Tokens**

```
focus/ring-light:
  x: 0
  y: 0
  blur: 0
  spread: 2px
  color: brand/primary-300 @ 50% opacity

focus/ring-strong:
  x: 0
  y: 0
  blur: 0
  spread: 3px
  color: brand/primary-500 @ 75% opacity
```

---

# **3️⃣ Blur Tokens**

```
blur/background-soft:
  type: background-blur
  radius: 12px
  opacity-required: <100%

blur/background-heavy:
  type: background-blur
  radius: 24px
  opacity-required: <100%

blur/layer-soft:
  type: layer-blur
  radius: 8px

blur/layer-medium:
  type: layer-blur
  radius: 16px
```

---

# **4️⃣ Border Tokens**

```
border/default: 1px solid neutral-200
border/subtle:  1px solid neutral-100
border/strong:  1px solid neutral-300
border/primary: 1px solid brand/primary-500
border/error:   1px solid semantic/error-500
```

---

# **5️⃣ Tailwind-Ready Effect Classes**

These are **drop-in utility classes** for Tailwind, following your effects exactly.

### **Elevation / Shadow Classes**

```css
.shadow-elevation-0 {
  box-shadow: none;
}

.shadow-elevation-1 {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04);
}

.shadow-elevation-2 {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
}

.shadow-elevation-3 {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}

.shadow-elevation-4 {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
}

.shadow-elevation-5 {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.16);
}
```

---

### **Focus Ring Classes**

```css
.focus-ring-light {
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5); /* brand/primary-300 @ 50% */
}

.focus-ring-strong {
  box-shadow: 0 0 0 3px rgba(21, 101, 192, 0.75); /* brand/primary-500 @ 75% */
}
```

_(These values use your brand color tokens.)_

---

### **Blur Classes**

```css
.blur-background-soft {
  backdrop-filter: blur(12px);
}

.blur-background-heavy {
  backdrop-filter: blur(24px);
}

.blur-layer-soft {
  filter: blur(8px);
}

.blur-layer-medium {
  filter: blur(16px);
}
```

---

### **Border Classes (Token-based)**

```css
.border-default {
  border: 1px solid var(--neutral-200);
}
.border-subtle {
  border: 1px solid var(--neutral-100);
}
.border-strong {
  border: 1px solid var(--neutral-300);
}
.border-primary {
  border: 1px solid var(--brand-primary-500);
}
.border-error {
  border: 1px solid var(--semantic-error-500);
}
```

---

# **6️⃣ Tailwind Config Snippet (Optional)**

_(For engineering teams to register the utilities directly)_

```js
plugins: [
  function ({ addUtilities }) {
    addUtilities({
      ".shadow-elevation-0": { boxShadow: "none" },
      ".shadow-elevation-1": { boxShadow: "0px 1px 2px rgba(0,0,0,0.04)" },
      ".shadow-elevation-2": { boxShadow: "0px 2px 4px rgba(0,0,0,0.06)" },
      ".shadow-elevation-3": { boxShadow: "0px 4px 8px rgba(0,0,0,0.08)" },
      ".shadow-elevation-4": { boxShadow: "0px 8px 16px rgba(0,0,0,0.12)" },
      ".shadow-elevation-5": { boxShadow: "0px 12px 24px rgba(0,0,0,0.16)" },

      ".focus-ring-light": {
        boxShadow: "0 0 0 2px rgba(37,99,235,0.50)",
      },
      ".focus-ring-strong": {
        boxShadow: "0 0 0 3px rgba(21,101,192,0.75)",
      },

      ".blur-background-soft": { backdropFilter: "blur(12px)" },
      ".blur-background-heavy": { backdropFilter: "blur(24px)" },
      ".blur-layer-soft": { filter: "blur(8px)" },
      ".blur-layer-medium": { filter: "blur(16px)" },
    });
  },
];
```
