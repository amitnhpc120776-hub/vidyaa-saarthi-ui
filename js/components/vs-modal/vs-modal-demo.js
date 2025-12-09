(function () {
  function bindModalTriggers() {
    document.querySelectorAll('[data-vs-modal-target]').forEach((trigger) => {
      const targetId = trigger.getAttribute('data-vs-modal-target');
      const modal = document.getElementById(targetId);
      if (!modal) return;
      trigger.addEventListener('click', () => {
        if (window.vsModal && typeof window.vsModal.open === 'function') {
          window.vsModal.open(modal, trigger);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', bindModalTriggers);
})();
