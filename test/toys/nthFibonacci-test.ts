import { test } from 'tap'
import { nthFibR, nthFibI, nthFibDP } from '../../src/toys/nthFibonacci'

test('nthFib', async ({ test }) => {
  test('iterative solution', async (t) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6]
    const results = numbers.map(nthFibI)
    const expected = [0, 1, 1, 2, 3, 5, 8]
    t.deepEqual(results, expected, 'should return nth term(iterative)')
  })

  test('recursive solution', async (t) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6]
    const results = numbers.map(nthFibR)
    const expected = [0, 1, 1, 2, 3, 5, 8]
    t.deepEqual(results, expected, 'should return nth term(recursive)')
  })

  test('dynamic solution', async (t) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6]
    const results = numbers.map(nthFibDP)
    const expected = [0, 1, 1, 2, 3, 5, 8]
    t.deepEqual(results, expected, 'should return nth term(dynamic)')
  })
})
