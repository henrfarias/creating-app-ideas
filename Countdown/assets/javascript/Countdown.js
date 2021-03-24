import CaptureDate from './CaptureDate.js';

const Countdown = {

  timeLeft: 0,
  daysLeft: 0,
  hoursLeft: 0,
  minutesLeft: 0,
  secondsLeft: 0,

  start(date) {
    if(CaptureDate.getDate(date)){
      return {
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
        done: true,
      };
    }
    this.timeLeft = CaptureDate.dateDiffInSeconds;
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const secondsInMinute = 60;
    let secondsRemainingInDay = this.timeLeft % secondsInDay;
    this.daysLeft = Math.floor(this.timeLeft / secondsInDay);
    this.hoursLeft = Math.floor(secondsRemainingInDay / secondsInHour);
    let secondsRemainingInHour = secondsRemainingInDay % secondsInHour;
    this.minutesLeft = Math.floor(secondsRemainingInHour / secondsInMinute);
    this.secondsLeft = secondsRemainingInHour % secondsInMinute;

    return {
      days: String(this.daysLeft),
      hours: String(this.hoursLeft),
      minutes: String(this.minutesLeft),
      seconds: String(this.secondsLeft),
      done: false,
    }
  }
}

export default Countdown;