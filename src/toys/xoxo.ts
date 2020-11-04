/**
 * @param  {String}  str A string
 * @return {Boolean}     Return `true` if `str` contains equal number of
 *                       `x` and `o` characters; `false` otherwise.
 */
export const xoxo = (str = ''): boolean => {
  const x = str.match(/x/g) || []
  const o = str.match(/o/g) || []

  return x.length === o.length
}
