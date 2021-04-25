import { test } from 'tap'
import { allAnagrams } from '../src/allAnagrams'

test('allAnagrams', async (t) => {
  const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
  t.deepEquals(allAnagrams('abc'), expected)
})
