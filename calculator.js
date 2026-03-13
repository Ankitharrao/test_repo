function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b; // BUG: no division by zero check!
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, subtract, divide, multiply };
