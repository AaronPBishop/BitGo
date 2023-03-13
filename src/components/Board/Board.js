import { useSelector } from 'react-redux';

import Row from '../Row/Row.js';

import './styles.css';

const Board = () => {
    const boardSchema = useSelector(state => state.game.board);

    return (
        <div id="game-box">
            {
                boardSchema && boardSchema.length &&
                boardSchema.map((tiles, i) => {
                    return <Row tiles={tiles} rowCoord={i} />
                })
            }
        </div>
    );
};

export default Board;