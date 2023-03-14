import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Lock } from '@styled-icons/fa-solid/Lock';

import { setTileVal, setHasWon, setCompletionMsg } from '../../store/game.js';

import checkWin from '../../functions/4x4/checkSolved4x4.js';

import './styles.css';

const Tile = ({ currValue, rowCoord, colCoord }) => {
    const dispatch = useDispatch();

    const gameSchema = useSelector(state => state.game);

    const [clickedPreset, setClickedPreset] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
        key={currValue}
        onClick={() => {
            if (gameSchema.hasWon === true) return;

            if (clickedPreset === true) {
                setClickedPreset(false);
                return;
            };

            for (let coordPair of gameSchema.presetCoords) {
                const [row, col] = coordPair;
                if (rowCoord === row && colCoord === col) {
                    setClickedPreset(true);
                    return;
                };
            };

            dispatch(setTileVal(rowCoord, colCoord));

            const winStatus = checkWin(gameSchema.board);
            
            if (winStatus.solved) dispatch(setHasWon());
            if (!winStatus.solved) dispatch(setCompletionMsg(winStatus.msg));
        }}
        className='tiles'
        id={currValue === null ? 'null-tile' : currValue === 0 ? 'red-tile' : currValue === 1 && 'blue-tile'}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
            backgroundColor: currValue === 0 ? 'red' : currValue === 1 ? 'blue' : 'rgb(40, 40, 40)',
            width: '8vw',
            height: '16vh',
            borderBottom: currValue === 0 ? '0.8vh solid rgb(190, 0, 0)' : currValue === 1 ? '0.8vh solid rgb(0, 0, 170)' : '0.8vh solid rgb(30, 30, 30)',
            boxShadow: isHovering && currValue === null || isHovering && currValue === 0 ? '0px 0px 10px 2px red' : isHovering && currValue === 1 && '0px 0px 10px 2px blue',
            opacity: gameSchema.hasWon === true ? '0.6' : '1'
        }}>
            <Lock
            className='preset-lock'
            style={{
                display: clickedPreset ? 'block' : 'none',
                color: 'rgb(10, 10, 10)',
                width: '3vw'
            }}>
            </Lock>
        </div>
    );
};

export default Tile;