/**
 * Given a string of alpha characters, return a copy with the first letter of
 * each work capitalized.
 */
export const setCap = (str: string): string => {
  return str
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join('')
}
