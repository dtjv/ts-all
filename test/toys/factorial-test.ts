import { test } from 'tap'
import { factorial } from '../../src/toys/factorial'

test('factorial', async ({ test }) => {
  test('result is factorial', async (t) => {
    t.deepEqual(
      [0, 1, 2, 3, 4].map(factorial),
      [1, 1, 2, 6, 24],
      'should return factorial of number'
    )
  })

  test('it handles negative input', async (t) => {
    t.throws(() => factorial(-5), 'should throw RangeError on N < 0')
  })
})
