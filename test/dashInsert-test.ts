import { test } from 'tap'
import { dashInsert } from '../src/dashInsert'

test('dashInsert', async (t) => {
  t.equal(dashInsert(), '', 'should return an empty string')
  t.equal(dashInsert('1'), '1', 'should not add dashes')
  t.equal(dashInsert('222'), '222', 'should not add dashes')
  t.equal(dashInsert('357'), '3-5-7', 'should add dashes between odd numbers')
  t.equal(
    dashInsert('23457'),
    '2345-7',
    'should add dashes with a mix of numbers'
  )
})
