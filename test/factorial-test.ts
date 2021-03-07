import { test } from 'tap'
import { factorial } from '../src/factorial'

test('factorial', async (t) => {
  t.deepEqual(
    [0, 1, 2, 3, 4].map(factorial),
    [1, 1, 2, 6, 24],
    'should return factorial of a number'
  )
  t.throws(() => factorial(-5), 'should throw RangeError on N < 0')
})
