/**
 * Given a string of characters, returns a copy with the first letter of each
 * word capitalized.
 */

export const setCap = (str: string): string => {
  return str
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join('')
}
