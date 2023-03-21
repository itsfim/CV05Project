import "./App.css";
import { Helmet } from "react-helmet";
import Homepage from './components/homepage.js';
import NotFound from "./components/notfound.js";
import Navbar from "./components/handleNavbar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GameHouse from "./components/gameHouse";


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <div>
         <Navbar/>
         <Routes>
         <Route path='/' exact={true} element={<Homepage/>}/>
         <Route path="homepage" element={<Homepage/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route path="game" element={<GameHouse/>}/>
         </Routes>
       </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;