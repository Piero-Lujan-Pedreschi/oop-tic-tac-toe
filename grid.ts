import { Cell } from './cell';

export class Grid {
  private gridItems: Cell[][];
  private isGridFull: boolean;
  constructor(private size: number = 3) {
    this.gridItems = this.initializeGrid(size);
    this.isGridFull = false;
  }

  initializeGrid(size: number): Cell[][] {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        this.gridItems[row][col] = new Cell();
      }
    }
    return this.gridItems;
  }

  checkFullGrid() {
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.gridItems[row][col].isValid() === true) {
            break;
        }
      }
    }
    this.isGridFull = true;
    return this.isGridFull;
  }

  updateGrid(): void {
    for (let row = 0; row < this.gridItems.length; row++) {
      // Generate each row's text as `grid[row][col]`
      const rowText = this.gridItems[row]
        .map((_, col) => `grid[${row}][${col}]`)
        .join(" | ");
      console.log(rowText);

      if (row < this.gridItems.length - 1) {
        // Print a separator line between rows
        console.log("-".repeat(rowText.length));
      }
    }
  }
}


