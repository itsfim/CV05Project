import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './Account.css';
import React, { useState, useEffect } from 'react';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

function EditAccount(props) {

    const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const stringifyToken = JSON.stringify(decoded);
        const parseToken = JSON.parse(stringifyToken);
        const userID = parseToken.sub;
        console.log(userID);
    /*
    const[numberofGamesPlayed, setNumberOfGamesPlayed] = useState("");
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
          (response) => response.text()
        )
        .then(
          (json) => {
            console.log(json)
            setNumberOfGamesPlayed(json.data)
          })
        .catch(
          (e) => {
            console.log(e.message)
          })
    }
    */

    /*
    const navigate = useNavigate();
    const editUser=()=>{  
        navigate('/EditAccount');
    }
    */

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [memorableQ, setMemQ] = useState("");
    const [memorableA, setMemA] = useState("");

    //set value when functions called
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleEmail = (event) => {
      setEmail(event.target.value);
    }
 
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleMemQ = (event) => {
      setMemQ(event.target.value);
    }
    const handleMemA = (event) => {
      setMemA(event.target.value);
    }

    const saveChanges=()=>{  
        const formData = new FormData();
        formData.append('UserID', userID);
        formData.append('Username', username);
        formData.append('email', email);
        formData.append('Password', password);
        formData.append('memorableQ', memorableQ);
        formData.append('memorableA', memorableA);
       
       //fetch api -> post form data 
        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/updateplayers",
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
            props.handleInsert()
          })
        .catch(
          (e) => {
            console.log(e.message)
          })
        {shouldRedirect && <Navigate replace to="/account" />}
    }

    const shouldRedirect = true;
        return(
            <div>
                {!props.authenticated && <div>
                    {shouldRedirect && <Navigate replace to="/signIn" />}
                </div>}
                {props.authenticated && <div>
                    <div className='pageIntro'>
                        <h1>Edit Account</h1>
                        <div className='WrapperGame'>
                            <main className='item'>
                                <div class="homePageDiv1" id='imageHomePage'>
                                    <label className='subHeading'>image placeholder</label>
                                    <image></image>
                                </div>
                                <div classname='accInfo'>
                                    <label classname='subHeading1'>Account Info</label>
                                    <div className="input-group">
                                        <label for="username">Username</label> 
                                        <input className = "loginInput" type="text" placeholder ="Username..." value={username} onChange={handleUsername} />    
                                    </div>
                                    <div className="input-group">
                                        <label for="email">Email</label> 
                                        <input className = "loginInput" type="text" placeholder ="Email..." value={email} onChange={handleEmail} />    
                                    </div>
                                    <div className="input-group">
                                        <label for="password">Password</label> 
                                        <input className = "loginInput" type="text" placeholder ="Password..." value={password} onChange={handlePassword} />    
                                    </div>
                                    <div className="input-group">
                                        <label for="memorableQ">Memorabl Question</label> 
                                        <input className = "loginInput" type="text" placeholder ="Memorable Question..." value={memorableQ} onChange={handleMemQ} />    
                                    </div>
                                    <div className="input-group">
                                        <label for="memorableA">Memorabl Answer</label> 
                                        <input className = "loginInput" type="text" placeholder ="Memorable Answer..." value={memorableA} onChange={handleMemA} />    
                                    </div>
                                </div>
                                <button  onChange={saveChanges} className="primary1">Save Changes</button>
                            </main>
                        </div>
                    </div>
                </div>}
            </div>
        )
}
export default EditAccount;