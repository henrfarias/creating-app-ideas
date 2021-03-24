import Countdown from './Countdown.js';

const Presentation = {

  view: document.querySelector('[data-view]'),
  interval: null,

  init(storage) {
    const eventsList = storage;

    if(eventsList.length === 0){
      this.emptyStorage();
      return;
    }
    
    this.update();
    this.interval = setInterval(() => {
      this.update();
    }, 1000); 
  },

  emptyStorage() {
    this.view.innerHTML = `
      <div class="card card-empty">
        <div class="card__countdown">
          <div class="countdown__time"><strong>--</strong><p>Days</p></div>
          <div class="countdown__time"><strong>--</strong><p>Hours</p></div>
          <div class="countdown__time"><strong>--</strong><p>Minutes</p></div>
          <div class="countdown__time"><strong>--</strong><p>Seconds</p></div>
        </div>
        <div class="card__title">
          <h2>Has empty =(</h2>
        </div>
      </div>
      `  
  },

  update(){   
    
    const eventsList = JSON.parse(localStorage.getItem('eventsList'));
    this.view.innerHTML = `${
      eventsList.map(event => {
        
        const countdown = Countdown.start(event.date);

        if(countdown.done) {
          return `
          <div class="card card--done">
            <div class="card__countdown">
              <div class="countdown__time"><strong>${(countdown.days).padStart(2, '0')}</strong><p>Days</p></div>
              <div class="countdown__time"><strong>${(countdown.hours).padStart(2, '0')}</strong><p>Hours</p></div>
              <div class="countdown__time"><strong>${(countdown.minutes).padStart(2, '0')}</strong><p>Minutes</p></div>
              <div class="countdown__time"><strong>${(countdown.seconds).padStart(2, '0')}</strong><p>Seconds</p></div>
            </div>
            <div class="card__title">
              <h2>${event.title}</h2>
            </div>
          </div>
        `
      }
      

        return `
          <div class="card">
            <div class="card__countdown">
              <div class="countdown__time"><strong>${(countdown.days).padStart(2, '0')}</strong><p>Days</p></div>
              <div class="countdown__time"><strong>${(countdown.hours).padStart(2, '0')}</strong><p>Hours</p></div>
              <div class="countdown__time"><strong>${(countdown.minutes).padStart(2, '0')}</strong><p>Minutes</p></div>
              <div class="countdown__time"><strong>${(countdown.seconds).padStart(2, '0')}</strong><p>Seconds</p></div>
            </div>
            <div class="card__title">
              <h2>${event.title}</h2>
            </div>
          </div>
        `
      }).join('')
    }
      
    `
  }
}

export default Presentation;