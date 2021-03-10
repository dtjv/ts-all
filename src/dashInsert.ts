/**
 * Given a string of numbers, returns a new string, where a dash('-') is
 * inserted between odd number characters of given string.
 */

function isOdd(x: number): boolean {
  return x % 2 !== 0
}

export const dashInsert = (str = ''): string => {
  let result = ''
  let i = 0
  let j = 1

  while (j < str.length) {
    const a = parseInt(str[i++])
    const b = parseInt(str[j++])

    result += `${a}`

    if (isOdd(a) && isOdd(b)) {
      result += '-'
    }
  }

  return result + (str.length ? str[i] : '')
}
