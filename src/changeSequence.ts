/**
 * Given an array of numbers, return the index of the array where the numbers
 * cease to increase or decrease. Return -1 if no change is found.
 */

enum Direction {
  INCREASE,
  DECREASE,
}

export function changeSequence(nums: number[]): number {
  let index = -1

  if (nums.length > 1) {
    const direction =
      nums[0] < nums[1] ? Direction.INCREASE : Direction.DECREASE

    for (let i = 1; i < nums.length - 1 && index === -1; i += 1) {
      if (
        (nums[i] < nums[i + 1] && direction === Direction.DECREASE) ||
        (nums[i] > nums[i + 1] && direction === Direction.INCREASE)
      ) {
        index = i + 1
      }
    }
  }

  return index
}
