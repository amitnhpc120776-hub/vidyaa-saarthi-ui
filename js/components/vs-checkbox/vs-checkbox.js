/* ========================================================================
   VIS Dependent Primitive: vs-checkbox
   Behaviour: syncs native checkbox states with VIS BEM modifiers
   ======================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const checkboxComponents = document.querySelectorAll(".vs-checkbox[data-vs-checkbox]");

  checkboxComponents.forEach((checkbox) => {
    const input = checkbox.querySelector(".vs-checkbox__input");
    if (!input) return;

    const defaultTabIndex = input.tabIndex;
    let lastChecked = input.checked;
    let lastIndeterminate = input.indeterminate;

    const normalizeIndeterminate = () => {
      const hasIndeterminateAttr =
        checkbox.classList.contains("is-indeterminate") ||
        input.getAttribute("data-indeterminate") === "true" ||
        checkbox.getAttribute("data-indeterminate") === "true";
      input.indeterminate = hasIndeterminateAttr || input.indeterminate;
    };

    const syncState = () => {
      normalizeIndeterminate();

      const isDisabled = input.disabled || checkbox.classList.contains("is-disabled");
      const isReadonly = input.hasAttribute("readonly") || checkbox.classList.contains("is-readonly");
      const isChecked = input.checked;
      const isIndeterminate = input.indeterminate;

      checkbox.classList.toggle("is-disabled", isDisabled);
      checkbox.classList.toggle("is-readonly", isReadonly);
      checkbox.classList.toggle("is-checked", isChecked);
      checkbox.classList.toggle("is-indeterminate", isIndeterminate);

      input.setAttribute("aria-readonly", isReadonly ? "true" : "false");
      input.tabIndex = isDisabled ? -1 : defaultTabIndex;

      lastChecked = isChecked;
      lastIndeterminate = isIndeterminate;
    };

    const handleChange = (event) => {
      const isReadonly = checkbox.classList.contains("is-readonly") || input.hasAttribute("readonly");
      if (isReadonly) {
        event.preventDefault();
        input.checked = lastChecked;
        input.indeterminate = lastIndeterminate;
        return;
      }
      if (input.indeterminate && !checkbox.classList.contains("is-indeterminate")) {
        input.indeterminate = false;
      }
      syncState();
    };

    const handleFocus = (event) => {
      if (event.target.matches(":focus-visible")) {
        checkbox.classList.add("is-focus-visible");
      }
    };

    const handleBlur = () => {
      checkbox.classList.remove("is-focus-visible");
    };

    input.addEventListener("change", handleChange);
    input.addEventListener("input", handleChange);
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    syncState();
  });
});
