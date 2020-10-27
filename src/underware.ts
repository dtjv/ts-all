/**
 * export the implementations of each function listed:
 * (don't use javascript class' built-in methods)
 *
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

/*
 * returns the first element of an array.
 * passing in `takeCount` where:
 *   0 < takeCountn < array.length, returns first `takeCount` elements of array
 *   takeCount <= 0, returns an empty array
 *   takeCount > array.length, returns all elements of array
 */
export const first = <T>(collection: T[] = [], takeCount?: number): T | T[] => {
  if (takeCount === undefined) return collection[0]
  if (takeCount <= 0) return []

  const result: T[] = []

  for (let i = 0; i < takeCount && i < collection.length; i += 1) {
    result[i] = collection[i]
  }

  return result
}

/*
 * returns the last element of an array.
 * passing in `takeCount` where:
 *   0 < takeCount < array.length, returns last `takeCount` elements of array
 *   takeCount <= 0, returns an empty array
 *   takeCount > array.length, returns all elements of array
 */
export const last = <T>(collection: T[] = [], takeCount?: number): T | T[] => {
  if (takeCount === undefined) return collection[collection.length - 1]
  if (takeCount <= 0) return []

  const result: T[] = []
  const startIdx =
    takeCount > collection.length ? 0 : collection.length - takeCount

  for (let i = startIdx; i < collection.length; i += 1) {
    result.push(collection[i])
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

export const intersection = <T>(...collections: T[][]): T[] => {
  const result: T[] = []

  if (!collections.length) return []

  // find shortest array in collection
  const sortedByLength = collections
    .slice(0)
    .sort((a, b) => a.length - b.length)
  const [shortest, rest] = [sortedByLength[0], sortedByLength.slice(1)]

  // check if each item in the shortest list is in each of the remaining lists
  for (const item of shortest) {
    if (rest.length && rest.every((collection) => collection.includes(item))) {
      result.push(item)
    }
  }

  return result
}

export const difference = <T>(collection: T[] = [], ...lists: T[][]): T[] => {
  return collection.filter((item) =>
    lists.every((list) => !list.includes(item))
  )
}

export const zip = <T>(...collections: T[][]): T[][] => {
  const result: T[][] = []
  const shortestLength = collections.reduce(
    (p, c) => (c.length < p ? c.length : p),
    Number.MAX_SAFE_INTEGER
  )

  for (let i = 0; i < shortestLength; i += 1) {
    result.push(collections.map((c) => c[i]))
  }

  return result
}
