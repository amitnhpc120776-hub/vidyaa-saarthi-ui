(function () {
  const modalRegistry = new WeakMap();
  const focusableSelectors = [
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(',');

  function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(focusableSelectors)).filter(
      (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true'
    );
  }

  function trapFocus(event, modal) {
    if (event.key !== 'Tab') return;
    const data = modalRegistry.get(modal);
    if (!data) return;
    const focusables = getFocusableElements(data.dialog);
    if (!focusables.length) {
      event.preventDefault();
      data.dialog.focus();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function focusInitialElement(modal) {
    const data = modalRegistry.get(modal);
    if (!data) return;
    const focusables = getFocusableElements(data.dialog);
    if (focusables.length) {
      focusables[0].focus();
    } else {
      data.dialog.setAttribute('tabindex', '-1');
      data.dialog.focus();
    }
  }

  function getTransitionDuration(modal) {
    const durationVar = getComputedStyle(modal).getPropertyValue('--motion-duration-medium');
    const numeric = parseFloat(durationVar);
    if (Number.isNaN(numeric)) return 200;
    return durationVar.includes('ms') ? numeric : numeric * 1000;
  }

  function openVsModal(modal, triggerElement) {
    const data = modalRegistry.get(modal);
    if (!data || modal.classList.contains('is-open')) return;
    data.lastFocused = triggerElement || document.activeElement;
    modal.classList.remove('is-closing');
    modal.classList.add('is-open');
    data.dialog.setAttribute('aria-hidden', 'false');
    document.addEventListener('keydown', data.onKeydown);
    document.addEventListener('focusin', data.onFocusin);
    data.previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      focusInitialElement(modal);
    });
  }

  function closeVsModal(modal, restoreFocus = true) {
    const data = modalRegistry.get(modal);
    if (!data || !modal.classList.contains('is-open')) return;
    modal.classList.add('is-closing');
    modal.classList.remove('is-open');
    data.dialog.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', data.onKeydown);
    document.removeEventListener('focusin', data.onFocusin);
    document.documentElement.style.overflow = data.previousOverflow || '';
    const timeout = getTransitionDuration(modal);
    window.setTimeout(() => {
      modal.classList.remove('is-closing');
      if (restoreFocus && data.lastFocused instanceof HTMLElement) {
        data.lastFocused.focus();
      }
    }, timeout);
  }

  function initVsModal(rootElement) {
    const modal = rootElement;
    if (!modal || modalRegistry.has(modal)) return;
    const overlay = modal.querySelector('.vs-modal__overlay');
    const dialog = modal.querySelector('.vs-modal__dialog');
    const closeControl = modal.querySelector('[data-vs-modal="close"]');
    if (!overlay || !dialog) return;

    const cancelControl = modal.querySelector('[data-vs-modal="cancel"]');
    const confirmControl = modal.querySelector('[data-vs-modal="confirm"]');

    const onOverlayClick = (event) => {
      event.preventDefault();
      closeVsModal(modal, true);
    };

    const onCloseClick = (event) => {
      event.preventDefault();
      closeVsModal(modal, true);
    };

    const onCancelClick = (event) => {
      modal.dispatchEvent(new CustomEvent('vs-modal:cancel', { bubbles: true }));
      closeVsModal(modal, true);
      if (event) event.stopPropagation();
    };

    const onConfirmClick = (event) => {
      modal.dispatchEvent(new CustomEvent('vs-modal:confirm', { bubbles: true }));
      closeVsModal(modal, true);
      if (event) event.stopPropagation();
    };

    const onKeydown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeVsModal(modal, true);
        return;
      }
      trapFocus(event, modal);
    };

    const onFocusin = (event) => {
      if (!modal.classList.contains('is-open')) return;
      if (!modal.contains(event.target)) {
        focusInitialElement(modal);
      }
    };

    overlay.addEventListener('click', onOverlayClick);
    if (closeControl) closeControl.addEventListener('click', onCloseClick);
    if (cancelControl) cancelControl.addEventListener('click', onCancelClick);
    if (confirmControl) confirmControl.addEventListener('click', onConfirmClick);

    modalRegistry.set(modal, {
      overlay,
      dialog,
      onOverlayClick,
      onCloseClick,
      onCancelClick,
      onConfirmClick,
      onKeydown,
      onFocusin,
      lastFocused: null,
      previousOverflow: '',
    });

    modal.setAttribute('aria-hidden', modal.classList.contains('is-open') ? 'false' : 'true');

    if (modal.classList.contains('is-open')) {
      document.addEventListener('keydown', onKeydown);
      document.addEventListener('focusin', onFocusin);
      const data = modalRegistry.get(modal);
      data.previousOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        focusInitialElement(modal);
      });
    }
  }

  function destroyVsModal(rootElement) {
    const modal = rootElement;
    const data = modalRegistry.get(modal);
    if (!data) return;

    data.overlay.removeEventListener('click', data.onOverlayClick);
    const closeControl = modal.querySelector('[data-vs-modal="close"]');
    const cancelControl = modal.querySelector('[data-vs-modal="cancel"]');
    const confirmControl = modal.querySelector('[data-vs-modal="confirm"]');
    if (closeControl) closeControl.removeEventListener('click', data.onCloseClick);
    if (cancelControl) cancelControl.removeEventListener('click', data.onCancelClick);
    if (confirmControl) confirmControl.removeEventListener('click', data.onConfirmClick);
    document.removeEventListener('keydown', data.onKeydown);
    document.removeEventListener('focusin', data.onFocusin);
    modalRegistry.delete(modal);
  }

  function autoInit() {
    document.querySelectorAll('.vs-modal').forEach((modal) => initVsModal(modal));
  }

  window.initVsModal = initVsModal;
  window.destroyVsModal = destroyVsModal;
  window.vsModal = {
    open: openVsModal,
    close: closeVsModal,
  };

  document.addEventListener('DOMContentLoaded', autoInit);
})();
