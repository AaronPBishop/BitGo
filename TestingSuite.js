// Instantiate a new instance of the board each time the game is loaded

// class GameBoard {
//   constructor(matrix) {
//     this.matrix = matrix;
//   };

// Currently, this method randomly sorts the tiles in each row
//   createMatrix(matrix) {
//     matrix = this.matrix;

//     for (let k = 0; k < matrix.length; k++) {
//       let i = matrix[k].length;
//       if (i == 0) return false;
//       else {
//         while (--i) {
//           let j = Math.floor(Math.random() * (i + 1));
//           let tempi = matrix[k][i];
//           let tempj = matrix[k][j];
//           matrix[k][i] = tempj;
//           matrix[k][j] = tempi;
//         };
//       };
//     };
//     return matrix;
//   };
// };

// Random number generators

// const randRowOrCol = () => {
//     return Math.floor(Math.random() * 3);
//   };
  
//   const randTotal = () => {
//     let totalArr = [4, 5];
//     let randomIndex = Math.floor(Math.random() * totalArr.length);
//     return totalArr[randomIndex];
//   };
  
//   const getRandNode = (matrix, row) => {
//     let randomIndex = 0;
//     for (let i = 0; i < matrix[row].length; i++) {
//       randomIndex = Math.floor(Math.random() * matrix[row].length);
//     };
//     return matrix(randomIndex);
//   };
  
//   console.log(getRandNode(matrix, 1))

let r1c1 = "rgb(41, 38, 38);"
let r1c2 = "rgb(41, 38, 38);"
let r1c3 = "rgb(41, 38, 38);"
let r1c4 = "rgb(41, 38, 38);"

let r2c1 = "rgb(41, 38, 38);" 
let r2c2 = "rgb(41, 38, 38);" 
let r2c3 = "rgb(41, 38, 38);"
let r2c4 = "rgb(41, 38, 38);"

let r3c1 = "rgb(41, 38, 38);"
let r3c2 = "rgb(41, 38, 38);"
let r3c3 = "rgb(41, 38, 38);"
let r3c4 = "rgb(41, 38, 38);"

let r4c1 = "rgb(41, 38, 38);"
let r4c2 = "rgb(41, 38, 38);"
let r4c3 = "rgb(41, 38, 38);"
let r4c4 = "rgb(41, 38, 38);"


let matrix1 = [
  [r1c1, r1c2, r1c3, r1c4],
  [r2c1, r2c2, r2c3, r2c4],
  [r3c1, r3c2, r3c3, r3c4],
  [r4c1, r4c2, r4c3, r4c4],
];

const randomNodeGenerator = () => {
    let row = Math.floor(Math.random() * 4);
    let col = Math.floor(Math.random() * 4);

    let node = [row, col];

    return node;
};

const randomTotalGenerator = () => {
    let randomTotal = [4, 5];
    let randomIndex = Math.floor(Math.random() * randomTotal.length);
    return randomTotal[randomIndex];
};

const randomColorGenerator = () => {
    let randomColor = ["blue", "red"];
    let randomIndex = Math.floor(Math.random() * randomColor.length);
    return randomColor[randomIndex];
};

const randomTileModifier = (matrix) => {
    let randomNode = randomNodeGenerator();
    let randomColor = randomColorGenerator();

    // Keep track of tiles visited?
    // let visited = new Set();
    let [row, col] = randomNode;
    let randomTile = matrix[row][col];

    randomTile = randomColor;
};
// randomTileModifier(matrix1)

const randomizeBoard = (matrix) => {
    let count = randomTotalGenerator();
    while (count > 0) {
        randomTileModifier(matrix);
        count--;
    };
}

randomizeBoard(matrix1)
console.log(matrix1)