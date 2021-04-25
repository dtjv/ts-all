import { test } from 'tap'
import { charFreq } from '../src/charFreq'

test('charFreq', async (t) => {
  t.deepEqual(charFreq(undefined), [], 'should return an empty array')

  t.deepEqual(charFreq('mississippi'), [
    ['i', 4],
    ['s', 4],
    ['p', 2],
    ['m', 1],
  ])

  t.deepEqual(charFreq('miaaiaaippi'), [
    ['a', 4],
    ['i', 4],
    ['p', 2],
    ['m', 1],
  ])

  t.deepEqual(charFreq('mmmaaaiiibbb'), [
    ['a', 3],
    ['b', 3],
    ['i', 3],
    ['m', 3],
  ])
})
