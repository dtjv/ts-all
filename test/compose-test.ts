import { test } from 'tap'
import { compose } from '../src/compose'

test('compose: returns a func', async (t) => {
  const f = (x: unknown) => x
  t.isEqual(typeof compose(f), 'function')
})

test('compose: returns composition of a list of functions', async (t) => {
  const f1 = (name: string) => `hi ${name}`
  const f2 = (stmt: string) => `${stmt.toUpperCase()}`
  const composedFunc = compose(f1, f2)

  const actual = composedFunc('joe')
  const expected = 'hi JOE'

  t.isEqual(actual, expected)
})
