import React, { Component } from 'react';
import '../../App.css'
import './SignIn.css'

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
            <div className='grid'>
              <h1 className= 'h1'> Welcome back </h1>
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
                            <a className="forget-unpw" href="ForgetUsernamePassword" title='Forget Username/Password' id="link-reset"> Forget username / password </a>
                          </span>
                        </form>
                      </div>
                    </main>
                </div> 
              </div> 
        );
      }
}

export default SignIn;
