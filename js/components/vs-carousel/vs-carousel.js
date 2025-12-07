document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".vs-carousel");

  carousels.forEach((carousel) => initializeCarousel(carousel));
});

function initializeCarousel(carousel) {
  const track = carousel.querySelector(".vs-carousel__track");
  const slides = Array.from(carousel.querySelectorAll(".vs-carousel__slide"));
  const indicators = Array.from(carousel.querySelectorAll(".vs-carousel__indicator"));
  const prevButton = carousel.querySelector(".vs-carousel__button--prev");
  const nextButton = carousel.querySelector(".vs-carousel__button--next");

  if (!track || slides.length === 0) return;

  const isFade = carousel.classList.contains("vs-carousel--fade");
  const isVertical = carousel.classList.contains("vs-carousel--vertical");
  const isLooping = carousel.classList.contains("vs-carousel--loop");
  const isAutoplay = carousel.classList.contains("vs-carousel--auto") && !carousel.classList.contains("vs-carousel--manual-only");
  const pauseOnHover = carousel.classList.contains("vs-carousel--pause-on-hover");

  let currentIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (currentIndex < 0) currentIndex = 0;

  let autoplayTimer = null;
  const interval = Number(carousel.dataset.vsInterval) || 5000;

  function updateSlides(targetIndex) {
    currentIndex = targetIndex;

    slides.forEach((slide, index) => {
      const isActive = index === currentIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      slide.setAttribute("tabindex", isActive ? "0" : "-1");

      if (isFade) {
        slide.toggleAttribute("hidden", !isActive);
      }
    });

    indicators.forEach((indicator, index) => {
      const isActive = index === currentIndex;
      indicator.classList.toggle("is-active", isActive);
      indicator.setAttribute("aria-selected", String(isActive));
    });

    if (!isFade) {
      const offset = -1 * currentIndex * 100;
      const transformValue = isVertical ? `translateY(${offset}%)` : `translateX(${offset}%)`;
      track.style.transform = transformValue;
    }

    updateControlState();
  }

  function updateControlState() {
    if (!prevButton || !nextButton) return;

    if (isLooping) {
      prevButton.disabled = false;
      nextButton.disabled = false;
      return;
    }

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  }

  function goToSlide(targetIndex) {
    if (targetIndex < 0) {
      targetIndex = isLooping ? slides.length - 1 : 0;
    } else if (targetIndex >= slides.length) {
      targetIndex = isLooping ? 0 : slides.length - 1;
    }

    updateSlides(targetIndex);
    restartAutoplay();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoplay() {
    if (!isAutoplay || autoplayTimer) return;
    autoplayTimer = window.setInterval(() => {
      nextSlide();
    }, interval);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function restartAutoplay() {
    if (!isAutoplay) return;
    stopAutoplay();
    startAutoplay();
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => goToSlide(index));
  });

  if (prevButton) {
    prevButton.addEventListener("click", prevSlide);
  }

  if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
  }

  if (pauseOnHover && isAutoplay) {
    carousel.addEventListener("mouseenter", () => {
      carousel.classList.add("is-paused");
      stopAutoplay();
    });
    carousel.addEventListener("mouseleave", () => {
      carousel.classList.remove("is-paused");
      startAutoplay();
    });
  }

  updateSlides(currentIndex);
  startAutoplay();
}
