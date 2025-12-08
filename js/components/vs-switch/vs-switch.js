/* ========================================================================
   VIS Component: vs-switch — JavaScript Behavior
   ======================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const switches = document.querySelectorAll(".vs-switch");

  switches.forEach((component) => {
    if (component.dataset.vsSwitchReady === "true") return;

    const input = component.querySelector(".vs-switch__control");
    if (!input) return;

    component.dataset.vsSwitchReady = "true";

    const applyChecked = (checked) => {
      component.classList.toggle("is-checked", checked);
      input.setAttribute("aria-checked", String(checked));
    };

    const applyDisabled = () => {
      const disabled = component.classList.contains("is-disabled") || input.disabled;
      input.disabled = disabled;
      input.setAttribute("aria-disabled", String(disabled));
      component.classList.toggle("is-disabled", disabled);
    };

    const applyReadonly = () => {
      const readonly = component.classList.contains("is-readonly") || input.hasAttribute("readonly");
      if (readonly) {
        input.setAttribute("aria-readonly", "true");
      } else {
        input.removeAttribute("aria-readonly");
      }
      component.classList.toggle("is-readonly", readonly);
    };

    const syncFromInput = () => {
      applyChecked(input.checked);
      applyDisabled();
      applyReadonly();
    };

    const handleChange = (event) => {
      if (component.classList.contains("is-readonly")) {
        event.preventDefault();
        input.checked = component.classList.contains("is-checked");
        return;
      }
      applyChecked(input.checked);
    };

    const handleFocus = () => {
      if (input.matches(":focus-visible")) {
        component.classList.add("is-focus-visible");
      }
    };

    const handleBlur = () => {
      component.classList.remove("is-focus-visible");
    };

    const handleClick = (event) => {
      if (component.classList.contains("is-readonly")) {
        event.preventDefault();
      }
    };

    input.addEventListener("change", handleChange);
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
    component.addEventListener("click", handleClick);

    syncFromInput();
  });
});
