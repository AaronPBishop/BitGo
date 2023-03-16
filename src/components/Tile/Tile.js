import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Lock } from '@styled-icons/fa-solid/Lock';

import { setTileVal, setHasWon, setCompletionMsg } from '../../store/game.js';

import checkWin4x4 from '../../functions/4x4/checkSolved4x4.js';
import checkWin6x6 from '../../functions/6x6/checkSolved6x6.js';
import checkWin8x8 from '../../functions/8x8/checkSolved8x8.js';

import './styles.css';

const Tile = ({ currValue, rowCoord, colCoord }) => {
    const dispatch = useDispatch();

    const gameSchema = useSelector(state => state.game);

    const [clicked, setClicked] = useState(false);
    const [clickedPreset, setClickedPreset] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const tileSizeMap = {
        '4x4': {
            width: '8vw',
            height: '16vh'
        },
        '6x6': {
            width: '5.5vw',
            height: '11vh'
        },
        '8x8': {
            width: '4vw',
            height: '8vh'
        }
    };

    const checkWinMap = {
        '4x4': checkWin4x4,
        '6x6': checkWin6x6,
        '8x8': checkWin8x8
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
        className='tiles'
        id={currValue === null ? 'null-tile' : currValue === 0 ? 'red-tile' : currValue === 1 && 'blue-tile'}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
            backgroundColor: currValue === 0 ? 'red' : currValue === 1 ? 'blue' : 'rgb(40, 40, 40)',
            width: tileSizeMap[gameSchema.difficulty].width,
            height: tileSizeMap[gameSchema.difficulty].height,
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