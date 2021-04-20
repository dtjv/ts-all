/**
 * Given an integer n, break it into the sum of k positive integers, where
 * k >= 2, and maximize the product of those integers. Return the maximum
 * product you can get.
 *
 * Example:
 *   Input: n = 2
 *   Output: 1
 *   Explanation: 2 = 1 + 1, 1 × 1 = 1.
 *
 * Example:
 *   Input: n = 10
 *   Output: 36
 *   Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 */

export const integerBreak = (n: number): number => {
  if (n == 2) return 1
  if (n == 3) return 2

  if (n % 3 === 0) {
    return 3 ** (n / 3)
  }

  const hash = { 2: 0, 3: 0 }

  while (n - 3 >= 2) {
    hash[3] += 1
    n -= 3
  }

  hash[2] = n / 2

  let product = 1

  for (const [key, value] of Object.entries(hash)) {
    product *= parseInt(key) ** value
  }

  return product
}
