class EventController {
  constructor() {
    this._modal = new Modal();
    // this._eventList = new EventList();
  }

  toggleModal(event) {
      this._modal.toggle(event);
  }


}
