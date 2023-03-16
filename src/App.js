import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar  from './components/Navbar/Navbar';
import Home  from './components/Home/Home';
import Game  from './components/Game/Game';
import Report  from './components/Report/Report';
import Account  from './components/Account/Account';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Account" element={<Account />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      </div>
  );
}

export default App;