"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
class Cell {
    constructor(cellValue = null, isValidCell = true) {
        this.cellValue = cellValue;
        this.isValidCell = isValidCell;
    }
    set value(value) {
        this.cellValue = value;
        this.isValidCell = false;
    }
    get value() {
        return this.cellValue;
    }
    isValid() {
        return this.cellValue === null;
    }
}
exports.Cell = Cell;
