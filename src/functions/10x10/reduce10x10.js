const randomTotalGenerator = () => {
    const randomTotal = [50, 48, 46, 44, 42];
    const randomIndex = Math.floor(Math.random() * randomTotal.length);

    return randomTotal[randomIndex];
};

const randomTileFinder = (grid) => {
    const randRow = Math.floor(Math.random() * 10);
    const randCol = Math.floor(Math.random() * 10);

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

        if (rowVals > 8) return false;
        if (colVals > 8) return false;
    };

    return true;
};

const reduce10x10 = (currentGrid) => {
    let randomTotal = randomTotalGenerator();
    const grid = currentGrid.map(inner => inner.slice());

    while (randomTotal > 0) {
        const randomTile = randomTileFinder(grid);
        const [row, col] = randomTile;

        let rowNum = row.split('').splice(1, 1).join('');
        let colNum = col.split('').splice(1, 1).join('');
        grid[rowNum][colNum] = null;

        randomTotal--;
    };

    const rows = { r0: [], r1: [], r2: [], r3: [], r4: [], r5: [], r6: [], r7:[], r8: [], r9: [] };
    const cols = { c0: [], c1: [], c2: [], c3: [], c4: [], c5: [], c6: [], c7: [], c8: [], c9: [] };
    for (let row = 0; row < grid.length; row++) {
        let currRow = `r${row}`;

        for (let col = 0; col < grid[row].length; col++) {
            let currCol = `c${col}`;

            rows[currRow].push(grid[row][col]);
            cols[currCol].push(grid[row][col]);
        };
    };

    if (!checkObj(rows, cols)) return reduce10x10(currentGrid);

    return grid;
};

export default reduce10x10;