import createElement from '../../assets/lib/create-element.js';

function StepSliderTemplate(value) {
  return `
    <div class="slider">
        <div class="slider__thumb">
            <span class="slider__value">${value}</span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
            <span  class="slider__step-active"></span>
        </div>
    </div>`;
}

export default class StepSlider {
  #steps = null;
  #template = null;
  #elem = null;

  constructor({ steps, value = 0 }) {
    // eslint-disable-next-line new-cap
    this.#template = StepSliderTemplate(value);
    this.#steps = steps;
    this.#elem = this.render();
  }

  render() {
    const slider = createElement(this.#template);

    const sliderSteps = slider.querySelector('.slider__steps');
    const sliderProgress = slider.querySelector('.slider__progress');
    const span = '<span></span>';

    for (let i = 1; i < this.#steps; i++) {
      sliderSteps.innerHTML += span;
    }

    sliderProgress.style.width = `0%`;

    slider.addEventListener('click', (event)=> { this.onSliderClickEvent(event);});

    return slider;
  }

  onSliderClickEvent = (event) => {
    const sliderSteps = this.#elem.querySelector('.slider__steps');
    const sliderValue = this.#elem.querySelector('.slider__value');

    let left = event.clientX - this.#elem.getBoundingClientRect().left;
    let leftRelative = left / this.#elem.offsetWidth;
    let segments = this.#steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    let valuePercents = value / segments * 100;

    let activeStep = sliderSteps.childNodes[1];

    sliderValue.innerHTML = value;

    activeStep.classList.add('slider__step-active');

    let thumb = this.#elem.querySelector('.slider__thumb');
    let progress = this.#elem.querySelector('.slider__progress');

    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;

    const sliderChangeEvent = new CustomEvent("slider-change",
      { detail: value,
        bubbles: true});

    return this.#elem.dispatchEvent(sliderChangeEvent);
  }

  get elem() {
    return this.#elem;
  }
}
