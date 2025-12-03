// Carousel initialization and controls
class VSCarousel {
  constructor(carouselSelector) {
    this.carouselElement = document.querySelector(carouselSelector);
    this.carousel = new bootstrap.Carousel(this.carouselElement);
  }

  next() {
    this.carousel.next();
  }

  prev() {
    this.carousel.prev();
  }

  goToSlide(index) {
    this.carousel.to(index);
  }
}

// Example usage:
// const heroCarousel = new VSCarousel('#heroCarousel');
// const testimonialsCarousel = new VSCarousel('#testimonialsCarousel');
