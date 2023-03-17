import { useSelector, useDispatch } from 'react-redux';

import { resetBoard, setDifficulty, buildValidBoard } from '../../store/game.js';

import { Refresh } from '@styled-icons/boxicons-regular/Refresh';

const RegenBoard = () => {
    const dispatch = useDispatch();

    const hasWon = useSelector(state => state.game.hasWon);
    const difficulty = useSelector(state => state.game.difficulty);

    return (
        <div 
        onClick={async () => {
            await dispatch(resetBoard());
            await dispatch(setDifficulty(difficulty));
            await dispatch(buildValidBoard());
        }}
        style={{display: hasWon && 'none'}}>
            <Refresh
            style={{
                color: 'white',
                width: '2vw',
                marginTop: '1.4vh',
                cursor: 'pointer'
            }} />
        </div>
    );
};

export default RegenBoard;