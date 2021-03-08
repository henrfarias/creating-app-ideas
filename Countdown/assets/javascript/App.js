import { CaptureDate } from './CaptureDate.js';
import { Countdown } from './Countdown.js';

const App = {
  init() {
    const button = document.querySelector('[data-date-button]');
    const targetInput = document.querySelector('[data-date-input]');

    
    button.addEventListener('click', () => {
      CaptureDate.getDate(targetInput.value);
    
      Countdown.calcTimer(CaptureDate.dateDiffInSeconds);

      Countdown.init();
    })
  }
}

App.init();

