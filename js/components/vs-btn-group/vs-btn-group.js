document.addEventListener("DOMContentLoaded", () => {
  const groups = document.querySelectorAll(".vs-btn-group");
  const focusableSelector = ".vs-btn:not(.is-disabled):not(:disabled)";

  const moveFocus = (buttons, current, direction) => {
    if (!buttons.length || current < 0) return;
    const nextIndex = (current + direction + buttons.length) % buttons.length;
    buttons[nextIndex].focus();
  };

  groups.forEach((group) => {
    if (!group.hasAttribute("role")) {
      group.setAttribute("role", "group");
    }

    const isVertical = group.classList.contains("vs-btn-group--vertical");
    if (isVertical) {
      group.setAttribute("aria-orientation", "vertical");
    }

    group.addEventListener("keydown", (event) => {
      const isSegmented = group.classList.contains("vs-btn-group--segmented");
      if (!isSegmented) return;

      const key = event.key;
      const buttons = Array.from(group.querySelectorAll(focusableSelector));
      const currentIndex = buttons.indexOf(document.activeElement);

      if (isVertical && (key === "ArrowUp" || key === "ArrowDown")) {
        event.preventDefault();
        moveFocus(buttons, currentIndex, key === "ArrowUp" ? -1 : 1);
      }

      if (!isVertical && (key === "ArrowLeft" || key === "ArrowRight")) {
        event.preventDefault();
        moveFocus(buttons, currentIndex, key === "ArrowLeft" ? -1 : 1);
      }
    });
  });
});
