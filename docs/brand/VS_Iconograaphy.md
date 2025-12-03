Updated: 03 Dec 2025\_

This document defines the **icon system, sizing, naming conventions, stroke rules, color bindings, and usage guidelines** for all Vidyaa Saarthi interfaces.
It is platform-agnostic and can be implemented in any design or engineering environment.

---

# **1️⃣ Icon Grid & Geometry**

### **Design Grid**

All icons must be designed on a **24 × 24 px** grid.

```
icon/grid-size: 24px
icon/canvas-size: 24px × 24px
icon/active-area: 20–22px
```

### **Stroke Rules**

- **Stroke weight:** `2px` (consistent across outline icons)
- **Stroke joins:** Round
- **Stroke caps:** Round
- **Corner radius (for shapes):** 2px–4px depending on geometry

### **Style Family**

Vidyaa Saarthi uses a **single unified family**:

```
icon/style: outline
icon/stroke-weight: 2px
icon/corner-style: rounded
```

---

# **2️⃣ Icon Sizes (Tokenised)**

Icons scale using these official size tokens:

| Token          | Size             |
| -------------- | ---------------- |
| `icon/size-16` | 16px             |
| `icon/size-20` | 20px             |
| `icon/size-24` | 24px _(default)_ |
| `icon/size-32` | 32px             |

### Usage:

- **16px** → dense UIs, chip icons, inputs
- **20px** → buttons, compact layouts
- **24px** → primary UI icons (default)
- **32px** → hero cards, large tiles

---

# **3️⃣ Naming Convention**

Icons follow a flat, consistent token name structure:

```
icon/{category}/{name}
```

### Categories:

```
system   → UI actions (close, edit, delete)
navigation → arrows, chevrons, menu
status   → error, success, info, warning
learning → subjects, books, progress (if needed)
media    → play, pause, image
social   → whatsapp, email, phone
user     → profile, logout
```

### Examples:

```
icon/system/add
icon/system/edit
icon/system/delete
icon/navigation/chevron-right
icon/navigation/arrow-left
icon/status/error
icon/status/success
icon/user/profile
icon/user/logout
icon/media/play
```

---

# **4️⃣ Color Binding Rules**

Icons must **never** use arbitrary colors.
They always bind to **Design System Tokens**.

### **Default UI Icons**

```
icon/color-default: text/secondary
```

### **Primary Action Icons**

```
icon/color-primary: brand/primary-600
```

### **On Dark Backgrounds**

```
icon/color-inverse: text/inverse
```

### **Status Icons**

```
icon/status-success: semantic/success-600
icon/status-error:   semantic/error-600
icon/status-warning: semantic/warning-600
```

### **Disabled Icons**

```
icon/color-disabled: text/tertiary
```

---

# **5️⃣ Icon Placement & Spacing**

### **Icon + Text (Horizontal)**

```
icon-margin-right: space/8
```

### **Icon Only Buttons**

- Icon centered
- Minimum tap area: **40 × 40 px**

### **Inside Inputs**

```
icon-padding-left: space/12
icon-padding-right: space/12
```

### **Inside Chips / Tags**

```
icon-size: icon/size-16
icon-margin-right: space/4
```

---

# **6️⃣ Integration With Components**

### **Buttons**

- Primary button: icon uses `text/inverse`
- Secondary button: icon uses `brand/primary-600`
- Tertiary button: icon uses `brand/primary-700`

### **Inputs**

- Leading/trailing icons must use `text/tertiary`
- Focus does not recolor the icon

### **Navigation (Menu / Sidebar)**

- Active: `brand/primary-500`
- Inactive: `text/secondary`
- Hover: `brand/primary-600`

### **Status Alerts**

- Success icon → `semantic/success-600`
- Error icon → `semantic/error-600`
- Warning icon → `semantic/warning-600`

---

# **7️⃣ Tailwind Mapping (Engineering)**

```js
theme: {
  extend: {
    width: {
      'icon-16': '16px',
      'icon-20': '20px',
      'icon-24': '24px',
      'icon-32': '32px',
    },
    height: {
      'icon-16': '16px',
      'icon-20': '20px',
      'icon-24': '24px',
      'icon-32': '32px',
    },
    strokeWidth: {
      'icon': '2px',
    },
  }
}
```

### Example Usage

```html
<svg class="w-icon-24 h-icon-24 stroke-icon text-brand-primary-600">...</svg>
```

---

# **8️⃣ Allowed Export Formats**

Icons must be delivered in:

```
SVG (preferred)
PNG (if needed, 1x/2x)
```

### SVG Rules:

- No embedded fills (outline only)
- No masks
- No inline styles
- Use strokes, not outlines

---

# **9️⃣ Accessibility & Contrast**

- Icons that convey meaning must follow **3:1 contrast** minimum
- Decorative icons require `aria-hidden="true"`
- Functional icons require `aria-label` or text alternative
- Status icons must not rely solely on color → shape helps convey meaning

---

# **1️⃣0️⃣ Sample Icon Set (Recommended Defaults)**

```
System:
  icon/system/add
  icon/system/edit
  icon/system/delete
  icon/system/search
  icon/system/close

Navigation:
  icon/navigation/menu
  icon/navigation/chevron-down
  icon/navigation/chevron-right
  icon/navigation/arrow-left
  icon/navigation/arrow-right

Status:
  icon/status/success
  icon/status/error
  icon/status/warning
  icon/status/info

User:
  icon/user/profile
  icon/user/logout
  icon/user/settings

Media:
  icon/media/play
  icon/media/pause
```
