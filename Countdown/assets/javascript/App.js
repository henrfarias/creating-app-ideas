import { CaptureDate } from './CaptureDate.js';
import { Countdown } from './Countdown.js';
import { View } from './View.js';

const App = {
  init() {
    const button = document.querySelector('[data-date-button]');
    const targetInput = document.querySelector('[data-date-input]');
    const title = document.querySelector('[data-title-input]');

    
    button.addEventListener('click', () => {
      if (targetInput.value === '' || title.value === ''){
        alert('Não deixe campos vazios, seu eu do futuro vai agradecer!')
        return;
      }

      
      const isYesterday = CaptureDate.getDate(targetInput.value);
      if(isYesterday) {
        alert('Que pena! Esta data já passou... :(');
        return;
      }
      clearInterval(Countdown.interval);
      Countdown.calcTimer(CaptureDate.dateDiffInSeconds);
      View.init(title.value, CaptureDate.eventDay);
      Countdown.init();
    })
  },


}

App.init();

