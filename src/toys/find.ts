/**
 * Given an infinitely nested array of numbers, 'numbers' and a target number,
 * 'target', return an array of all occurances of 'target' in 'numbers'.
 *
 * Example:
 *
 * f([1, 2, [4, 4, [[4], 5, [2, 3, [4]]]]], 4) => [4, 4, 4, 4]
 */
export type A = number | number[] | A[]

export const find = (numbers: A[], target: number): A[] => {
  let result: A = []

  for (const value of numbers) {
    if (Array.isArray(value)) {
      result = [...result, ...find(value, target)]
    } else if (value === target) {
      result.push(value)
    }
  }

  return result
}
