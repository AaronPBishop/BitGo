const randomTotalGenerator = () => {
    const randomTotal = [22, 23, 24, 25, 26];
    const randomIndex = Math.floor(Math.random() * randomTotal.length);

    return randomTotal[randomIndex];
};

const randomTileFinder = (grid) => {
    const randRow = Math.floor(Math.random() * 6);
    const randCol = Math.floor(Math.random() * 6);

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

        if (rowVals > 4) return false;
        if (colVals > 4) return false;
    };

    return true;
};

const reduce6x6 = (currentGrid) => {
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

    if (!checkObj(rows, cols)) return reduce6x6(currentGrid);

    return grid;
};

export default reduce6x6;