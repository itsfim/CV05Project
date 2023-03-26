import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import '../../App.css'
import './ForgetUsernamePassword.css'

//author Phufah Nontamongkoltorn

function ForgetUsernamePassword (props) {
    const [loginInfo, setLoginInfo] = useState("");
    const [memQ, setMemQ] = useState("");
  
  useEffect(
    () => {
      if (localStorage.getItem('token')) {
        props.handleAuthenticated(true)
      }
    },[])

    const handleLoginInfo = (event) => {
        setLoginInfo(event.target.value);
    }

    const handleMemQ = (event) => {
        setMemQ(event.target.value);
    }

    const handleClick = () => {

        const encodedString = Buffer.from(
            loginInfo + ":" + memQ
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
    const shouldRedirect = true;
        return(
            <div>
                {props.authenticated && <div>
              {shouldRedirect && <Navigate replace to="/account" />}
              </div>}
              {!props.authenticated && <div>
            <div className='forgetIntro'>
                <h1 className='reUNPW'>Recover username / password</h1>
                <div className="box1">
                    <main className=''>
                        <div className="App">
                            <form className="form">
                            <div className="rememberParent">
                                <div className="input-group">
                                    <label>Do you remember any of the sign-up information</label>
                                        <select className = "remInfo">
                                        <option value="default">Select an option below</option>
                                        <option value={loginInfo}>Username </option>
                                        <option value={loginInfo}>Email</option>
                                        <option value={loginInfo}>Password</option>
                                        </select>
                                     </div>
                                    <div className="input-group">
                                    <br></br>
                                    <input value={loginInfo} onChange={handleLoginInfo} className = "remInfo" type="rememberAnswer" name="rememberAnswer" placeholder="Please put an information..." />
                                </div>
                                </div>

                                <div className="memorableParent">
                                <div className="input-group">
                                    <label>Memorable Question</label>
                                        <select className = "recoverAcc">
                                        <option value="default">Please select your question below</option>
                                        <option value={memQ}>What city you were born in? </option>
                                        <option value={memQ}>What was your favorite subject in high school?</option>
                                        <option value={memQ}>In what city or town did your parents meet?</option>
                                        <option value={memQ}>What was the first exam you failed?</option>
                                        </select>
                                     </div>
                                    <div className="input-group">
                                    <br></br>
                                    <label for="memorableAnswer">Memorable Answer</label> <br></br>
                                    <input value={memQ} onChange={handleMemQ} className = "recoverAcc" type="memorableAnswer" name="memorableAnswer" placeholder="Answer..." />
                                </div>
                                </div>
                                <br></br>
                                <button className="primary2" onClick={handleClick}>Continue</button>
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