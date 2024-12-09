"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var cell_1 = require("./cell");
var Grid = /** @class */ (function () {
    function Grid(size) {
        if (size === void 0) { size = 3; }
        this.size = size;
        this.gridItems = this.initializeGrid(size);
        this.isGridFull = false;
    }
    Grid.prototype.initializeGrid = function (size) {
        for (var row = 0; row < size; row++) {
            for (var col = 0; col < size; col++) {
                this.gridItems[row][col] = new cell_1.Cell();
            }
        }
        return this.gridItems;
    };
    Grid.prototype.checkFullGrid = function () {
        for (var row = 0; row < this.size; row++) {
            for (var col = 0; col < this.size; col++) {
                if (this.gridItems[row][col].isValid() === true) {
                    break;
                }
            }
        }
        this.isGridFull = true;
        return this.isGridFull;
    };
    Grid.prototype.updateGrid = function () {
        var _loop_1 = function (row) {
            // Generate each row's text as `grid[row][col]`
            var rowText = this_1.gridItems[row]
                .map(function (_, col) { return "grid[".concat(row, "][").concat(col, "]"); })
                .join(" | ");
            console.log(rowText);
            if (row < this_1.gridItems.length - 1) {
                // Print a separator line between rows
                console.log("-".repeat(rowText.length));
            }
        };
        var this_1 = this;
        for (var row = 0; row < this.gridItems.length; row++) {
            _loop_1(row);
        }
    };
    return Grid;
}());
exports.Grid = Grid;
