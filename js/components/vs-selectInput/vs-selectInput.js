/* ==========================================================================
   vs-selectInput — Component Logic
   ========================================================================= */

const vsSelectInputRegistry = new WeakMap();

function getOptionValue(option) {
  return option.dataset.value || option.textContent.trim();
}

function getOptionLabel(option) {
  const label = option.querySelector('.vs-selectInput__option-label');
  return (label ? label.textContent : option.textContent).trim();
}

function renderSelections(state) {
  const { valueEl, placeholder, selected, multiple } = state;
  if (!valueEl) return;

  const removableNodes = valueEl.querySelectorAll('[data-vs-selectinput-value]');
  removableNodes.forEach((node) => node.remove());

  if (!selected.size) {
    if (placeholder) placeholder.hidden = false;
    return;
  }

  if (placeholder) placeholder.hidden = true;

  if (multiple) {
    selected.forEach((label) => {
      const badge = document.createElement('span');
      badge.className = 'vs-badge';
      badge.textContent = label;
      badge.setAttribute('data-vs-selectinput-value', '');
      valueEl.appendChild(badge);
    });
    return;
  }

  const text = document.createElement('span');
  text.textContent = [...selected.values()][0];
  text.setAttribute('data-vs-selectinput-value', '');
  valueEl.appendChild(text);
}

function closeMenu(state) {
  const { root, control, menu } = state;
  root.classList.remove('is-open');
  if (control) {
    control.setAttribute('aria-expanded', 'false');
  }
  if (menu) {
    menu.setAttribute('aria-hidden', 'true');
  }
}

function openMenu(state) {
  const { root, control, menu } = state;
  if (root.classList.contains('is-disabled')) return;
  root.classList.add('is-open');
  if (control) {
    control.setAttribute('aria-expanded', 'true');
  }
  if (menu) {
    menu.setAttribute('aria-hidden', 'false');
  }
}

function toggleMenu(state) {
  if (state.root.classList.contains('is-open')) {
    closeMenu(state);
  } else {
    openMenu(state);
  }
}

function updateSelectionState(state, option, shouldSelect) {
  const value = getOptionValue(option);
  const label = getOptionLabel(option);

  if (state.multiple) {
    if (shouldSelect) {
      state.selected.set(value, label);
    } else {
      state.selected.delete(value);
    }
    option.setAttribute('aria-selected', shouldSelect ? 'true' : 'false');
    return;
  }

  state.options.forEach((opt) => {
    opt.setAttribute('aria-selected', opt === option ? 'true' : 'false');
  });
  state.selected.clear();
  if (shouldSelect) {
    state.selected.set(value, label);
  }
}

function selectOption(state, option) {
  if (!option || state.root.classList.contains('is-disabled')) return;
  const isSelected = option.getAttribute('aria-selected') === 'true';
  updateSelectionState(state, option, state.multiple ? !isSelected : true);
  renderSelections(state);
  if (!state.multiple) {
    closeMenu(state);
    if (state.control) {
      state.control.focus();
    }
  }
}

function focusOption(options, currentIndex, direction) {
  const nextIndex = Math.max(0, Math.min(options.length - 1, currentIndex + direction));
  const next = options[nextIndex];
  if (next) {
    next.focus();
  }
}

function initVsSelectInput(rootElement) {
  if (!rootElement || vsSelectInputRegistry.has(rootElement)) return;

  const control = rootElement.querySelector('.vs-selectInput__control');
  const menu = rootElement.querySelector('.vs-selectInput__menu');
  const valueEl = rootElement.querySelector('.vs-selectInput__value');
  const placeholder = rootElement.querySelector('.vs-selectInput__placeholder');
  const options = Array.from(rootElement.querySelectorAll('.vs-selectInput__option'));
  const multiple = rootElement.classList.contains('vs-selectInput--multiple');

  const state = {
    root: rootElement,
    control,
    menu,
    valueEl,
    placeholder,
    options,
    multiple,
    selected: new Map(),
    listeners: [],
  };

  const initiallyOpen = rootElement.classList.contains('is-open');
  if (control) {
    control.setAttribute('aria-expanded', initiallyOpen ? 'true' : 'false');
  }
  if (menu) {
    menu.setAttribute('aria-hidden', initiallyOpen ? 'false' : 'true');
  }

  options.forEach((option) => {
    option.tabIndex = -1;
    const preselected = option.getAttribute('aria-selected') === 'true';
    if (preselected) {
      state.selected.set(getOptionValue(option), getOptionLabel(option));
    }
  });

  renderSelections(state);

  const handleToggle = (event) => {
    event.preventDefault();
    toggleMenu(state);
  };

  const handleControlKeydown = (event) => {
    if (['Enter', ' ', 'Spacebar'].includes(event.key)) {
      event.preventDefault();
      toggleMenu(state);
      if (state.options.length) {
        state.options[0].focus();
      }
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openMenu(state);
      if (state.options.length) {
        state.options[0].focus();
      }
    }
    if (event.key === 'Escape') {
      closeMenu(state);
    }
  };

  const handleOptionClick = (event) => {
    const option = event.currentTarget;
    selectOption(state, option);
  };

  const handleOptionKeydown = (event) => {
    const option = event.currentTarget;
    const index = state.options.indexOf(option);
    if (['Enter', ' ', 'Spacebar'].includes(event.key)) {
      event.preventDefault();
      selectOption(state, option);
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusOption(state.options, index, 1);
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusOption(state.options, index, -1);
    }
    if (event.key === 'Escape') {
      closeMenu(state);
      if (state.control) {
        state.control.focus();
      }
    }
  };

  const handleDocumentClick = (event) => {
    if (!rootElement.contains(event.target)) {
      closeMenu(state);
    }
  };

  const handleFocusIn = () => {
    rootElement.classList.add('is-focus');
  };

  const handleFocusOut = (event) => {
    if (!rootElement.contains(event.relatedTarget)) {
      rootElement.classList.remove('is-focus');
      closeMenu(state);
    }
  };

  if (control) {
    control.addEventListener('click', handleToggle);
    control.addEventListener('keydown', handleControlKeydown);
    state.listeners.push(['click', control, handleToggle]);
    state.listeners.push(['keydown', control, handleControlKeydown]);
  }

  options.forEach((option) => {
    option.addEventListener('click', handleOptionClick);
    option.addEventListener('keydown', handleOptionKeydown);
    state.listeners.push(['click', option, handleOptionClick]);
    state.listeners.push(['keydown', option, handleOptionKeydown]);
  });

  rootElement.addEventListener('focusin', handleFocusIn);
  rootElement.addEventListener('focusout', handleFocusOut);
  state.listeners.push(['focusin', rootElement, handleFocusIn]);
  state.listeners.push(['focusout', rootElement, handleFocusOut]);

  document.addEventListener('click', handleDocumentClick);
  state.listeners.push(['click', document, handleDocumentClick]);

  vsSelectInputRegistry.set(rootElement, state);
}

function destroyVsSelectInput(rootElement) {
  const state = vsSelectInputRegistry.get(rootElement);
  if (!state) return;
  state.listeners.forEach(([event, target, handler]) => {
    target.removeEventListener(event, handler);
  });
  closeMenu(state);
  rootElement.classList.remove('is-focus');
  vsSelectInputRegistry.delete(rootElement);
}

document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.vs-selectInput');
  selects.forEach((select) => initVsSelectInput(select));
});

export { initVsSelectInput, destroyVsSelectInput };
