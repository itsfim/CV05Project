import React, { Component } from 'react';
import '../../App.css'
import './SignUp.css'

class SignUp extends Component {


  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);

    
        if (!e.target.username.value) {
          alert("Username is required");
        } else if (!e.target.username.value) {
          alert("Valid username is required");
        } else if (!e.target.password.value) {
          alert("Password is required");
        } else if (
          e.target.username.value === "Username" &&
          e.target.password.value === "123456"
        ) {
          alert("Successfully logged in");
          e.target.username.value = "";
          e.target.password.value = "";
        } else {
          alert("Wrong username or password combination");
        }
      };
    
      handleClick = e => {
        e.preventDefault();
    
        alert("Goes to registration page");
      };
    
      render() {
        return (
          <div className='pageIntro'>
          <h1> Create an Account</h1>
            <div className='WrapperLog'> 
                
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
                            <form className="form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <label for="username">Username</label> <br></br>
                <input className = "loginInput" type="username" name="username" placeholder="Username..."/> 
              </div>
              <div className="input-group">
              <br></br>
                <label for="password">Password</label> <br></br>
                <input className = "loginInput" type="password" name="password" placeholder="Password..." />
                <div className='memdiv'>
                <label>Memorable Question</label>
                <select className = "recoverAcc1">
                <option value="default">Please select your question below</option>
                <option value="Q1">What city you were born in? </option>
                <option value="Q2">What was your favorite subject in high school?</option>
                <option value="Q3">In what city or town did your mother and father meet?</option>
                <option value="Q4">What was the first exam you failed?</option>
                </select>
                </div>
                </div>
                <div className="input-group">
                <br></br>
                <label for="memorableAnswer">Memorable Answer</label> <br></br>
                <input className = "recoverAcc1" type="memorableAnswer" name="memorableAnswer" placeholder="Answer..." />
              </div>
              
              <br></br>
              <button className="primary">Sign-up</button>
              </form>
          </div>
            </main>
            </div>
            </div>
            </div>
        );
      }
}

export default SignUp;
