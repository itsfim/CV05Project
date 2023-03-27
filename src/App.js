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
import SignIn from "./components/Login/SignIn.js";
import SignUp from "./components/Login/SignUp";
import ForgetUsernamePassword from "./components/Login/ForgetUsernamePassword";
import SignOut from "./components/Login/SignOut";
import EditAccount from "./components/Account/EditAccount";

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
    
    <div>
      <header>
       <BrowserRouter>
       <div>
         <Navbar startTime={Time}/>
         <Routes>
         <Route path='/' exact={true} element={<Homepage/>}/>
         <Route path="homepage" element={<Homepage/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route exact path="login" element={<SignIn authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="game" element={<GameHouse authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="account" element={<Account authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="EditAccount" element={<EditAccount authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="SignUp" element={<SignUp authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="SignIn" element={<SignIn authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="ForgetUsernamePassword" element={<ForgetUsernamePassword authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="signOut" element={<SignOut authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="report" element={<Report gameScore={gameScore} loading={loading} authenticated={authenticated} handleAuthenticated={setAuthenticated} handleInsert={handleInsert}/>}/>
         </Routes>
       </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;