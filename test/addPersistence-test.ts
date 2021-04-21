import { test } from 'tap'
import { addPersistence, addPersistenceR } from '../src/addPersistence'

test('addPersistence', async (t) => {
  t.equals(addPersistence(2718), 2)
  t.equals(addPersistence(9876), 2)
})

test('addPersistenceR', async (t) => {
  t.equals(addPersistenceR(2718), 2)
  t.equals(addPersistenceR(9876), 2)
})
