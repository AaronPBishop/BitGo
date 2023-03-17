import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setBeatRecord } from '../../store/game.js';

import setBest from '../../functions/setBest.js';

const CurrentTime = () => {
    const dispatch = useDispatch();

    const hasWon = useSelector(state => state.game.hasWon);
    const difficulty = useSelector(state => state.game.difficulty);
    const beatRecord = useSelector(state => state.game.beatRecord);

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
        if (hasWon === true) {
            const bestStatus = setBest(currSec, currMin, difficulty);

            dispatch(setBeatRecord(bestStatus.beatRecord));
        };
    }, [hasWon]);

    return (
        <div style={{
            position: hasWon && 'relative',
            bottom: hasWon && '36vh',
            fontSize: hasWon && '2.5em',
            marginTop: !hasWon && '2vh',
            marginBottom: !hasWon ? '2vh' : '-6vh',
            color: !hasWon ? 'white' : hasWon && beatRecord ? 'rgb(0, 255, 80)' : hasWon && !beatRecord && 'rgb(200, 0, 0)',
            textAlign: 'center'
        }}>
            {
                !hasWon ? `${ currMin } : ${currSec}` : `${ currMin } : ${currSec - 1}`
            }
        </div>
    );
};

export default CurrentTime;