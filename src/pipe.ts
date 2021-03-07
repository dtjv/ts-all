/**
 * The pipe function composes a series of functions into one and returns the
 * resulting function. Each function is called on the return value of the
 * preceding function. You can view pipe as moving left to right through its
 * arguments.
 *
 * Example:
 *  const add2 = number => number + 2;
 *  const multiplyBy3 = number => number * 3;
 *  pipe(add2, multiplyBy3)(5); // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5); // 63
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Func {
  (...args: any[]): unknown
}

export const pipe = (...funcs: Func[]): Func => {
  return (...args: any[]): unknown => {
    return funcs.slice(1).reduce((r, f) => f(r), funcs[0](...args))
  }
}
