function calculate(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  if (isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)) {
    throw new Error('Inputs must be finite numbers');
  }
  return num1 + num2;
}