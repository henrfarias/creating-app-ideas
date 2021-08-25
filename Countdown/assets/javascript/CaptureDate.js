const CaptureDate = {
  today: Math.floor(Date.now() / 1000),
  eventDay: 0,
  dateDiffInSeconds: 0,

  getDate(date) {
    this.today = Math.floor(Date.now() / 1000);
    this.eventDay = new Date(date).toLocaleDateString();
    this.eventDayInSeconds = Date.parse(date) / 1000;
    this.dateDiffInSeconds = this.eventDayInSeconds - this.today;
    if (this.dateDiffInSeconds < 0) {
      return true;
    }
    return false;
  },
}

export default CaptureDate;