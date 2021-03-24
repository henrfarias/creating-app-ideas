/*
  Níveis de abstração:

  -- Apresentação

  -- Armazenamento

  -- Inputs

  -- Countdown

  --Update

*/

import Presentation from './Presentation.js' 
import Interface from './Interface.js' 
import Storage from './Storage.js' 

const App = { 

  init() {

    const eventsList = JSON.parse(Storage.localStorage); 

    Presentation.init(eventsList);
    Interface.init();

  }


}

App.init();