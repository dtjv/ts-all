import { test } from 'tap'
import { find, A } from '../../src/toys/find'

test('find: returns all occurances of target in an array', (t) => {
  const data: A = [1, 2, [4, 4, [[4], 5, [2, 3, [4]]]]]
  const actual = find(data, 4)
  const expected = [4, 4, 4, 4]
  t.plan(1)
  t.deepEquals(actual, expected)
})
