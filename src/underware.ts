/**
 * export the implementations of each function listed:
 *
 *   .identity(val)
 *   .first(collection, n)
 *   .last(collection, n)
 *   .each(collection, iteratee)
 *   .indexOf(collection, target)
 *   .filter(collection, test)
 *   .reject(collection, test)
 *   .uniqify(collection)
 *   .map(collection, iteratee)
 *   .pluck(collection, key)
 *   .reduce(collection, iteratee, accumulator)
 *   .contains(collection, target)
 *   .every(collection, iteratee)
 *   .some(collection, iteratee)
 *   .extends(obj, ...args)
 *   .defaults(obj, ...args)
 *   .once(func)
 *   .memoize(func)
 *   .delay(func, wait, ...args)
 *   .shuffle(collection)
 *   .invoke(collection, functionOrKey)
 *   .sortBy(collection, iteratee)
 *   .zip(...args)
 *   .flatten(nestedArray)
 *   .intersection(...args)
 *   .difference(arr, ...args)
 */
interface TestIteratee<T> {
  (value: T, index: number, collection: T[]): boolean
}

interface Iteratee<T, R> {
  (value: T, index: number, collection: T[]): R
}

interface Item {
  [key: string]: unknown
}

export const first = (collection: number[] = [], n: number): number[] => {
  const result: number[] = []
  const count = Math.abs(n)

  for (let i = 0; i < count && i < collection.length; i += 1) {
    result[i] = collection[i]
  }

  return result
}

export const last = (collection: number[] = [], n: number): number[] => {
  const result: number[] = []
  const startIdx =
    Math.abs(n) > collection.length ? 0 : collection.length - Math.abs(n)

  for (let i = 0, j = startIdx; j < collection.length; i += 1, j += 1) {
    result[i] = collection[j]
  }

  return result
}

export const each = <T, R>(
  collection: T[] = [],
  iteratee: Iteratee<T, R>
): void => {
  for (let i = 0; i < collection.length; i += 1) {
    iteratee(collection[i], i, collection)
  }
}

export const indexOf = (collection: number[] = [], target: number): number => {
  let index = -1

  for (let i = 0; i < collection.length && index === -1; i += 1) {
    if (collection[i] === target) {
      index = i
    }
  }

  return index
}

export const filter = <T>(collection: T[] = [], test: TestIteratee<T>): T[] => {
  const result: T[] = []

  for (let i = 0; i < collection.length; i += 1) {
    if (test(collection[i], i, collection)) {
      result.push(collection[i])
    }
  }

  return result
}

export const reject = <T>(collection: T[] = [], test: TestIteratee<T>): T[] => {
  const result: T[] = []

  for (let i = 0; i < collection.length; i += 1) {
    if (!test(collection[i], i, collection)) {
      result.push(collection[i])
    }
  }

  return result
}

export const uniqify = (collection: number[] = []): number[] => {
  interface HashDict {
    [key: number]: boolean
  }
  const hash: HashDict = {}
  const result: number[] = []

  for (let i = 0; i < collection.length; i += 1) {
    const item = collection[i]

    if (!hash[item]) {
      hash[item] = true
      result.push(item)
    }
  }

  return result
}

export const map = <T, R>(
  collection: T[] = [],
  iteratee: Iteratee<T, R>
): R[] => {
  const result: R[] = []

  for (let i = 0; i < collection.length; i += 1) {
    result.push(iteratee(collection[i], i, collection))
  }

  return result
}

export const pluck = (collection: Item[] = [], key: string): unknown[] => {
  const result: unknown[] = []

  for (const item of collection) {
    result.push(item[key])
  }

  return result
}

interface Callback<T, R> {
  (result: R, value: T, index: number, collection: T[]): R
}

export const reduce = <T, R>(
  collection: T[] = [],
  callback: Callback<T, R>,
  initialvalue: R
): R => {
  let result = initialvalue

  for (let i = 0; i < collection.length; i += 1) {
    result = callback(result, collection[i], i, collection)
  }

  return result
}

export const contains = <T extends string | number | boolean>(
  collection: T[] = [],
  target: T
): boolean => {
  for (const item of collection) {
    if (item === target) return true
  }

  return false
}

export const every = <T>(
  collection: T[] = [],
  iteratee: TestIteratee<T>
): boolean => {
  for (let i = 0; i < collection.length; i += 1) {
    if (!iteratee(collection[i], i, collection)) return false
  }

  return true
}

export const some = <T>(
  collection: T[] = [],
  iteratee: TestIteratee<T>
): boolean => {
  for (let i = 0; i < collection.length; i += 1) {
    if (iteratee(collection[i], i, collection)) return true
  }

  return false
}

export const extend = (obj: Item, ...args: Item[]): Item => {
  args.forEach((arg) => {
    for (const [key, value] of Object.entries(arg)) {
      obj[key] = value
    }
  })
  return obj
}

export const defaults = (obj: Item, ...args: Item[]): Item => {
  args.forEach((arg) => {
    for (const [key, value] of Object.entries(arg)) {
      if (!obj[key]) {
        obj[key] = value
      }
    }
  })
  return obj
}

interface Func {
  (...args: unknown[]): unknown
}

export const once = (func: Func): Func => {
  let hasRun = false
  let result: unknown
  return (...args) => {
    if (!hasRun) {
      result = func(...args)
      hasRun = true
    }
    return result
  }
}

export const memoize = (func: Func): Func => {
  interface Hash {
    [key: string]: unknown
  }
  const hash: Hash = {}

  return (...args) => {
    const key = args.length ? JSON.stringify(args[0]) : '__undefined__'

    if (!hash[key]) {
      hash[key] = func(...args)
    }

    return hash[key]
  }
}

export const delay = (func: Func, wait: number, ...args: unknown[]): void => {
  setTimeout(() => {
    func(...args)
  }, wait)
}

type NestedArray<T> = T | T[] | NestedArray<T>[]

export const flatten = <T>(collection: NestedArray<T>[] = []): T[] => {
  let result: T[] = []
  const { isArray } = Array

  for (let item of collection) {
    result = isArray(item) ? [...result, ...flatten(item)] : [...result, item]
  }

  return result
}
