export type CellValueType = `X` | 'O' | null;


export class Cell {
  constructor(
    private cellValue: CellValueType = null,
    private isValidCell: boolean = true
  ) {}

  set X(value: CellValueType) {
    this.cellValue = value;
    this.isValidCell = false;
  }

  set O(value: CellValueType) {
    this.cellValue = value;
    this.isValidCell = false;
  }

  get X(): CellValueType {
    return this.cellValue;
  }

  get O(): CellValueType {
    return this.cellValue;
  }
}