import { test } from 'tap'
import { abCheck } from '../src/abCheck'

test('abCheck', async (t) => {
  t.false(abCheck(''), 'return false when empty string given')
  t.false(abCheck('ab'), 'return false when no chars separate a and b')
  t.true(abCheck('axxxb'), 'return true when 3 chars separate a and b')
  t.true(abCheck('a123b'), 'return true when 3 digits separate a and b')
  t.false(abCheck('a....b'), 'return false when 3+ digits separate a and b')
})
