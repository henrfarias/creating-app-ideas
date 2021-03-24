import Storage from './Storage.js';
import CaptureDate from './CaptureDate.js';
import Presentation from './Presentation.js'

const Interface = {
  
  buttonAdd: document.querySelector('[data-button]'),
  buttonSubmit: document.querySelector('[data-form-button]'),
  modal: document.querySelector('[data-modal]'),
  overlay: document.querySelector('[data-overlay]'),
  inputs: {
    title: document.querySelector('[data-title]'),
    date: document.querySelector('[data-date]'),
  },

  init() { 
    this.buttonAdd.addEventListener('click', () => {
      this.toggleModal();
    })
    
    this.buttonSubmit.addEventListener('click', () => {
      this.mountEvent();
      this.toggleModal();
      Presentation.update();

    })

    this.overlay.addEventListener('click', (click) => {
      if (!this.modal.contains(click.target)) {
        this.toggleModal();
      }
    })

    Object.values(this.inputs)
      .forEach(input => input.addEventListener('keyup', () => {
      this.toggleButtonDisabled();
    }))
  },

  toggleModal() {
    this.modal.classList.toggle('modal-form--active');
    this.overlay.classList.toggle('overlay--active');
  },

  toggleButtonDisabled() {
    if (this.inputs.date.value && this.inputs.title.value){
      this.buttonSubmit.removeAttribute('disabled');
    } else {
      this.buttonSubmit.setAttribute('disabled', true);
    }
  },

  mountEvent() {
    let title = this.inputs.title.value;
    let date = this.inputs.date.value;
    const eventsList = Storage.access();
    if(CaptureDate.getDate(date)) {
      return alert('Esta data já passou');
    }
    eventsList.push({title, date});

    Storage.putItem(eventsList);

    this.inputs.title.value = '';
    this.inputs.date.value = '';
  }

// 2021-04-04T11:11

}

export default Interface;