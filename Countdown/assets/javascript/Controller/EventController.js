class EventController {
  constructor() {
    this._modal = new Modal();
  }

  toggleModal(event) {
        this._modal.toggle(event)
  }
}
