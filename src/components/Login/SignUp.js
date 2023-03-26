import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../../App.css'
import './SignUp.css'

//author Phufah Nontamongkoltorn

function SignUp (props){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [memorableQ, setMemQ] = useState("");
  const [memorableA, setMemA] = useState("");

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
      console.log(event.target.value);
    }
    const handleMemA = (event) => {
      setMemA(event.target.value);
    }

    const handleClick = () => {
      const formData = new FormData();
      formData.append('Username', username);
      formData.append('email', email);
      formData.append('Password', password);
      formData.append('memorableQ', memorableQ);
      formData.append('memorableA', memorableA);

        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/addplayer",
        {
            method: 'POST', 
            body: formData          
        })
        .then(
            (response) => {   
                return response.text()
            }
        )
        .then(
            (json) => {
                console.log(json);
            }
        )
        .catch(
            (e) => {
                console.log(e.message)
            }
        )
    }

    const shouldRedirect = true;
        return (
            <div> 
              {props.authenticated && <div>
                {shouldRedirect && <Navigate replace to="/account" />}
                </div>}
                {!props.authenticated && <div>
                  <div className='signupIntro'>
                <h1 className= 'createA'> Create an Account</h1>
                <div className="rectangle-2">
                    <div className='signin-nav'>
                        <div className='signin-tab'>
                            <a className='signin-navlink1' href='SignIn'> Sign in </a>
                        </div>
                        <div className="signup-tab-active">
                            <div className="sign-up">
                                <a className="signup-navlink1" href="SignUp" title='sign up'>Sign up</a>
                            </div>
                        </div>
                    </div>
                    <main className=''>
                    <div className="App">
                    <form className="form">
                      
                      <div className="signup-input">
                        <label for="username">Username</label>
                        <input className = "signupInput" type="text" placeholder ="Username..." value={username} onChange={handleUsername} />       
                      </div>

                      <div className="signup-input">
                        <label for="email">Email</label> 
                        <input className = "signupInput" type="text" placeholder="Email..." value={email} onChange={handleEmail} />                
                      </div>
                    
                      <div className="signup-input">
                        <label for="password">Password</label>
                        <input className = "signupInput" type="password" placeholder="Password..." value={password} onChange={handlePassword} />        
                      </div>
                      
                      <div className="signup-input">
                        <label for="memorableQuestion">Memorable Question</label>
                        <select value={memorableQ} className = "signupInput" onChange={handleMemQ}>
                        <option value="default">Please select your question below</option>
                        <option value="What city you were born in?">What city you were born in? </option>
                        <option value="What was your favorite subject in high school?">What was your favorite subject in high school?</option>
                        <option value="In what city or town did your parents meet?">In what city or town did your parents meet?</option>
                        <option value="What was the first exam you failed?">What was the first exam you failed?</option>
                        </select>
                      </div>
                      
                      <div className="signup-input">
                        <label for="memorableAnswer">Memorable Answer</label>
                        <input className = "signupInput" onChange={handleMemA} value={memorableA} name="memorableAnswer" placeholder="Answer..." />
                        <p className='notiA'>*Please take note of the question and answer above to recover your account</p>
                      </div>

                      <input className="primary2" type="button" value="Submit" onClick={handleClick} />
                    </form>
                    </div>
                    </main>
                </div>
            </div>
                </div>}
            
            </div>
          );
}

export default SignUp;