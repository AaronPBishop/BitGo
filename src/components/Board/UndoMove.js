import { useSelector } from 'react-redux';

import { Undo } from '@styled-icons/boxicons-regular/Undo';

const UndoMove = () => {
    const hasWon = useSelector(state => state.game.hasWon);

    return (
        <div style={{display: hasWon && 'none'}}>
            <Undo
            style={{
                color: 'white',
                width: '2vw',
                marginTop: '1.4vh'
            }} />
        </div>
    );
};

export default UndoMove;