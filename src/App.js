import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home.js';
import BoardHolder from './components/BoardHolder/BoardHolder.js';

import { resetBoard } from './store/game.js';

import './index.css';

const App = () => {
  const dispatch = useDispatch();

  const gameSchema = useSelector(state => state.game);

  window.onpopstate = () => dispatch(resetBoard());

  useEffect(() => {
    if (!gameSchema.difficulty.length) document.body.id = 'menu-body';
    if (gameSchema.difficulty.length) document.body.id = 'game-body';
  }, [gameSchema]);

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />

      <Route exact path='/game' element={<BoardHolder />} />
    </Routes>
  );
}

export default App;
