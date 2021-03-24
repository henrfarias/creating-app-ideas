const Storage = {

  localStorage: localStorage.getItem('eventsList') || localStorage.setItem('eventsList', '[]'),

  access() {
    return JSON.parse(localStorage.getItem('eventsList'));
  },

  putItem(list) {
    localStorage.setItem('eventsList', JSON.stringify(list)); 
  }

}

export default Storage;