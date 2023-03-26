import { useEffect } from "react";
import { Navigate } from "react-router-dom";

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

      const shouldRedirect = true;  

    return(
        <div>
            {props.authenticated && <div>
                <button onClick={handleSignOut}>Sign Out</button>
          </div>}
          {!props.authenticated && <div>
            {shouldRedirect && <Navigate replace to="/signIn" />}
          </div>}
        </div>
    );
}

export default Login;