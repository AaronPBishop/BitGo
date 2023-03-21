import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBestTimes } from '../../store/bestTimes.js';

const BestTimes = () => {
    const dispatch = useDispatch();

    const clickedBestTimes = useSelector(state => state.menu.clickedBestTimes);
    const bestTimeState = useSelector(state => state.bestTimes);

    useEffect(() => { dispatch(setBestTimes()) }, [clickedBestTimes]);

    if (Object.keys(bestTimeState).length) return (
        <div style={{display: clickedBestTimes ? 'flex' : 'none', justifyContent: 'center', flexWrap: 'wrap'}}>
            <div 
            style={{backgroundColor: 'blue', borderBottom: '0.6vh solid rgb(0, 0, 170)'}}
            className='best-times'>
                <div style={{marginRight: bestTimeState['4x4'].bestSecond && '0.5vw'}}>
                    {`4x4${bestTimeState['4x4'].bestSecond ? ':' : ''}`}
                </div>

                <div style={{display: bestTimeState['4x4'].bestSecond ? 'block' : 'none', color: 'yellow', marginLeft: '0.5vw'}}>
                    {bestTimeState['4x4'].bestMinute}:{bestTimeState['4x4'].bestSecond}
                </div>
            </div>

            <div 
            style={{backgroundColor: 'red', borderBottom: '0.6vh solid rgb(190, 0, 0)'}}
            className='best-times'>
                <div style={{marginRight: bestTimeState['6x6'].bestSecond && '0.5vw'}}>
                    {`6x6${bestTimeState['6x6'].bestSecond ? ':' : ''}`}
                </div>

                <div style={{display: bestTimeState['6x6'].bestSecond ? 'block' : 'none', color: 'yellow', marginLeft: '0.5vw'}}>
                    {bestTimeState['6x6'].bestMinute}:{bestTimeState['6x6'].bestSecond}
                </div>
            </div>

            <div 
            style={{backgroundColor: 'blue', borderBottom: '0.6vh solid rgb(0, 0, 170)'}}
            className='best-times'>
                <div style={{marginRight: bestTimeState['8x8'].bestSecond && '0.5vw'}}>
                    {`8x8${bestTimeState['8x8'].bestSecond ? ':' : ''}`}
                </div>
                
                <div style={{display: bestTimeState['8x8'].bestSecond ? 'block' : 'none', color: 'yellow', marginLeft: '0.5vw'}}>
                    {bestTimeState['8x8'].bestMinute}:{bestTimeState['8x8'].bestSecond}
                </div>
            </div>

            <div 
            style={{backgroundColor: 'red', borderBottom: '0.6vh solid rgb(190, 0, 0)', marginBottom: '4vh'}}
            className='best-times'>
                <div style={{marginRight: bestTimeState['10x10'].bestSecond && '0.5vw'}}>
                    {`10x10${bestTimeState['10x10'].bestSecond ? ':' : ''}`}
                </div>

                <div style={{display: bestTimeState['10x10'].bestSecond ? 'block' : 'none', color: 'yellow', marginLeft: '0.5vw'}}>
                    {bestTimeState['10x10'].bestMinute}:{bestTimeState['10x10'].bestSecond}
                </div>
            </div>
        </div>
    );
};

export default BestTimes;