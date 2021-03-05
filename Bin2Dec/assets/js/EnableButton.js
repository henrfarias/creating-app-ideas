const ActiveConversion = () => {
  const button = document.querySelector('[data-button]');
  button.removeAttribute('disabled');
}

const DisabledConversion = () => {
  const button = document.querySelector('[data-button]');
  button.setAttribute('disabled', true);
}

export { ActiveConversion, DisabledConversion };