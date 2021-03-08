const Countdown = {
  timeLeft: 0,
  daysLeft: 0,
  hoursLeft: 0,
  minutesLeft: 0,
  secondsLeft: 0,
  interval: null,

  calcTimer(dataDiffSeconds) {
    this.timeLeft = dataDiffSeconds;
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const secondsInMinute = 60;
    let secondsRemainingInDay = dataDiffSeconds % secondsInDay;
    this.daysLeft = Math.floor(dataDiffSeconds / secondsInDay);
    this.hoursLeft = Math.floor(secondsRemainingInDay / secondsInHour);
    let secondsRemainingInHour = secondsRemainingInDay % secondsInHour;
    this.minutesLeft = Math.floor(secondsRemainingInHour / secondsInMinute);
    this.secondsLeft = secondsRemainingInHour % secondsInMinute;
  },

  countdown() {
    Countdown.timeLeft = Countdown.timeLeft - 1;
    Countdown.calcTimer(Countdown.timeLeft);
    console.log(`Faltam ${Countdown.daysLeft} dias - ${Countdown.hoursLeft} h - ${Countdown.minutesLeft} min - ${Countdown.secondsLeft} s`);
  },

  init() {
    setInterval(this.countdown, 1000);
  },
}

export { Countdown };