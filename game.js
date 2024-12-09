"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const grid_1 = require("./grid");
const readline = __importStar(require("readline"));
class Game {
    constructor() {
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
        this.prompt = `It is now ${this.playerTurn}'s turn.`;
        this.grid = new grid_1.Grid();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.inputRow = null;
        this.inputCol = null;
    }
    startGame() {
        console.log("hi");
        this.grid.updateGrid();
        for (let i = 0; i < 9; i++) {
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
    }
    getInput() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.rl.question(this.prompt, (answer) => {
                    const [row, col] = answer.split(" ").map(Number);
                    if (!isNaN(row) && !isNaN(col)) {
                        this.inputRow = row;
                        this.inputCol = col;
                        resolve();
                    }
                    else {
                        reject(new Error("Invalid input. Please enter two numbers separated by a space."));
                    }
                    this.rl.close();
                });
            });
        });
    }
    xTurn() {
        if (typeof this.inputRow === "number" && typeof this.inputCol === "number") {
            if (this.grid.gridItems[this.inputRow][this.inputCol].isValid()) {
                this.grid.gridItems[this.inputRow][this.inputCol].value = "X";
                this.grid.updateGrid();
                this.playerXCoords.push([this.inputRow, this.inputCol]);
                this.playerTurn = "O";
            }
        }
    }
    oTurn() {
        if (typeof this.inputRow === "number" && typeof this.inputCol === "number") {
            if (this.grid.gridItems[this.inputRow][this.inputCol].isValid()) {
                this.grid.gridItems[this.inputRow][this.inputCol].value = "O";
                this.grid.updateGrid();
                this.playerOCoords.push([this.inputRow, this.inputCol]);
                this.playerTurn = "X";
            }
        }
    }
    checkWin() {
        for (let i = 0; i < this.winCoordinates.length; i++) {
            if (this.winCoordinates[i] === this.playerXCoords.sort()) {
                this.displayWin("X");
                break;
            }
            else if (this.winCoordinates[i] === this.playerOCoords.sort()) {
                this.displayWin("O");
                break;
            }
        }
    }
    displayWin(winner) {
        console.log(`${winner} has won the game!`);
    }
    displayTie() {
        console.log("Game is a tie.");
    }
}
exports.Game = Game;
