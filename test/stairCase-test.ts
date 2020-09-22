import { test } from 'tap'
import { stairCase } from '../src/stairCase'

test('stairCase: returns an Array of size N', (t) => {
  const n = 5
  const actual = stairCase(n).length
  const expected = n
  t.plan(1)
  t.isEqual(actual, expected)
})

test('stairCase: returns an N x N array', (t) => {
  const n = 5
  const result = stairCase(n).every((row) => row.length === n)
  t.plan(1)
  t.true(result)
})

test('stairCase: returns a L-R ascending stairCase', (t) => {
  const n = 5
  const result = stairCase(n).every((row, i) => row.endsWith('#'.repeat(i + 1)))
  t.plan(1)
  t.true(result)
})
