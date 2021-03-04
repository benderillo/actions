/**
 * Computes a factorial of a given positive number
 * @param {*} n
 */
export function factorial(n) {
  if (n < 0) {
    throw new Error('Non-negative integers not supported');
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
