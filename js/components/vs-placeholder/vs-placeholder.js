document.addEventListener("DOMContentLoaded", () => {
  const placeholders = document.querySelectorAll(".vs-placeholder");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const applyMotionPreference = () => {
    placeholders.forEach((placeholder) => {
      const forceStatic = placeholder.dataset.placeholderStatic === "true";
      if (motionQuery.matches || forceStatic) {
        placeholder.classList.add("is-static");
      } else {
        placeholder.classList.remove("is-static");
      }
    });
  };

  const applyAccessibilityAttributes = () => {
    placeholders.forEach((placeholder) => {
      const items = placeholder.querySelectorAll(".vs-placeholder__item");
      items.forEach((item) => {
        item.setAttribute("aria-hidden", "true");
        item.setAttribute("role", "presentation");
      });
    });
  };

  applyMotionPreference();
  applyAccessibilityAttributes();
  motionQuery.addEventListener("change", applyMotionPreference);
});
