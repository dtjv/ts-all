/**
 * For this problem, `asyncMap` has two parameters, an array of async functions
 * (tasks) and a callback. Each task takes a separate callback and invokes that
 * callback when complete. Once all the callbacks of the tasks are returned,
 * `asyncMap` should invoke its callback.
 *
 * The order of the task callback results should be the same as the order of the
 * tasks. Note, this is not the order in which the tasks return, but the order
 * in which they are passed to `asyncMap`.
 *
 * Example:
 *
 *   asyncMap(
 *     [
 *       (cb) => {
 *         setTimeout(() => {
 *           cb('one');
 *         }, 200);
 *       },
 *       (cb) => {
 *         setTimeout(() => {
 *           cb('two');
 *         }, 100);
 *       },
 *     ],
 *     (results) => {
 *       console.log(results); // ['one', 'two']
 *     },
 *   );
 */

interface Func {
  (cb: Callback): void
}
interface Callback {
  (...args: unknown[]): void
}

export function asyncMap(funcs: Func[], cb: Callback): void {
  const result: unknown[] = []
  let pending = funcs.length

  for (let i = 0; i < funcs.length; i += 1) {
    const func: Func = funcs[i]

    func((...args) => {
      result[i] = args
      pending -= 1

      if (!pending) {
        cb(result)
      }
    })
  }
}
