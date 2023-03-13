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

// MAIN REDUCER
const gameReducer = (state = initialState, action) => {
    const currentState = { ...state };

    switch (action.type) {
        case 'SET_DIFFICULTY': {
            currentState.difficulty = action.payload;

            return currentState;
        };
        
        default: return currentState;
    };
};

export default gameReducer;