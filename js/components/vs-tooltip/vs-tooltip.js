(function () {
  const COMPONENT_SELECTOR = '.vs-tooltip';

  const generateId = (index) => `vs-tooltip-${index + 1}`;

  const setupAria = (component, trigger, panel, index) => {
    const panelId = panel.id || generateId(index);
    panel.id = panelId;
    if (!trigger.getAttribute('aria-describedby')) {
      trigger.setAttribute('aria-describedby', panelId);
    }
    panel.setAttribute('aria-hidden', component.classList.contains('is-visible') ? 'false' : 'true');
  };

  const initTooltip = (component, index) => {
    const trigger = component.querySelector('.vs-tooltip__trigger');
    const panel = component.querySelector('.vs-tooltip__panel');
    if (!trigger || !panel) return null;

    setupAria(component, trigger, panel, index);

    let isVisible = component.classList.contains('is-visible');
    let destroyed = false;

    const isHover = component.classList.contains('vs-tooltip--hover');
    const isFocus = component.classList.contains('vs-tooltip--focus');
    const isClick = component.classList.contains('vs-tooltip--click');
    const isManual = component.classList.contains('vs-tooltip--manual');
    const dismissOnBlur = component.classList.contains('vs-tooltip--dismiss-on-blur');
    const persistent = component.classList.contains('vs-tooltip--persistent');

    const setVisibility = (visible) => {
      if (destroyed || component.classList.contains('is-disabled')) return;
      isVisible = visible;
      component.classList.toggle('is-visible', visible);
      component.classList.toggle('is-hidden', !visible);
      panel.setAttribute('aria-hidden', visible ? 'false' : 'true');
    };

    const show = () => setVisibility(true);
    const hide = (force = false) => {
      if (persistent && !force) return;
      setVisibility(false);
    };
    const toggle = () => (isVisible ? hide(true) : show());

    const onMouseEnter = () => show();
    const onMouseLeave = () => hide();
    const onFocus = () => show();
    const onBlur = () => hide(dismissOnBlur || !persistent);
    const onClick = (event) => {
      event.preventDefault();
      toggle();
    };

    const onDocumentClick = (event) => {
      if (!component.contains(event.target)) {
        hide();
      }
    };

    const onKeydown = (event) => {
      if (event.key === 'Escape' && isVisible) {
        hide(true);
      }
    };

    if (isHover) {
      trigger.addEventListener('mouseenter', onMouseEnter);
      trigger.addEventListener('mouseleave', onMouseLeave);
      component.addEventListener('mouseleave', onMouseLeave);
    }

    if (isFocus) {
      trigger.addEventListener('focus', onFocus);
      trigger.addEventListener('blur', onBlur);
    }

    if (isClick) {
      trigger.addEventListener('click', onClick);
      document.addEventListener('click', onDocumentClick);
    }

    if (!isManual) {
      document.addEventListener('keydown', onKeydown);
    }

    const destroy = () => {
      destroyed = true;
      hide(true);
      trigger.removeEventListener('mouseenter', onMouseEnter);
      trigger.removeEventListener('mouseleave', onMouseLeave);
      component.removeEventListener('mouseleave', onMouseLeave);
      trigger.removeEventListener('focus', onFocus);
      trigger.removeEventListener('blur', onBlur);
      trigger.removeEventListener('click', onClick);
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onKeydown);
    };

    component.tooltip = { show, hide, toggle, destroy };

    return { show, hide, toggle, destroy };
  };

  document.addEventListener('DOMContentLoaded', () => {
    const components = document.querySelectorAll(COMPONENT_SELECTOR);
    components.forEach((component, index) => {
      initTooltip(component, index);
    });
  });
})();
