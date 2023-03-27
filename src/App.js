import "./App.css";
import React, {useState, useEffect} from "react";
import jwt_decode from 'jwt-decode';
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

  const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const stringifyToken = JSON.stringify(decoded);
        const parseToken = JSON.parse(stringifyToken);
        const userID = parseToken.sub;
        console.log(userID);

  const [gameScore, setGamecore] = useState([]);
  const[numberofGamesPlayed, setNumberOfGamesPlayed] = useState([]);
  const[userDetails, setUserDetails] = useState([]);

  const [authenticated, setAuthenticated] = useState(false);
  const handleAuthenticated = (isAuthenticated) => {setAuthenticated(isAuthenticated)}

  //const countNumGPlayed = numberofGamesPlayed[2];

  const countNumberOfGames = () =>{
      const formData = new FormData();
      formData.append('UserID', userID);
     
     //fetch api -> post form data 
      fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/countgamescore",
        {
          method: 'POST',
          body: formData
        })
      .then(
        (response) => response.json()
      )
      .then(
        (json) => {
          console.log(json)
          setNumberOfGamesPlayed(json.queryResult)
        })
      .catch(
        (e) => {
          console.log(e.message)
        })
  }

  const getUserDetails = () =>{
      const formData = new FormData();
      formData.append('UserID', userID);
     
     //fetch api -> post form data 
      fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/player",
        {
          method: 'POST',
          body: formData
        })
      .then(
        (response) => response.json()
      )
      .then(
        (json) => {
          console.log(json)
          //setUsername(json.data.Username)
          setUserDetails(json.data);
          console.log(json.data)
        })
      .catch(
        (e) => {
          console.log(e.message)
        })
  }

  const getGameScore = () =>{
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

  }

  useEffect(() => {
      countNumberOfGames();
      getUserDetails();
      getGameScore();
  });

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
         <Route path="account" element={<Account userDetails={userDetails} numberofGamesPlayed={numberofGamesPlayed} authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="EditAccount" element={<EditAccount authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="SignUp" element={<SignUp authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="SignIn" element={<SignIn authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="ForgetUsernamePassword" element={<ForgetUsernamePassword authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="signOut" element={<SignOut authenticated={authenticated} handleAuthenticated={setAuthenticated}/>}/>
         <Route path="report" element={<Report gameScore={gameScore} authenticated={authenticated}/>}/>
         </Routes>
       </div>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;