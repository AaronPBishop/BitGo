import { useSelector, useDispatch } from 'react-redux';

import { resetBoard, setDifficulty, buildValidBoard } from '../../store/game.js';

import Row from '../Row/Row.js';

import './styles.css';

const Board = () => {
    const dispatch = useDispatch();

    const gameSchema = useSelector(state => state.game);

    if (gameSchema.board.length) return (
        <div 
        id="game-box"
        style={{
            height: 
            (gameSchema.difficulty === '4x4' && gameSchema.completionMsg.length
            || gameSchema.difficulty === '4x4' && gameSchema.hasWon === true) ? '89vh' 
            : (gameSchema.difficulty === '4x4' && !gameSchema.completionMsg.length) && '83vh'
        }}>
            {
                gameSchema.board.map((tiles, i) => <Row tiles={tiles} rowCoord={i} />)
            }

            <div style={{color: 'white', textAlign: 'center', marginTop: '6vh'}}>
                { gameSchema.completionMsg }
            </div>

            <div style={{display: gameSchema.hasWon ? 'flex' : 'none', justifyContent: 'center'}}>
                <div 
                onClick={async () => {
                    await dispatch(resetBoard());
                    await dispatch(setDifficulty('4x4'));
                    await dispatch(buildValidBoard());
                }}
                style={{
                    marginTop: '-1vh',
                    color: 'white', 
                    textAlign: 'center', 
                    lineHeight: '5vh',
                    width: '9vw',
                    height: '5.5vh',
                    backgroundColor: 'rgb(41, 41, 160)',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 6px 2px rgb(130, 138, 255)',
                    cursor: 'pointer'
                }}>
                    Play Again
                </div>
            </div>
        </div>
    );
};

export default Board;