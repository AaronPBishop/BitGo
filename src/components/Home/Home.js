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
                    marginTop: '16vh'
                }}>
                    <div
                    onClick={async () => {
                        navigate('/game');
                        await dispatch(setDifficulty('4x4'));
                        await dispatch(buildValidBoard());
                    }}
                    className='board-selections'
                    style={{backgroundColor: 'blue', marginRight: '2vw'}}>
                        4x4
                    </div>

                    <div
                    onClick={async () => {
                        navigate('/game');
                        await dispatch(setDifficulty('6x6'));
                        await dispatch(buildValidBoard());
                    }}
                    className='board-selections'
                    style={{backgroundColor: 'red', marginLeft: '2vw'}}>
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
                    style={{backgroundColor: 'red', marginRight: '2vw'}}>
                        8x8
                    </div>

                    <div
                    onClick={async () => {
                        navigate('/game');
                        await dispatch(setDifficulty('10x10'));
                        await dispatch(buildValidBoard());
                    }}
                    className='board-selections'
                    style={{backgroundColor: 'blue', marginLeft: '2vw'}}>
                        10x10
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;