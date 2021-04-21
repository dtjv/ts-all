/**
 * Given a number `n`, add its digits and then add the derived number's digits
 * and repeat the process until the result is a single digit. Return the number
 * of addition steps (the additive persistence of `n`) required to obtain the
 * single digit (the digital root of `n`).
 *
 * Example:
 *   Given `n` is 2718, return 2 because 2 + 7 + 1 + 8 = 18, and 1 + 8 = 9. 2 is
 *   the number of additions requied to obtain a single digit.
 */

export function addPersistence(n: number): number {
  let count = 0
  let nums = n.toString()

  while (nums.length > 1) {
    nums = nums
      .split('')
      .reduce((a, c) => a + parseInt(c), 0)
      .toString()
    count += 1
  }

  return count
}

export function addPersistenceR(n: number): number {
  const count = 1
  const digits = n.toString()

  if (digits.length === 1) {
    return 0
  }

  return (
    count +
    addPersistenceR(digits.split('').reduce((a, c) => a + parseInt(c), 0))
  )
}
