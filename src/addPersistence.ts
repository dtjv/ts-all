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
  let num = n
  let nums: string

  while (true) {
    nums = num.toString()

    if (nums.length === 1) {
      return count
    }

    num = nums.split('').reduce((a, c) => a + parseInt(c), 0)
    count += 1
  }
}

export function addPersistenceR(n: number): number {
  let count = 1
  let digits = n.toString()

  if (digits.length === 1) {
    return 0
  }

  return (
    count +
    addPersistenceR(digits.split('').reduce((a, c) => a + parseInt(c), 0))
  )
}
