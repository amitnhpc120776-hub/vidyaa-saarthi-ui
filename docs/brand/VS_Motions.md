_Updated: 03 Dec 2025_

Motion tokens define **duration, easing, transitions, and interaction patterns** to ensure consistent motion across all Vidyaa Saarthi interfaces.

These tokens are platform-agnostic and can be consumed by any frontend stack.

---

# **1️⃣ Duration Tokens**

Duration values follow a consistent scale.

```
motion/duration-0:    0ms
motion/duration-fast: 100ms
motion/duration-md:   150ms
motion/duration-base: 200ms
motion/duration-slow: 300ms
motion/duration-xl:   400ms
motion/duration-xxl:  600ms
```

### Usage Recommendations

- **Fast (100ms):** icon changes, toggle switches, hover states
- **Medium (150–200ms):** button press, input focus, dropdown open
- **Slow (300ms):** modals, overlays, toasts
- **XL / XXL:** page transitions, large element movement

---

# **2️⃣ Easing Tokens**

Industry-standard easing curves for different interaction types.

```
motion/ease-in:        cubic-bezier(0.4, 0, 1, 1)
motion/ease-out:       cubic-bezier(0, 0, 0.2, 1)
motion/ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1)
motion/ease-emphasize: cubic-bezier(0.2, 0, 0, 1) /* More pronounced */
motion/ease-decelerate: cubic-bezier(0, 0, 0.3, 1)
motion/ease-accelerate: cubic-bezier(0.3, 0, 1, 1)
```

### Usage

- **ease-out:** elements entering (dropdowns, cards)
- **ease-in:** elements exiting
- **ease-in-out:** UI movements, hero animations
- **emphasize:** key UI interactions (CTA, success state)

---

# **3️⃣ Motion Type Tokens**

Defines reusable motion archetypes.

```
motion/type-fade:
  opacity from 0 → 1
  duration: motion/duration-base
  easing: motion/ease-out

motion/type-slide-up:
  transform: translateY(12px) → 0
  duration: motion/duration-base
  easing: motion/ease-out

motion/type-slide-down:
  transform: translateY(-12px) → 0
  duration: motion/duration-base
  easing: motion/ease-out

motion/type-scale-in:
  transform: scale(0.96) → 1
  duration: motion/duration-md
  easing: motion/ease-out

motion/type-expand:
  height: auto → content height
  duration: motion/duration-md
  easing: motion/ease-in-out
```

---

# **4️⃣ Component Motion Guidelines**

### **Buttons**

- Hover → 100ms, ease-out
- Press → 100ms, ease-in
- Pressed shadow → elevation change using elevation tokens

### **Inputs**

- Focus ring → 150ms ease-out (fade + ring)
- Error shake (optional) → 200ms ease-in-out

### **Dropdowns**

- Use: `motion/type-slide-up` + `motion/type-fade`
- Duration: 150–200ms

### **Cards**

- Hover elevation: transition elevation-2 → elevation-3
- Duration: 150ms

### **Modals**

- Use combined:

  - `motion/type-scale-in`
  - `motion/type-fade`

- Duration: 250–300ms

### **Sidebars / Panels**

- Slide-in → 300ms, ease-out
- Slide-out → 250ms, ease-in

### **Alerts & Toasts**

- Slide-up + Fade
- Duration: 300ms

---

# **5️⃣ Tailwind Mapping (Engineering)**

Add to `tailwind.config.js`:

```js
theme: {
  extend: {
    transitionDuration: {
      '0': '0ms',
      'fast': '100ms',
      'md': '150ms',
      'base': '200ms',
      'slow': '300ms',
      'xl': '400ms',
      'xxl': '600ms',
    },
    transitionTimingFunction: {
      'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'emphasize': 'cubic-bezier(0.2, 0, 0, 1)',
      'decelerate': 'cubic-bezier(0, 0, 0.3, 1)',
      'accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
    }
  }
}
```

---

# **6️⃣ Predefined Tailwind Utility Classes**

```css
.fade-enter {
  opacity: 0;
  transition: opacity var(--duration-base) var(--ease-out);
}
.fade-enter-active {
  opacity: 1;
}

.slide-up {
  transform: translateY(12px);
  transition: all var(--duration-base) var(--ease-out);
}
.slide-up-active {
  transform: translateY(0);
}

.scale-in {
  transform: scale(0.96);
  transition: all var(--duration-md) var(--ease-out);
}
.scale-in-active {
  transform: scale(1);
}
```

(Teams can convert these to Tailwind plugin utilities if preferred.)

---

# **7️⃣ Interaction Timing Rules**

These ensure consistency:

```
hover: 100–150ms
focus: 120–180ms
tap/click: 80–120ms
panel toggle: 150–250ms
modal open: 200–300ms
toast slide: 250–350ms
page transitions: 300–600ms
```

---

# **8️⃣ Accessibility Motion Rules**

- Avoid large scaling or parallax on essential UI
- Respect user preference: `prefers-reduced-motion`
- Reduce all animations to **0–80ms** when motion disabled
- Do not animate color flickering or rapid flashes
- Avoid continuous motion in learning flows

---
