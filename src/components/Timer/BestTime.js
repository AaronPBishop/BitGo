import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const BestTime = () => {
    const hasWon = useSelector(state => state.game.hasWon);
    const difficulty = useSelector(state => state.game.difficulty);

    const bestLocalSec = localStorage.getItem(`bestSecond-${difficulty}`);
    const bestLocalMin = localStorage.getItem(`bestMinute-${difficulty}`);

    const [bestSec, setBestSec] = useState(0);
    const [bestMin, setBestMin] = useState(0);

    useEffect(() => {
        setBestSec(bestLocalSec);
        setBestMin(bestLocalMin);
    }, []);

    return (
        <div style={{
            opacity: !bestSec || !bestMin ? '0' : '1',
            position: hasWon && 'relative',
            top: hasWon && '20vh',
            fontSize: hasWon && '2.5em',
            marginTop: !hasWon && '1vh',
            marginBottom: !hasWon ? '1vh' : hasWon && (!bestSec || !bestMin) ? '-10vh' : hasWon && (bestSec || bestMin) && '0vh',
            color: !hasWon ? 'white' : 'rgb(255, 255, 0)',
            textAlign: 'center'
        }}>
            { bestMin } : { bestSec }
        </div>
    );
};

export default BestTime;