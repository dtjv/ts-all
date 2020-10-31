import { test } from 'tap'
import { pipe } from '../../src/toys/pipe'

test('pipe: returns a func', (t) => {
  const f = (x: string) => x
  t.plan(1)
  t.isEqual(typeof pipe(f), 'function')
})

test('pipe: returns composition of a list of functions', (t) => {
  const f1 = (name: string) => `hi ${name}`
  const f2 = (stmt: string) => `${stmt.toUpperCase()}`
  const f = pipe(f1, f2)

  const actual = f('joe')
  const expected = 'HI JOE'

  t.plan(1)
  t.isEqual(actual, expected)
})

test('pipe: handles functions of a different datatype', (t) => {
  const f1 = (x: number) => x * x
  const f2 = (x: number) => x + x
  const f = pipe(f1, f2)

  const actual = f(5)
  const expected = 50

  t.plan(1)
  t.isEqual(actual, expected)
})

test('pipe: handles multiple inputs', (t) => {
  const f1 = (age: number, name: string) => ({ age, name })
  const f2 = (p: { age: number; name: string }) =>
    `${p.name} is ${p.age} yrs old`
  const f = pipe(f1, f2)

  const actual = f(5, 'joe')
  const expected = 'joe is 5 yrs old'

  t.plan(1)
  t.isEqual(actual, expected)
})
