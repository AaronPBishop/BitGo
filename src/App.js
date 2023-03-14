import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home.js';
import BoardHolder from './components/BoardHolder/BoardHolder.js';

import { resetBoard } from './store/game.js';

import './index.css';

const App = () => {
  const dispatch = useDispatch();

  window.onpopstate = () => dispatch(resetBoard());

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />

      <Route exact path='/game' element={<BoardHolder />} />
    </Routes>
  );
}

export default App;
