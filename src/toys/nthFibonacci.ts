/**
 * Given a number, return the nth term in the fibonacci sequence.
 *
 * Example:
 *   n    = 0 1 2 3 4 5 6
 *   x(n) = 0 1 1 2 3 5 8  <-- fibonacci sequence
 *
 *   if n = 6, then the 6th term, x(6) is 8.
 *
 * Notes:
 *   - export 3 implementations: recursive, iterative and dynamic programming
 */
export const nthFibR = (n: number): number => {
  return n === 0 || n === 1 ? n : nthFibR(n - 1) + nthFibR(n - 2)
}

export const nthFibI = (n: number): number => {
  if (n === 0 || n === 1) {
    return n
  }

  let a = 0
  let b = 1
  let c = 0

  for (let i = 2; i <= n; i += 1) {
    c = a + b
    a = b
    b = c
  }

  return c
}

const memo = [0, 1]

export const nthFibDP = (n: number): number => {
  if (memo[n] === undefined) {
    memo[n] = nthFibDP(n - 1) + nthFibDP(n - 2)
  }

  return memo[n]
}
