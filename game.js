"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var grid_1 = require("./grid");
var readline = require("readline");
var Game = /** @class */ (function () {
    function Game() {
        // this.winner = null;
        this.playerXCoords = [];
        this.playerOCoords = [];
        this.playerTurn = "X";
        this.winCoordinates = [[[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ];
        this.prompt = "It is now ".concat(this.playerTurn, "'s turn.");
        this.grid = new grid_1.Grid();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.inputRow = null;
        this.inputCol = null;
    }
    Game.prototype.startGame = function () {
        console.log("hi");
        this.grid.updateGrid();
        for (var i = 0; i < 9; i++) {
            if (this.playerTurn === "X") {
                this.getInput();
                this.xTurn();
                this.checkWin();
            }
            if (this.playerTurn === "O") {
                this.getInput();
                this.oTurn();
                this.checkWin();
            }
        }
        if (this.grid.checkFullGrid()) {
            this.displayTie();
        }
    };
    Game.prototype.getInput = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.rl.question(_this.prompt, function (answer) {
                            var _a = answer.split(" ").map(Number), row = _a[0], col = _a[1];
                            if (!isNaN(row) && !isNaN(col)) {
                                _this.inputRow = row;
                                _this.inputCol = col;
                                resolve();
                            }
                            else {
                                reject(new Error("Invalid input. Please enter two numbers separated by a space."));
                            }
                            _this.rl.close();
                        });
                    })];
            });
        });
    };
    Game.prototype.xTurn = function () {
        if (typeof this.inputRow === "number" && typeof this.inputCol === "number") {
            if (this.grid.gridItems[this.inputRow][this.inputCol].isValid()) {
                this.grid.gridItems[this.inputRow][this.inputCol].value = "X";
                this.grid.updateGrid();
                this.playerXCoords.push([this.inputRow, this.inputCol]);
                this.playerTurn = "O";
            }
        }
    };
    Game.prototype.oTurn = function () {
        if (typeof this.inputRow === "number" && typeof this.inputCol === "number") {
            if (this.grid.gridItems[this.inputRow][this.inputCol].isValid()) {
                this.grid.gridItems[this.inputRow][this.inputCol].value = "O";
                this.grid.updateGrid();
                this.playerOCoords.push([this.inputRow, this.inputCol]);
                this.playerTurn = "X";
            }
        }
    };
    Game.prototype.checkWin = function () {
        for (var i = 0; i < this.winCoordinates.length; i++) {
            if (this.winCoordinates[i] === this.playerXCoords.sort()) {
                this.displayWin("X");
                break;
            }
            else if (this.winCoordinates[i] === this.playerOCoords.sort()) {
                this.displayWin("O");
                break;
            }
        }
    };
    Game.prototype.displayWin = function (winner) {
        console.log("".concat(winner, " has won the game!"));
    };
    Game.prototype.displayTie = function () {
        console.log("Game is a tie.");
    };
    return Game;
}());
exports.Game = Game;
