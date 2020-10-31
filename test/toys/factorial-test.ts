import { test } from 'tap'
import { factorial } from '../../src/toys/factorial'

test('factorial: returns the factorial of N', (t) => {
  const numbers = [0, 1, 2, 3, 4]
  const results = numbers.map(factorial)
  const expected = [1, 1, 2, 6, 24]
  t.plan(1)
  t.deepEqual(results, expected)
})

test('factorial: throws RangeError on negative input', (t) => {
  t.plan(1)
  t.throws(() => factorial(-5))
})
