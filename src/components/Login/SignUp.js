import React, { Component } from 'react';
import '../../App.css'
import './SignUp.css'

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: "",
      Username:"",
      Password: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      Username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      Password: e.target.value,
    });
  }

  handleSubmit (e) {
    e.preventDefault();

    const formData = new FormData();
        formData.append('Username', this.state.Username);
        formData.append('email', this.state.email);
        formData.append('Password', this.state.Password);

    /*const requestOptions = {
      method: 'POST',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: formData
    };*/

    const requestOptions={
      method: 'POST',
      headers: new Headers({'Accept': 'application/json','Content-Type': 'application/json'}),
      body: formData
    }
    console.log("username value update by sign up page = "+this.state.Username);
    console.log("form data = "+formData);

     fetch('http://unn-w20022435.newnumyspace.co.uk/groupProj/api/addplayer', requestOptions)
      .then(
        (response) => response.json())
      .then(
        (json) => {
            console.log(json);
        })
  }
    /*
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
      */
    
      /*handleClick = e => {
        e.preventDefault();
    
        alert("Goes to registration page");
      };*/
    
      render() {
        return (
            <div> 
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
                            <div className="input-group">
                <label for="username">Username</label> <br></br>
                <input 
                  className = "loginInput"
                  type="username" 
                  name="username"
                  placeholder="Username..."
                  value={this.state.Username} 
                  onChange={this.onChangeUsername} 
                />        
              </div>
              <div className="input-group">
                <label for="email">Email</label> <br></br>
                <input 
                  className = "loginInput"
                  type="email" 
                  name="email"
                  placeholder="Email..."
                  value={this.state.email} 
                  onChange={this.onChangeEmail} 
                />        
              </div>
              <div className="input-group">
              <br></br>
                <label for="password">Password</label> <br></br>
                <input 
                  className = "loginInput"
                  type="password" 
                  placeholder="Password..." 
                  value={this.state.Password} 
                  onChange={this.onChangePassword} 
                />
                <div className='memdiv'>
                <label>Memorable Question</label>
                <select className = "recoverAcc1">
                <option value="default">Please select your question below</option>
                <option value="Q1">What city you were born in? </option>
                <option value="Q2">What was your favorite subject in high school?</option>
                <option value="Q3">In what city or town did your parents meet?</option>
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
              <button value="Submit" onClick={this.handleSubmit}>Submit</button>
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
