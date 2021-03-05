const Converter = (binaryNumber) => {
  const button = document.querySelector('[data-button]');
  const decimal = document.querySelector('[data-decimal-input]')
  const binary = binaryNumber;
  const arrayBinary = binary.split('').reverse().map(stringNumber => Number(stringNumber));

  const decimalResult = arrayBinary.reduce((accumulator, currentValue, index) => Math.pow(2, index) * currentValue + accumulator);

  decimal.value = decimalResult;
}

export default Converter;