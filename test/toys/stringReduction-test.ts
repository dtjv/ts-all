import { test } from 'tap'
import { stringReduction } from '../../src/toys/stringReduction'

test('stringReduction', async (t) => {
  t.equal(stringReduction(), 0, 'should return 0 given no string')
  t.equal(stringReduction('b'), 1, 'should return 1 given 1 char')
  t.equal(
    stringReduction('bbb'),
    3,
    'should return length of input given all same chars'
  )
  t.equal(stringReduction('bcab'), 1, 'should reduce to 1')
  t.equal(stringReduction('abab'), 2, 'should reduce to 2')
  t.equal(
    stringReduction('aba'),
    1,
    'should reduce to 1 given odd length string'
  )
  t.equal(
    stringReduction('bbccab'),
    1,
    'should return to 1 given repeating chars'
  )
})
