// // Instantiate a new instance of the board each time the game is loaded
// class GameBoard {
//   constructor(matrix) {
//     this.matrix = matrix;
//   };

// // Currently, this method randomly sorts the tiles in each row
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

let r1c1 = 0
let r1c2 = 1
let r1c3 = 2
let r1c4 = 3

let matrix = [
  [r1c1, r1c2, r1c3, r1c4],
  // [r2c1, r2c2, r2c3, r2c4],
  // [r3c1, r3c2, r3c3, r3c4],
  // [r4c1, r4c2, r4c3, r4c4],
];

const randRowOrCol = () => {
  return Math.floor(Math.random() * 3);
};

const randTotal = () => {
  let totalArr = [4, 5];
  let randomIndex = Math.floor(Math.random() * totalArr.length);
  return totalArr[randomIndex];
};

const getRandNode = (matrix, row) => {
  let randomIndex = 0;
  for (let i = 0; i < matrix[row].length; i++) {
    randomIndex = Math.floor(Math.random() * matrix[row].length);
  };
  return matrix(randomIndex);
};

console.log(getRandNode(matrix, 1))