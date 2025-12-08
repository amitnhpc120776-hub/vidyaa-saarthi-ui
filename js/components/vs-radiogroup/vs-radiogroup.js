(function () {
  const vsRadiogroupRegistry = new WeakMap();
  let vsRadiogroupId = 0;

  function ensureId(element, prefix) {
    if (!element.id) {
      vsRadiogroupId += 1;
      element.id = `${prefix}-${vsRadiogroupId}`;
    }
    return element.id;
  }

  function syncVsRadiogroupState(rootElement) {
    const radios = Array.from(rootElement.querySelectorAll('.vs-radio__input'));
    const disabledFlag = rootElement.hasAttribute('disabled') || rootElement.classList.contains('is-disabled');
    const invalidFromGroup = rootElement.classList.contains('is-invalid');

    if (disabledFlag) {
      radios.forEach((input) => {
        input.dataset.vsRadiogroupDisabled = 'true';
        input.disabled = true;
      });
    } else {
      radios.forEach((input) => {
        if (input.dataset.vsRadiogroupDisabled === 'true') {
          input.disabled = false;
          delete input.dataset.vsRadiogroupDisabled;
        }
      });
    }

    const invalidFromInputs = radios.some((input) => input.getAttribute('aria-invalid') === 'true');
    const disabledFromInputs = radios.every((input) => input.disabled);

    rootElement.classList.toggle('is-disabled', disabledFlag || disabledFromInputs);
    rootElement.classList.toggle('is-invalid', invalidFromGroup || invalidFromInputs);
  }

  function initVsRadiogroup(rootElement) {
    if (!rootElement || vsRadiogroupRegistry.has(rootElement)) return;

    const options = Array.from(rootElement.querySelectorAll('.vs-radio__input'));
    if (!options.length) return;

    const description = rootElement.querySelector('.vs-radiogroup__description');
    const message = rootElement.querySelector('.vs-radiogroup__message');
    const describedBy = [];

    if (description) {
      describedBy.push(ensureId(description, 'vs-radiogroup-desc'));
    }

    if (message) {
      describedBy.push(ensureId(message, 'vs-radiogroup-message'));
      message.setAttribute('role', message.getAttribute('role') || 'status');
    }

    if (describedBy.length) {
      rootElement.setAttribute('aria-describedby', describedBy.join(' '));
    }

    rootElement.setAttribute('role', rootElement.getAttribute('role') || 'radiogroup');

    const handleChange = () => {
      rootElement.classList.remove('is-invalid');
      syncVsRadiogroupState(rootElement);
    };

    const handleFocus = () => rootElement.classList.add('is-focused');
    const handleBlur = () => rootElement.classList.remove('is-focused');

    options.forEach((input) => {
      input.addEventListener('change', handleChange);
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });

    const observer = new MutationObserver(() => syncVsRadiogroupState(rootElement));
    options.forEach((input) => {
      observer.observe(input, {
        attributes: true,
        attributeFilter: ['disabled', 'aria-invalid']
      });
    });

    syncVsRadiogroupState(rootElement);

    vsRadiogroupRegistry.set(rootElement, {
      options,
      handlers: { handleChange, handleFocus, handleBlur },
      observer
    });
  }

  function destroyVsRadiogroup(rootElement) {
    const record = vsRadiogroupRegistry.get(rootElement);
    if (!record) return;

    const { options, handlers, observer } = record;

    options.forEach((input) => {
      input.removeEventListener('change', handlers.handleChange);
      input.removeEventListener('focus', handlers.handleFocus);
      input.removeEventListener('blur', handlers.handleBlur);
    });

    observer.disconnect();
    vsRadiogroupRegistry.delete(rootElement);
  }

  function autoInitVsRadiogroup() {
    document.querySelectorAll('.vs-radiogroup').forEach((group) => initVsRadiogroup(group));
  }

  window.initVsRadiogroup = initVsRadiogroup;
  window.destroyVsRadiogroup = destroyVsRadiogroup;

  document.addEventListener('DOMContentLoaded', autoInitVsRadiogroup);
})();
