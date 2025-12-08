(function () {
  const dropdownRegistry = new WeakMap();

  function getMenuItems(menu) {
    return Array.from(menu.querySelectorAll('.vs-dropdown__item'));
  }

  function setExpanded(dropdown, expanded) {
    const toggles = dropdown.querySelectorAll('.vs-dropdown__toggle, .vs-dropdown__caret');
    toggles.forEach((btn) => {
      btn.setAttribute('aria-expanded', String(expanded));
    });
    dropdown.classList.toggle('is-open', expanded);
    const menu = dropdown.querySelector('.vs-dropdown__menu');
    if (menu) {
      if (expanded) {
        menu.removeAttribute('hidden');
      } else {
        menu.setAttribute('hidden', 'true');
      }
    }
  }

  function focusFirstItem(menu) {
    const items = getMenuItems(menu).filter((item) => !item.disabled && !item.classList.contains('is-disabled'));
    if (items.length) {
      items[0].focus();
    }
  }

  function handleToggle(event) {
    const dropdown = event.currentTarget.closest('.vs-dropdown');
    const data = dropdownRegistry.get(dropdown);
    if (!data || dropdown.classList.contains('is-disabled')) return;
    data.lastTrigger = event.currentTarget;
    const isOpen = dropdown.classList.contains('is-open');
    if (isOpen) {
      closeDropdown(dropdown);
    } else {
      openDropdown(dropdown, true);
    }
  }

  function handleToggleKeydown(event) {
    if (!['Enter', ' ', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const dropdown = event.currentTarget.closest('.vs-dropdown');
    openDropdown(dropdown, true);
    const menu = dropdown.querySelector('.vs-dropdown__menu');
    if (menu) {
      focusFirstItem(menu);
    }
  }

  function handleMenuKeydown(event) {
    const dropdown = event.currentTarget.closest('.vs-dropdown');
    const menu = dropdown.querySelector('.vs-dropdown__menu');
    const items = getMenuItems(menu).filter((item) => !item.disabled && !item.classList.contains('is-disabled'));
    const currentIndex = items.indexOf(document.activeElement);
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDropdown(dropdown, true);
      return;
    }
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    if (!items.length) return;
    let nextIndex = currentIndex;
    if (event.key === 'ArrowDown') {
      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    } else if (event.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    }
    items[nextIndex].focus();
  }

  function openDropdown(dropdown, setFocus) {
    const data = dropdownRegistry.get(dropdown);
    if (!data || dropdown.classList.contains('is-disabled')) return;
    if (dropdown.classList.contains('is-open')) return;
    setExpanded(dropdown, true);
    document.addEventListener('click', data.onDocumentClick, true);
    document.addEventListener('keydown', data.onDocumentKeydown);
    const menu = dropdown.querySelector('.vs-dropdown__menu');
    if (setFocus && menu) {
      focusFirstItem(menu);
    }
  }

  function closeDropdown(dropdown, restoreFocus) {
    const data = dropdownRegistry.get(dropdown);
    if (!data) return;
    if (!dropdown.classList.contains('is-open')) return;
    setExpanded(dropdown, false);
    document.removeEventListener('click', data.onDocumentClick, true);
    document.removeEventListener('keydown', data.onDocumentKeydown);
    if (restoreFocus && data.lastTrigger) {
      data.lastTrigger.focus();
    }
  }

  function initVsDropdown(rootElement) {
    const dropdown = rootElement;
    if (!dropdown || dropdownRegistry.has(dropdown)) return;
    const menu = dropdown.querySelector('.vs-dropdown__menu');
    const toggles = Array.from(dropdown.querySelectorAll('.vs-dropdown__toggle, .vs-dropdown__caret'));
    if (!menu || !toggles.length) return;

    menu.setAttribute('hidden', 'true');
    menu.setAttribute('role', menu.getAttribute('role') || 'menu');

    const syncItemChecks = () => {
      const checkItems = dropdown.querySelectorAll('.vs-dropdown__item[role="menuitemcheckbox"], .vs-dropdown__item[role="menuitemradio"]');
      checkItems.forEach((item) => {
        const checkbox = item.querySelector('input[type="checkbox"], .vs-checkbox__input');
        const radio = item.querySelector('input[type="radio"], .vs-radio__input');
        if (checkbox) {
          item.setAttribute('aria-checked', String(checkbox.checked));
        }
        if (radio) {
          item.setAttribute('aria-checked', String(radio.checked));
        }
      });
    };

    syncItemChecks();

    const onDocumentClick = (event) => {
      if (!dropdown.contains(event.target)) {
        closeDropdown(dropdown, false);
      }
    };

    const onDocumentKeydown = (event) => {
      if (event.key === 'Escape') {
        closeDropdown(dropdown, true);
      }
    };

    const onMouseEnter = dropdown.classList.contains('vs-dropdown--hover')
      ? () => openDropdown(dropdown, false)
      : null;
    const onMouseLeave = dropdown.classList.contains('vs-dropdown--hover')
      ? () => closeDropdown(dropdown, false)
      : null;

    toggles.forEach((toggle) => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-haspopup', toggle.getAttribute('aria-haspopup') || 'menu');
      toggle.addEventListener('click', handleToggle);
      toggle.addEventListener('keydown', handleToggleKeydown);
    });

    if (onMouseEnter && onMouseLeave) {
      dropdown.addEventListener('mouseenter', onMouseEnter);
      dropdown.addEventListener('mouseleave', onMouseLeave);
    }

    menu.addEventListener('keydown', handleMenuKeydown);
    menu.addEventListener('change', syncItemChecks);

    dropdownRegistry.set(dropdown, {
      onDocumentClick,
      onDocumentKeydown,
      onMouseEnter,
      onMouseLeave,
      lastTrigger: toggles[0],
      syncItemChecks
    });
  }

  function destroyVsDropdown(rootElement) {
    const dropdown = rootElement;
    const data = dropdownRegistry.get(dropdown);
    if (!data) return;
    const toggles = dropdown.querySelectorAll('.vs-dropdown__toggle, .vs-dropdown__caret');
    const menu = dropdown.querySelector('.vs-dropdown__menu');

    toggles.forEach((toggle) => {
      toggle.removeEventListener('click', handleToggle);
      toggle.removeEventListener('keydown', handleToggleKeydown);
      toggle.removeAttribute('aria-expanded');
    });

    dropdown.classList.remove('is-open');
    if (menu) {
      menu.removeAttribute('hidden');
      menu.removeEventListener('keydown', handleMenuKeydown);
      menu.removeEventListener('change', data.syncItemChecks);
    }

    document.removeEventListener('click', data.onDocumentClick, true);
    document.removeEventListener('keydown', data.onDocumentKeydown);

    if (data.onMouseEnter && data.onMouseLeave) {
      dropdown.removeEventListener('mouseenter', data.onMouseEnter);
      dropdown.removeEventListener('mouseleave', data.onMouseLeave);
    }

    dropdownRegistry.delete(dropdown);
  }

  function autoInit() {
    const dropdowns = document.querySelectorAll('.vs-dropdown');
    dropdowns.forEach((dropdown) => initVsDropdown(dropdown));
  }

  document.addEventListener('DOMContentLoaded', autoInit);

  window.initVsDropdown = initVsDropdown;
  window.destroyVsDropdown = destroyVsDropdown;
})();
