/**
 * The compose function should return a function that is the composition of a
 * list of functions of any length. Compose moves thru arguments from right to
 * left. Each function is called on the return value of the function that
 * follows.
 *
 * Example:
 *   const sayHi = name => `hi: ${name}`;
 *   const yell = statement => `${statement.toUpperCase()}!`;
 *   const msg = compose(sayHi, yell);
 *   msg('tom'); // `hi: TOM!`
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Func {
  (...args: any[]): unknown
}

export const compose = (...funcs: Func[]): Func => {
  return (...args: any[]): unknown => {
    let input = [...args]
    let result

    for (let i = funcs.length - 1; i >= 0; i -= 1) {
      result = funcs[i](...input)
      input = [result]
    }

    return result
  }
}
