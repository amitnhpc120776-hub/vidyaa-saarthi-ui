document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".vs-btn");

  buttons.forEach((button) => {
    const isToggle = button.dataset.vsToggle === "true";

    if (isToggle) {
      if (!button.hasAttribute("aria-pressed")) {
        button.setAttribute("aria-pressed", "false");
      }

      button.addEventListener("click", () => {
        if (button.disabled || button.classList.contains("is-disabled") || button.classList.contains("is-loading")) {
          return;
        }

        const pressed = button.getAttribute("aria-pressed") === "true";
        const nextState = !pressed;
        button.setAttribute("aria-pressed", String(nextState));
        button.classList.toggle("is-active", nextState);
      });
    }
  });
});
