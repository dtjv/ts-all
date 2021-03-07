import { test } from 'tap'
import { compose } from '../src/compose'

test('compose', async ({ test }) => {
  test('compose returns a function', async (t) => {
    const f = (x: unknown) => x
    t.isEqual(typeof compose(f), 'function', 'should return a function')
  })

  test('output of function is a composition', async (t) => {
    const f1 = (name: string) => `hi ${name}`
    const f2 = (stmt: string) => `${stmt.toUpperCase()}`
    const f = compose(f1, f2)
    t.isEqual(f('joe'), 'hi JOE', 'should return composition of functions')
  })
})
