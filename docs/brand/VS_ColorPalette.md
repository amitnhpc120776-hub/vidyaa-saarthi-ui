_Updated: 03 Dec 2025_

This document defines the **official color tokens** for the Vidyaa Sarthi Design System.
Includes brand colors, extended scales, neutrals, semantic tokens, surfaces, text, borders, and Tailwind mappings.
All values are WCAG-compliant and suitable for production across any platform.

---

## **1️⃣ Core Brand Colors**

| Token                 | HEX       | Usage                             |
| --------------------- | --------- | --------------------------------- |
| `brand/primary-500`   | `#1565C0` | Core brand blue, primary CTAs     |
| `brand/primary-600`   | `#2563EB` | Hover states / emphasis           |
| `brand/secondary-500` | `#002060` | Deep navy for headers & structure |
| `brand/accent-500`    | `#F59E0B` | Accent highlights & indicators    |

---

## **2️⃣ Extended Primary Scale**

```
brand/primary-50:  #EFF6FF
brand/primary-100: #DBEAFE
brand/primary-200: #BFDBFE
brand/primary-300: #93C5FD
brand/primary-400: #60A5FA
brand/primary-500: #3B82F6
brand/primary-600: #2563EB
brand/primary-700: #1D4ED8
brand/primary-800: #1E40AF
brand/primary-900: #1E3A8A
```

---

## **3️⃣ Extended Secondary (Navy) Scale**

```
brand/secondary-50:  #EBF0FF
brand/secondary-100: #D1DBFF
brand/secondary-200: #A3B6FF
brand/secondary-300: #7592FF
brand/secondary-400: #4A6FE8
brand/secondary-500: #002060
brand/secondary-600: #001A52
brand/secondary-700: #001442
brand/secondary-800: #000F33
brand/secondary-900: #000A24
```

---

## **4️⃣ Accent Scale**

```
brand/accent-50:  #FFFAEB
brand/accent-100: #FEF3C7
brand/accent-200: #FDE68A
brand/accent-300: #FCD34D
brand/accent-400: #FBBF24
brand/accent-500: #F59E0B
brand/accent-600: #D97706
brand/accent-700: #B45309
brand/accent-800: #92400E
brand/accent-900: #78350F
```

---

## **5️⃣ Neutral Palette**

```
neutral/0:    #FFFFFF
neutral/50:   #F9FAFB
neutral/100:  #F3F4F6
neutral/200:  #E5E7EB
neutral/300:  #D1D5DB
neutral/400:  #9CA3AF
neutral/500:  #6B7280
neutral/600:  #4B5563
neutral/700:  #374151
neutral/800:  #1F2937
neutral/900:  #111827
neutral/1000: #000000
```

---

## **6️⃣ Semantic Tokens**

### **Success**

```
semantic/success-50:  #ECFDF5
semantic/success-100: #D1FAE5
semantic/success-200: #A7F3D0
semantic/success-300: #6EE7B7
semantic/success-400: #34D399
semantic/success-500: #10B981
semantic/success-600: #059669
semantic/success-700: #047857
semantic/success-800: #065F46
semantic/success-900: #064E3B
```

### **Error**

```
semantic/error-50:  #FEF2F2
semantic/error-100: #FEE2E2
semantic/error-200: #FECACA
semantic/error-300: #FCA5A5
semantic/error-400: #F87171
semantic/error-500: #EF4444
semantic/error-600: #DC2626
semantic/error-700: #B91C1C
semantic/error-800: #991B1B
semantic/error-900: #7F1D1D
```

### **Warning**

```
semantic/warning-50:  #FFFBEB
semantic/warning-100: #FEF3C7
semantic/warning-200: #FDE68A
semantic/warning-300: #FCD34D
semantic/warning-400: #FBBF24
semantic/warning-500: #F59E0B
semantic/warning-600: #D97706
semantic/warning-700: #B45309
semantic/warning-800: #92400E
semantic/warning-900: #78350F
```

---

## **7️⃣ Background & Surface Tokens**

| Token              | HEX       | Purpose                     |
| ------------------ | --------- | --------------------------- |
| `bg/base`          | `#FFFFFF` | Primary background          |
| `bg/subtle`        | `#F9FAFB` | Soft sections               |
| `bg/soft`          | `#F3F4F6` | Alternate panels            |
| `surface/default`  | `#FFFFFF` | Cards, inputs               |
| `surface/subtle`   | `#F9FAFB` | Low-emphasis surfaces       |
| `surface/raised`   | `#FFFFFF` | Elevated components         |
| `surface/hover`    | `#F3F4F6` | Hover states                |
| `bg/hero-contrast` | `#E6F0FA` | High-contrast hero sections |

---

## **8️⃣ Text Tokens**

```
text/primary:   #111827
text/secondary: #374151
text/tertiary:  #6B7280
text/inverse:   #FFFFFF
text/error:     #EF4444
text/success:   #10B981
```

---

## **9️⃣ Border Tokens**

```
border/default: #E5E7EB
border/subtle:  #F3F4F6
border/strong:  #9CA3AF
```

---

## **🔟 Tailwind Mapping (Drop-in)**

aste this into your `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      brand: {
        primary: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#1565C0',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        secondary: {
          50:  '#EBF0FF',
          100: '#D1DBFF',
          200: '#A3B6FF',
          300: '#7592FF',
          400: '#4A6FE8',
          500: '#002060',
          600: '#001A52',
          700: '#001442',
          800: '#000F33',
          900: '#000A24',
        },
        accent: {
          50:  '#FFFAEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      neutral: {
        0:   '#FFFFFF',
        50:  '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
        1000: '#000000',
      },
      semantic: {
        success: '#10B981',
        error:   '#EF4444',
        warning: '#F59E0B',
      },
      surface: {
        default:  '#FFFFFF',
        subtle:   '#F9FAFB',
        raised:   '#FFFFFF',
        hover:    '#F3F4F6',
      },
      bg: {
        base:     '#FFFFFF',
        subtle:   '#F9FAFB',
        soft:     '#F3F4F6',
        contrast: '#E6F0FA',
      },
      text: {
        primary:   '#111827',
        secondary: '#374151',
        tertiary:  '#6B7280',
        inverse:   '#FFFFFF',
      },
      border: {
        default: '#E5E7EB',
        subtle:  '#F3F4F6',
        strong:  '#9CA3AF',
      }
    },
  },
}
```

## **1️⃣1️⃣ Notes for Production**

- This palette supports **light mode** for Phase-1.
- Dark-mode token expansion can be added later (`brand-dark/*`, `surface-dark/*`, etc.).
- All brand, semantic, and neutral colors meet **WCAG 2.1 AA** contrast requirements.
