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
    const title = this.inputs.title;
    const date = this.inputs.date;

    console.log();
  }

// 2021-04-04T11:11

}

export default Interface;