export const slider = () => {
  const slideList = document.querySelector(`.slider-section__slides`);
  const slides = slideList.querySelectorAll(`.slider-section__slide`);
  const mainSlide = document.querySelector(`.slider-section__main-image`);

  const nextButton = document.getElementById(`next`);

  let currentSlide = 0;

  const nextSlide = function () {
    goToSlide(currentSlide + 1);
  };

  const goToSlide = function (n) {
    slides[currentSlide].className = `slider-section__slide`;
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = `slider-section__slide slider-section__slide--showing`;

    mainSlide.src = slides[currentSlide].querySelector(`.slider-section__image`).src;
    mainSlide.srcset = slides[currentSlide].querySelector(`.slider-section__image`).srcset;
  };

  nextButton.addEventListener(`click`, function () {
    nextSlide();
  });

  slideList.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `IMG`) {
      slides[currentSlide].className = `slider-section__slide`;
      currentSlide = evt.target.dataset.slide;
      slides[currentSlide].className = `slider-section__slide slider-section__slide--showing`;
      mainSlide.src = evt.target.src;
      mainSlide.srcset = evt.target.srcset;
    }
  });

};
