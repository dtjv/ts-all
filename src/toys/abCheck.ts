/**
 * @param  {string}  str A string of alpha characters.
 * @return {boolean}     Return `true` if characters `a` and `b` in `str` are
 *                       separated by 3 characters; false otherwise.
 */

export const abCheck = (str: string): boolean => {
  const re: RegExp = /a.{3}b/g
  return re.test(str)
}
