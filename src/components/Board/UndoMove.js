import { useSelector, useDispatch } from 'react-redux';

import { undoMove } from '../../store/game.js';

import { Undo } from '@styled-icons/boxicons-regular/Undo';

const UndoMove = () => {
    const dispatch = useDispatch();

    const hasWon = useSelector(state => state.game.hasWon);

    return (
        <div 
        onClick={() => dispatch(undoMove())}
        style={{display: hasWon && 'none'}}>
            <Undo
            style={{
                color: 'white',
                width: '2vw',
                marginTop: '1.4vh',
                cursor: 'pointer'
            }} />
        </div>
    );
};

export default UndoMove;