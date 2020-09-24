import { test } from 'tap'
import {
  first,
  last,
  each,
  indexOf,
  filter,
  reject,
  uniqify,
  map,
  pluck,
  reduce,
  contains,
  every,
  some,
  extend,
  defaults,
} from '../src/underware'

test('underware.first', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const result = first(undefined, 2)
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('handles an empty collection', (t) => {
    const result = first([], 2)
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns first |n| entries when n < 0', (t) => {
    const result = first([1, 2, 3, 4], -1)
    const expected = [1]
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns first n entries when n < collection count', (t) => {
    const result = first([1, 2, 3, 4], 2)
    const expected = [1, 2]
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns all entries when n > collection count', (t) => {
    const result = first([1, 2, 3, 4], 5)
    const expected = [1, 2, 3, 4]
    t.plan(1)
    t.deepEqual(result, expected)
  })

  end()
})

test('underware.last', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const result = last(undefined, 2)
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('handles an empty collection', (t) => {
    const result = last([], 2)
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns last |n| entries when n < 0', (t) => {
    const result = last([1, 2, 3, 4], -1)
    const expected = [4]
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns last n entries when n < collection count', (t) => {
    const result = last([1, 2, 3, 4], 2)
    const expected = [3, 4]
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns all n entries when n > collection count', (t) => {
    const result = last([1, 2, 3, 4], 5)
    const expected = [1, 2, 3, 4]
    t.plan(1)
    t.deepEqual(result, expected)
  })

  end()
})

test('underware.each', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const iterator = (item: number): void => {
      output.push(item)
    }
    const input = undefined
    const output: number[] = []
    const expected: number[] = []

    each<number, void>(input, iterator)

    t.plan(1)
    t.deepEqual(output, expected)
  })

  test('handles an empty collection', (t) => {
    const iterator = (item: number): void => {
      output.push(item)
    }
    const input: number[] = []
    const output: number[] = []
    const expected: number[] = []

    each<number, void>(input, iterator)

    t.plan(1)
    t.deepEqual(output, expected)
  })

  test('calls iterator for each item in collection', (t) => {
    const iterator = (item: number): void => {
      output.push(item)
    }
    const input = [1, 2, 3, 4]
    const output: number[] = []
    const expected = [1, 2, 3, 4]

    each<number, void>(input, iterator)

    t.plan(1)
    t.deepEqual(output, expected)
  })

  end()
})

test('underware.indexOf', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const result = indexOf(undefined, 5)
    const expected = -1
    t.plan(1)
    t.equal(result, expected)
  })

  test('finds target in collection', (t) => {
    const result = indexOf([1, 2, 3, 4], 3)
    const expected = 2
    t.plan(1)
    t.equal(result, expected)
  })

  end()
})

test('underware.filter', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const result = filter<number>(undefined, isEven)
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns a new collection with items that pass test', (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const input = [2, 4, 7]
    const result = filter<number>(input, isEven)
    const expected = [2, 4]
    t.plan(2)
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })

  end()
})

test('underware.reject', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const result = reject<number>(undefined, isEven)
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns a new collection items that do not pass test', (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const input = [2, 4, 7]
    const result = reject<number>(input, isEven)
    const expected = [7]
    t.plan(2)
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })

  end()
})

test('underware.uniqify', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const result = uniqify(undefined)
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns a new collection with unique items', (t) => {
    const input = [1, 1, 2, 3, 3, 4, 4]
    const result = uniqify(input)
    const expected = [1, 2, 3, 4]
    t.plan(2)
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })

  end()
})

test('underware.map', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const identity = (v: number): number => v
    const result = map<number, number>(undefined, identity)
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns a new collection with changed items', (t) => {
    const toString = (item: number): string => item.toString()
    const input = [1, 2, 3, 4]
    const result = map<number, string>(input, toString)
    const expected = ['1', '2', '3', '4']
    t.plan(2)
    t.notEqual(input, result)
    t.deepEqual(result, expected)
  })

  end()
})

