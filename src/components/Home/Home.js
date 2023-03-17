import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setClickedPlay, setClickedInstructions, setClickedBestTimes, resetMenuSelections } from '../../store/menu.js';

import Difficulties from './Difficulties.js';
import Instructions from './Instructions.js';
import BestTimes from './BestTimes.js';

import './styles.css';

const Home = () => {
    const dispatch = useDispatch();

    const menu = useSelector(state => state.menu);

    const [clickedMenuButton, setClickedMenuButton] = useState(false);

    useEffect(() => {
        for (let key in menu) {
            if (menu[key] === true) {
                setClickedMenuButton(true);
                return;
            };
        };

        setClickedMenuButton(false);
    }, [menu]);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div id="content">
                <div
                onClick={() => dispatch(resetMenuSelections())}
                style={{display: clickedMenuButton ? 'block' : 'none'}}
                id='back-button'>
                    Back
                </div>

                <div 
                onClick={() => dispatch(setClickedPlay())}
                style={{display: clickedMenuButton && 'none', marginTop: '12.5vh'}}
                className='menu-buttons'>
                    Play
                </div>

                <div 
                onClick={() => dispatch(setClickedInstructions())}
                style={{display: clickedMenuButton && 'none'}}
                className='menu-buttons'>
                    Instructions
                </div>

                <div 
                onClick={() => dispatch(setClickedBestTimes())}
                style={{display: clickedMenuButton && 'none', marginBottom: '20vh'}}
                className='menu-buttons'>
                    Best Times
                </div>

                <Difficulties />
                <Instructions />
                <BestTimes />
            </div>
        </div>
    );
};

export default Home;