import noUiSlider from 'nouislider';

export default function initRangeSlider() {
  const slider = document.getElementById('range-slider');

  noUiSlider.create(slider, {
    start: [0, 10000],
    connect: false,
    padding: [0, 500],
    range: {
      'min': 0,
      'max': 10000
    }
  });
}