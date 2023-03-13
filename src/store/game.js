import buildValid4x4, { checkColumnsUnique } from '../functions/buildValid4x4.js';

const initialState = {
    board: [],
    difficulty: ''
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
                const validBoard = checkColumnsUnique();
                currentState.board = buildValid4x4(validBoard);
            };

            return currentState;
        };
        
        default: return currentState;
    };
};

export default gameReducer;