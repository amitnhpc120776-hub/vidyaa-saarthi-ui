document.addEventListener("DOMContentLoaded", () => {
  const closeControls = document.querySelectorAll(".vs-close");

  closeControls.forEach((closeEl) => {
    const isDisabled = () => closeEl.classList.contains("is-disabled") || closeEl.disabled;

    const handlePointerEnter = () => {
      if (isDisabled()) return;
      closeEl.classList.add("is-hovered");
    };

    const handlePointerLeave = () => {
      closeEl.classList.remove("is-hovered", "is-active");
    };

    const handlePointerDown = () => {
      if (isDisabled()) return;
      closeEl.classList.add("is-active");
    };

    const handlePointerUp = () => {
      closeEl.classList.remove("is-active");
    };

    const handleFocus = () => {
      if (isDisabled()) return;
      if (closeEl.matches(":focus-visible")) {
        closeEl.classList.add("is-focus-visible");
      }
    };

    const handleBlur = () => {
      closeEl.classList.remove("is-focus-visible", "is-active");
    };

    const handleKeyDown = (event) => {
      if (isDisabled()) return;
      const isActivationKey = event.key === "Enter" || event.key === " ";
      if (isActivationKey) {
        closeEl.classList.add("is-active");
        event.preventDefault();
      }
    };

    const handleKeyUp = (event) => {
      if (isDisabled()) return;
      const isActivationKey = event.key === "Enter" || event.key === " ";
      if (isActivationKey) {
        closeEl.classList.remove("is-active");
        closeEl.click();
      }
    };

    closeEl.setAttribute("role", closeEl.getAttribute("role") || "button");
    closeEl.setAttribute("aria-label", closeEl.getAttribute("aria-label") || "Close");

    closeEl.addEventListener("pointerenter", handlePointerEnter);
    closeEl.addEventListener("pointerleave", handlePointerLeave);
    closeEl.addEventListener("pointerdown", handlePointerDown);
    closeEl.addEventListener("pointerup", handlePointerUp);
    closeEl.addEventListener("focus", handleFocus);
    closeEl.addEventListener("blur", handleBlur);
    closeEl.addEventListener("keydown", handleKeyDown);
    closeEl.addEventListener("keyup", handleKeyUp);
  });
});
