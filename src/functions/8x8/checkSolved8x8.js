const isBoardFull = (board) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            let currTile = board[row][col];

            if (currTile === null) return false;
        };
    };

    return true;
};

const endGameRowTriplets = (board) => {
    const rows = { r0: [], r1: [], r2: [], r3: [], r4: [], r5: [], r6: [], r7: [] };
    for (let row = 0; row < board.length; row++) {
        let currRow = `r${row}`;
        for (let col = 0; col < board[row].length; col++) {
            rows[currRow].push(board[row][col]);
        };
    };

    const rowValues = Object.values(rows);
    for (let row = 0; row < rowValues.length; row++) {
        for (let col = 0; col < rowValues[row].length; col++) {
            const first = rowValues[row][col];
            const second = rowValues[row][col + 1];
            const third = rowValues[row][col + 2];
                
            if (first + second + third === 0) return false;
            if (first + second + third === 3) return false;
        };
    };

    return true;
};

const endGameColTriplets = (board) => {
    const cols = { c0: [], c1: [], c2: [], c3: [], c4: [], c5: [], c6: [], c7: [] };
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            let currCol = `c${col}`;
    
            cols[currCol].push(board[row][col]);
        };
    };

    const colValues = Object.values(cols);
    for (let row = 0; row < colValues.length; row++) {
        for (let col = 0; col < colValues[row].length; col++) {
            const first = colValues[row][col];
            const second = colValues[row][col + 1];
            const third = colValues[row][col + 2];
                
            if (first + second + third === 0) return false;
            if (first + second + third === 3) return false;
        };
    };

    return true;
};

const endGameRowsUnique = (board) => {
    const rows = { r0: [], r1: [], r2: [], r3: [], r4: [], r5: [], r6: [], r7: [] };
    for (let row = 0; row < board.length; row++) {
        let currRow = `r${row}`;
        for (let col = 0; col < board[row].length; col++) {
            rows[currRow].push(board[row][col]);
        };
    };

    const rowValues = Object.values(rows);
    const visited = new Set();
    for (let row = 0; row < rowValues.length; row++) {
            let currRow = Number(rowValues[row].join(''));

            if (visited.has(currRow)) return false;
            visited.add(currRow);
    };

    return true;
};

const endGameColsUnique = (board) => {
    const cols = { c0: [], c1: [], c2: [], c3: [], c4: [], c5: [], c6: [], c7: [] };
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            let currCol = `c${col}`;

            cols[currCol].push(board[row][col]);
        };
    };

    const colValues = Object.values(cols);
    const visited = new Set();
    for (let col = 0; col < colValues.length; col++) {
            let currCol = Number(colValues[col].join(''));

            if (visited.has(currCol)) return false;
            visited.add(currCol);
    };

    return true;
};

const endGameRowTotals = (board) => {
    const values = { r0: 0, r1: 0, r2: 0, r3: 0, r4: 0, r5: 0, r6: 0, r7: 0 };

    for (let row = 0; row < board.length; row++) {
        const currRow = `r${row}`
        for (let col = 0; col < board[row].length; col++) {
            let currColVal = board[row][col];

            values[currRow] += currColVal;
        };
    };

    let check = 0;
    Object.values(values).forEach(val => {if (Number(val) === 4) check++});

    if (check === 8) return true;
    return false;
};

const endGameColTotals = (board) => {
    const values = { c0: 0, c1: 0, c2: 0, c3: 0, c4: 0, c5: 0, c6: 0, c7: 0 };

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const currCol = `c${col}`
            let currColVal = board[row][col];

            values[currCol] += currColVal;
        };
    };

    let check = 0;
    Object.values(values).forEach(val => {if (Number(val) === 4) check++});

    if (check === 8) return true;
    return false;
};

const checkWin8x8 = (board) => {
    if (isBoardFull(board)) {
        if (endGameRowTriplets(board)) {
            if (endGameColTriplets(board)) {
                if (endGameRowsUnique(board)) {
                    if (endGameColsUnique(board)) {
                        if (endGameRowTotals(board)) {
                            if (endGameColTotals(board)) {
                                return { solved: true, msg: '' };
                            } else {
                                return { solved: false, msg: 'Columns must have an even number of tiles' };
                            };
                        } else {
                            return { solved: false, msg: 'Rows must have an even number of tiles' };
                        };
                    } else {
                        return { solved: false, msg: 'Each column must be unique' };
                    };
                } else {
                    return { solved: false, msg: 'Each row must be unique' };
                };
            } else {
                return { solved: false, msg: 'More than two matching  tiles in a column are not allowed' };
            };
        } else {
            return { solved: false, msg: 'More than two matching  tiles in a row are not allowed' };
        };
    } else {
        return { solved: false, msg: '' };
    };
};

export default checkWin8x8;