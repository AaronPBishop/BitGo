import buildValid4x4 from '../functions/4x4/buildValid4x4.js';
import reduce4x4 from '../functions/4x4/reduce4x4.js';
import buildValid6x6 from '../functions/6x6/buildValid6x6.js';
import reduce6x6 from '../functions/6x6/reduce6x6.js';
import makeBoard from '../functions/makeBoard.js';
import reduce8x8 from '../functions/8x8/reduce8x8.js';
import reduce10x10 from '../functions/10x10/reduce10x10.js';

const initialState = {
    board: [],
    presetCoords: [],
    difficulty: '',
    hasWon: false,
    completionMsg: '',
    beatRecord: false
};

// ACTION CREATORS
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

export const setBeatRecord = (bool) => {
    return {
        type: 'SET_BEAT_RECORD',
        payload: bool
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
            let reducedBoard;

            switch (currentState.difficulty) {
                case '4x4': {
                    reducedBoard = reduce4x4(buildValid4x4());
                    currentState.board = reducedBoard;
                    break;
                };

                case '6x6': {
                    reducedBoard = reduce6x6(buildValid6x6());
                    currentState.board = reducedBoard;
                    break;
                };

                case '8x8': {
                    reducedBoard = reduce8x8(makeBoard(8));
                    currentState.board = reducedBoard;
                    break;
                };

                case '10x10': {
                    reducedBoard = reduce10x10(makeBoard(10));
                    currentState.board = reducedBoard;
                    break;
                };
            };

            for (let i = 0; i < reducedBoard.length; i++) {
                for (let j = 0; j < reducedBoard[i].length; j++) {
                    if (reducedBoard[i][j] !== null) currentState.presetCoords.push([i, j])
                };
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

        case 'SET_BEAT_RECORD': {
            currentState.beatRecord = action.payload;

            return currentState;
        };

        case 'RESET_BOARD': {
            currentState.board = [];  
            currentState.presetCoords = [];  
            currentState.difficulty = '';
            currentState.hasWon = false;
            currentState.completionMsg = '';
            currentState.beatRecord = false;
        };
        
        default: return currentState;
    };
};

export default gameReducer;