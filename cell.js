"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var Cell = /** @class */ (function () {
    function Cell(cellValue, isValidCell) {
        if (cellValue === void 0) { cellValue = null; }
        if (isValidCell === void 0) { isValidCell = true; }
        this.cellValue = cellValue;
        this.isValidCell = isValidCell;
    }
    Object.defineProperty(Cell.prototype, "value", {
        get: function () {
            return this.cellValue;
        },
        set: function (value) {
            this.cellValue = value;
            this.isValidCell = false;
        },
        enumerable: false,
        configurable: true
    });
    Cell.prototype.isValid = function () {
        return this.cellValue === null;
    };
    return Cell;
}());
exports.Cell = Cell;
