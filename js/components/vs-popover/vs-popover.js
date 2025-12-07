(function () {
  "use strict";

  const SELECTORS = {
    root: ".vs-popover",
    trigger: ".vs-popover__trigger",
    panel: ".vs-popover__panel",
    close: ".vs-popover__close",
    action: ".vs-popover__action",
  };

  function initPopover(root) {
    const trigger = root.querySelector(SELECTORS.trigger);
    const panel = root.querySelector(SELECTORS.panel);

    if (!trigger || !panel) {
      return;
    }

    const closeControl = root.querySelector(SELECTORS.close);
    const action = root.querySelector(SELECTORS.action);
    const isPersistent = root.classList.contains("vs-popover--persistent");
    const closeOnBlur = root.classList.contains("vs-popover--dismiss-on-blur");
    const closeOnAction = root.classList.contains("vs-popover--dismiss-on-action");
    const triggerVariant = getTriggerVariant(root);
    let isOpen = root.classList.contains("is-open");
    let hoverTimeout;

    panel.setAttribute("aria-hidden", String(!isOpen));
    trigger.setAttribute("aria-expanded", String(isOpen));

    const open = () => {
      if (isOpen) return;
      isOpen = true;
      root.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
    };

    const close = () => {
      if (!isOpen || isPersistent) return;
      isOpen = false;
      root.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      panel.setAttribute("aria-hidden", "true");
    };

    const toggle = () => {
      if (isOpen) {
        close();
      } else {
        open();
      }
    };

    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        close();
        trigger.focus();
      }
    };

    const handleDocumentClick = (event) => {
      if (!root.contains(event.target)) {
        close();
      }
    };

    const handleBlur = (event) => {
      if (closeOnBlur && !root.contains(event.relatedTarget)) {
        close();
      }
    };

    const handleHoverOpen = () => {
      clearTimeout(hoverTimeout);
      open();
    };

    const handleHoverClose = () => {
      hoverTimeout = window.setTimeout(close, 80);
    };

    const attachTriggerBehavior = () => {
      switch (triggerVariant) {
        case "hover":
          root.addEventListener("mouseenter", handleHoverOpen);
          root.addEventListener("mouseleave", handleHoverClose);
          break;
        case "focus":
          trigger.addEventListener("focus", open);
          trigger.addEventListener("blur", handleBlur);
          break;
        case "manual":
          // Manual variant exposes control via API only.
          break;
        case "click":
        default:
          trigger.addEventListener("click", toggle);
          break;
      }
    };

    const attachGlobalListeners = () => {
      document.addEventListener("keydown", handleKeydown);
      if (closeOnBlur) {
        document.addEventListener("mousedown", handleDocumentClick);
        panel.addEventListener("focusout", handleBlur);
      }
    };

    const attachCloseControls = () => {
      if (closeControl) {
        closeControl.addEventListener("click", close);
      }

      if (closeOnAction && action) {
        action.addEventListener("click", () => {
          close();
          trigger.focus();
        });
      }
    };

    attachTriggerBehavior();
    attachGlobalListeners();
    attachCloseControls();

    root.vsPopover = {
      open,
      close,
      toggle,
      destroy() {
        document.removeEventListener("keydown", handleKeydown);
        document.removeEventListener("mousedown", handleDocumentClick);
        root.removeEventListener("mouseenter", handleHoverOpen);
        root.removeEventListener("mouseleave", handleHoverClose);
        trigger.removeEventListener("focus", open);
        trigger.removeEventListener("blur", handleBlur);
        trigger.removeEventListener("click", toggle);
        if (closeControl) {
          closeControl.removeEventListener("click", close);
        }
        if (action) {
          action.removeEventListener("click", close);
        }
      },
    };
  }

  function getTriggerVariant(root) {
    if (root.classList.contains("vs-popover--hover")) return "hover";
    if (root.classList.contains("vs-popover--focus")) return "focus";
    if (root.classList.contains("vs-popover--manual")) return "manual";
    return "click";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const popovers = document.querySelectorAll(`${SELECTORS.root}[data-vs-popover]`);
    popovers.forEach(initPopover);
  });
})();
