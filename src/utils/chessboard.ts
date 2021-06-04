export enum Cell {
  EMPTY = 0,
  PIECE,
}

export type Board = Cell[][]

export class ChessBoard {
  private _board: Board = []
  private _size = 0

  constructor(size?: number) {
    if (size && size > 0) {
      this._board = Array(size)
        .fill([])
        .map(() => Array(size).fill(Cell.EMPTY))
      this._size = size
    }
  }

  get size(): number {
    return this._size
  }

  get board(): Board {
    return this._board.slice().map((col) => col.slice())
  }

  public init(board: Board = []): void {
    if (board.length !== board[0]?.length) {
      throw new Error('Input board must be NxN')
    }

    this._board = board.slice().map((col) => col.slice())
  }

  public toggleCell(row: number, col: number): void {
    if (!this.isCellInBounds(row, col)) {
      throw new RangeError(`Out of bounds cell: (${row},${col})`)
    }
    this._board[row][col] =
      this._board[row][col] === Cell.EMPTY ? Cell.PIECE : Cell.EMPTY
  }

  public isValidRookPlacement(row: number, col: number): boolean {
    if (!this.isCellInBounds(row, col)) {
      throw new RangeError(`Out of bounds cell: (${row},${col})`)
    }
    return this.isRowEmpty(row) && this.isColEmpty(col)
  }

  private isCellInBounds(row: number, col: number): boolean {
    return this.isRowInBounds(row) && this.isColInBounds(col)
  }

  private isRowInBounds(row: number): boolean {
    return row >= 0 && row < this._board.length
  }

  private isColInBounds(col: number): boolean {
    return col >= 0 && col < this._board[0]?.length
  }

  private isRowEmpty(row: number): boolean {
    return this._board[row].every((cell) => cell === Cell.EMPTY)
  }

  private isColEmpty(col: number): boolean {
    return this._board.every((row) => row[col] === Cell.EMPTY)
  }
}
