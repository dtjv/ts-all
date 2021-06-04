import { test } from 'tap'
import { ChessBoard, Board } from '../../src/utils/chessboard'

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

  test('init', async ({ test }) => {
    test('initilaize w/ input data', async (t) => {
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

    test('initilaize w/o data', async (t) => {
      const chessboard = new ChessBoard()

      t.throws(
        () => chessboard.init(),
        'should throw when no board is passed in'
      )
    })

    test('initilaize w/ bad data', async (t) => {
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

  test('setCell', async ({ test }) => {
    test('should set a cell', async (t) => {
      const chessboard = new ChessBoard(4)

      chessboard.toggleCell(0, 0)

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

    test('should fail on bad input', async (t) => {
      const chessboard = new ChessBoard(4)

      t.throws(
        () => chessboard.toggleCell(4, 4),
        'should throw when row and column are out of range'
      )
    })
  })

  test('isCellValidForRook', async ({ test }) => {
    test('should pass checks', async (t) => {
      const chessboard = new ChessBoard()

      chessboard.init([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ])

      t.true(chessboard.isValidRookPlacement(1, 1))
    })

    test('should not pass checks', async (t) => {
      const chessboard = new ChessBoard()

      chessboard.init([
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ])

      t.false(chessboard.isValidRookPlacement(1, 3))
    })

    test('should fail on bad input', async (t) => {
      const chessboard = new ChessBoard(4)

      t.throws(
        () => chessboard.isValidRookPlacement(4, 4),
        'should throw when row and column are out of range'
      )
    })
  })
})
