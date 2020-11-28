import { test } from 'tap'
import { commonCharacters } from '../../src/toys/commonCharacters'

test('commonCharacters', async (t) => {
  t.equal(commonCharacters(), '', 'return empty string when no args given')
  t.equal(
    commonCharacters(''),
    '',
    'return empty string when 1 empty string given'
  )
  t.equal(
    commonCharacters('', ''),
    '',
    'return empty string when 2 empty strings given'
  )
  t.equal(
    commonCharacters('acex', 'ax'),
    'ax',
    'return string with common characters in 1 other string.'
  )
  t.equal(
    commonCharacters('ac ex', 'aax'),
    'ax',
    'ignores repeated chars and spaces'
  )
  t.equal(
    commonCharacters('acex ivou', 'aegihobu', 'uyabocccei'),
    'aeiou',
    'return string with common characters in order, found in multiple strings'
  )
})
