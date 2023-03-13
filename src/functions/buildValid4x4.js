const assembleRows = (row = []) => {
    if (row.length === 4) {
        let total = 0;
        row.forEach(val => total += val);

        if (total === 2) return row;
        return assembleRows();
    };

    row.push(Math.floor(Math.random() * 2));

    return assembleRows(row);
};

const assembleGrid = (visited = new Set(), grid = []) => {
    if (grid.length === 4) return grid;

    const randomRow = assembleRows();
    if (!visited.has(randomRow.join(''))) {
        visited.add(randomRow.join(''))
        grid.push(randomRow);
    };

    return assembleGrid(visited, grid);
};

const checkColTotals = () => {
    const values = { c0: 0, c1: 0, c2: 0, c3: 0 };

    const grid = assembleGrid();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const currCol = `c${col}`
            let currColVal = grid[row][col];

            values[currCol] += currColVal;
        };
    };

    let check = 0;
    Object.values(values).forEach(val => {if (Number(val) === 2) check++});

    if (check === 4) return grid;

    return checkColTotals();
};

export const checkColumnsUnique = (visited = new Set()) => {
    const cols = { c0: [], c1: [], c2: [], c3: [] };

    const grid = checkColTotals();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let currCol = `c${col}`;

            cols[currCol].push(grid[row][col]);
        };
    };

    const colValues = Object.values(cols);
    for (let col = 0; col < colValues.length; col++) {
            let currCol = Number(colValues[col].join(''));

            if (visited.has(currCol)) return checkColumnsUnique();
            visited.add(currCol);
    };

    return grid;
};

const randomTotalGenerator = () => {
    const randomTotal = [11, 12];
    const randomIndex = Math.floor(Math.random() * randomTotal.length);

    return randomTotal[randomIndex];
};

const randomTileFinder = (grid) => {
    const randRow = Math.floor(Math.random() * 4);
    const randCol = Math.floor(Math.random() * 4);

    const tile = [`r${randRow}`, `c${randCol}`];

    if (grid[randRow][randCol] !== null) return tile;

    return randomTileFinder(grid);
};

const checkObj = (rows, cols) => {
    const rowValues = Object.values(rows);
    const colValues = Object.values(cols);
    for (let pillar = 0; pillar < rowValues.length; pillar++) {
        let currentRow = rowValues[pillar];
        let currentCol = colValues[pillar];

        let rowVals = 0;
        currentRow.forEach(val => {if (val !== null) rowVals++});

        let colVals = 0;
        currentCol.forEach(val => {if (val !== null) colVals++});

        if (rowVals > 2) return false;
        if (colVals > 2) return false;
    };

    return true;
};

const buildValid4x4 = (currentGrid) => {
    let randomTotal = randomTotalGenerator();
    const grid = currentGrid.map(inner => inner.slice())

    while (randomTotal > 0) {
        const randomTile = randomTileFinder(grid);
        const [row, col] = randomTile;

        let rowNum = row.split('').splice(1, 1).join('');
        let colNum = col.split('').splice(1, 1).join('');
        grid[rowNum][colNum] = null;

        randomTotal--;
    };

    const rows = { r0: [], r1: [], r2: [], r3: [], r4: [], r5: [] };
    const cols = { c0: [], c1: [], c2: [], c3: [], c4: [], c5: [] };
    for (let row = 0; row < grid.length; row++) {
        let currRow = `r${row}`;

        for (let col = 0; col < grid[row].length; col++) {
            let currCol = `c${col}`;

            rows[currRow].push(grid[row][col]);
            cols[currCol].push(grid[row][col]);
        };
    };

    if (!checkObj(rows, cols)) return buildValid4x4();

    return grid;
};

export default buildValid4x4;