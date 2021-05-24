import { test } from 'tap'
import { rockPaperScissors, Choices } from '../src/rockPaperScissors'

test('rockPaperScissors', async (sub) => {
  sub.test('should handle 0 rounds', async (t) => {
    const actual = rockPaperScissors(0)
    const expected: Choices[] = []
    t.deepEquals(actual, expected)
  })

  sub.test('should handle 1 rounds', async (t) => {
    const actual = rockPaperScissors(1)
    const expected: Choices[][] = [
      [Choices.ROCK],
      [Choices.PAPER],
      [Choices.SCISSORS],
    ]
    t.deepEquals(actual, expected)
  })

  sub.test('should handle n > 1 rounds', async (t) => {
    const actual = rockPaperScissors(3)
    const expected: Choices[][] = [
      [Choices.ROCK, Choices.ROCK, Choices.ROCK],
      [Choices.ROCK, Choices.ROCK, Choices.PAPER],
      [Choices.ROCK, Choices.ROCK, Choices.SCISSORS],
      [Choices.ROCK, Choices.PAPER, Choices.ROCK],
      [Choices.ROCK, Choices.PAPER, Choices.PAPER],
      [Choices.ROCK, Choices.PAPER, Choices.SCISSORS],
      [Choices.ROCK, Choices.SCISSORS, Choices.ROCK],
      [Choices.ROCK, Choices.SCISSORS, Choices.PAPER],
      [Choices.ROCK, Choices.SCISSORS, Choices.SCISSORS],
      [Choices.PAPER, Choices.ROCK, Choices.ROCK],
      [Choices.PAPER, Choices.ROCK, Choices.PAPER],
      [Choices.PAPER, Choices.ROCK, Choices.SCISSORS],
      [Choices.PAPER, Choices.PAPER, Choices.ROCK],
      [Choices.PAPER, Choices.PAPER, Choices.PAPER],
      [Choices.PAPER, Choices.PAPER, Choices.SCISSORS],
      [Choices.PAPER, Choices.SCISSORS, Choices.ROCK],
      [Choices.PAPER, Choices.SCISSORS, Choices.PAPER],
      [Choices.PAPER, Choices.SCISSORS, Choices.SCISSORS],
      [Choices.SCISSORS, Choices.ROCK, Choices.ROCK],
      [Choices.SCISSORS, Choices.ROCK, Choices.PAPER],
      [Choices.SCISSORS, Choices.ROCK, Choices.SCISSORS],
      [Choices.SCISSORS, Choices.PAPER, Choices.ROCK],
      [Choices.SCISSORS, Choices.PAPER, Choices.PAPER],
      [Choices.SCISSORS, Choices.PAPER, Choices.SCISSORS],
      [Choices.SCISSORS, Choices.SCISSORS, Choices.ROCK],
      [Choices.SCISSORS, Choices.SCISSORS, Choices.PAPER],
      [Choices.SCISSORS, Choices.SCISSORS, Choices.SCISSORS],
    ]
    t.deepEquals(actual, expected)
  })
})
