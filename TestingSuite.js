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

const randomNodeGenerator = (obj) => {

    // while ()
    let row = Math.floor(Math.random() * 4);
    let col = Math.floor(Math.random() * 4);

    let node = [row, col]; // have I added this to visited?

    // if (!obj[`r${row}`] || !obj[`c${col}`]) { // also check if < 2
        // obj[`r${row}`] = 1
        // obj[`c${col}`] = 1
    // }
    console.log(row)
    console.log(col)


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

const randomTileModifier = (matrix, obj, visited) => {
    let randomNode = randomNodeGenerator(obj, visited);
    let randomColor = randomColorGenerator();

    // Keep track of tiles visited?
    // let visited = new Set();
    let [row, col] = randomNode;
    matrix[row][col] = randomColor;
};
// randomTileModifier(matrix1)

const randomizeBoard = (matrix) => {
    let rowColTracker = {};
    let visited = new Set();
    let count = randomTotalGenerator();

    while (count > 0) {
        randomTileModifier(matrix, rowColTracker, visited);

        count--;
    };
}

// console.log(randomNodeGenerator())
// randomizeBoard(matrix1)
// console.log(matrix1)



//! Notes
const rngNode = (obj) => {


    let row = Math.floor(Math.random() * 4);
    let col = Math.floor(Math.random() * 4);

    let node = [row, col]; // have I added this to visited?




    return node;
};

const checker = () => {
    let currNode = rngNode()
    
    // if (!obj[`r${row}`] || !obj[`c${col}`]) { // also check if < 2
// obj[`r${row}`] = 1
// obj[`c${col}`] = 1
// }
        while ("currNode is in visited and fails object checks") {
            currNode = rngNode()
        }

        const randomTileModifier = (matrix, obj) => {
            let randomColor = randomColorGenerator();
            let [row, col] = currNode;
            matrix[row][col] = randomColor;
        };

    console.log(row)
    console.log(col)
}