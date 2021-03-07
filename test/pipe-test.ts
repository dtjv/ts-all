import { test } from 'tap'
import { pipe } from '../src/pipe'

test('pipe', async ({ test }) => {
  test('pipe returns a function', async (t) => {
    const f = (x: string) => x
    t.isEqual(typeof pipe(f), 'function', 'should return a function')
  })

  test('output of function is a composition', async (t) => {
    const f1 = (name: string) => `hi ${name}`
    const f2 = (stmt: string) => `${stmt.toUpperCase()}`
    const f = pipe(f1, f2)
    t.isEqual(f('joe'), 'HI JOE', 'should return composition of functions')
  })

  test('function handles various datatypes', async (t) => {
    const f1 = (x: number) => x * x
    const f2 = (x: number) => x + x
    const f = pipe(f1, f2)
    t.isEqual(f(5), 50, 'should return composition of functions')
  })

  test('function handles multiple inputs', async (t) => {
    const f1 = (age: number, name: string) => ({ age, name })
    const f2 = (p: { age: number; name: string }) =>
      `${p.name} is ${p.age} yrs old`
    const f = pipe(f1, f2)
    t.isEqual(
      f(5, 'joe'),
      'joe is 5 yrs old',
      'should return composition of functions'
    )
  })
})
