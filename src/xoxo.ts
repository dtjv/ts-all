/**
 * Given a string of characters, return true if it contains an equal number of
 * 'x' and 'o' characters; false otherwise.
 */

export const xoxo = (str = ''): boolean => {
  const x = str.match(/x/g) || []
  const o = str.match(/o/g) || []

  return x.length === o.length
}
