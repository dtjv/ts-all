import { test } from 'tap'
import { powerSet } from '../src/powerSet'

test('powerSet', async ({ test }) => {
  test('should return power set of n = 0', async (t) => {
    const actual = powerSet([])
    const expected = [[]]
    t.deepEqual(actual, expected)
  })

  test('should return power set of n = 1', async (t) => {
    const actual = powerSet([1])
    const expected = [[], [1]]
    t.deepEqual(actual, expected)
  })

  test('should return power set of n > 1', async (t) => {
    const actual = powerSet([1, 2, 3])
    const expected = [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
    t.deepEqual(actual, expected)
  })
})
