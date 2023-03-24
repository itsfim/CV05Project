import "./App.css";

import React, {useState, useEffect} from "react";

import Homepage from './components/Home/homepage.js';
import NotFound from "./components/Errors/notfound.js";
import Navbar from "./components/Navbar/handleNavbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GameHouse from "./components/Game/gameHouse";
import Report from './components/Report/Report.js';
import Account from './components/Account/Account.js'
import Timer from "./components/Timer/Timer.js";

function App() {
  const Time = <Timer/>;
  const [gameScore, setGamecore] = useState([]);
  const [loading, setLoading] = useState(true);

  const [authenticated, setAuthenticated] = useState(false);
  const handleAuthenticated = (isAuthenticated) => {setAuthenticated(isAuthenticated)}

  const [insert,setInsert] = useState(0);

  useEffect(()=>{
    fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/gamescore")
    .then(
      (response) => response.json()
    )
    .then(
      (json) => {
        setGamecore(json.data)
        setLoading(false)
        console.log(json.data)
      }
    )
    .catch(
      (e)=> {
        console.log(e.message)
      }
    )
  },[insert]);
  const handleInsert = () => {setInsert(insert+1)}
  return (
    
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <div>
         <Navbar startTime={Time}/>
         <Routes>
         <Route path='/' exact={true} element={<Homepage/>}/>
         <Route path="homepage" element={<Homepage/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route path="game" element={<GameHouse/>}/>
         <Route path="login" element={<Account/>}/>
         <Route path="report" element={<Report gameScore={gameScore} loading={loading}/>}/>
         </Routes>
       </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;