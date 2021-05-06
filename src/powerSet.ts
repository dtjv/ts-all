/**
 * Given an array of numbers, return the Power Set.
 *
 * Examples:
 *   const a = [ 1, 2, 3 ]  // power set will be 2^N sets or 2^3 = 8
 *   const r = powerSet(a)
 *   console.log(r)
 *
 *   // prints
 *   [ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]
 */

export function powerSet(a: number[]): number[][] {
  const n = 2 ** a.length
  const r = []

  for (let i = 0; i < n; i++) {
    const binary = i.toString(2).padStart(a.length, '0').split('')
    const set = []

    for (const [j, b] of binary.entries()) {
      if (b === '1') {
        set.push(a[j])
      }
    }

    r.push(set)
  }

  return r
}
