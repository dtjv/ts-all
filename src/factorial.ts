/**
 * Given a positive number, n, return n! Throws RangeError on negative input.
 *
 * The factorial formula is:
 *   n! = n * (n-1)!
 */

function factorial(n: number): number {
  if (n < 0) {
    throw new RangeError('factorial: expected a positive number')
  }

  return n === 0 || n === 1 ? 1 : n * factorial(n - 1)
}

export { factorial }
