import { test } from 'tap'
import { nthFibR, nthFibI, nthFibDP } from '../src/nthFibonacci'

function setup() {
  return {
    numbers: [0, 1, 2, 3, 4, 5, 6],
    expected: [0, 1, 1, 2, 3, 5, 8],
  }
}

test('nthFib', async ({ test }) => {
  test('iterative solution', async (t) => {
    const { numbers, expected } = setup()
    const results = numbers.map(nthFibI)
    t.deepEqual(results, expected, 'should return nth term(iterative)')
  })

  test('recursive solution', async (t) => {
    const { numbers, expected } = setup()
    const results = numbers.map(nthFibR)
    t.deepEqual(results, expected, 'should return nth term(recursive)')
  })

  test('dynamic solution', async (t) => {
    const { numbers, expected } = setup()
    const results = numbers.map(nthFibDP)
    t.deepEqual(results, expected, 'should return nth term(dynamic)')
  })
})
