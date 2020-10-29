import { test } from 'tap'
import * as _ from '../src/underware'

test('first', async ({ test }) => {
  test('handles undefined array', async (t) => {
    t.equal(_.first(undefined), undefined)
    t.deepEqual(_.first(undefined, 4), [])
  })

  test('returns empty array given an empty array', async (t) => {
    t.equal(_.first([]), undefined)
    t.deepEqual(_.first([], 2), [])
  })

  test('returns an empty array for `takeCount` < 0', async (t) => {
    t.deepEqual(_.first([1, 2, 3, 4], -1), [])
  })

  test('returns first entry', async (t) => {
    t.equal(_.first([1, 2, 3, 4]), 1)
    t.equal(_.first(['one', 'two', 'three']), 'one')
  })

  test('returns first `takeCount` entries', async (t) => {
    t.deepEqual(_.first([1, 2, 3, 4], 2), [1, 2])
  })

  test('returns all entries', async (t) => {
    t.deepEqual(_.first([1, 2, 3, 4], 5), [1, 2, 3, 4])
  })
})

test('last', async ({ test }) => {
  test('handles undefined array', async (t) => {
    t.equal(_.last(undefined), undefined)
    t.deepEqual(_.last(undefined, 4), [])
  })

  test('returns an empty array given an empty array', async (t) => {
    t.equal(_.last([]), undefined)
    t.deepEqual(_.last([], 2), [])
  })

  test('returns an empty array for `takeCount` < 0', async (t) => {
    t.deepEqual(_.last([1, 2, 3, 4], -1), [])
  })

  test('returns last entry', async (t) => {
    t.equal(_.last([1, 2, 3, 4]), 4)
    t.equal(_.last(['one', 'two', 'three']), 'three')
  })

  test('returns last `takeCount` entries', async (t) => {
    t.deepEqual(_.last([1, 2, 3, 4], 2), [3, 4])
    t.deepEqual(_.last(['one', 'two', 'three'], 2), ['two', 'three'])
  })

  test('returns all entries', async (t) => {
    t.deepEqual(_.last([1, 2, 3, 4], 5), [1, 2, 3, 4])
    t.deepEqual(_.last(['one', 'two', 'three'], 5), ['one', 'two', 'three'])
  })
})

test('each', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    const result: unknown[] = []
    const iteratee = (item: unknown): void => {
      result.push(item)
    }
    _.each(undefined, iteratee)
    t.deepEqual(result, [])
  })

  test('handles an empty array', async (t) => {
    const result: unknown[] = []
    const iteratee = (item: unknown): void => {
      result.push(item)
    }
    _.each([], iteratee)
    t.deepEqual(result, [])
  })

  test('calls iteratee for each item in array', async (t) => {
    const result: number[] = []
    const iteratee = (item: number): void => {
      result.push(item)
    }
    _.each<number, void>([1, 2, 3, 4], iteratee)
    t.deepEqual(result, [1, 2, 3, 4])
  })
})

test('indexOf', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    t.equal(_.indexOf(undefined, 5), -1)
  })

  test('handles no target in array', async (t) => {
    t.equal(_.indexOf([1, 2, 3, 4], 5), -1)
    t.equal(_.indexOf(['one', 'two', 'three'], 'four'), -1)
  })

  test('finds target in array', async (t) => {
    t.equal(_.indexOf([1, 2, 3, 4], 3), 2)
    t.equal(_.indexOf(['one', 'two', 'three'], 'two'), 1)
  })
})

test('filter', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    t.deepEqual(_.filter(undefined, isEven), [])
  })

  test('returns a new array with items that pass test', async (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const input = [2, 4, 7]
    const result = _.filter<number>(input, isEven)
    const expected = [2, 4]
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })
})

test('reject', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const result = _.reject<number>(undefined, isEven)
    const expected: number[] = []
    t.deepEqual(result, expected)
  })

  test('returns a new array with items that do not pass test', async (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const input = [2, 4, 7]
    const result = _.reject<number>(input, isEven)
    const expected = [7]
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })
})

test('uniqify', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    t.deepEqual(_.uniqify(undefined), [])
  })

  test('returns a new array with unique number items', async (t) => {
    const input = [1, 1, 2, 3, 3, 4, 4]
    const result = _.uniqify(input)
    const expected = [1, 2, 3, 4]
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })

  test('returns a new array with unique string items', async (t) => {
    const input = ['a', 'a', 'b', 'c', 'c', 'd', 'd']
    const result = _.uniqify(input)
    const expected = ['a', 'b', 'c', 'd']
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })
})

test('map', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    const identity = (v: number): number => v
    t.deepEqual(_.map(undefined, identity), [])
  })

  test('returns a new array of values', async (t) => {
    const toString = (item: number): string => item.toString()
    const input = [1, 2, 3, 4]
    const result = _.map<number, string>(input, toString)
    const expected = ['1', '2', '3', '4']
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })
})

test('pluck', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    t.deepEqual(_.pluck(undefined, ''), [])
  })

  test('returns a new array of extracted property value', async (t) => {
    const input = [
      { name: 'joe', age: 40 },
      { name: 'may', age: 20 },
    ]
    t.deepEqual(_.pluck(input, 'name'), ['joe', 'may'])
  })
})

test('reduce', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    const reducer = (r: number, v: number) => r + v
    t.deepEqual(_.reduce(undefined, reducer, 0), 0)
  })

  test('reduces array to a number', async (t) => {
    const reducer = (r: number, v: number) => r + v
    t.deepEqual(_.reduce([1, 2, 3, 4], reducer, 0), 10)
  })

  test('reduces array to an object', async (t) => {
    interface Item {
      [key: string]: unknown
    }
    const reducer = (r: Item, v: Item) => ({ ...r, [v.name as string]: v })
    const input = [
      { name: 'joe', age: 40 },
      { name: 'tom', age: 20 },
    ]
    const expected = {
      joe: { name: 'joe', age: 40 },
      tom: { name: 'tom', age: 20 },
    }
    t.deepEqual(_.reduce(input, reducer, {}), expected)
  })
})

