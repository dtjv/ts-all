import { test } from 'tap'
import { nRooks } from '../src/nRooks'

test('nRooks', async (t) => {
  const numSolutionsByBoardSize = {
    1: 1,
    2: 2,
    3: 6,
    4: 24,
    5: 120,
  }

  for (const [size, solutionCount] of Object.entries(numSolutionsByBoardSize)) {
    const solution = nRooks(parseInt(size, 10))
    t.isEqual(solution.length, solutionCount)
  }
})
