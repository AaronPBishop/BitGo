import { useSelector } from 'react-redux';

import bestTimesMap from './bestTimesMap.js';

const BestTimes = () => {
    const clickedBestTimes = useSelector(state => state.menu.clickedBestTimes);

    return (
        <div style={{display: clickedBestTimes ? 'flex' : 'none', justifyContent: 'center', flexWrap: 'wrap'}}>
            <div 
            style={{backgroundColor: 'blue', borderBottom: '0.6vh solid rgb(0, 0, 170)'}}
            className='best-times'>
                <div style={{marginRight: bestTimesMap['4x4'].bestSecond && '0.5vw'}}>
                    {`4x4${bestTimesMap['4x4'].bestSecond ? ':' : ''}`}
                </div>

                <div style={{display: bestTimesMap['4x4'].bestSecond ? 'block' : 'none', color: 'yellow', marginLeft: '0.5vw'}}>
                    {bestTimesMap['4x4'].bestMinute}:{bestTimesMap['4x4'].bestSecond}
                </div>
            </div>

            <div 
            style={{backgroundColor: 'red', borderBottom: '0.6vh solid rgb(190, 0, 0)'}}
            className='best-times'>
                <div style={{marginRight: bestTimesMap['6x6'].bestSecond && '0.5vw'}}>
                    {`6x6${bestTimesMap['6x6'].bestSecond ? ':' : ''}`}
                </div>

                <div style={{display: bestTimesMap['6x6'].bestSecond ? 'block' : 'none', color: 'yellow', marginLeft: '0.5vw'}}>
                    {bestTimesMap['6x6'].bestMinute}:{bestTimesMap['6x6'].bestSecond}
                </div>
            </div>

            <div 
            style={{backgroundColor: 'blue', borderBottom: '0.6vh solid rgb(0, 0, 170)'}}
            className='best-times'>
                <div style={{marginRight: bestTimesMap['8x8'].bestSecond && '0.5vw'}}>
                    {`8x8${bestTimesMap['8x8'].bestSecond ? ':' : ''}`}
                </div>
                
                <div style={{display: bestTimesMap['8x8'].bestSecond ? 'block' : 'none', color: 'yellow', marginLeft: '0.5vw'}}>
                    {bestTimesMap['8x8'].bestMinute}:{bestTimesMap['8x8'].bestSecond}
                </div>
            </div>

            <div 
            style={{backgroundColor: 'red', borderBottom: '0.6vh solid rgb(190, 0, 0)', marginBottom: '4vh'}}
            className='best-times'>
                <div style={{marginRight: bestTimesMap['10x10'].bestSecond && '0.5vw'}}>
                    {`10x10${bestTimesMap['10x10'].bestSecond ? ':' : ''}`}
                </div>

                <div style={{display: bestTimesMap['10x10'].bestSecond ? 'block' : 'none', color: 'yellow', marginLeft: '0.5vw'}}>
                    {bestTimesMap['10x10'].bestMinute}:{bestTimesMap['10x10'].bestSecond}
                </div>
            </div>
        </div>
    );
};

export default BestTimes;