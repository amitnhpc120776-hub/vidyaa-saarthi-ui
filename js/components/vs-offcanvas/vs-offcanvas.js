document.addEventListener("DOMContentLoaded", () => {
  const offcanvasControllers = new Map();
  let lockedCount = 0;

  const getBreakpoint = (tokenName, fallback) => {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(tokenName);
    const numeric = parseFloat(raw);
    return Number.isNaN(numeric) ? fallback ?? null : numeric;
  };

  const breakpointTokens = [
    { className: "vs-offcanvas--persistent-sm", token: "--bp-sm", fallback: 360 },
    { className: "vs-offcanvas--persistent-md", token: "--bp-md", fallback: 768 },
    { className: "vs-offcanvas--persistent-lg", token: "--bp-lg", fallback: 1280 },
    { className: "vs-offcanvas--persistent-xl", token: "--bp-xl", fallback: 1600 },
    { className: "vs-offcanvas--persistent-xxl", token: "--bp-xxl", fallback: 1920 },
  ];

  const isPersistentActive = (offcanvas) => {
    for (const { className, token, fallback } of breakpointTokens) {
      if (offcanvas.classList.contains(className)) {
        const bp = getBreakpoint(token, fallback);
        if (bp && window.matchMedia(`(min-width: ${bp}px)`).matches) {
          return true;
        }
      }
    }
    return false;
  };

  const lockScroll = () => {
    lockedCount += 1;
    document.documentElement.classList.add("is-vs-offcanvas-locked");
    document.body.classList.add("is-vs-offcanvas-locked");
  };

  const unlockScroll = () => {
    lockedCount = Math.max(lockedCount - 1, 0);
    if (lockedCount === 0) {
      document.documentElement.classList.remove("is-vs-offcanvas-locked");
      document.body.classList.remove("is-vs-offcanvas-locked");
    }
  };

  const registerOffcanvas = (offcanvas) => {
    const panel = offcanvas.querySelector(".vs-offcanvas__panel");
    const backdrop = offcanvas.querySelector(".vs-offcanvas__backdrop");
    const dismissEls = offcanvas.querySelectorAll("[data-vs-offcanvas-dismiss]");
    const isStaticBackdrop = offcanvas.classList.contains("vs-offcanvas--backdrop-static");
    const disableEscape = offcanvas.classList.contains("vs-offcanvas--no-escape");
    const allowBodyScroll = offcanvas.classList.contains("vs-offcanvas--scrollable");
    const hasBackdrop = !offcanvas.classList.contains("vs-offcanvas--no-backdrop");
    let isScrollLocked = false;

    if (!panel) return;

    panel.setAttribute("tabindex", "-1");

    const controller = {
      open: null,
      close: null,
      trigger: null,
      updatePersistent: null,
    };

    const applyPersistentState = () => {
      const persistent = isPersistentActive(offcanvas);
      offcanvas.classList.toggle("is-persistent", persistent);

      if (persistent) {
        offcanvas.classList.add("is-open");
        offcanvas.removeAttribute("hidden");
        offcanvas.setAttribute("aria-hidden", "false");
        document.removeEventListener("keydown", handleKeydown);
        if (!allowBodyScroll && isScrollLocked) {
          unlockScroll();
          isScrollLocked = false;
        }
      } else if (offcanvas.classList.contains("is-open")) {
        offcanvas.removeAttribute("hidden");
        offcanvas.setAttribute("aria-hidden", "false");
        if (!allowBodyScroll && !isScrollLocked) {
          lockScroll();
          isScrollLocked = true;
        }
      } else {
        offcanvas.setAttribute("aria-hidden", "true");
        offcanvas.setAttribute("hidden", "");
      }
    };

    const closeOffcanvas = () => {
      if (isPersistentActive(offcanvas)) return;

      offcanvas.classList.remove("is-open");
      offcanvas.setAttribute("aria-hidden", "true");
      offcanvas.setAttribute("hidden", "");

      if (!allowBodyScroll && isScrollLocked) {
        unlockScroll();
        isScrollLocked = false;
      }

      document.removeEventListener("keydown", handleKeydown);

      if (controller.trigger) {
        controller.trigger.focus();
      }
    };

    const handleKeydown = (event) => {
      if (event.key === "Escape" && !disableEscape && offcanvas.classList.contains("is-open")) {
        event.preventDefault();
        closeOffcanvas();
      }
    };

    const openOffcanvas = (trigger) => {
      if (isPersistentActive(offcanvas)) return;

      controller.trigger = trigger ?? controller.trigger ?? document.activeElement;
      offcanvas.removeAttribute("hidden");
      offcanvas.setAttribute("aria-hidden", "false");
      offcanvas.classList.add("is-open");

      if (!allowBodyScroll && !isScrollLocked) {
        lockScroll();
        isScrollLocked = true;
      }

      document.addEventListener("keydown", handleKeydown);
      (offcanvas.querySelector("[autofocus]") || panel).focus({ preventScroll: true });
    };

    backdrop?.addEventListener("click", () => {
      if (!isStaticBackdrop) {
        closeOffcanvas();
      }
    });

    offcanvas.addEventListener("mousedown", (event) => {
      if (isPersistentActive(offcanvas)) return;
      const clickedOutside = panel && !panel.contains(event.target);
      if (clickedOutside && hasBackdrop && !isStaticBackdrop && offcanvas.classList.contains("is-open")) {
        closeOffcanvas();
      }
    });

    dismissEls.forEach((el) => {
      el.addEventListener("click", (event) => {
        event.preventDefault();
        closeOffcanvas();
      });
    });

    controller.open = openOffcanvas;
    controller.close = closeOffcanvas;
    controller.updatePersistent = applyPersistentState;

    offcanvasControllers.set(offcanvas, controller);

    applyPersistentState();
    window.addEventListener("resize", applyPersistentState);
  };

  document.querySelectorAll(".vs-offcanvas").forEach(registerOffcanvas);

  document.querySelectorAll("[data-vs-offcanvas-trigger]").forEach((trigger) => {
    const targetId = trigger.getAttribute("data-vs-offcanvas-trigger");
    if (!targetId) return;
    const target = document.getElementById(targetId);
    const controller = target ? offcanvasControllers.get(target) : null;

    if (!controller) return;

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      controller.open(trigger);
    });
  });
});
