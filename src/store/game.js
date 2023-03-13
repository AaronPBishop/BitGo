const initialState = {
    board: []
};

// MAIN REDUCER
const gameReducer = (state = initialState, action) => {
    const currentState = { ...state };

    switch (action.type) {
        default: return currentState;
    };
};

export default gameReducer;