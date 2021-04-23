/**
 * A permutation is an ordered combination.
 *
 * There are two types of permutations:
 * 1. with repetition
 * 2. without repetition
 *
 * With Repetition
 * ---------------
 * Given `n` things, each time we make a choice, there are `n` choices.
 *
 *     n * n * n * ...
 *
 * Now we need to decide how many choices to make. We'll call that `r`.
 * So, the number of permutations of `n` things, choosing `r` of them is:
 *
 *     n * n * n * ... (r times) => n^r
 *
 * Example:
 *
 *     var a = ['a', 'b', 'c'];
 *
 *     n = 3
 *     r = 3
 *     permutations = n^r = 3^3 = 27
 *
 * Without Repetition
 * ------------------
 * Given `n` things, each time we make a choice, the choice is reduced by 1.
 *
 *     n * n-1 * n-2 * n-3 ...
 *
 * Now we need to decide how many choices to make. We'll call that `r`.
 * The number of permutations of `n` things, choosing `r` of them is:
 *
 *     P(n,r) = n! / (n-r)!
 *
 * Let's say `n` is 6 and `r` is 2. Total permutations are:
 *
 *     6! / (6-2)! = 720 / 24 = 30
 *
 * Given an array of `n` items, return an array of all permutations.
 * No repetitions.
 *
 * Given [a, b, c], return:
 *   [[a, b, c],
 *    [a, c, b],
 *    [b, a, c],
 *    [b, c, a],
 *    [c, a, b],
 *    [c, b, a]]
 *
 * n=3. r=3. n!/(n-r)! = 3!/(3-3)! = 3! = 6
 *
 * For this problem, given a string, return an array of all possible, unique,
 * anagrams - or permutations of the string.
 *
 * Example:
 *
 *   const anagrams = allAnagrams('abc');
 *   console.log(anagrams); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 */

export function allAnagrams(chars: string): string[] {
  let result: string[] = []

  if (chars.length === 1) {
    return [chars]
  }

  for (const char of chars) {
    const rest = chars.replace(char, '')
    result = [...result, ...allAnagrams(rest).map((r) => char + r)]
  }

  return result
}
