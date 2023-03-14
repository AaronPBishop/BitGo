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
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <div
                onClick={() => {
                    navigate('/');
                    dispatch(resetBoard());
                }}
                style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '2em',
                    fontWeight: 'bold',
                    marginTop: '1vh',
                    marginBottom: '2vh',
                    width: '8vw',
                    color: 'white', 
                    lineHeight: '5.5vh',
                    height: '5.5vh',
                    backgroundColor: 'rgb(41, 41, 160)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 6px 2px rgb(130, 138, 255)',
                    opacity: '0.9',
                    cursor: 'pointer'
                }}>
                    BitGo
                </div>
            </div>

            <Board />
        </div>
    );
};

export default BoardHolder;