import { useEffect, useState } from 'react';

const CurrentTime = () => {
    const timer = val => val > 9 ? val : "0" + val;

    const [switched, setSwitched] = useState(false);
    const [seconds, setSeconds] = useState(1);
    const [currSec, setCurrSec] = useState(0);
    const [currMin, setCurrMin] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1);
            setCurrSec(timer(seconds % 60));
            setCurrMin(timer(parseInt(seconds / 60, 10)));

            setSwitched(switched => !switched);
        }, 1000);

        return () => clearInterval(interval);
    }, [switched]);

    return (
        <div style={{
            marginTop: '2vh',
            marginBottom: '3vh',
            color: 'white',
            textAlign: 'center'
        }}>
            { currMin } : { currSec }
        </div>
    );
};

export default CurrentTime;