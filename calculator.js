function add(a, b) { if (typeof a !== 'number' || typeof b !== 'number') { throw new Error('Inputs must be numbers'); } return a + b; }
function subtract(a, b) { if (typeof a !== 'number' || typeof b !== 'number') { throw new Error('Inputs must be numbers'); } return a - b; }
function divide(a, b) { if (typeof a !== 'number' || typeof b !== 'number') { throw new Error('Inputs must be numbers'); } if (b === 0) { throw new Error('Cannot divide by zero'); } return a / b; }
function multiply(a, b) { if (typeof a !== 'number' || typeof b !== 'number') { throw new Error('Inputs must be numbers'); } return a * b; }
function power(base, exponent) { if (typeof base !== 'number' || typeof exponent !== 'number') { throw new Error('Inputs must be numbers'); } return Math.pow(base, exponent); }
module.exports = { add, subtract, divide, multiply, power };