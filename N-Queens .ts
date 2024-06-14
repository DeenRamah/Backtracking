class NQueens {
    private size: number;
    private board: number[][];

    constructor(size: number) {
        this.size = size;
        this.board = Array.from({ length: size }, () => Array(size).fill(0));
    }

    private isSafe(row: number, col: number): boolean {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (this.board[i][col] === 1) return false;
        }

        // Check upper left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (this.board[i][j] === 1) return false;
        }

        // Check upper right diagonal
        for (let i = row, j = col; i >= 0 && j < this.size; i--, j++) {
            if (this.board[i][j] === 1) return false;
        }

        return true;
    }

    private solveNQueens(row: number): boolean {
        if (row >= this.size) return true;

        for (let col = 0; col < this.size; col++) {
            if (this.isSafe(row, col)) {
                this.board[row][col] = 1;
                if (this.solveNQueens(row + 1)) return true;
                this.board[row][col] = 0; // Backtrack
            }
        }

        return false;
    }

    public solve(): void {
        if (this.solveNQueens(0)) {
            this.printBoard();
        } else {
            console.log("No solution exists");
        }
    }

    private printBoard(): void {
        for (let i = 0; i < this.size; i++) {
            let row = '';
            for (let j = 0; j < this.size; j++) {
                row += this.board[i][j] === 1 ? 'Q ' : '. ';
            }
            console.log(row);
        }
    }
}

// Example usage
const nQueens = new NQueens(8);
nQueens.solve();
