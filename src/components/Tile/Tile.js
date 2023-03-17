import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Lock } from '@styled-icons/fa-solid/Lock';

import { setTileVal, setHasWon, setCompletionMsg } from '../../store/game.js';

import checkWin4x4 from '../../functions/4x4/checkSolved4x4.js';
import checkWin6x6 from '../../functions/6x6/checkSolved6x6.js';
import checkWin8x8 from '../../functions/8x8/checkSolved8x8.js';
import checkWin10x10 from '../../functions/10x10/checkSolved10x10.js';

import { tileSizeMap, iconSizeMap } from './styleMaps.js';
import './styles.css';

const Tile = ({ currValue, rowCoord, colCoord }) => {
    const dispatch = useDispatch();

    const gameSchema = useSelector(state => state.game);

    const [clicked, setClicked] = useState(false);
    const [clickedPreset, setClickedPreset] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const checkWinMap = {
        '4x4': checkWin4x4,
        '6x6': checkWin6x6,
        '8x8': checkWin8x8,
        '10x10': checkWin10x10
    };

    useEffect(() => {
        const winStatus = checkWinMap[gameSchema.difficulty](gameSchema.board);

        if (winStatus.solved) dispatch(setHasWon());
        if (!winStatus.solved) dispatch(setCompletionMsg(winStatus.msg));
    }, [clicked]);

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

            setClicked(clicked => !clicked);
            dispatch(setTileVal(rowCoord, colCoord));
        }}
        className={!gameSchema.hasWon ? 'tiles' : gameSchema.hasWon && 'cleared-tiles'}
        id={
        (!gameSchema.hasWon && currValue === null) ? 'null-tile' 
        : (!gameSchema.hasWon && currValue === 0) ? 'red-tile' 
        : (!gameSchema.hasWon && currValue === 1) ? 'blue-tile' 
        : gameSchema.hasWon && null
        }
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
            backgroundColor: (!gameSchema.hasWon && currValue === null) ? 'rgb(40, 40, 40)' 
            : (!gameSchema.hasWon && currValue === 0) ? 'red' 
            : (!gameSchema.hasWon && currValue === 1) && 'blue',
            width: tileSizeMap[gameSchema.difficulty].width,
            height: tileSizeMap[gameSchema.difficulty].height,
            borderBottom: (!gameSchema.hasWon && currValue === 0) ? '0.8vh solid rgb(190, 0, 0)' 
            : (!gameSchema.hasWon && currValue === 1) ? '0.8vh solid rgb(0, 0, 170)' 
            : (!gameSchema.hasWon & currValue === null) && '0.8vh solid rgb(30, 30, 30)',
            boxShadow: ((!gameSchema.hasWon && isHovering && currValue === null) || (!gameSchema.hasWon && isHovering && currValue === 0)) ? '0px 0px 10px 2px red' 
            : (!gameSchema.hasWon && isHovering && currValue === 1) && '0px 0px 10px 2px blue'
        }}>
            <Lock
            className='preset-lock'
            style={{
                display: clickedPreset ? 'block' : 'none',
                color: 'rgb(10, 10, 10)',
                width: iconSizeMap[gameSchema.difficulty]
            }}>
            </Lock>

            <div 
            className='clear-element'
            style={{
                display: gameSchema.hasWon ? 'block' : 'none',
                backgroundColor: 'yellow',
                width: 'inherit'
            }}>
                
            </div>
        </div>
    );
};

export default Tile;