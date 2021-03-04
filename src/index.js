/**
 * Computes a factorial of a given positive number
 * @param {*} n
 */
export function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial as such is only defined for non-negative integers!');
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}
