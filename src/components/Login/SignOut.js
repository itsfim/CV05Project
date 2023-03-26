import { useEffect } from "react";
//import { Navigate } from "react-router-dom";
import './SignOut.css';

//author Phufah Nontamongkoltorn

function Login(props){
  useEffect(
    () => {
      if (localStorage.getItem('token')) {
        props.handleAuthenticated(true)
      }
    },[])

    const handleSignOut = () => {
        props.handleAuthenticated(false);
        localStorage.removeItem('token');
      }

    return(
        <div className="Wrapper">
            {props.authenticated && <div className="signout-input">
                <p className='signout-text'>If you wish to exit out of the account please press the button below</p>
                <input className="primary3" type="button" value="Sign Out" onClick={handleSignOut}/>
          </div>}
          {!props.authenticated && <div>
            <h1>You are not signed in</h1>
                <p className='goSignin'>Click <a style={{textDecoration: 'underline'}}href="SignIn">me</a> to sign-in or sign-up</p>
          </div>}
        </div>
    );
}

export default Login;