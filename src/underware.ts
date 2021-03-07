/**
 * Implementation a few underscore functions. No JavaScript built-in methods.
 */

interface Iteratee<T, R> {
  (value: T, index: number, arr: T[]): R
}

interface TestIteratee<T> {
  (value: T, index: number, arr: T[]): boolean
}

interface Obj {
  [key: string]: unknown
}

interface Func {
  (...args: unknown[]): unknown
}

interface ReduceCallback<T, R> {
  (result: R, value: T, index: number, arr: T[]): R
}

type NestedArray<T> = T | T[] | NestedArray<T>[]

/*
 * Returns the first element of an array.
 *
 * 'takeCount' parameter:
 *   - if 0 < takeCountn < array.length, returns first `takeCount` elements of
 *     array
 *   - if takeCount <= 0, returns an empty array
 *   - if takeCount > array.length, returns all elements of array
 */
export const first = <T>(arr: T[] = [], takeCount?: number): T | T[] => {
  if (takeCount === undefined) return arr[0]
  if (takeCount <= 0) return []

  const result: T[] = []

  for (let i = 0; i < takeCount && i < arr.length; i += 1) {
    result[i] = arr[i]
  }

  return result
}

/*
 * Returns the last element of an array.
 *
 * 'takeCount' parameter:
 *   - if 0 < takeCountn < array.length, returns last `takeCount` elements of
 *     array
 *   - if takeCount <= 0, returns an empty array
 *   - if takeCount > array.length, returns all elements of array
 */
export const last = <T>(arr: T[] = [], takeCount?: number): T | T[] => {
  if (takeCount === undefined) return arr[arr.length - 1]
  if (takeCount <= 0) return []

  const result: T[] = []
  const startIdx = takeCount > arr.length ? 0 : arr.length - takeCount

  for (let i = startIdx; i < arr.length; i += 1) {
    result.push(arr[i])
  }

  return result
}

export const each = <T, R>(arr: T[] = [], iteratee: Iteratee<T, R>): void => {
  for (let i = 0; i < arr.length; i += 1) {
    iteratee(arr[i], i, arr)
  }
}

export const indexOf = <T>(arr: T[] = [], target: T): number => {
  let index = -1

  for (let i = 0; i < arr.length && index === -1; i += 1) {
    if (arr[i] === target) {
      index = i
    }
  }

  return index
}

export const filter = <T>(arr: T[] = [], test: TestIteratee<T>): T[] => {
  const result: T[] = []

  for (let i = 0; i < arr.length; i += 1) {
    if (test(arr[i], i, arr)) {
      result.push(arr[i])
    }
  }

  return result
}

export const reject = <T>(arr: T[] = [], test: TestIteratee<T>): T[] =>
  filter(arr, (...args) => !test(...args))

export const uniqify = <T>(arr: T[] = []): T[] => {
  interface Hash {
    [key: string]: boolean
  }
  const hash: Hash = {}
  const result: T[] = []

  for (const item of arr) {
    const key = JSON.stringify(item)
    if (!hash[key]) {
      hash[key] = true
      result.push(item)
    }
  }

  return result
}

export const map = <T, R>(arr: T[] = [], iteratee: Iteratee<T, R>): R[] => {
  const result: R[] = []

  for (let i = 0; i < arr.length; i += 1) {
    result.push(iteratee(arr[i], i, arr))
  }

  return result
}

export const pluck = (arr: Obj[] = [], key: string): unknown[] => {
  const result: unknown[] = []

  for (const item of arr) {
    result.push(item[key])
  }

  return result
}

export const reduce = <T, R>(
  arr: T[] = [],
  callback: ReduceCallback<T, R>,
  initialvalue: R
): R => {
  let result = initialvalue

  for (let i = 0; i < arr.length; i += 1) {
    result = callback(result, arr[i], i, arr)
  }

  return result
}

export const contains = <T extends string | number | boolean>(
  arr: T[] = [],
  target: T
): boolean => {
  for (const item of arr) {
    if (item === target) return true
  }

  return false
}

export const every = <T>(arr: T[] = [], iteratee: TestIteratee<T>): boolean => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!iteratee(arr[i], i, arr)) return false
  }

  return true
}

export const some = <T>(arr: T[] = [], iteratee: TestIteratee<T>): boolean => {
  for (let i = 0; i < arr.length; i += 1) {
    if (iteratee(arr[i], i, arr)) return true
  }

  return false
}

export const extend = (obj: Obj, ...args: Obj[]): Obj => {
  args.forEach((arg) => {
    for (const [key, value] of Object.entries(arg)) {
      obj[key] = value
    }
  })

  return obj
}

export const defaults = (obj: Obj, ...args: Obj[]): Obj => {
  args.forEach((arg) => {
    for (const [key, value] of Object.entries(arg)) {
      if (!obj[key]) {
        obj[key] = value
      }
    }
  })

  return obj
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
  const hash: Obj = {}

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

export const flatten = <T>(arr: NestedArray<T>[] = []): T[] => {
  let result: T[] = []
  const { isArray } = Array

  for (const item of arr) {
    result = isArray(item) ? [...result, ...flatten(item)] : [...result, item]
  }

  return result
}

export const intersection = <T>(...arrays: T[][]): T[] => {
  const result: T[] = []

  if (!arrays.length) return []
  if (arrays.length === 1) return arrays[0]

  // find shortest array in arr
  const sortedByLength = arrays.slice(0).sort((a, b) => a.length - b.length)
  const [shortest, others] = [sortedByLength[0], sortedByLength.slice(1)]

  // check if each item in the shortest list is in each of the remaining lists
  for (const item of shortest) {
    if (others.every((arr) => arr.includes(item))) {
      result.push(item)
    }
  }

  return result
}

export const difference = <T>(arr: T[] = [], ...lists: T[][]): T[] => {
  return arr.filter((item) => lists.every((list) => !list.includes(item)))
}

export const zip = <T>(...arrays: T[][]): T[][] => {
  const result: T[][] = []
  const shortestLength = arrays.reduce(
    (p, c) => (c.length < p ? c.length : p),
    Number.MAX_SAFE_INTEGER
  )

  for (let i = 0; i < shortestLength; i += 1) {
    result.push(arrays.map((c) => c[i]))
  }

  return result
}
