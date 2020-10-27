import { test } from 'tap'
import { compose } from '../src/compose'

test('compose: returns a func', (t) => {
  const f = (x: string) => x
  t.plan(1)
  t.isEqual(typeof compose(f), 'function')
})

test('compose: returns composition of a list of functions', (t) => {
  const f1 = (name: string) => `hi ${name}`
  const f2 = (stmt: string) => `${stmt.toUpperCase()}`
  const composedFunc = compose(f1, f2)

  const actual = composedFunc('joe')
  const expected = 'hi JOE'

  t.plan(1)
  t.isEqual(actual, expected)
})
