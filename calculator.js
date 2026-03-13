function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  if (isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b)) {
    throw new Error('Inputs must be finite numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}