/**
 * @param  {Number} num A number
 * @return {Number}     Returns the sum of 1 to `num`
 */
export const sum = (num: number): number => {
  if (num <= 1) return 1
  return num + sum(num - 1)
}
