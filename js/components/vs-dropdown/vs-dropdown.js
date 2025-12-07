document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".vs-dropdown");
  const dropdownData = new Map();

  const setExpanded = (dropdown, menu, toggles, isOpen) => {
    dropdown.classList.toggle("is-open", isOpen);
    menu.hidden = !isOpen;
    toggles.forEach((toggle) => toggle.setAttribute("aria-expanded", isOpen ? "true" : "false"));
  };

  dropdowns.forEach((dropdown, dropdownIndex) => {
    const menu = dropdown.querySelector(".vs-dropdown__menu");
    const toggles = dropdown.querySelectorAll("[data-vs-dropdown-toggle]");

    if (!menu || toggles.length === 0) return;

    const menuId =
      menu.id || `vs-dropdown-menu-${dropdownIndex}-${Math.floor(Math.random() * 1000)}`;
    menu.id = menuId;
    toggles.forEach((toggle) => toggle.setAttribute("aria-controls", menuId));

    const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]'));
    const manual = dropdown.classList.contains("vs-dropdown--manual");
    const closesOnSelect =
      !manual && !dropdown.classList.contains("vs-dropdown--no-auto-close");

    const openInitial = dropdown.classList.contains("is-open");
    setExpanded(dropdown, menu, toggles, openInitial);

    const focusMenuItem = (index) => {
      if (!menuItems.length) return;
      const normalizedIndex = ((index % menuItems.length) + menuItems.length) % menuItems.length;
      const target = menuItems[normalizedIndex];
      if (target) target.focus();
    };

    const handleToggle = () => {
      const isCurrentlyOpen = dropdown.classList.contains("is-open");
      setExpanded(dropdown, menu, toggles, !isCurrentlyOpen);
      if (!isCurrentlyOpen && menuItems.length) {
        menuItems[0].focus();
      }
    };

    const handleKeydown = (event) => {
      switch (event.key) {
        case "Enter":
        case " ":
          event.preventDefault();
          handleToggle();
          break;
        case "ArrowDown":
          event.preventDefault();
          setExpanded(dropdown, menu, toggles, true);
          focusMenuItem(0);
          break;
        case "ArrowUp":
          event.preventDefault();
          setExpanded(dropdown, menu, toggles, true);
          focusMenuItem(menuItems.length - 1);
          break;
        case "Escape":
          if (!manual) {
            event.preventDefault();
            setExpanded(dropdown, menu, toggles, false);
            toggles[0].focus();
          }
          break;
        default:
          break;
      }
    };

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        event.preventDefault();
        handleToggle();
      });
      toggle.addEventListener("keydown", handleKeydown);
    });

    menu.addEventListener("click", (event) => {
      const item = event.target.closest('[role="menuitem"]');
      if (item && closesOnSelect) {
        setExpanded(dropdown, menu, toggles, false);
        toggles[0].focus();
      }
    });

    menuItems.forEach((item, index) => {
      item.setAttribute("tabindex", "-1");
      item.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            focusMenuItem(index + 1);
            break;
          case "ArrowUp":
            event.preventDefault();
            focusMenuItem(index - 1);
            break;
          case "Home":
            event.preventDefault();
            focusMenuItem(0);
            break;
          case "End":
            event.preventDefault();
            focusMenuItem(menuItems.length - 1);
            break;
          case "Escape":
            if (!manual) {
              event.preventDefault();
              setExpanded(dropdown, menu, toggles, false);
              toggles[0].focus();
            }
            break;
          default:
            break;
        }
      });
    });

    dropdownData.set(dropdown, {
      menu,
      toggles,
      manual,
    });
  });

  const closeOnOutsideClick = (event) => {
    dropdownData.forEach(({ menu, toggles, manual }, dropdown) => {
      if (manual) return;
      const isOpen = dropdown.classList.contains("is-open");
      if (!isOpen) return;
      if (!dropdown.contains(event.target)) {
        setExpanded(dropdown, menu, toggles, false);
      }
    });
  };

  const closeOnEscape = (event) => {
    if (event.key !== "Escape") return;
    dropdownData.forEach(({ menu, toggles, manual }, dropdown) => {
      if (manual) return;
      const isOpen = dropdown.classList.contains("is-open");
      if (isOpen) {
        setExpanded(dropdown, menu, toggles, false);
        toggles[0].focus();
      }
    });
  };

  document.addEventListener("click", closeOnOutsideClick);
  document.addEventListener("keydown", closeOnEscape);
});
