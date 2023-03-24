import React, { Component } from 'react';
import '../../App.css'
import './SignIn.css'
import { Link } from 'react-router-dom';

class SignIn extends Component {


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
          <h1> Welcome back </h1>
            <div className='WrapperLog'>
              <div className="rectangle-1">
                <div className='signin-nav'>
                  <div className='signin-tab-active'>
                    <a className='signin-navlink' href='SignIn'> Sign in </a>
                  </div>
                    <div className="signup-tab">
                      <div className="sign-up">
                        <Link to='Signup'>Sign up</Link>
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
                          </div>
                          <br></br>
                          <button className="primary">Sign-in</button>
                          <span class="forget-pw">
                          <Link to='ForgetUsernamePassword'>Forgot Username / Password?</Link>
                          </span>
                        </form>
                      </div>
                    </main>
                </div> 
              </div> 
              </div>
        );
      }
}

export default SignIn;