import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar  from './components/Navbar/Navbar';
import Home  from './components/Home/Home';
import Game  from './components/Game/Game';


function App() {
  return (
    <div>
      {
      //cross page navigation bar <Navbar />
      }
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      </div>
  );
}

export default App;