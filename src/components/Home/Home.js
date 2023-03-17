import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setDifficulty, buildValidBoard } from '../../store/game.js';

import './styles.css';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div id="content">
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '14vh'
                }}>
                    <div
                    onClick={async () => {
                        navigate('/game');
                        await dispatch(setDifficulty('4x4'));
                        await dispatch(buildValidBoard());
                    }}
                    className='board-selections'
                    style={{backgroundColor: 'blue', borderBottom: '0.6vh solid rgb(0, 0, 170)', marginRight: '2vw'}}>
                        4x4
                    </div>

                    <div
                    onClick={async () => {
                        navigate('/game');
                        await dispatch(setDifficulty('6x6'));
                        await dispatch(buildValidBoard());
                    }}
                    className='board-selections'
                    style={{backgroundColor: 'red', borderBottom: '0.6vh solid rgb(190, 0, 0)', marginLeft: '2vw'}}>
                        6x6
                    </div>
                </div>

                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10vh'
                }}>
                    <div
                    onClick={async () => {
                        navigate('/game');
                        await dispatch(setDifficulty('8x8'));
                        await dispatch(buildValidBoard());
                    }}
                    className='board-selections'
                    style={{backgroundColor: 'red', borderBottom: '0.6vh solid rgb(190, 0, 0)', marginRight: '2vw'}}>
                        8x8
                    </div>

                    <div
                    onClick={async () => {
                        navigate('/game');
                        await dispatch(setDifficulty('10x10'));
                        await dispatch(buildValidBoard());
                    }}
                    className='board-selections'
                    style={{backgroundColor: 'blue', borderBottom: '0.6vh solid rgb(0, 0, 170)', marginLeft: '2vw'}}>
                        10x10
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;