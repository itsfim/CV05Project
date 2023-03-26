import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Buffer } from 'buffer';

import '../../App.css'
import './SignIn.css'

//author Phufah Nontamongkoltorn

function SignIn(props){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(
    () => {
      if (localStorage.getItem('token')) {
        props.handleAuthenticated(true)
      }
    },[])

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
 
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleClick = () => {

        const encodedString = Buffer.from(
            username + ":" + password
          ).toString('base64');

        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/auth",
        {
            method: 'POST', 
            headers: new Headers( { "Authorization": "Basic " +encodedString })           
        })
        .then(
            (response) => {   
                return response.json()
            }
        )
        .then(
            (json) => {
                console.log(json);
                if (json.message === "Success") {
                    props.handleAuthenticated(true);
                    localStorage.setItem('token', json.data.token);
                }
            }
        )
        .catch(
            (e) => {
                console.log(e.message)
            }
        )
    }

    //temp func untile redirect
    const handleSignOut = () => {
      props.handleAuthenticated(false);
      setPassword("");
      setUsername("");
      localStorage.removeItem('token');
    }

    const shouldRedirect = true;

    //if want to make sign out call this func
    //<button style={{marginLeft:"500px"}}onClick={handleSignOut}>sign out</button>
        return (
          <div>
            {props.authenticated && <div>
              {shouldRedirect && <Navigate replace to="/account" />}
              </div>}
            {!props.authenticated && <div>
              <div className='loginIntro'>
              <h1 className= 'welback'> Welcome back </h1>
              <div className="rectangle-1">
                <div className='signin-nav'>
                  <div className='signin-tab-active'>
                    <a className='signin-navlink' href='SignIn'> Sign in </a>
                  </div>
                    <div className="signup-tab">
                      <div className="sign-up">
                        <a className="signup-navlink" href="SignUp" title='sign up'>Sign up</a>
                      </div>
                    </div>
                  </div>
                  <main className=''>
                    <div className="App">
                      <form className="form">
                        <div className="input-group">
                          <label for="username">Username</label> <br></br>
                          <input 
                            className = "loginInput"
                            type="text" 
                            placeholder ="Username..." 
                            value={username} 
                            onChange={handleUsername} 
                          />       
                        </div>
                          <div className="input-group">
                            <br></br>
                            <label for="password">Password</label> <br></br>
                            <input 
                              className = "loginInput"
                              type="password" 
                              placeholder="Password..."  
                              value={password} 
                              onChange={handlePassword} 
                            />   
                          </div>
                          <br></br>
                          <input className="primary2" type="button" value="Submit" onClick={handleClick}/>
                          <span class="forget-pw">
                            <a className="forget-unpw" href="ForgetUsernamePassword" title='Forget Username/Password' id="link-reset"> Forget username / password </a>
                          </span>
                        </form>
                      </div>
                    </main>
                </div> 
                </div>
              </div>}
              </div> 
        );
}

export default SignIn;