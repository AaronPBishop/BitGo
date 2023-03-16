const setBest = (currSec, currMin, difficulty) => {
    const bestSec = localStorage.getItem(`bestSecond-${difficulty}`);
    const bestMin = localStorage.getItem(`bestMinute-${difficulty}`);

    if (!bestSec || !bestMin) {
        localStorage.setItem(`bestSecond-${difficulty}`, currSec);
        localStorage.setItem(`bestMinute-${difficulty}`, currMin);
        return;
    };

    if (Number(currMin) >= Number(bestMin) && Number(currSec) >= Number(bestSec)) return;
    if (Number(currMin) > Number(bestMin) && Number(currSec) <= Number(bestSec)) return;

    localStorage.setItem(`bestSecond-${difficulty}`, currSec);
    localStorage.setItem(`bestMinute-${difficulty}`, currMin);
};

export default setBest;