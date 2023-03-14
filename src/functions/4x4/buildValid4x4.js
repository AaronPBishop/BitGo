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

const checkColumnsUnique = (visited = new Set()) => {
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

const buildValid4x4 = () => checkColumnsUnique();

export default buildValid4x4;