import { test } from 'tap'
import { caesarCipher } from '../src/caesarCipher'

test('caesarCipher', async (t) => {
  t.equals(caesarCipher(), '', 'should return empty string given no params')
  t.equals(caesarCipher('yz', 4), 'cd', 'should handle lowercase upper bound')
  t.equals(caesarCipher('ab', -4), 'wx', 'should handle lowercase lower bound')
  t.equals(caesarCipher('YZ', 4), 'CD', 'should handle uppercase upper bound')
  t.equals(caesarCipher('AB', -4), 'WX', 'should handle uppercase lower bound')
  t.equals(caesarCipher('H ola!', 4), 'L spe!', 'should ignore non-alpha chars')
})
