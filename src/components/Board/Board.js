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
            marginTop: gameSchema.difficulty !== '4x4' && '-0.5vh'
        }}>
            {
                gameSchema.board.map((tiles, i) => <Row tiles={tiles} rowCoord={i} />)
            }

            <div style={{color: 'white', textAlign: 'center', marginTop: '6vh', marginBottom: '2vh'}}>
                { gameSchema.completionMsg }
            </div>

            <div style={{display: gameSchema.hasWon ? 'flex' : 'none', justifyContent: 'center'}}>
                <div 
                onClick={async () => {
                    const difficulty = gameSchema.difficulty;

                    await dispatch(resetBoard());
                    await dispatch(setDifficulty(difficulty));
                    await dispatch(buildValidBoard());
                }}
                style={{
                    marginBottom: '2vh',
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