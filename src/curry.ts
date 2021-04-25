/**
 * Export two functions.
 *
 * 1. A function that adds two numbers togther via this call:
 *
 *    f(2)(2) = 4
 *
 * 2. A function that adds `n` numbers together via this call:
 *
 *    f(1)(2)()    = 3
 *    f(1)(2)(3)() = 6
 */

interface F {
  (x: number): number
}

export function curryAdd(a: number): F {
  return (b: number): number => a + b
}

interface FF {
  (x?: number): number | FF
}

export function curryAddInfinite(a: number): FF {
  let sum = a

  const curriedAdd: FF = (b) => {
    if (!b) return sum
    sum += b
    return curriedAdd
  }

  return curriedAdd
}
