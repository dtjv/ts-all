/**
 * Given an arbitrary number of strings, return a string containing the set of
 * unique characters found in each string (no duplication), in the order that
 * they appeared in the first string argument. (skip spaces and characters
 * previously encountered).
 *
 * Example:
 *   console.log(commonCharacters('acex ivou', 'aegihobu')) // prints 'aeiou'
 */

export const commonCharacters = (...args: string[]): string => {
  if (!args.length) return ''

  const [first, rest] = [args[0].replace(/\s/g, ''), args.slice(1)]
  let result = ''

  for (const char of first) {
    if (!result.includes(char) && rest.every((s) => s.includes(char))) {
      result = `${result}${char}`
    }
  }

  return result
}
