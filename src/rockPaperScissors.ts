/**
 *
 * Given the number of rounds to play a game of "rock, paper, scissors", return
 * all possible sequences of throws for a single player.
 *
 * Example:
 *   console.log(rockPaperScissors(3))
 *
 *   // expected output
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 *    ..etc...
 *   ]
 *
 * Example:
 *   console.log(rockPaperScissors(5))
 *
 *   // expected output
 *   [["rock", "rock", "rock", "rock", "rock"],
 *    ...etc...
 *    ]
 *
 * A quick explanation:
 *
 * Your choices are [r, p, s].
 *
 * On the first throw you throw 'r'. On your second throw, you have the same 3
 * choices. Let's say you throw an 'r' again. On your third throw, you again
 * have the same 3 choices - so you throw an 'r'.
 *
 * The decision tree looks like this:
 *
 *              r      p     s
 *           /  |  \
 *          r   p   s
 *        / | \
 *       r  p  s
 *
 * So, possible throwing scenarios are:
 *
 * rrr, rrp, rrs
 * rpr, rpp, rps
 * rsr, rsp, rss
 *
 * This pattern is the same for every level.
 */

export enum Choices {
  ROCK,
  PAPER,
  SCISSORS,
}

const choices = [Choices.ROCK, Choices.PAPER, Choices.SCISSORS]

export const rockPaperScissors = (rounds: number): Choices[][] => {
  let result: Choices[][] = []

  if (rounds > 0) {
    if (rounds === 1) {
      return choices.map((choice) => [choice])
    }

    const partials = rockPaperScissors(rounds - 1)

    for (const choice of choices) {
      result = [...result, ...partials.map((partial) => [choice, ...partial])]
    }
  }

  return result
}
