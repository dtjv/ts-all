import { test } from 'tap'
import { ChessBoard, Cell, Board } from '../../src/utils/chessboard'

/*
function setup() {
  const board = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ]
}
*/

test('ChessBoard', async ({ test }) => {
  test('constructor w/o parameter', async (t) => {
    const chessboard = new ChessBoard()
    t.isEqual(chessboard.size, 0)
    t.deepEqual(chessboard.board, [])
  })

  test('constructor w/ parameter', async (t) => {
    const chessboard = new ChessBoard(4)
    t.isEqual(chessboard.size, 4)
    t.deepEqual(
      chessboard.board,
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      'should construct an empty board'
    )
  })

  test('init', async (t) => {
    t.test('initilaize w/ input data', async (t) => {
      const chessboard = new ChessBoard()
      const inputboard: Board = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ]

      chessboard.init(inputboard)

      t.deepEqual(
        chessboard.board,
        inputboard,
        'should construct a chess board from input'
      )

      t.notEqual(
        chessboard.board,
        inputboard,
        'should not be the same board in memory'
      )
    })

    t.test('initilaize w/o data', async (t) => {
      const chessboard = new ChessBoard()

      t.throws(
        () => chessboard.init(),
        'should throw when no board is passed in'
      )
    })

    t.test('initilaize w/ bad data', async (t) => {
      const chessboard = new ChessBoard()
      const inputboard: Board = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
      ]

      t.throws(
        () => chessboard.init(inputboard),
        'should throw when board is not square'
      )
    })
  })

  test('setCell', async (t) => {
    t.test('should set a cell', async (t) => {
      const chessboard = new ChessBoard(4)

      chessboard.setCell(0, 0, Cell.PIECE)

      t.deepEqual(
        chessboard.board,
        [
          [1, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        'should set the first cell'
      )
    })

    t.test('should fail on bad input', async (t) => {
      const chessboard = new ChessBoard(4)

      t.throws(
        () => chessboard.setCell(4, 4, Cell.PIECE),
        'should throw when row and column are out of range'
      )
    })
  })

  test('isCellValidForRook', async (t) => {
    t.test('should pass checks', async (t) => {
      const chessboard = new ChessBoard()

      chessboard.init([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ])

      t.true(chessboard.isCellValidForRook(1, 1))
    })

    t.test('should not pass checks', async (t) => {
      const chessboard = new ChessBoard()

      chessboard.init([
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ])

      t.false(chessboard.isCellValidForRook(1, 3))
    })

    t.test('should fail on bad input', async (t) => {
      const chessboard = new ChessBoard(4)

      t.throws(
        () => chessboard.isCellValidForRook(4, 4),
        'should throw when row and column are out of range'
      )
    })
  })
})
