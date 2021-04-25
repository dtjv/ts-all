/**
 * Given a string, `s`, and a shift count, `n`, return a string where each
 * character of `s` is shifted `n` positions in alphabet. Punctuation, spaces
 * and capitalization should remain intact.
 *
 * Example:
 *   s = 'H ello!'
 *   n = 4
 *   console.log(caesarCipher(s, n)) // output is 'L ipps!'
 */

function getNewCharCode(code: number, lo: number, hi: number): number {
  if (code > hi) return code - hi + lo - 1
  if (code < lo) return hi - (lo - code - 1)
  return code
}

export function caesarCipher(input = '', count = 0): string {
  const LOWERCASE = new RegExp(/[a-z]/)
  const UPPERCASE = new RegExp(/[A-Z]/)

  return input
    .split('')
    .map((char) => {
      let charCode = char.charCodeAt(0)

      if (LOWERCASE.test(char)) {
        return String.fromCharCode(getNewCharCode(charCode + count, 97, 122))
      }

      if (UPPERCASE.test(char)) {
        return String.fromCharCode(getNewCharCode(charCode + count, 65, 90))
      }

      return char
    })
    .join('')
}
