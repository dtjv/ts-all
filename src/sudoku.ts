type Square = { row: number; col: number }

const EMPTY = 0

function isSquareEmpty(row: number, col: number, board: number[][]): boolean {
  return board[row][col] === EMPTY
}

function isNumInBox(
  num: number,
  row: number,
  col: number,
  board: number[][]
): boolean {
  const s = { r: Math.floor(row / 3) * 3, c: Math.floor(col / 3) * 3 }
  const e = { r: s.r + 3, c: s.c + 3 }

  for (let row = s.r; row < e.r; row += 1) {
    for (let col = s.c; col < e.c; col += 1) {
      if (num === board[row][col]) return true
    }
  }
  return false
}

function isNumInRow(num: number, row: number, board: number[][]): boolean {
  return board[row].includes(num)
}

function isNumInCol(num: number, col: number, board: number[][]): boolean {
  for (const row of board) {
    if (row[col] === num) return true
  }
  return false
}

function isNumValidInSquare(
  num: number,
  row: number,
  col: number,
  board: number[][]
): boolean {
  return (
    !isNumInRow(num, row, board) &&
    !isNumInCol(num, col, board) &&
    !isNumInBox(num, row, col, board)
  )
}

function findEmptySquare(board: number[][]): Square | undefined {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[0].length; col += 1) {
      if (isSquareEmpty(row, col, board)) {
        return { row, col } as Square
      }
    }
  }
  return undefined
}

export function sudoku(board: number[][]): boolean {
  const square = findEmptySquare(board)

  if (square) {
    for (let num = 1; num <= 9; num += 1) {
      if (isNumValidInSquare(num, square.row, square.col, board)) {
        board[square.row][square.col] = num
        if (!sudoku(board)) {
          board[square.row][square.col] = EMPTY
        } else {
          return true
        }
      }
    }
    return false
  }
  return true
}
