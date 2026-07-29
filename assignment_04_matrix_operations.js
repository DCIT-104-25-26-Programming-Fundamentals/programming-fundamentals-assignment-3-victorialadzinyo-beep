// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// Function to read a matrix from user input
function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const line = readlineSync.question(`Enter row ${i + 1}: `);
        const row = line.split(' ').map(Number);
        matrix.push(row);
    }
    return matrix;
}

// Function to display a matrix neatly
function printMatrix(label, matrix) {
    console.log(label);
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = '';
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += String(matrix[i][j]).padStart(5);
        }
        console.log(rowStr);
    }
}

// Part A: Transpose a matrix (rows become columns, columns become rows)
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

// Part B: Add two matrices of the same size (element-wise)
function addMatrices(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        const newRow = [];
        for (let j = 0; j < a[i].length; j++) {
            newRow.push(a[i][j] + b[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

// Part C: Multiply matrix A (M x N) by matrix B (N x P), result is M x P
function multiplyMatrices(a, b, m, n, p) {
    const result = [];
    for (let i = 0; i < m; i++) {
        const newRow = [];
        for (let j = 0; j < p; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += a[i][k] * b[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function main() {
    // ---------------- PART A: TRANSPOSE ----------------
    console.log("=== PART A: TRANSPOSE ===");
    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");

    const matrix = readMatrix(rows, cols);
    printMatrix("Original Matrix:", matrix);

    const transposed = transposeMatrix(matrix);
    printMatrix("Transposed Matrix:", transposed);

    // ---------------- PART B: ADD TWO MATRICES ----------------
    console.log("\n=== PART B: ADD TWO MATRICES ===");
    const addRows = readlineSync.questionInt("Enter number of rows: ");
    const addCols = readlineSync.questionInt("Enter number of columns: ");

    console.log("Enter values for Matrix A:");
    const matA = readMatrix(addRows, addCols);

    console.log("Enter values for Matrix B:");
    const matB = readMatrix(addRows, addCols);

    const sumResult = addMatrices(matA, matB);

    printMatrix("Matrix A:", matA);
    printMatrix("Matrix B:", matB);
    printMatrix("Sum (A + B):", sumResult);

    // ---------------- PART C: MULTIPLY TWO MATRICES ----------------
    console.log("\n=== PART C: MULTIPLY TWO MATRICES ===");
    const m = readlineSync.questionInt("Enter rows of Matrix A (M): ");
    const n = readlineSync.questionInt("Enter columns of Matrix A / rows of Matrix B (N): ");
    const p = readlineSync.questionInt("Enter columns of Matrix B (P): ");

    console.log("Enter values for Matrix A:");
    const mulA = readMatrix(m, n);

    console.log("Enter values for Matrix B:");
    const mulB = readMatrix(n, p);

    const mulResult = multiplyMatrices(mulA, mulB, m, n, p);

    printMatrix("Matrix A:", mulA);
    printMatrix("Matrix B:", mulB);
    printMatrix("Product (A x B):", mulResult);
}

main();