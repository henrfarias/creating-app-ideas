import { Countdown } from './Countdown.js'

const View = {
  currentId: 0,
  init(title, targetDate) {
    let id = this.currentId;
    const eventsList = document.getElementById('events');
    eventsList.innerHTML = `<li class='events__item'><p class='countdown id${id}'>-- dias --h --min --s</p> - <p>${title}</p> - <p>${targetDate}</p></li>`
    id++;
  },
  render() {
    const countdown = document.querySelector('.countdown');

    countdown.innerHTML = `${String(Countdown.daysLeft).padStart(2, '0')} dias ${String(Countdown.hoursLeft).padStart(2, '0')}h ${String(Countdown.minutesLeft).padStart(2, '0')}min ${String(Countdown.secondsLeft).padStart(2, '0')}s`; 
  }
}

export { View } 