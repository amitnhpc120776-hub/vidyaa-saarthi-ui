document.addEventListener('DOMContentLoaded', () => {
  const dismissible = document.getElementById('dismissible-alert');
  const resetBtn = document.getElementById('reset-alert');

  if (dismissible && resetBtn) {
    resetBtn.addEventListener('click', () => {
      dismissible.classList.remove('is-dismissed');
      initVsAlerts(dismissible);
    });
  }
});
