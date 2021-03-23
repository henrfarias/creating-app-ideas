const Presentation = {

  init(view, storage) {
    const eventsList = storage;

    if(eventsList.length === 0){
      this.emptyStorage(view);
      return;
    }

  },

  emptyStorage(view) {
    view.innerHTML = `
      <div class="card card-empty">
        <div class="card__countdown">
          <div class="countdown__time"><strong>--</strong><p>Days</p></div>
          <div class="countdown__time"><strong>--</strong><p>Hours</p></div>
          <div class="countdown__time"><strong>--</strong><p>Minutes</p></div>
          <div class="countdown__time"><strong>--</strong><p>Seconds</p></div>
        </div>
        <div class="card__title">
          <h2>Has empty =(</h2>
        </div>
      </div>
      `  
  }
}

export default Presentation;