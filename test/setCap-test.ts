import { test } from 'tap'
import { setCap } from '../src/setCap'

test('setCap: returns a new string', (t) => {
  const input = 'a Dog walks'
  const result = setCap(input)
  t.plan(1)
  t.isNotEqual(input, result)
})

test('setCap: returns a string with each word proper cased', (t) => {
  const input = 'a Dog walks'
  const actual = setCap(input)
  const expected = 'A Dog Walks'
  t.plan(1)
  t.isNotEqual(actual, expected)
})
