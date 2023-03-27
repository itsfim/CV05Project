import React, { useState} from 'react';
import { Navigate } from 'react-router-dom';
import {Buffer} from 'buffer';
import '../../App.css'
import './ForgetUsernamePassword.css'

//author Phufah Nontamongkoltorn

function ForgetUsernamePassword (props) {
    const [loginInfo, setLoginInfo] = useState("");
    const [memorableA, setMemA] = useState("");

    const handleLoginInfo = (event) => {
        setLoginInfo(event.target.value);
    }

    const handleMemA = (event) => {
        setMemA(event.target.value);
    }

    const handleClick = () => {

        const encodedString = Buffer.from(
            loginInfo + ":" + memorableA
          ).toString('base64');

          console.log(loginInfo);
          console.log(memorableA);

        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/altauth",
        {
            method: 'POST', 
            headers: new Headers( { "Authorization": "Basic " +encodedString })           
        })
        .then(
            (response) => {   
                return response.text()
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
    const shouldRedirect = true;
        return(
            <div>
                {props.authenticated && <div>
                {shouldRedirect && <Navigate replace to="/account" />}
              </div>}
              {!props.authenticated && 
                <div>
                    <div className='forgetIntro'>
                    <h1 className='reUNPW'>Recover username / password</h1>
                        <div className="box1">
                            <main className=''>
                                <div className="App">
                                    
                                    <form className="form">
                                    
                                        <div className="forget-input">
                                            <label>Do you remember any of the sign-up information</label>
                                            <select className = "forgetInput">
                                                <option value="default">Select an option below</option>
                                                <option>Username </option>
                                                <option>Email</option>
                                                <option>Password</option>
                                            </select>
                                        </div>

                                        <div className="forget-input">
                                            <input value={loginInfo} onChange={handleLoginInfo} className = "forgetInput" name="rememberAnswer" placeholder="Please put an information..." />
                                        </div>

                                        <div className="forget-input">
                                        <label>Memorable Question</label>
                                        <select className = "forgetInput">
                                            <option value="default">Please select your question below</option>
                                            <option>What city you were born in? </option>
                                            <option>What was your favorite subject in high school?</option>
                                            <option>In what city or town did your parents meet?</option>
                                            <option>What was the first exam you failed?</option>
                                        </select>
                                        </div>
                                            
                                        <div className="forget-input">
                                            <label for="memorableAnswer">Memorable Answer</label>
                                            <input className = "forgetInput" value={memorableA} onChange={handleMemA} name="memorableAnswer" placeholder="Answer..." />
                                        </div>
                                                       
                                        <input className="primary2" type="button" value="Continue" onClick={handleClick} />
                                    </form>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>}
            </div>
    );
}
export default ForgetUsernamePassword;