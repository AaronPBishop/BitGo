import { useSelector } from "react-redux";

const BestTime = () => {
    const difficulty = useSelector(state => state.game.difficulty);

    const bestSec = localStorage.getItem(`bestSecond-${difficulty}`);
    const bestMin = localStorage.getItem(`bestMinute-${difficulty}`);

    console.log(bestSec)

    return (
        <div style={{
            opacity: !bestSec || !bestMin ? '0' : '1',
            marginTop: '1vh',
            marginBottom: '1vh',
            color: 'white',
            textAlign: 'center'
        }}>
            { bestMin } : { bestSec }
        </div>
    );
};

export default BestTime;