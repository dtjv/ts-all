/**
 * Given a string, `str`, return a copy of `str` with each letter case swapped.
 */
export const swapCase = (str: string): string => {
  return str
    .split('')
    .map((char) =>
      char.search(/[A-Z]/g) !== -1 ? char.toLowerCase() : char.toUpperCase()
    )
    .join('')
}
