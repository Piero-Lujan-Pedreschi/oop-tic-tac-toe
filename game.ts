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
  private rl: readline.Interface;
  private inputRow: number | null = null;
  private inputCol: number | null = null;

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
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  startGame() {
    console.log("hi");
    for (let i = 0; i < 9; i++) {
      if (this.playerTurn === "X") {
        this.getInput();
        this.xTurn();
        this.checkWin();
      }
      if (this.playerTurn === "O") {
        this.getInput();
        this.xTurn();
        this.checkWin();
      }
    }
    if (this.grid.checkFullGrid()) {
      this.displayTie();
    }
  }

//   getInput() {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     let row: number;
//     let col: number;

//     rl.question(this.prompt, (answer) => {
//       rl.close();
//     });
//   }

  async getInput(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.rl.question(this.prompt, (answer) => {
        const [row, col] = answer.split(" ").map(Number);

        if (!isNaN(row) && !isNaN(col)) {
          this.inputRow = row; 
          this.inputCol = col;
          resolve();
        } else {
          reject(
            new Error(
              "Invalid input. Please enter two numbers separated by a space."
            )
          );
        }
      });
    });
  }

  close(): void {
    this.rl.close();
  }

  xTurn() {
    if (this.grid[this.inputRow][this.inputCol].isValid()) {
      this.grid[this.inputRow][this.inputCol].value = "X";
      this.playerXCoords.push([this.inputRow, this.inputCol]);
      this.playerTurn = "O";
    }
  }

  oTurn(row: number, col: number) {
    if (this.grid[row][col].isValid()) {
      this.grid[row][col].value = "O";
      this.playerOCoords.push([row, col]);
      this.playerTurn = "X";
    }
  }

  checkWin() {
    for (let i = 0; i < this.winCoordinates.length; i++) {
      if (this.winCoordinates[i] === this.playerXCoords.sort()) {
        this.displayWin("X");
        break;
      } else if (this.winCoordinates[i] === this.playerOCoords.sort()) {
        this.displayWin("O");
        break;
      }
    }
  }

  displayWin(winner: CellValueType) {
    console.log(`${winner} has won the game!`);
  }

  displayTie() {
    console.log("Game is a tie.");
  }
}
