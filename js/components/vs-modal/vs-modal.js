document.addEventListener("DOMContentLoaded", () => {
  const focusableSelectors = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "details",
    "[tabindex]:not([tabindex='-1'])",
  ].join(", ");

  const modalControllers = new Map();

  const trapFocus = (event, modal, dialog) => {
    if (event.key !== "Tab") return;

    const focusable = Array.from(modal.querySelectorAll(focusableSelectors)).filter(
      (el) => el.offsetParent !== null && !el.hasAttribute("disabled")
    );

    if (!focusable.length) {
      event.preventDefault();
      dialog.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey) {
      if (active === first || !modal.contains(active)) {
        event.preventDefault();
        last.focus();
      }
    } else if (active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const registerModal = (modal) => {
    const dialog = modal.querySelector(".vs-modal__dialog");
    const overlay = modal.querySelector(".vs-modal__overlay");
    const dismissEls = modal.querySelectorAll("[data-vs-modal-dismiss]");
    const isStaticBackdrop = modal.classList.contains("vs-modal--backdrop-static");
    const disableEscape = modal.classList.contains("vs-modal--no-escape");

    if (!dialog) return;

    dialog.setAttribute("tabindex", "-1");

    const controller = {
      open: null,
      close: null,
      trigger: null,
    };

    const updateScrollState = () => {
      const body = modal.querySelector(".vs-modal__body");
      if (!body || !modal.classList.contains("vs-modal--scrollable")) return;
      const shouldScroll = body.scrollHeight > body.clientHeight;
      modal.classList.toggle("is-scrollable", shouldScroll);
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.classList.remove("is-closing");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("hidden", "");

      if (controller.trigger) {
        controller.trigger.focus();
      }

      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("resize", updateScrollState);
    };

    const handleKeydown = (event) => {
      if (event.key === "Escape" && !disableEscape && modal.classList.contains("is-open")) {
        event.preventDefault();
        closeModal();
        return;
      }

      trapFocus(event, modal, dialog);
    };

    const openModal = (trigger) => {
      controller.trigger = trigger ?? controller.trigger ?? document.activeElement;
      modal.removeAttribute("hidden");
      modal.setAttribute("aria-hidden", "false");
      modal.classList.add("is-open");

      updateScrollState();
      document.addEventListener("keydown", handleKeydown);
      window.addEventListener("resize", updateScrollState);

      const focusTarget = modal.querySelector(focusableSelectors) || dialog;
      (focusTarget ?? dialog).focus();
    };

    overlay?.addEventListener("click", () => {
      if (!isStaticBackdrop) {
        closeModal();
      }
    });

    modal.addEventListener("mousedown", (event) => {
      const clickedOutside = !dialog.contains(event.target);
      if (clickedOutside && !isStaticBackdrop && modal.classList.contains("is-open")) {
        closeModal();
      }
    });

    dismissEls.forEach((dismissEl) => {
      dismissEl.addEventListener("click", (event) => {
        event.preventDefault();
        closeModal();
      });
    });

    controller.open = openModal;
    controller.close = closeModal;

    modalControllers.set(modal, controller);
  };

  document.querySelectorAll(".vs-modal").forEach(registerModal);

  document.querySelectorAll("[data-vs-modal-trigger]").forEach((trigger) => {
    const targetId = trigger.getAttribute("data-vs-modal-trigger");
    if (!targetId) return;
    const targetModal = document.getElementById(targetId);

    if (!targetModal || !modalControllers.has(targetModal)) return;

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const controller = modalControllers.get(targetModal);
      controller.open(trigger);
    });
  });
});