test('underware.pluck', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const result = pluck(undefined, '')
    const expected: number[] = []
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('returns a new collection of extracted property value', (t) => {
    const input = [
      { name: 'joe', age: 40 },
      { name: 'may', age: 20 },
    ]
    const result = pluck(input, 'name')
    const expected = ['joe', 'may']
    t.plan(1)
    t.deepEqual(result, expected)
  })

  end()
})

test('underware.reduce', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const result = reduce<number, number>(
      undefined,
      (r: number, v: number) => {
        return r + v
      },
      0
    )
    const expected = 0
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('reduces collection to a number', (t) => {
    const input = [1, 2, 3, 4]
    const result = reduce<number, number>(
      input,
      (r: number, v: number) => {
        return r + v
      },
      0
    )
    const expected = 10
    t.plan(1)
    t.deepEqual(result, expected)
  })

  test('reduces collection to an object', (t) => {
    interface Item {
      [key: string]: unknown
    }
    const input: Item[] = [
      { name: 'joe', age: 40 },
      { name: 'tom', age: 20 },
    ]
    const result = reduce<Item, Item>(
      input,
      (r: Item, v: Item) => {
        r[v.name as string] = v
        return r
      },
      {}
    )
    const expected = {
      joe: { name: 'joe', age: 40 },
      tom: { name: 'tom', age: 20 },
    }
    t.plan(1)
    t.deepEqual(result, expected)
  })

  end()
})

test('underware.contains', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    t.plan(1)
    t.false(contains(undefined, ''))
  })

  test('returns true if collection contains target', (t) => {
    t.plan(1)
    t.true(contains([1, 2, 3, 4], 3))
  })

  test('returns false if target is not in collection', (t) => {
    t.plan(1)
    t.false(contains(['one', 'two', 'three'], 'four'))
  })

  end()
})

test('underware.every', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const result = every<number>(undefined, isEven)
    t.plan(1)
    t.true(result)
  })

  test('returns false when at least one item fails test', (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const input = [2, 4, 7]
    const result = every<number>(input, isEven)
    t.plan(1)
    t.false(result)
  })

  test('returns true when all items pass test', (t) => {
    const isLength2 = (item: string): boolean => item.length === 2
    const input = ['aa', 'bb', 'cc']
    const result = filter<string>(input, isLength2)
    t.plan(1)
    t.true(result)
  })

  end()
})

test('underware.some', ({ test, end }) => {
  test('handles an undefined collection', (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const result = some<number>(undefined, isEven)
    t.plan(1)
    t.false(result)
  })

  test('returns true when at least one item passes test', (t) => {
    const isEven = (item: number): boolean => !(item % 2)
    const input = [3, 4, 7]
    const result = some<number>(input, isEven)
    t.plan(1)
    t.true(result)
  })

  test('returns false when all items fail test', (t) => {
    const isLength2 = (item: string): boolean => item.length === 2
    const input = ['a', 'b', 'c']
    const result = some<string>(input, isLength2)
    t.plan(1)
    t.false(result)
  })

  end()
})

test('underware.extend', ({ test, end }) => {
  test('populates an empty object in place', (t) => {
    const original = {}
    const result = extend(original, { a: 'a' }, { b: 'b', c: 'c' })
    const expected = { a: 'a', b: 'b', c: 'c' }
    t.plan(2)
    t.deepEqual(result, expected)
    t.equal(result, original)
  })

  test('copies nested structures by reference', (t) => {
    interface Item {
      [key: string]: unknown
    }
    const original: Item = {}
    const data = [1, 2, 3]
    const result = extend(original, { data })
    const expected = { data }
    t.plan(2)
    t.deepEqual(result, expected)
    t.equal(result['data'], data)
  })

  end()
})

test('underware.defaults', ({ test, end }) => {
  test('preserves original values, adds new', (t) => {
    const original = { a: 'a' }
    const result = defaults(
      original,
      { a: 'A' },
      { b: 'b' },
      { b: 'B', c: 'c' }
    )
    const expected = { a: 'a', b: 'b', c: 'c' }
    t.plan(2)
    t.deepEqual(result, expected)
    t.equal(result, original)
  })

  end()
})
