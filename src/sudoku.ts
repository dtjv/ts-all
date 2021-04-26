type Square = { row: number; col: number; num?: string }

interface BoxRange {
  [key: number]: { s: Square; e: Square }
}

const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const boxes = [
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [0, 0, 0, 1, 1, 1, 2, 2, 2],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [3, 3, 3, 4, 4, 4, 5, 5, 5],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
  [6, 6, 6, 7, 7, 7, 8, 8, 8],
]

const boxRange: BoxRange = {
  0: { s: { row: 0, col: 0 }, e: { row: 2, col: 2 } },
  1: { s: { row: 0, col: 3 }, e: { row: 2, col: 5 } },
  2: { s: { row: 0, col: 6 }, e: { row: 2, col: 8 } },
  3: { s: { row: 3, col: 0 }, e: { row: 5, col: 2 } },
  4: { s: { row: 3, col: 3 }, e: { row: 5, col: 5 } },
  5: { s: { row: 3, col: 6 }, e: { row: 5, col: 8 } },
  6: { s: { row: 6, col: 0 }, e: { row: 8, col: 2 } },
  7: { s: { row: 6, col: 3 }, e: { row: 8, col: 5 } },
  8: { s: { row: 6, col: 6 }, e: { row: 8, col: 8 } },
}

function isNumInBox(num: string, box: number, board: string[][]): boolean {
  const { s, e } = boxRange[box]

  for (let row = s.row; row <= e.row; row += 1) {
    for (let col = s.col; col <= e.col; col += 1) {
      if (num === board[row][col]) return true
    }
  }
  return false
}

function isNumInRow(num: string, row: number, board: string[][]): boolean {
  return board[row].includes(num)
}

function isNumInCol(num: string, col: number, board: string[][]): boolean {
  for (const row of board) {
    if (row[col].includes(num)) return true
  }
  return false
}

function isNumValidInSquare(
  num: string,
  row: number,
  col: number,
  board: string[][]
): boolean {
  const box = boxes[row][col]

  return (
    !isNumInBox(num, box, board) &&
    !isNumInRow(num, row, board) &&
    !isNumInCol(num, col, board)
  )
}

function findNextEmptySquare(
  square: Square,
  board: string[][]
): Square | undefined {
  const size = board.length

  for (let i = square.row; i < size; i += 1) {
    const col = i === square.row ? square.col : 0

    for (let j = col; j < size; j += 1) {
      if (board[i][j] === '.') {
        return { row: i, col: j } as Square
      }
    }
  }

  return undefined
}

function findNextValidNumForSquare(square: Square, board: string[][]): string {
  let index = square.num ? parseInt(square.num) : 0

  while (index < NUMBERS.length) {
    if (isNumValidInSquare(NUMBERS[index], square.row, square.col, board)) {
      return NUMBERS[index]
    }
    index += 1
  }

  return '-1'
}

export function sudoku(board: string[][]): string[][] {
  const visited = []
  let square: Square | undefined = { row: 0, col: 0 }

  square = findNextEmptySquare(square, board)

  while (square) {
    const num = findNextValidNumForSquare(square, board)

    if (num !== '-1') {
      board[square.row][square.col] = num
      visited.push({ ...square, num })
      square = findNextEmptySquare(square, board)
    } else {
      square = visited.pop()
      if (square) {
        board[square.row][square.col] = '.'
      }
    }
  }

  return board
}
