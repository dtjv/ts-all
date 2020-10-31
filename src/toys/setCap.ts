/**
 * Given a string, 'str', return a copy of `str` with the first letter of each
 * work capitalized.
 */
export const setCap = (str: string): string => {
  return str
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join('')
}
