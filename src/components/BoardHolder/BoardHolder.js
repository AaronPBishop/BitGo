import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resetBoard } from '../../store/game.js';

import Board from '../Board/Board.js';

const BoardHolder = () => {
    const dispatch = useDispatch();
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
            onClick={() => {
                navigate('/');
                dispatch(resetBoard());
            }}
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