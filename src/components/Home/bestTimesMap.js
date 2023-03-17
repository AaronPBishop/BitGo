const bestTimesMap = {
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

export default bestTimesMap;