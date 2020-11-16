/**
 * Given a string of alpha characters, return true if characters 'a' and 'b'
 * are separated by 3 characters; false otherwise.
 */

export const abCheck = (str: string): boolean => {
  const re: RegExp = /a.{3}b/g
  return re.test(str)
}
