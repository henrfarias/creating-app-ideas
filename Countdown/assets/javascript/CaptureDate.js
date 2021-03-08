const CaptureDate = {
  today: Math.floor(Date.now() / 1000),
  eventDay: 0,
  dateDiffInSeconds: 0,
  getDate(date) {
    if(date === '') {
      return
    }
    this.eventDay = new Date (date).toLocaleDateString();
    this.eventDayInSeconds = Date.parse(date) / 1000;
    this.dateDiffInSeconds = this.eventDayInSeconds - this.today;
  },
}

export { CaptureDate };