(function () {
  const vsCheckboxRegistry = new WeakMap();

  function syncVsCheckboxState(root, input) {
    if (root.classList.contains('is-checked')) {
      input.checked = true;
    }
    if (root.classList.contains('is-disabled')) {
      input.disabled = true;
    }
    if (root.classList.contains('is-invalid')) {
      input.setAttribute('aria-invalid', 'true');
    }

    const indeterminateFlag = input.dataset.vsIndeterminate === 'true' || root.classList.contains('is-indeterminate');
    input.indeterminate = indeterminateFlag;

    root.classList.toggle('is-disabled', input.disabled);
    root.classList.toggle('is-invalid', input.getAttribute('aria-invalid') === 'true');
    root.classList.toggle('is-checked', input.checked);
    root.classList.toggle('is-indeterminate', input.indeterminate);

    if (input.indeterminate) {
      input.setAttribute('aria-checked', 'mixed');
    } else {
      input.removeAttribute('aria-checked');
    }
  }

  function initVsCheckbox(rootElement) {
    if (!rootElement || vsCheckboxRegistry.has(rootElement)) return;

    const input = rootElement.querySelector('.vs-checkbox__input');
    if (!input) return;

    const handleChange = () => {
      if (input.indeterminate && input.dataset.vsIndeterminate !== 'true') {
        input.dataset.vsIndeterminate = 'false';
      }
      syncVsCheckboxState(rootElement, input);
    };

    const handleFocus = () => rootElement.classList.add('is-focused');
    const handleBlur = () => rootElement.classList.remove('is-focused');

    input.addEventListener('change', handleChange);
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    const observer = new MutationObserver(() => syncVsCheckboxState(rootElement, input));
    observer.observe(input, {
      attributes: true,
      attributeFilter: ['aria-invalid', 'disabled', 'data-vs-indeterminate', 'checked']
    });

    syncVsCheckboxState(rootElement, input);

    vsCheckboxRegistry.set(rootElement, {
      input,
      handlers: { handleChange, handleFocus, handleBlur },
      observer
    });
  }

  function destroyVsCheckbox(rootElement) {
    const record = vsCheckboxRegistry.get(rootElement);
    if (!record) return;

    const { input, handlers, observer } = record;
    input.removeEventListener('change', handlers.handleChange);
    input.removeEventListener('focus', handlers.handleFocus);
    input.removeEventListener('blur', handlers.handleBlur);
    observer.disconnect();

    vsCheckboxRegistry.delete(rootElement);
  }

  function autoInitVsCheckbox() {
    document.querySelectorAll('.vs-checkbox').forEach((checkbox) => initVsCheckbox(checkbox));
  }

  window.initVsCheckbox = initVsCheckbox;
  window.destroyVsCheckbox = destroyVsCheckbox;

  document.addEventListener('DOMContentLoaded', autoInitVsCheckbox);
})();
