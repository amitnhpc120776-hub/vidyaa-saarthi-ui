document.addEventListener("DOMContentLoaded", () => {
  const switches = document.querySelectorAll(".vs-switch");

  switches.forEach((component) => {
    if (component.dataset.vsSwitchInitialized) return;
    const input = component.querySelector(".vs-switch__input");
    if (!input) return;

    const applyModifierState = () => {
      if (component.classList.contains("vs-switch--checked")) {
        input.checked = true;
      }
      if (component.classList.contains("vs-switch--unchecked")) {
        input.checked = false;
      }
      if (component.classList.contains("vs-switch--disabled")) {
        input.disabled = true;
      }
    };

    const syncState = () => {
      const isChecked = input.checked;
      const isDisabled = input.disabled || component.classList.contains("vs-switch--disabled");

      component.classList.toggle("is-checked", isChecked);
      component.classList.toggle("is-unchecked", !isChecked);
      component.classList.toggle("is-disabled", isDisabled);

      component.setAttribute("aria-checked", String(isChecked));
      component.setAttribute("aria-disabled", String(isDisabled));
      input.setAttribute("aria-checked", String(isChecked));
      input.setAttribute("aria-disabled", String(isDisabled));
    };

    const handleChange = () => {
      if (component.classList.contains("vs-switch--disabled")) return;
      syncState();
    };

    const handleFocus = () => component.classList.add("is-focused");
    const handleBlur = () => component.classList.remove("is-focused");
    const handleDown = () => component.classList.add("is-active");
    const handleUp = () => component.classList.remove("is-active");

    applyModifierState();
    syncState();

    input.addEventListener("change", handleChange);
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
    component.addEventListener("mousedown", handleDown);
    component.addEventListener("mouseup", handleUp);
    component.addEventListener("mouseleave", handleUp);

    component.dataset.vsSwitchInitialized = "true";
  });
});
