/**
 * Implement the function `pipe`:
 *
 * `pipe` composes a series of functions and returns the resulting function.
 * Each function is called on the return value of the preceding function. You
 * can view pipe as moving left to right through its arguments.
 *
 * Example:
 *  const add2 = number => number + 2;
 *  const multiplyBy3 = number => number * 3;
 *  pipe(add2, multiplyBy3)(5); // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5); // 63
 */
interface Func {
  (...args: any[]): any
}

export const pipe = (...funcs: Func[]) => {
  return (...args: any[]) => {
    let result: any
    let input = [...args]

    for (const f of funcs) {
      result = f(...input)
      input = [result]
    }

    return result
  }
}
