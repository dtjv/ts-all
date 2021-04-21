import { test } from 'tap'
import { addPersistence } from '../src/addPersistence'

test('abCheck', async (t) => {
  t.equals(addPersistence(2718), 2)
  t.equals(addPersistence(9876), 2)
})
