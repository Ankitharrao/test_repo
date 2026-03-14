/*
 * Divide two numbers.
 * @param {number} dividend - The number being divided.
 * @param {number} divisor - The number by which we are dividing.
 * @returns {number} The result of the division.
 * @throws {Error} If the divisor is zero or if either input is not a number.
 */
function divide(dividend, divisor) {
  if (typeof dividend !== 'number' || typeof divisor !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  if (divisor === 0) {
    throw new Error('Cannot divide by zero');
  }
  return dividend / divisor;
}