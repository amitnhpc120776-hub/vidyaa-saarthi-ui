/* ========================================================================
   VIS Dependent Primitive: vs-radio
   Behaviour: syncs native radio states with VIS BEM modifiers
   ======================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll(".vs-radio");

  radios.forEach((radio) => {
    const input = radio.querySelector("input[type='radio']");
    const isDisabled = input.hasAttribute("disabled");
    const isReadonly = input.hasAttribute("readonly");

    // INITIAL STATE SYNC
    // -------------------------
    // Preserve existing functional classes (.is-error, .is-success, etc.)
    if (isDisabled) radio.classList.add("is-disabled");
    if (isReadonly) radio.classList.add("is-readonly");
    if (input.checked) radio.classList.add("is-checked");

    // When unchecked, remove only is-checked (do NOT remove error/success/etc.)
    if (!input.checked) radio.classList.remove("is-checked");

    // STATE CHANGE HANDLER
    // -------------------------
    input.addEventListener("change", () => {
      // Remove is-checked from ALL radios in the same group
      const groupName = input.getAttribute("name");
      document
        .querySelectorAll(`input[name="${groupName}"]`)
        .forEach((otherInput) => {
          const otherRadio = otherInput.closest(".vs-radio");
          if (otherRadio) otherRadio.classList.remove("is-checked");
        });

      // Apply is-checked to the current component
      if (input.checked) radio.classList.add("is-checked");
    });

    // KEYBOARD ACCESSIBILITY
    // -------------------------
    radio.addEventListener("keydown", (e) => {
      if (isDisabled || isReadonly) return;

      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        input.click();
      }
    });

    // FOCUS-VISIBLE SUPPORT
    // -------------------------
    input.addEventListener("focus", () => {
      radio.classList.add("is-focus-visible");
    });

    input.addEventListener("blur", () => {
      radio.classList.remove("is-focus-visible");
    });

    // MOUSE STATES (optional, improves UX)
    // -------------------------
    radio.addEventListener("mousedown", () => {
      radio.classList.add("is-active");
    });

    radio.addEventListener("mouseup", () => {
      radio.classList.remove("is-active");
    });

    radio.addEventListener("mouseleave", () => {
      radio.classList.remove("is-active");
    });
  });
});
