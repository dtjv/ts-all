/**
 * Given a number `n` equal to 5, return an `n` x `n` matrix of the following
 * format:
 *
 *      #
 *     ##
 *    ###
 *   ####
 *  #####
 */
export const stairCase = (n: number): string[] => {
  return Array(n)
    .fill('')
    .map((_, i) => '#'.repeat(i + 1).padStart(n))
}
