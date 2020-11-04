/**
 * @param  {String}  str1
 * @param  {String}  str2
 * @return {Boolean}      Returns true if a portion of `str1` can be rearranged
 *                        to match `str2`; othwerwise return false.
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
