import { test } from 'tap'
import { stairCase } from '../src/stairCase'

test('stairCase', async ({ test }) => {
  test('result length', async (t) => {
    const n = 5
    t.isEqual(stairCase(n).length, n, 'should return an array of size N')
  })

  test('result dimensions', async (t) => {
    const n = 5
    const result = stairCase(n).every((row) => row.length === n)
    t.true(result, 'should return an NxN array')
  })

  test('result is a staircase', async (t) => {
    const n = 5
    const result = stairCase(n).every((row, i) =>
      row.endsWith('#'.repeat(i + 1))
    )
    t.true(result, 'should return a left-to-right ascending staircase')
  })
})
