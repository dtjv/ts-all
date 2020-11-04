/**
 * @param  {String}  str
 * @return {Boolean}     Returns `true` if all chars of `str` are the same;
 *                       `false` otherwise.
 */
function isReduced(str: string): boolean {
  return str.split('').every((c, _, a) => c === a[0])
}

/**
 * Reduce `str` by the following rules:
 *
 * Only the letters 'a', 'b', and 'c' will be given in `str`. Take two
 * different adjacent characters and replace it with the third.
 *
 * Ex:
 *   `str` = 'bcab', 'bc' reduces to 'a'. Now with 'aab', 'ab' reduces to 'c',
 *   so the final string, 'ac' reduces to 'b'. Return the length of the
 *   shortest reduced string - which is 1.
 *
 * @param  {String} str A string composed of 'a', 'b', and/or 'c'
 * @return {Number}     Returns the length of the shortest reduced string
 */
interface TheRules {
  [key: string]: string
}

export const stringReduction = (str = '') => {
  function reduceABC(s: string): string {
    const rules: TheRules = {
      ab: 'c',
      ac: 'b',
      bc: 'a',
      ba: 'c',
      ca: 'b',
      cb: 'a',
    }
    const lastChar = s.length % 2 !== 0 ? s[s.length - 1] : ''
    // the while loop guards `s` from ever being null. so `s.match` is
    // guarenteed to never return null. since i add `!` instead of `|| []` i get
    // get 100% code coverage. (`|| []` is unreachable).
    const groupByTwoChars = s.match(/(\w){2}/g)!

    return groupByTwoChars
      .map((pair: string) => rules[pair])
      .concat([lastChar])
      .join('')
  }

  while (!isReduced(str)) {
    str = reduceABC(str)
  }

  return str.length
}

// ----------------------------------------------------------------------------
// The following solution works - it's just not as elegant as the one above.
// ----------------------------------------------------------------------------

/*
const squish = (c1: string, c2: string): string => {
  const chars = `${c1}${c2}`

  if (chars.match(/ab|ba/)) return 'c'
  if (chars.match(/ac|ca/)) return 'b'
  return 'a'
}

const reduce = (s: string): string => {
  const r: string[] = []

  let ptr = 0
  while (ptr < s.length - 1) {
    if (s[ptr] === s[ptr + 1]) {
      r.push(s[ptr])
      ptr += 1
    } else {
      r.push(squish(s[ptr], s[ptr + 1]))
      ptr += 2
    }
  }

  if (ptr < s.length) {
    r.push(s[ptr])
  }

  return r.join('')
}

export const stringReduction = (s = ''): number => {
  let o = s.slice()
  let r = ''

  while (o != r) {
    o = r || o
    r = reduce(o)
  }

  return r.length
}
*/
