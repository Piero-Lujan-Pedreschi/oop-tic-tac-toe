import { Cell } from './cell';

export class Grid {
    private grid: Cell[][];
    constructor(private size: number = 3) {
        this.initializeGrid(size);
    }

    initializeGrid(size: number): void {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                this.grid[row][col] = new Cell();
            }
        }
    }

    updateGrid(): void {
        for (let row = 0; row < this.grid.length; row++) {
          // Generate each row's text as `grid[row][col]`
          const rowText = this.grid[row]
            .map((_, col) => `grid[${row}][${col}]`)
            .join(" | ");
          console.log(rowText);

          if (row < this.grid.length - 1) {
            // Print a separator line between rows
            console.log("-".repeat(rowText.length));
          }
        }
    }
}


