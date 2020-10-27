/**
 * Implement the function `compose`.
 *
 * `compose` should return a function that is the composition of a list of
 * functions of any length. `compose` moves thru arguments from right to left.
 * Each function is called on the return value of the function that follows.
 *
 * Example:
 *   const sayHi = name => `hi: ${name}`;
 *   const yell = statement => `${statement.toUpperCase()}!`;
 *   const msg = compose(sayHi, yell);
 *   msg('tom'); // `hi: TOM!`
 */
interface Func {
  (...args: string[]): string
}

export const compose = (...funcs: Func[]) => {
  return (...args: string[]) => {
    let result: string = ''
    let input = [...args]

    for (let i = funcs.length - 1; i >= 0; i -= 1) {
      result = funcs[i](...input)
      input = [result]
    }

    return result
  }
}
