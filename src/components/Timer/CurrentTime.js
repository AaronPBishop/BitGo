import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import setBest from '../../functions/setBest.js';

const CurrentTime = () => {
    const hasWon = useSelector(state => state.game.hasWon);
    const difficulty = useSelector(state => state.game.difficulty);

    const timer = val => val > 9 ? val : "0" + val;

    const [switched, setSwitched] = useState(false);
    const [seconds, setSeconds] = useState(1);
    const [currSec, setCurrSec] = useState(0);
    const [currMin, setCurrMin] = useState(0);

    useEffect(() => {
        if (hasWon === true) return;

        const interval = setInterval(() => {
            setSeconds(seconds + 1);
            setCurrSec(timer(seconds % 60));
            setCurrMin(timer(parseInt(seconds / 60, 10)));

            setSwitched(switched => !switched);
        }, 1000);

        return () => clearInterval(interval);
    }, [switched]);

    useEffect(() => {
        if (hasWon === true) setBest(currSec, currMin, difficulty);
    }, [hasWon]);

    return (
        <div style={{
            display: hasWon === true ? 'none' : 'block',
            marginTop: '2vh',
            marginBottom: '2vh',
            color: 'white',
            textAlign: 'center'
        }}>
            { currMin } : { currSec }
        </div>
    );
};

export default CurrentTime;