import { ChessBoard, Board, Cell } from './utils/chessboard'

function solveForRooks(row: number, chessboard: ChessBoard): Board[] {
  let result: Board[] = []

  const isSolved = () =>
    chessboard.board.every(
      (row) => row.filter((cell) => cell === Cell.PIECE).length === 1
    )

  if (isSolved()) {
    result.push(chessboard.board)
  } else {
    while (row < chessboard.size) {
      let col = 0
      while (col < chessboard.size) {
        if (chessboard.isValidRookPlacement(row, col)) {
          chessboard.toggleCell(row, col) // place rook
          result = [...result, ...solveForRooks(row + 1, chessboard)]
          chessboard.toggleCell(row, col) // remove rook
        }
        col += 1
      }
      row += 1
    }
  }

  return result
}

export function nRooks(n: number): Board[] {
  const chessboard = new ChessBoard(n)
  return solveForRooks(0, chessboard)
}
