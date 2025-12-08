(function () {
  const CLOSE_SELECTOR = '.vs-close';
  const DISMISS_EVENT = 'vs-close:dismiss';
  const CLICK_EVENT = 'vs-close:click';
  const DEFAULT_LABEL = 'Close';

  const ensureAriaLabel = (button) => {
    if (!button.getAttribute('aria-label')) {
      button.setAttribute('aria-label', DEFAULT_LABEL);
    }
  };

  const resolveTarget = (button) => {
    const selector = button.dataset.vsCloseTarget;

    if (selector) {
      const scopedTarget = button.closest(selector);
      if (scopedTarget) return scopedTarget;

      const globalTarget = document.querySelector(selector);
      if (globalTarget) return globalTarget;
    }

    if (button.classList.contains('vs-close--dismiss-parent')) {
      return button.closest('[data-vs-closable]') || button.parentElement;
    }

    return null;
  };

  const dismiss = (button) => {
    const target = resolveTarget(button);
    if (!target) return;

    target.dispatchEvent(
      new CustomEvent(DISMISS_EVENT, {
        bubbles: true,
        detail: { trigger: button, target },
      })
    );

    if (typeof target.remove === 'function') {
      target.remove();
    } else {
      target.classList.add('is-hidden');
    }
  };

  const handleClick = (event) => {
    const button = event.target.closest(CLOSE_SELECTOR);
    if (!button) return;

    ensureAriaLabel(button);

    button.dispatchEvent(
      new CustomEvent(CLICK_EVENT, {
        bubbles: true,
        detail: { trigger: button },
      })
    );

    if (button.classList.contains('vs-close--no-dismiss')) return;

    const target = resolveTarget(button);
    if (!target) return;

    event.preventDefault();
    dismiss(button);
  };

  const init = () => {
    document.querySelectorAll(CLOSE_SELECTOR).forEach(ensureAriaLabel);
    document.addEventListener('click', handleClick);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
