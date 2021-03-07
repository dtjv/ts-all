import { test } from 'tap'
import { setCap } from '../src/setCap'

test('setCap', async ({ test }) => {
  test('result type', async (t) => {
    const input = 'a Dog walks'
    const result = setCap(input)
    t.isNotEqual(input, result, 'should return a new string')
  })

  test('result is propercased', async (t) => {
    const input = 'a Dog walks'
    const actual = setCap(input)
    const expected = 'A Dog Walks'
    t.isNotEqual(actual, expected, 'should return a propercased string')
  })
})
