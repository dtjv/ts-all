import { test } from 'tap'
import { stringScramble } from '../../src/toys/stringScramble'

test('stringScramble', async (t) => {
  t.false(stringScramble(), 'should be false for no params')
  t.false(stringScramble('', ''), 'should be false for empty params')
  t.true(stringScramble('helo', 'elh'), 'should be true for no repeating chars')
  t.true(
    stringScramble('heello', 'elhle'),
    'should be true for no repeating chars'
  )
  t.false(
    stringScramble('helo', 'hello'),
    'should be false for short first param'
  )
  t.false(stringScramble('helo', 'abcd'), 'should be false for no common chars')
})
