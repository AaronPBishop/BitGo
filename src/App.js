import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home.js';
import BoardHolder from './components/BoardHolder/BoardHolder.js';

import './index.css';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />

      <Route exact path='/game' element={<BoardHolder />} />
    </Routes>
  );
}

export default App;
