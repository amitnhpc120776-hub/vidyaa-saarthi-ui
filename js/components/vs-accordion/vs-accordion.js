document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".vs-accordion");

  accordions.forEach((accordion, accordionIndex) => {
    const allowMultiple =
      accordion.classList.contains("vs-accordion--always-open") ||
      accordion.dataset.vsAllowMultiple === "true";

    const entries = [];
    const items = accordion.querySelectorAll(".vs-accordion__item");

    items.forEach((item, itemIndex) => {
      const trigger = item.querySelector(".vs-accordion__trigger");
      const panel = item.querySelector(".vs-accordion__panel");

      if (!trigger || !panel) return;

      const panelId =
        panel.id ||
        `${accordion.id || "vs-accordion"}-panel-${accordionIndex}-${itemIndex}`;

      panel.id = panelId;
      trigger.setAttribute("aria-controls", panelId);

      const isInitiallyOpen = item.classList.contains("is-open");
      trigger.setAttribute("aria-expanded", isInitiallyOpen ? "true" : "false");
      panel.hidden = !isInitiallyOpen;

      entries.push({ item, trigger, panel });
    });

    const setOpenState = (entry, shouldOpen) => {
      entry.item.classList.toggle("is-open", shouldOpen);
      entry.trigger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
      entry.panel.hidden = !shouldOpen;
    };

    const closeSiblings = (activeEntry) => {
      if (allowMultiple) return;

      entries.forEach((entry) => {
        if (entry !== activeEntry) {
          setOpenState(entry, false);
        }
      });
    };

    const normalizeInitialState = () => {
      if (allowMultiple) {
        entries.forEach((entry) => {
          setOpenState(entry, entry.item.classList.contains("is-open"));
        });
        return;
      }

      let firstOpenHandled = false;
      entries.forEach((entry) => {
        const shouldOpen = entry.item.classList.contains("is-open") && !firstOpenHandled;
        setOpenState(entry, shouldOpen);
        if (shouldOpen) {
          firstOpenHandled = true;
        }
      });
    };

    const handleToggle = (entry) => {
      if (entry.trigger.disabled || entry.item.classList.contains("is-disabled")) {
        return;
      }

      const nextState = !entry.item.classList.contains("is-open");

      if (!allowMultiple && nextState) {
        closeSiblings(entry);
      }

      setOpenState(entry, nextState);
    };

    const handleRovingFocus = (currentIndex, direction) => {
      if (entries.length === 0) return;

      let targetIndex = currentIndex;

      if (direction === "next") {
        targetIndex = (currentIndex + 1) % entries.length;
      } else if (direction === "prev") {
        targetIndex = (currentIndex - 1 + entries.length) % entries.length;
      } else if (direction === "first") {
        targetIndex = 0;
      } else if (direction === "last") {
        targetIndex = entries.length - 1;
      }

      entries[targetIndex].trigger.focus();
    };

    normalizeInitialState();

    entries.forEach((entry, index) => {
      entry.trigger.addEventListener("click", () => handleToggle(entry));

      entry.trigger.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "Enter":
          case " ":
            event.preventDefault();
            handleToggle(entry);
            break;
          case "ArrowDown":
            event.preventDefault();
            handleRovingFocus(index, "next");
            break;
          case "ArrowUp":
            event.preventDefault();
            handleRovingFocus(index, "prev");
            break;
          case "Home":
            event.preventDefault();
            handleRovingFocus(index, "first");
            break;
          case "End":
            event.preventDefault();
            handleRovingFocus(index, "last");
            break;
          default:
            break;
        }
      });
    });
  });
});
