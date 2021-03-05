const VerifyNumber = (number) => {
  const verificationBinary = number.replace(/[0-1]/g, '');
  if (number !== '' && verificationBinary === ''){
    return true;
  } else {
    return false;
  }

}

export default VerifyNumber;
