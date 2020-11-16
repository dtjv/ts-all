/**
 * Given a number, n, return an n x n array of strings with '#' characters that
 * form a staircase.
 *
 * Example:
 *   n = 5
 *
 *        #
 *       ##
 *      ###
 *     ####
 *    #####
 */
export const stairCase = (n: number): string[] => {
  return Array(n)
    .fill('')
    .map((_, i) => '#'.repeat(i + 1).padStart(n))
}
