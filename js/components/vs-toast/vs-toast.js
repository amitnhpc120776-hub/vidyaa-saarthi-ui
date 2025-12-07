(function () {
  const TOAST_SELECTOR = '.vs-toast';
  const ITEM_SELECTOR = '.vs-toast__item';
  const CLOSE_SELECTOR = '.vs-toast__close';
  const DISMISS_EVENT = 'vs-toast:dismiss';

  const getDuration = (toast, item) => {
    const attrValue = item.dataset.vsToastDuration || toast.dataset.vsToastDuration;
    const parsed = Number(attrValue);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 5000;
  };

  const isAutoHideEnabled = (toast, item) => {
    if (toast.classList.contains('vs-toast--persistent')) return false;
    if (item.classList.contains('vs-toast--persistent')) return false;
    if (toast.classList.contains('vs-toast--manual')) return false;
    return toast.classList.contains('vs-toast--auto-hide');
  };

  const dismissToast = (toast, item) => {
    if (item.classList.contains('is-hiding')) return;
    item.classList.remove('is-visible');
    item.classList.add('is-hiding');

    const finalize = () => {
      item.classList.remove('is-hiding');
      item.setAttribute('hidden', 'hidden');
      item.dispatchEvent(new CustomEvent(DISMISS_EVENT, { bubbles: true, detail: { toast, item } }));
    };

    const transitionDuration = parseFloat(
      getComputedStyle(item).transitionDuration || '0'
    );

    if (transitionDuration > 0) {
      const onTransitionEnd = () => {
        item.removeEventListener('transitionend', onTransitionEnd);
        finalize();
      };
      item.addEventListener('transitionend', onTransitionEnd);
    } else {
      finalize();
    }
  };

  const initToastItem = (toast, item) => {
    const closeButton = item.querySelector(CLOSE_SELECTOR);
    const timers = { hide: null };

    const startHideTimer = () => {
      if (!isAutoHideEnabled(toast, item)) return;
      clearTimeout(timers.hide);
      timers.hide = setTimeout(() => dismissToast(toast, item), getDuration(toast, item));
    };

    const pauseHideTimer = () => {
      if (!isAutoHideEnabled(toast, item)) return;
      item.classList.add('is-paused');
      clearTimeout(timers.hide);
    };

    const resumeHideTimer = () => {
      if (!isAutoHideEnabled(toast, item)) return;
      item.classList.remove('is-paused');
      startHideTimer();
    };

    if (closeButton && !toast.classList.contains('vs-toast--no-close')) {
      closeButton.addEventListener('click', () => dismissToast(toast, item));
      closeButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          dismissToast(toast, item);
        }
      });
    }

    item.addEventListener('mouseenter', pauseHideTimer);
    item.addEventListener('mouseleave', resumeHideTimer);
    item.addEventListener('focusin', pauseHideTimer);
    item.addEventListener('focusout', resumeHideTimer);

    requestAnimationFrame(() => {
      item.removeAttribute('hidden');
      item.classList.add('is-visible');
      startHideTimer();
    });
  };

  const initToast = (toast) => {
    if (!toast.hasAttribute('role')) {
      toast.setAttribute('role', 'region');
    }

    toast.querySelectorAll(ITEM_SELECTOR).forEach((item) => {
      if (!item.hasAttribute('role')) {
        item.setAttribute('role', 'status');
      }
      item.setAttribute('aria-atomic', 'true');
      initToastItem(toast, item);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(TOAST_SELECTOR).forEach(initToast);
  });
})();
