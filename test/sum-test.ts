import { test } from 'tap'
import { sum } from '../src/sum'

test('sum', async (t) => {
  t.equals(sum(0), 1, 'should return 1 for n < 1')
  t.equals(sum(1), 1, 'should return 1 for n == 1')
  t.equals(sum(3), 6, 'should return sum of 1 to n')
})
