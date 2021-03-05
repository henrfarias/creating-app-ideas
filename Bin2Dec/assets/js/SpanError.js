const SpanError = () => {
  const spanError =  document.querySelector('[data-span-error]');
  const inputError =  document.querySelector('[data-binary-input]');

  spanError.classList.remove('hide');
  inputError.classList.add('input-error');
} 

const SpanErrorRemove = () => {
  const spanError =  document.querySelector('[data-span-error]');
  const inputError =  document.querySelector('[data-binary-input]');
  
  inputError.classList.remove('input-error');
  spanError.classList.add('hide');
}

export { SpanError, SpanErrorRemove };