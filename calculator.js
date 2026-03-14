function validateInput(num) {
  if (typeof num !== 'number') {
    throw new Error('Input must be a number');
  }
  if (num === Infinity || num === -Infinity) {
    throw new Error('Input is too large or too small');
  }
}

function add(a, b) {
  validateInput(a);
  validateInput(b);
  return a + b;
}

function subtract(a, b) {
  validateInput(a);
  validateInput(b);
  return a - b;
}

function multiply(a, b) {
  validateInput(a);
  validateInput(b);
  return a * b;
}

function divide(a, b) {
  validateInput(a);
  validateInput(b);
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}