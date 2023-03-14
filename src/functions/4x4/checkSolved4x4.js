export const isBoardFull = (board) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            let currTile = board[row][col];

            if (currTile === null) return false;
        };
    };

    return true;
};

const endGameRowsUnique = (board) => {
    const rows = { r0: [], r1: [], r2: [], r3: [] };

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
    const cols = { c0: [], c1: [], c2: [], c3: [] };

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
    const values = { r0: 0, r1: 0, r2: 0, r3: 0 };

    for (let row = 0; row < board.length; row++) {
        const currRow = `r${row}`
        for (let col = 0; col < board[row].length; col++) {
            let currColVal = board[row][col];

            values[currRow] += currColVal;
        };
    };

    let check = 0;
    Object.values(values).forEach(val => {if (Number(val) === 2) check++});

    if (check === 4) return true;
    return false;
};

const endGameColTotals = (board) => {
    const values = { c0: 0, c1: 0, c2: 0, c3: 0 };

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const currCol = `c${col}`
            let currColVal = board[row][col];

            values[currCol] += currColVal;
        };
    };

    let check = 0;
    Object.values(values).forEach(val => {if (Number(val) === 2) check++});

    if (check === 4) return true;
    return false;
};

const checkWin = (board) => {
    if (isBoardFull(board)) {
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
        return { solved: false, msg: '' };
    };
};

const setWin = (board) => {
    let wins = 0;
    if (localStorage.getItem('hasWon')) wins = localStorage.getItem('hasWon');

    if (checkWin(board)) {
        wins++;
        localStorage.setItem('hasWon', wins);

        document.getElementById('timer-current').style.opacity = '0%';
        document.getElementById('timer-best').style.opacity = '0%';

        const buttons = document.querySelectorAll('.buttons');
        buttons.forEach(button => {
            button.style.opacity = '0.8';
            button.style.bottom = '90px';
            button.style.borderBottom = 'none'
            button.disabled = true;
        });
        
        const gameWin = document.getElementById('game-win');
        gameWin.style.display = 'block';
    };
};

const setBest = (board, currMin, currSec, bestMin, bestSec) => {
    if (checkWin(board)) {
        if (localStorage.getItem('hasWon') > 1) {
            if (Number(currMin.innerText) >= Number(bestMin.innerText) && Number(currSec.innerText) >= Number(bestSec.innerText)) return;
            if (Number(currMin.innerText) > Number(bestMin.innerText) && Number(currSec.innerText) <= Number(bestSec.innerText)) return;
        };

        localStorage.setItem('bestMinute', currMin.innerText);
        localStorage.setItem('bestSecond', currSec.innerText);
    };
};

export default checkWin;