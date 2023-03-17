const initialState = {
    clickedPlay: false,
    clickedInstructions: false,
    clickedBestTimes: false
};

// ACTION CREATORS
export const setClickedPlay = () => {
    return { type: 'SET_CLICKED_PLAY' };
};

export const setClickedInstructions = () => {
    return { type: 'SET_CLICKED_INSTRUCTIONS' };
};

export const setClickedBestTimes = () => {
    return { type: 'SET_CLICKED_BEST_TIMES' };
};

export const resetMenuSelections = () => {
    return { type: 'RESET_MENU_SELECTIONS' };
};


// MAIN REDUCER
const menuReducer = (state = initialState, action) => {
    const currentState = { ...state };

    switch (action.type) {
        case 'SET_CLICKED_PLAY': {
            for (let key in currentState) currentState[key] = false;
            currentState.clickedPlay = true;

            return currentState;
        };

        case 'SET_CLICKED_INSTRUCTIONS': {
            for (let key in currentState) currentState[key] = false;
            currentState.clickedInstructions = true;

            return currentState;
        };

        case 'SET_CLICKED_BEST_TIMES': {
            for (let key in currentState) currentState[key] = false;
            currentState.clickedBestTimes = true;

            return currentState;
        };

        case 'RESET_MENU_SELECTIONS': {
            for (let key in currentState) currentState[key] = false;

            return currentState;
        };
        
        default: return currentState;
    };
};

export default menuReducer;