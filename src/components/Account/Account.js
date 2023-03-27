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

    const userDetails = props.userDetails?.map(
        (value, key) => <div className ="" key={key}>
            <p className=''>Username: {value.Username} </p>
            <p className=''>Email: {value.email} </p>
            <p className='' >Memorable Q: {value.memorableQ}</p>
            <p className='' >Memorable A: {value.memorableA}</p>
          </div>
      )

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
                                    {userDetails}
                                    <p>Number of Games Played:</p>
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