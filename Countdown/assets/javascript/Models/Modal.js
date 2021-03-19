class Modal {
  constructor() {
    const $ = document.querySelector.bind(document);
    this._overlay = $('.overlay');
    this._modal = $('.modal-form');
  }

  get modal() {
    return this._modal;
  }

  toggle(event) {
    if (!this._modal.contains(event.target)){
      this._overlay.classList.toggle('overlay--active');
      this._modal.classList.toggle('modal-form--active');
    }
  }
}