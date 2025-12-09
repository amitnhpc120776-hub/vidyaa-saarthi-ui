/* ========================================================================
   vs-alerts — JavaScript Behavior
   ======================================================================== */
(function () {
  const instances = new WeakMap();

  function handleDismiss(root) {
    root.classList.add('is-dismissed');
    root.dispatchEvent(
      new CustomEvent('vs-alerts:dismissed', {
        bubbles: true,
        detail: { dismissed: true },
      })
    );
  }

  function initVsAlerts(rootElement) {
    if (!rootElement || instances.has(rootElement)) return;
    const closeButton = rootElement.querySelector('.vs-alerts__close');

    const boundHandler = (event) => {
      event.preventDefault();
      handleDismiss(rootElement);
    };

    if (closeButton) {
      closeButton.addEventListener('click', boundHandler);
    }

    instances.set(rootElement, { closeButton, boundHandler });
  }

  function destroyVsAlerts(rootElement) {
    const instance = instances.get(rootElement);
    if (!instance) return;

    const { closeButton, boundHandler } = instance;
    if (closeButton && boundHandler) {
      closeButton.removeEventListener('click', boundHandler);
    }

    instances.delete(rootElement);
  }

  function autoInit() {
    document.querySelectorAll('.vs-alerts').forEach((alertEl) => {
      initVsAlerts(alertEl);
    });
  }

  document.addEventListener('DOMContentLoaded', autoInit);

  window.initVsAlerts = initVsAlerts;
  window.destroyVsAlerts = destroyVsAlerts;
})();
