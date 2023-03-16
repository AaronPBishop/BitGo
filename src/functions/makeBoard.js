const randValue = () => {
    if (Math.random() > 0.5) return 1;

    return 0;
};
  
const tryMakeBoard = (size) => {
    const emptyGrid = new Array(size);

    const evenCount = (size / 2);
    
    for (let row = 0; row < size; row ++) {
      emptyGrid[row] = [];

      for (let col = 0; col < size; col ++) {
        let newBit = randValue();
        let valid = false;

        for (let tries = 0; tries < 2; tries++) {
          emptyGrid[row][col] = newBit;

          valid = col < 2 || !(emptyGrid[row][col] === emptyGrid[row][col - 1] && emptyGrid[row][col] === emptyGrid[row][col - 2]);

          if (!valid) { 
            newBit = Number(!newBit); 

            continue;
          };

          valid = row < 2 || !(emptyGrid[row][col] === emptyGrid[row - 1][col] && emptyGrid[row][col] === emptyGrid[row - 2][col]);

          if (!valid) { 
            newBit = Number(!newBit); 

            continue;
          };

          if (col === size -1) {
            let sum = 0;

            for (let i = 0; i <= col; i++) {
              if (emptyGrid[row][i]) sum++;
            };

            if (sum !== evenCount) return false;
          };

          if (row === size -1) {
            let sum = 0;

            for (let i = 0; i <= row; i++) {
              if (emptyGrid[i][col]) sum++;
            };

            if (sum !== evenCount) return false;
          };

          break; 
        };
       
        if (!valid) return false;
      };
    };
  
    const visited = new Set();

    for (let i = 0; i < size; i++) {
      visited.add(emptyGrid[i].join(''));
    };

    if (visited.size !== size) return false;

    visited.clear();

    for (let i = 0; i < size; i++) {
      visited.add(emptyGrid.map(tiles => tiles[i]).join(''))
    };

    if (visited.size !== size) return false;  

    return emptyGrid;
};
  
const makeBoard = (size, count = 10000000) => {
    while (count > 0) {
        const board = tryMakeBoard(size); 

        if (board) return board;

        count--;
    };

    return false;
};

export default makeBoard;