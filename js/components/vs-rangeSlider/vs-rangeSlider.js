(function () {
  const sliders = document.querySelectorAll('.vs-rangeSlider');

  sliders.forEach((slider) => {
    const input = slider.querySelector('.vs-rangeSlider__input');
    if (!input) return;

    const currentValue = slider.querySelector('.vs-rangeSlider__value--current');
    const minValue = slider.querySelector('.vs-rangeSlider__value--min');
    const maxValue = slider.querySelector('.vs-rangeSlider__value--max');

    const syncValues = () => {
      const min = Number(input.min || 0);
      const max = Number(input.max || 100);
      const value = Number(input.value || 0);
      const range = max - min || 1;
      const percent = Math.min(100, Math.max(0, ((value - min) / range) * 100));

      slider.style.setProperty('--vs-rangeSlider-fill', `${percent}%`);
      input.setAttribute('aria-valuenow', String(value));

      if (currentValue) currentValue.textContent = input.value;
      if (minValue) minValue.textContent = input.min || '0';
      if (maxValue) maxValue.textContent = input.max || '100';
    };

    syncValues();
    input.addEventListener('input', syncValues);
    input.addEventListener('change', syncValues);
  });
})();
