/**
 * Given a string of brackets, return true if all brackets are balanced; false
 * otherwise.
 */

const BRACKETS = new Map([
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
])

export function balancedBrackets(input: string): boolean {
  const stack: string[] = []

  for (const char of input) {
    if (BRACKETS.has(char)) {
      stack.push(char)
    } else {
      const openBracket = stack.pop()!
      if (BRACKETS.get(openBracket) !== char) {
        return false
      }
    }
  }

  return !stack.length
}
