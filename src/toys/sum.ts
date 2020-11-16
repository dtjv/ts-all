/**
 * Given a number, n, return the sum of 1 to n
 */
export const sum = (num: number): number => {
  if (num <= 1) return 1
  return num + sum(num - 1)
}
