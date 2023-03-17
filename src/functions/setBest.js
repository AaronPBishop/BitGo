const setBest = (currSec, currMin, difficulty) => {
    const bestSec = localStorage.getItem(`bestSecond-${difficulty}`);
    const bestMin = localStorage.getItem(`bestMinute-${difficulty}`);

    if (!bestSec || !bestMin) {
        localStorage.setItem(`bestSecond-${difficulty}`, currSec);
        localStorage.setItem(`bestMinute-${difficulty}`, currMin);
        return { beatRecord: true };
    };

    if (Number(currMin) >= Number(bestMin) && Number(currSec) >= Number(bestSec)) return { beatRecord: false };
    if (Number(currMin) > Number(bestMin) && Number(currSec) <= Number(bestSec)) return { beatRecord: false };

    localStorage.setItem(`bestSecond-${difficulty}`, currSec);
    localStorage.setItem(`bestMinute-${difficulty}`, currMin);

    return { beatRecord: true };
};

export default setBest;