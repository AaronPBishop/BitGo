import buildValid4x4 from '../functions/4x4/buildValid4x4.js';
import reduce4x4 from '../functions/4x4/reduce4x4.js';
import buildValid6x6 from '../functions/6x6/buildValid6x6.js';
import reduce6x6 from '../functions/6x6/reduce6x6.js';


const initialState = {
    board: [],
    presetCoords: [],
    difficulty: '',
    hasWon: false,
    completionMsg: ''
};


export const setDifficulty = (difficulty) => {
    return {
        type: 'SET_DIFFICULTY',
        payload: difficulty
    };
};

export const buildValidBoard = () => {
    return { type: 'BUILD_VALID_BOARD' };
};

export const setTileVal = (row, col) => {
    return {
        type: 'SET_TILE_VAL',
        payload1: row,
        payload2: col
    };
};

export const setHasWon = () => {
    return { type: 'SET_HAS_WON' };
};

export const setCompletionMsg = (msg) => {
    return {
        type: 'SET_COMPLETION_MSG',
        payload: msg
    };
};

export const resetBoard = () => {
    return {
        type: 'RESET_BOARD'
    };
};


// MAIN REDUCER
const gameReducer = (state = initialState, action) => {
    const currentState = { ...state };

    switch (action.type) {
        case 'SET_DIFFICULTY': {
            currentState.difficulty = action.payload;

            return currentState;
        };

        case 'BUILD_VALID_BOARD': {
            if (currentState.difficulty === '4x4') {
                const reducedBoard = reduce4x4(buildValid4x4());

                currentState.board = reducedBoard;

                for (let i = 0; i < reducedBoard.length; i++) {
                    for (let j = 0; j < reducedBoard[i].length; j++) {
                        if (reducedBoard[i][j] !== null) currentState.presetCoords.push([i, j])
                    };
                };


                return currentState;
            };

            if (currentState.difficulty === '6x6') {
                const reducedBoard = reduce6x6(buildValid6x6());

                currentState.board = reducedBoard;

                for (let i = 0; i < reducedBoard.length; i++) {
                    for (let j = 0; j < reducedBoard[i].length; j++) {
                        if (reducedBoard[i][j] !== null) currentState.presetCoords.push([i, j])
                    };
                };


                return currentState;
            };

            return currentState;
        };

        case 'SET_TILE_VAL': {
            const valMap = {
                null: 0,
                0: 1,
                1: null
            };

            currentState.board[action.payload1][action.payload2] = valMap[currentState.board[action.payload1][action.payload2]];

            return currentState;
        };

        case 'SET_HAS_WON': {
            currentState.hasWon = true;
            currentState.completionMsg = '';

            return currentState;
        };

        case 'SET_COMPLETION_MSG': {
            currentState.completionMsg = action.payload;

            return currentState;
        };

        case 'RESET_BOARD': {
            currentState.board = [];  
            currentState.presetCoords = [];  
            currentState.difficulty = '';
            currentState.hasWon = false;
            currentState.completionMsg = '';
        };
        
        default: return currentState;
    };
};

export default gameReducer;