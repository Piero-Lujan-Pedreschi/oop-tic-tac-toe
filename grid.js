"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const cell_1 = require("./cell");
class Grid {
    constructor(size = 3) {
        this.size = size;
        this.gridItems = this.initializeGrid(size);
        this.isGridFull = false;
    }
    initializeGrid(size) {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                this.gridItems[row][col] = new cell_1.Cell();
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
    updateGrid() {
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
exports.Grid = Grid;
