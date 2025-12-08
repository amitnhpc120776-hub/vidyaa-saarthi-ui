/* ========================================================================
   VIS Dependent Primitive: vs-radio
   Behaviour: syncs native radio states with VIS BEM modifiers
   ======================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const radioComponents = document.querySelectorAll(".vs-radio[data-vs-radio]");

  radioComponents.forEach((radio) => {
    const input = radio.querySelector(".vs-radio__input");
    if (!input) return;

    const defaultTabIndex = input.tabIndex;
    let lastChecked = input.checked;

    const syncState = () => {
      const isDisabled = input.disabled || radio.classList.contains("is-disabled");
      const isReadonly = input.hasAttribute("readonly") || radio.classList.contains("is-readonly");
      const isChecked = input.checked;

      radio.classList.toggle("is-disabled", isDisabled);
      radio.classList.toggle("is-readonly", isReadonly);
      radio.classList.toggle("is-checked", isChecked);

      input.setAttribute("aria-readonly", isReadonly ? "true" : "false");
      input.tabIndex = isDisabled ? -1 : defaultTabIndex;

      lastChecked = isChecked;
    };

    const handleChange = (event) => {
      const isReadonly = radio.classList.contains("is-readonly") || input.hasAttribute("readonly");
      if (isReadonly) {
        event.preventDefault();
        input.checked = lastChecked;
        return;
      }
      syncState();
    };

    const handleFocus = (event) => {
      if (event.target.matches(":focus-visible")) {
        radio.classList.add("is-focus-visible");
      }
    };

    const handleBlur = () => {
      radio.classList.remove("is-focus-visible");
    };

    input.addEventListener("change", handleChange);
    input.addEventListener("input", handleChange);
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    syncState();
  });
});
