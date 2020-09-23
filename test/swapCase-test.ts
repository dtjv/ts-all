import { test } from 'tap'
import { swapCase } from '../src/swapCase'

test('swapCase: returns a new string', (t) => {
  const input = 'hello world'
  const result = swapCase(input)
  t.plan(1)
  t.isNotEqual(input, result)
})

test('swapCase: returns a string with letter cases swapped', (t) => {
  const input = 'HeLLo WoRlD'
  const actual = swapCase(input)
  const expected = 'hEllO wOrLd'
  t.plan(1)
  t.isEqual(actual, expected)
})
