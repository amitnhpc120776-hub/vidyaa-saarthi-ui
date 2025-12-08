(function () {
  const initCheckbox = (component) => {
    const input = component.querySelector('.vs-checkbox__input');
    if (!input) return;

    if (component.classList.contains('is-checked')) {
      input.checked = true;
    }

    if (component.classList.contains('is-indeterminate')) {
      input.indeterminate = true;
    }

    if (component.classList.contains('is-disabled')) {
      input.disabled = true;
    }

    const syncState = () => {
      const checked = input.checked;
      const indeterminate = input.indeterminate;
      const disabled = input.disabled;

      component.classList.toggle('is-checked', checked);
      component.classList.toggle('is-indeterminate', indeterminate);
      component.classList.toggle('is-disabled', disabled);

      component.setAttribute('aria-checked', indeterminate ? 'mixed' : String(checked));
      component.setAttribute('aria-disabled', disabled ? 'true' : 'false');
    };

    const toggle = () => {
      if (input.disabled) return;
      if (input.indeterminate) {
        input.indeterminate = false;
      }
      input.checked = !input.checked;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      syncState();
    };

    component.addEventListener('click', (event) => {
      if (event.target === input) return;
      event.preventDefault();
      toggle();
    });

    component.addEventListener('keydown', (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        toggle();
      }
    });

    input.addEventListener('change', syncState);
    input.addEventListener('focus', () => component.classList.add('is-focus-visible'));
    input.addEventListener('blur', () => component.classList.remove('is-focus-visible'));

    syncState();
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.vs-checkbox').forEach(initCheckbox);
  });
})();
