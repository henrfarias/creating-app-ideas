/*
  Níveis de abstração:

  -- Apresentação

  -- Armazenamento

  -- Inputs

  -- Countdown

*/

import Presentation from './Presentation.js' 
import Interface from './Interface.js' 
import Storage from './Storage.js' 

const App = { 

  init() {

    const eventsList = JSON.parse(Storage.localStorage); 

    Presentation.init(Storage.view, eventsList);
    Interface.init();
  }


}

App.init();