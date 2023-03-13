import { useNavigate } from 'react-router-dom';

import Board from '../Board/Board.js';

const BoardHolder = () => {
    const navigate = useNavigate();

    return (
        <div
        style={{
            display: 'flex', 
            justifyContent: 'center',
            margin: 'auto',
            flexWrap: 'wrap'
        }}>
            <div
            onClick={() => navigate('/')}
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '2.5em',
                width: '100%',
                cursor: 'pointer'
            }}>
                BitGo
            </div>

            <Board />
        </div>
    );
};

export default BoardHolder;