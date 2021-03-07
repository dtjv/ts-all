/**
 * Given two strings, return true if a portion of the first string can be
 * rearranged to match the second string; false otherwise.
 */

export const stringScramble = (str1 = '', str2 = ''): boolean => {
  if (!str1 || !str2) {
    return false
  }

  let s1 = str1.slice()

  for (const char of str2) {
    if (!s1.includes(char)) {
      return false
    }

    s1 = s1.replace(char, '')
  }

  return true
}
