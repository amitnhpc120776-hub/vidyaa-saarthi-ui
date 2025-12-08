document.addEventListener("DOMContentLoaded", () => {
  const components = document.querySelectorAll(".vs-radio");

  components.forEach((component) => {
    const input = component.querySelector(".vs-radio__input");
    if (!input) return;

    const syncDisabled = () => {
      const wantsDisabled = component.classList.contains("vs-radio--disabled");
      if (wantsDisabled && !input.disabled) {
        input.disabled = true;
      }
      const isDisabled = input.disabled || wantsDisabled;
      component.classList.toggle("is-disabled", isDisabled);
      input.setAttribute("aria-disabled", String(isDisabled));
      component.setAttribute("aria-disabled", String(isDisabled));
    };

    const syncChecked = () => {
      const isChecked = input.checked || component.classList.contains("vs-radio--checked");
      component.classList.toggle("is-checked", isChecked);
      component.classList.toggle("vs-radio--checked", isChecked);
      component.classList.toggle("vs-radio--unchecked", !isChecked);
      input.setAttribute("aria-checked", String(isChecked));
      component.setAttribute("aria-checked", String(isChecked));
    };

    const syncGroup = () => {
      if (!input.name) return;
      const siblings = document.querySelectorAll(`input[name="${CSS.escape(input.name)}"]`);
      siblings.forEach((other) => {
        const host = other.closest(".vs-radio");
        if (!host) return;
        const isChecked = other.checked;
        host.classList.toggle("is-checked", isChecked);
        host.classList.toggle("vs-radio--checked", isChecked);
        host.classList.toggle("vs-radio--unchecked", !isChecked);
        other.setAttribute("aria-checked", String(isChecked));
        host.setAttribute("aria-checked", String(isChecked));
      });
    };

    const syncState = () => {
      syncDisabled();
      syncChecked();
    };

    syncState();

    const handleChange = () => {
      if (component.classList.contains("is-disabled")) return;
      syncChecked();
      syncGroup();
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
