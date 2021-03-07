/**
 * Given a string of characters, return a copy with each letter case swapped.
 */

export const swapCase = (str: string): string => {
  return str
    .split('')
    .map((char) =>
      char.search(/[A-Z]/g) !== -1 ? char.toLowerCase() : char.toUpperCase()
    )
    .join('')
}
