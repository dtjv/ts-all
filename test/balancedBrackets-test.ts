import { test } from 'tap'
import { balancedBrackets } from '../src/balancedBrackets'

test('balancedBrackets', async (t) => {
  t.true(balancedBrackets('()'))
  t.true(balancedBrackets('[(){}]'))
  t.false(balancedBrackets('[()'))
  t.false(balancedBrackets('{'))
  t.false(balancedBrackets('{)'))
})
