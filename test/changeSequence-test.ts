import { test } from 'tap'
import { changeSequence } from '../src/changeSequence'

test('changeSequence', async (t) => {
  t.equals(changeSequence([1]), -1)
  t.equals(changeSequence([1, 2]), -1)
  t.equals(changeSequence([2, 1]), -1)
  t.equals(changeSequence([2, 2]), -1)
  t.equals(changeSequence([1, 2, 3, 4, 3]), 4)
  t.equals(changeSequence([4, 1, 2, 3, 4]), 2)
})
