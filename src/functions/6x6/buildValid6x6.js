const assembleRows = (row = []) => {
    const permutations = [[1, 0], [1, 1], [0, 1], [0, 0]];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * permutations.length);

        row.push(...permutations[randomIndex]);
    };

    for (let i = 0; i < row.length; i++) {
        const first = row[i];
        const second = row[i + 1];
        const third = row[i + 2];
        
        if (first + second + third === 0) return assembleRows();
        if (first + second + third === 3) return assembleRows();
    };

    let total = 0;
    row.forEach(val => total += val);
    if (total === 3) return row;
    
    return assembleRows();
};

const assembleGrid = (visited = new Set(), grid = []) => {
    while (grid.length < 6) {
        const randomRow = assembleRows();
        if (!visited.has(randomRow.join(''))) {
            visited.add(randomRow.join(''))
            grid.push(randomRow);
        };
    };

    const cols = { c0: [], c1: [], c2: [], c3: [], c4: [], c5: [] };
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let currCol = `c${col}`;
    
            cols[currCol].push(grid[row][col]);
        };
    };

    const colValues = Object.values(cols);
    for (let row = 0; row < colValues.length; row++) {
        for (let col = 0; col < colValues[row].length; col++) {
            const first = colValues[row][col];
            const second = colValues[row][col + 1];
            const third = colValues[row][col + 2];
                
            if (first + second + third === 0) return assembleGrid();
            if (first + second + third === 3) return assembleGrid();
        };
    };

    return grid;
};

const checkColumnTotals = () => {
    const values = { c0: 0, c1: 0, c2: 0, c3: 0, c4: 0, c5: 0 };

    const grid = assembleGrid();
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const currCol = `c${col}`
            let currColVal = grid[row][col];

            values[currCol] += currColVal;
        };
    };

    let check = 0;
    Object.values(values).forEach(val => {if (Number(val) === 3) check++});

    if (check === 6) return grid;

    return checkColumnTotals();
};

const checkColumnsUnique = (visited = new Set()) => {
    const cols = { c0: [], c1: [], c2: [], c3: [], c4: [], c5: [] };

    const grid = checkColumnTotals();
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

const buildValid6x6 = () => checkColumnsUnique();

export default buildValid6x6;