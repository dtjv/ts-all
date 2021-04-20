import { test } from 'tap'
import { integerBreak } from '../src/integerBreak'

test('integerBreak', async (t) => {
  t.equals(integerBreak(2), 1)
  t.equals(integerBreak(3), 2)
  t.equals(integerBreak(4), 4)
  t.equals(integerBreak(5), 6)
  t.equals(integerBreak(6), 9)
  t.equals(integerBreak(7), 12)
  t.equals(integerBreak(8), 18)
  t.equals(integerBreak(9), 27)
  t.equals(integerBreak(10), 36)
})
