import { Grid } from "./grid";
import { type CellValueType } from './cell';
import * as readline from "readline";

export type Coordinate = [number, number];
export type CoordinateGroup = Coordinate[];


export class Game {
    private winner: CellValueType;
    private playerXCoords: CoordinateGroup;
    private playerOCoords: CoordinateGroup;
    private playerTurn: CellValueType;
    private winCoordinates: CoordinateGroup[];
    private prompt: string;
    private grid: Grid;

    constructor() {
        this.winner = null;
        this.playerXCoords = [];
        this.playerOCoords = [];
        this.playerTurn = "X";
        this.winCoordinates = [
        [
            [0, 0],
            [0, 1],
            [0, 2],
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
        ],
        [
            [0, 2],
            [1, 2],
            [2, 2],
        ],
        [
            [0, 0],
            [1, 1],
            [2, 2],
        ],
        [
            [0, 2],
            [1, 1],
            [2, 0],
        ],
        ];
        this.prompt = `It is now ${this.playerTurn}'s turn.`;
        this.grid = new Grid();
    }

    getInput() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        console.log(this.prompt);

    }

    xTurn(row: number, col: number) {
        if (this.grid[row][col].isValid()) {
        this.grid[row][col].value = "X";
        this.playerXCoords.push([row, col]);
        this.playerTurn = 'O';
        }
    }

    oTurn(row: number, col: number) {
        if (this.grid[row][col].isValid()) {
        this.grid[row][col].value = "O";
        this.playerOCoords.push([row, col]);
        this.playerTurn = 'X';
        }
    }

    checkWin() {
        for (let i = 0; i < this.winCoordinates.length; i++) {
        if (this.winCoordinates[i] === this.playerXCoords.sort()) {
            this.winner = "X";
            break;
        } else if (this.winCoordinates[i] === this.playerOCoords.sort()) {
            this.winner = "O";
            break;
        }
        }
        this.displayWin(this.winner);
    }

    displayWin(winner: CellValueType) {
        console.log(`${winner} has won the game!`);
    }
}
