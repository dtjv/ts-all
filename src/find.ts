/**
 * Given an infinitely nested array of numbers, 'numbers' and a target number,
 * 'target', return an array of all occurances of 'target' in 'numbers'.
 *
 * Example:
 *   f([1, 2, [4, 4, [[4], 5, [2, 3, [4]]]]], 4) => [4, 4, 4, 4]
 */

type NestedArray = number | number[] | NestedArray[]

export const find = (numbers: NestedArray[], target: number): NestedArray[] => {
  let result: NestedArray = []

  for (const value of numbers) {
    if (Array.isArray(value)) {
      result = [...result, ...find(value, target)]
    } else if (value === target) {
      result.push(value)
    }
  }

  return result
}
