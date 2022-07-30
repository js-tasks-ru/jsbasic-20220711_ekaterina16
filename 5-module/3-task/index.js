function initCarousel() {
  let buttonRight = document.querySelector('[class="carousel__arrow carousel__arrow_right"]');
  let buttonLeft = document.querySelector('[class="carousel__arrow carousel__arrow_left"]');
  let images = document.querySelectorAll(`[class="carousel__slide"]`);
  let image = document.querySelector(`[class="carousel__inner"]`);
  let imageWidth = image.offsetWidth;

  let sliderIndex = 0;
  let maxIndex = images.length - 1;
  buttonLeft.style.display = 'none';

  buttonRight.onclick = () => {
    if (sliderIndex !== maxIndex) {
      sliderIndex++;
    }

    buttonLeft.style.display = '';

    if (sliderIndex === maxIndex) {
      buttonRight.style.display = 'none';
    }

    image.style.transform = `translateX(${+sliderIndex * -imageWidth}px)`;
  };

  buttonLeft.onclick = () => {
    if (sliderIndex > 0) {
      sliderIndex--;
    }

    if (sliderIndex === 0) {
      buttonLeft.style.display = 'none';
    }

    image.style.transform = `translateX(${+sliderIndex * -imageWidth}px)`;
  };
}
