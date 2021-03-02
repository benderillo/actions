import { factorial } from '../src/index';

describe('Factorial function', () => {
  test.each([
    [0, 1],
    [1, 1],
    [3, 6],
    [10, 3628800],
  ])('should correctly compute factorial of a positive non-zero number', (input, expectedValue) => {
    expect(factorial(input)).toEqual(expectedValue);
  });

  it('should throw if negative input is provided', () => {
    expect(() => {
      factorial(-1);
    }).toThrow('Factorial as such is only defined for non-negative integers!');
  });
});
