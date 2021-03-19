import { CaptureDate } from './CaptureDate.js';
import { Countdown } from './Countdown.js';
import { View } from './View.js';

export const App = {

  notificationPermission: false,

  init() {
    const button = document.querySelector('[data-date-button]');
    const dateInput = document.querySelector('[data-date-input]');
    const title = document.querySelector('[data-title-input]');

    
    button.addEventListener('click', () => {
      if (dateInput.value === '' || title.value === ''){
        alert('Não deixe campos vazios, seu eu do futuro vai agradecer!')
        return;
      }

      
      const isYesterday = CaptureDate.getDate(dateInput.value);
      if(isYesterday) {
        alert('Que pena! Esta data já passou... :(');
        return;
      }
      clearInterval(Countdown.interval);
      Countdown.calcTimer(CaptureDate.dateDiffInSeconds);
      Countdown.init();
      View.init(title.value, CaptureDate.eventDay);
    })

    Notification.requestPermission()
      .then(response => {
        if(response === 'granted')
          App.notificationPermission = true;
      });
      
  },


}

App.init();