test('contains', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    t.false(_.contains(undefined, ''))
  })

  test('returns true if array contains target', async (t) => {
    t.true(_.contains([1, 2, 3, 4], 3))
  })

  test('returns false if target is not in array', async (t) => {
    t.false(_.contains(['one', 'two', 'three'], 'four'))
  })
})

test('every', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    t.true(_.every<number>(undefined, isEven))
  })

  test('returns false when at least one item fails test', async (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    t.false(_.every<number>([2, 4, 7], isEven))
  })

  test('returns true when all items pass test', async (t) => {
    const isLength2 = (item: string): boolean => item.length === 2
    t.true(_.every<string>(['aa', 'bb', 'cc'], isLength2))
  })
})

test('some', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    t.false(_.some(undefined, isEven))
  })

  test('returns true when at least one item passes test', async (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    t.true(_.some([3, 4, 7], isEven))
  })

  test('returns false when all items fail test', async (t) => {
    const isLength2 = (item: string): boolean => item.length === 2
    t.false(_.some(['a', 'b', 'c'], isLength2))
  })
})

test('extend', async ({ test }) => {
  test('populates an empty object in place', async (t) => {
    const original = {}
    const result = _.extend(original, { a: 'a' }, { b: 'b', c: 'c' })
    const expected = { a: 'a', b: 'b', c: 'c' }
    t.equal(result, original, 'test for in-place')
    t.deepEqual(result, expected)
  })

  test('copies nested structures by reference', async (t) => {
    interface Item {
      [key: string]: unknown
    }
    const original: Item = {}
    const data = [1, 2, 3]
    const result = _.extend(original, { data })
    const expected = { data }
    t.equal(result['data'], data, 'test for reference')
    t.deepEqual(result, expected)
  })
})

test('defaults', async ({ test }) => {
  test('preserves previously set property values', async (t) => {
    const original = { a: 'a' }
    const result = _.defaults(
      original,
      { a: 'A' },
      { b: 'b' },
      { b: 'B', c: 'c' }
    )
    const expected = { a: 'a', b: 'b', c: 'c' }
    t.equal(result, original, 'test for in-place')
    t.deepEqual(result, expected)
  })
})

test('once', async ({ test }) => {
  test('calls wrapped function once', async (t) => {
    let numCalls = 0
    const f = _.once(() => (numCalls += 1))
    f()
    f()
    t.equal(numCalls, 1)
  })
})

test('memoize', async ({ test }) => {
  test('calls wrapped function once with no args', async (t) => {
    let numCalls = 0
    const f = _.memoize(() => (numCalls += 1))
    f()
    f()
    t.equal(numCalls, 1)
  })

  test('calls wrapped function once with same args', async (t) => {
    let numCalls = 0
    const f = _.memoize((x) => {
      numCalls += 1
      return x
    })
    f(1)
    f(1)
    t.equal(numCalls, 1)
  })

  test('calls wrapped function given unique args', async (t) => {
    let numCalls = 0
    const f = _.memoize((x) => {
      numCalls += 1
      return x
    })
    f(1)
    f(2)
    t.equal(numCalls, 2)
  })
})

test('delay', async ({ test }) => {
  test('invokes function after wait time has elapsed', (t) => {
    const wait = 500
    const startTime = Date.now()

    _.delay(() => {
      t.plan(1)
      t.true(Date.now() - startTime >= wait)
    }, wait)
  })

  test('invokes function with arbitrary number of args', (t) => {
    const argA = 5
    const argB = 8

    _.delay(
      (x, y) => {
        t.plan(2)
        t.equal(x, argA)
        t.equal(y, argB)
      },
      500,
      argA,
      argB
    )
  })
})

test('flatten', async ({ test }) => {
  test('handles an undefined array', async (t) => {
    t.deepEqual(_.flatten(undefined), [])
  })

  test('flattens deeply nested array', async (t) => {
    const input = [1, 2, [3, 4], [5, [6, 7, [8]]]]
    const result = _.flatten(input)
    const expected = [1, 2, 3, 4, 5, 6, 7, 8]
    t.deepEqual(result, expected)
  })
})

test('intersection', async ({ test }) => {
  test('returns an empty array given no arrays', async (t) => {
    t.deepEqual(_.intersection(), [])
  })

  test('returns array if given one array', async (t) => {
    t.deepEqual(_.intersection([1, 2, 3]), [1, 2, 3])
  })

  test('returns the intersection of multiple arrays', async (t) => {
    const result = _.intersection([8, 1, 5, 2, 3], [3, 7, 5], [5, 1, 3, 6])
    const expected = [3, 5]
    t.deepEqual(result, expected)
  })
})

test('difference', async ({ test }) => {
  test('returns an empty array given no arguments', async (t) => {
    t.deepEqual(_.difference(), [])
  })

  test('returns the difference of multiple number arrays', async (t) => {
    const result = _.difference([1, 2, 3, 4], [2, 5], [4, 5, 7])
    const expected = [1, 3]
    t.deepEqual(result, expected)
  })
})

test('zip', async ({ test }) => {
  test('zips multiple arrays', async (t) => {
    const result = _.zip([1, 2, 3, 4], [2, 8, 5], [4, 5, 7])
    const expected = [
      [1, 2, 4],
      [2, 8, 5],
      [3, 5, 7],
    ]
    t.deepEqual(result, expected)
  })
})
