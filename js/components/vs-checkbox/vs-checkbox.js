document.addEventListener("DOMContentLoaded", () => {
  const components = document.querySelectorAll(".vs-checkbox");

  components.forEach((component) => {
    const input = component.querySelector(".vs-checkbox__input");
    if (!input) return;

    const setIndeterminateFromModifier = () => {
      const wantsIndeterminate = component.classList.contains("vs-checkbox--indeterminate");
      if (wantsIndeterminate) {
        input.indeterminate = true;
      }
    };

    const syncState = () => {
      const isDisabled = input.disabled || component.classList.contains("vs-checkbox--disabled");
      const isIndeterminate = input.indeterminate || component.classList.contains("vs-checkbox--indeterminate");
      const isChecked = (input.checked || component.classList.contains("vs-checkbox--checked")) && !isIndeterminate;

      component.classList.toggle("is-disabled", isDisabled);
      component.classList.toggle("is-checked", isChecked);
      component.classList.toggle("is-indeterminate", isIndeterminate);

      input.setAttribute("aria-checked", isIndeterminate ? "mixed" : String(isChecked));
      input.setAttribute("aria-disabled", String(isDisabled));
      component.setAttribute("aria-checked", isIndeterminate ? "mixed" : String(isChecked));
      component.setAttribute("aria-disabled", String(isDisabled));

      if (component.classList.contains("vs-checkbox--disabled") && !input.disabled) {
        input.disabled = true;
      }
    };

    setIndeterminateFromModifier();
    syncState();

    const handleChange = () => {
      if (component.classList.contains("vs-checkbox--disabled")) return;
      if (input.indeterminate) {
        input.indeterminate = false;
        component.classList.remove("vs-checkbox--indeterminate", "is-indeterminate");
      }
      syncState();
    };

    const handleFocus = () => component.classList.add("is-focused");
    const handleBlur = () => component.classList.remove("is-focused");
    const handleDown = () => component.classList.add("is-active");
    const handleUp = () => component.classList.remove("is-active");

    input.addEventListener("change", handleChange);
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
    component.addEventListener("mousedown", handleDown);
    component.addEventListener("mouseup", handleUp);
    component.addEventListener("mouseleave", handleUp);
  });
});
