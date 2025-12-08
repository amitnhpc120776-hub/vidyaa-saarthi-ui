(function () {
  const initInput = (component) => {
    const control = component.querySelector('.vs-input__control');
    const counter = component.querySelector('.vs-input__counter');

    if (!control) return;

    const updateStateClasses = () => {
      component.classList.toggle('is-disabled', control.disabled);
      component.classList.toggle('is-readonly', control.hasAttribute('readonly'));
    };

    const updateCounter = () => {
      if (!counter) return;
      const max = control.getAttribute('maxlength');
      const length = control.value.length;
      counter.textContent = max ? `${length} / ${max}` : `${length}`;
    };

    control.addEventListener('focus', () => component.classList.add('is-focused'));
    control.addEventListener('blur', () => component.classList.remove('is-focused'));
    control.addEventListener('input', updateCounter);

    updateStateClasses();
    updateCounter();
  };

  document.addEventListener('DOMContentLoaded', () => {
    const components = document.querySelectorAll('.vs-input');
    components.forEach(initInput);
  });
})();
