import { test } from 'tap'
import { asyncMap } from '../src/asyncMap'

test('asyncMap', (t) => {
  asyncMap(
    [
      (cb) => {
        setTimeout(() => {
          cb('one')
        }, 2000)
      },
      (cb) => {
        setTimeout(() => {
          cb('two')
        }, 1000)
      },
    ],
    (actual) => {
      const expected = [['one'], ['two']]
      t.deepEquals(actual, expected)
      t.end()
    }
  )
})
