const initialState = {};

export const setBestTimes = () => { 
    return { type: 'SET_BEST_TIMES' } 
};

const bestTimesReducer = (state = initialState, action) => {
    const currentState = { ...state };

    switch (action.type) {
        case 'SET_BEST_TIMES': {
            const bestTimes = {
                '4x4': {
                    bestSecond: localStorage.getItem('bestSecond-4x4'),
                    bestMinute: localStorage.getItem('bestMinute-4x4')
                },
                '6x6': {
                    bestSecond: localStorage.getItem('bestSecond-6x6'),
                    bestMinute: localStorage.getItem('bestMinute-6x6')
                },
                '8x8': {
                    bestSecond: localStorage.getItem('bestSecond-8x8'),
                    bestMinute: localStorage.getItem('bestMinute-8x8')
                },
                '10x10': {
                    bestSecond: localStorage.getItem('bestSecond-10x10'),
                    bestMinute: localStorage.getItem('bestMinute-10x10')
                }
            };

            Object.assign(currentState, bestTimes);

            return currentState;
        };
        
        default: return currentState;
    };
};

export default bestTimesReducer;