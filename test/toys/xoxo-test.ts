import { test } from 'tap'
import { xoxo } from '../../src/toys/xoxo'

test('xoxo', async (t) => {
  t.true(xoxo(), 'should return true when no string passed')
  t.true(xoxo('xoxo'), 'should be true when x count = o count in string')
  t.false(xoxo('xxxo'), 'should be false when x count != o count in string')
})
