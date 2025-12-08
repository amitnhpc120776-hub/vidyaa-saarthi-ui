(function () {
  const vsSwitchRegistry = new WeakMap();

  function syncVsSwitchState(root, input) {
    if (root.classList.contains('is-checked')) {
      input.checked = true;
    }
    if (root.classList.contains('is-disabled')) {
      input.disabled = true;
    }

    root.classList.toggle('is-disabled', input.disabled);
    root.classList.toggle('is-checked', input.checked);

    if (input.getAttribute('role') === 'switch') {
      input.setAttribute('aria-checked', input.checked ? 'true' : 'false');
    }
  }

  function initVsSwitch(rootElement) {
    if (!rootElement || vsSwitchRegistry.has(rootElement)) return;

    const input = rootElement.querySelector('.vs-switch__input');
    if (!input) return;

    const handleChange = () => syncVsSwitchState(rootElement, input);
    const handleFocus = () => rootElement.classList.add('is-focused');
    const handleBlur = () => rootElement.classList.remove('is-focused');

    input.addEventListener('change', handleChange);
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    const observer = new MutationObserver(() => syncVsSwitchState(rootElement, input));
    observer.observe(input, {
      attributes: true,
      attributeFilter: ['checked', 'disabled', 'aria-checked']
    });

    syncVsSwitchState(rootElement, input);

    vsSwitchRegistry.set(rootElement, {
      input,
      handlers: { handleChange, handleFocus, handleBlur },
      observer
    });
  }

  function destroyVsSwitch(rootElement) {
    const record = vsSwitchRegistry.get(rootElement);
    if (!record) return;

    const { input, handlers, observer } = record;
    input.removeEventListener('change', handlers.handleChange);
    input.removeEventListener('focus', handlers.handleFocus);
    input.removeEventListener('blur', handlers.handleBlur);
    observer.disconnect();

    vsSwitchRegistry.delete(rootElement);
  }

  function autoInitVsSwitch() {
    document.querySelectorAll('.vs-switch').forEach((root) => initVsSwitch(root));
  }

  window.initVsSwitch = initVsSwitch;
  window.destroyVsSwitch = destroyVsSwitch;

  document.addEventListener('DOMContentLoaded', autoInitVsSwitch);
})();
