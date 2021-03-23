const Storage = {

  view: document.querySelector('[data-view]'),
  localStorage: localStorage.getItem('eventsList') || localStorage.setItem('eventsList', '[]'),

}

export default Storage;