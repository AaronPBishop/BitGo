import { useSelector, useDispatch } from 'react-redux';

import { resetBoard, setDifficulty, buildValidBoard } from '../../store/game.js';

import Row from '../Row/Row.js';
import CurrentTime from '../Timer/CurrentTime.js';
import BestTime from '../Timer/BestTime.js';
import UndoMove from './UndoMove.js';
import RegenBoard from './RegenBoard.js';

import './styles.css';

const Board = () => {
    const dispatch = useDispatch();

    const gameSchema = useSelector(state => state.game);

    if (gameSchema.board.length) return (
        <div id="game-box" style={{marginTop: gameSchema.difficulty !== '4x4' && '-0.5vh'}}>
            <BestTime />
            
            {
                gameSchema.board.map((tiles, i) => <Row tiles={tiles} rowCoord={i} />)
            }

            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <UndoMove />
                <CurrentTime />
                <RegenBoard />
            </div>

            <div style={{
                display: gameSchema.completionMsg.length? 'block' : 'none', 
                color: 'white', 
                textAlign: 'center', 
                marginTop: '-1vh',
                marginBottom: '1.2vh'
            }}>
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
                id='play-again'
                style={{
                    position: gameSchema.hasWon && 'relative',
                    bottom: gameSchema.hasWon && '16vh',
                    marginTop: !gameSchema.hasWon && '3vh',
                    marginBottom: !gameSchema.hasWon && '3vh'
                }}>
                    Play Again
                </div>
            </div>
        </div>
    );
};

export default Board;