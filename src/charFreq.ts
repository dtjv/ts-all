/*
 * Given a string of characters, return a 2d array as shown below. Sort in
 * descending order by character frequency and then in ascending order by
 * character.
 *
 * Example:
 *   characterFrequency('mississippi') returns:
 *   [
 *     ['i', 4],
 *     ['s', 4],
 *     ['p', 2],
 *     ['m', 1]
 *   ]
 *
 * Example:
 *   characterFrequency('miaaiaaippi') returns:
 *   [
 *     ['a', 4],
 *     ['i', 4],
 *     ['p', 2],
 *     ['m', 1]
 *   ]
 *
 * Example:
 *   characterFrequency('mmmaaaiiibbb') returns:
 *   [
 *     ['a', 3],
 *     ['b', 3],
 *     ['i', 3],
 *     ['m', 3]
 *   ]
 */

type Entry = [string, number]
type Hash = { [key: string]: number }

export function charFreq(input = ''): Entry[] {
  const o = input.split('').reduce((a: Hash, c) => {
    if (!a[c]) {
      a[c] = 0
    }
    a[c] += 1
    return a
  }, {})

  return Object.entries(o)
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .sort((a, b) => b[1] - a[1])
}
