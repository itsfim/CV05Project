import { Navigate, useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './Account.css';
import React, { useState, useEffect } from 'react';
import EditAccount from './EditAccount';
import { get } from 'jquery';

function Account(props) {

    const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const stringifyToken = JSON.stringify(decoded);
        const parseToken = JSON.parse(stringifyToken);
        const userID = parseToken.sub;
        console.log(userID);
    
    const signOut = () =>{
        props.handleAuthenticated(false);
        localStorage.removeItem('token');
    }
    
    const[numberofGamesPlayed, setNumberOfGamesPlayed] = useState([]);

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

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [memorableQ, setMemQ] = useState("");
    const [memorableA, setMemA] = useState("");
    //const userDetailsString = JSON.parse(userDetails);
    
    const [userDetails, setUserDetails] = useState("");

    console.log(userDetails);

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

    useEffect(() => {
        countNumberOfGames();
        getUserDetails();
    });
    
    const navigate = useNavigate();
    const editUser=()=>{  
        navigate('/EditAccount');
    }

    const deleteUser=()=>{  
        const formData = new FormData();
        formData.append('UserID', userID);
       
       //fetch api -> post form data 
        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/delete",
          {
            method: 'POST',
            body: formData
          })
        .then(
          (response) => response.text()
        )
        .then(
          (json) => {
            console.log(json)
          })
        .catch(
          (e) => {
            console.log(e.message)
          })

        signOut();
        {shouldRedirect && <Navigate replace to="/signIn" />}
    }
    console.log(numberofGamesPlayed);
    const shouldRedirect = true;
        return(
            <div>
                {!props.authenticated && <div>
                    {shouldRedirect && <Navigate replace to="/signIn" />}
                </div>}
                {props.authenticated && <div>
                    <div className='pageIntro'>
                        <h1>Account</h1>
                        <div className='WrapperGame'>
                            <main className='item'>
                                <div class="homePageDiv1" id='imageHomePage'>
                                    <h2 className='subHeading'>image placeholder</h2>
                                </div>
                                <div classname='accInfo'>
                                    <h3 classname='subHeading1'>Account Info</h3>
                                    <h3 classname='subHeading2'>Username</h3>
                                    <h3 classname='subHeading3'>No. of games played:</h3>
                                </div>
                                <button onClick={editUser}className="primary1">EDIT</button>
                                <button onClick={deleteUser} className="secondary1">Delete Account</button>
                            </main>
                        </div>
                    </div>
                </div>}
            </div>
        )
}
export default Account;