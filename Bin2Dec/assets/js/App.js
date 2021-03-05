import VerifyNumber from './VerifyNumber.js';
import { SpanError, SpanErrorRemove } from './SpanError.js';
import { ActiveConversion, DisabledConversion } from './EnableButton.js';
import Converter from './Converter.js'

const App = () => {
  const binaryInput = document.querySelector('[data-binary-input]');
  const button = document.querySelector('[data-button]');

  button.addEventListener('click', () => Converter(binaryInput.value));
  binaryInput.addEventListener('keyup', handlerInput);
  
  function handlerInput() {
    const isBinary = VerifyNumber(binaryInput.value);
  
    if (!isBinary){
      SpanError(); 
      DisabledConversion();

      return;
    } 

    SpanErrorRemove();

    ActiveConversion();
    console.log(button);
  }
}

App();

export default App;