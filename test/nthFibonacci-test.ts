import { test } from 'tap'
import { nthFibR, nthFibI, nthFibDP } from '../src/nthFibonacci'

test('nthFibI: returns nth term of fibonacci sequence', (t) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6]
  const results = numbers.map(nthFibI)
  const expected = [0, 1, 1, 2, 3, 5, 8]
  t.plan(1)
  t.deepEqual(results, expected)
})

test('nthFibR: returns nth term of fibonacci sequence', (t) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6]
  const results = numbers.map(nthFibR)
  const expected = [0, 1, 1, 2, 3, 5, 8]
  t.plan(1)
  t.deepEqual(results, expected)
})

test('nthFibDP: returns nth term of fibonacci sequence', (t) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6]
  const results = numbers.map(nthFibDP)
  const expected = [0, 1, 1, 2, 3, 5, 8]
  t.plan(1)
  t.deepEqual(results, expected)
})
