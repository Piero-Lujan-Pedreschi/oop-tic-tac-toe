export type CellValueType = `X` | 'O' | null;
export class Cell {
    
  constructor(
    private cellValue: CellValueType = null,
    private isValidCell: boolean = true
  ) {}

  set value(value: CellValueType) {
    this.cellValue = value;
    this.isValidCell = false;
  }

  get value(): CellValueType {
    return this.cellValue;
  }

  isValid() {
    return this.cellValue === null;
  }
}