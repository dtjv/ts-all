import { test } from 'tap'
import { swapCase } from '../src/swapCase'

test('swapCase', async ({ test }) => {
  test('result type', async (t) => {
    const input = 'hello world'
    const result = swapCase(input)
    t.isNotEqual(input, result, 'should return a new string')
  })

  test('result has cases swapped', async (t) => {
    const input = 'HeLLo WoRlD'
    const actual = swapCase(input)
    const expected = 'hEllO wOrLd'
    t.isEqual(actual, expected, 'should return letter cases swapped string')
  })
})
