
import { useSelector } from 'react-redux';

import Row from '../Row/Row.js';

import './styles.css';

const Board = () => {
    const boardSchema = useSelector(state => state.game);

    if (boardSchema.board.length) return (
        <div id="game-box">
            {
                boardSchema.board.map((tiles, i) => <Row tiles={tiles} rowCoord={i} />)
            }
        </div>
    );
};

export default Board;