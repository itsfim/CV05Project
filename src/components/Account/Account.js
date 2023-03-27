import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './Account.css';
import {useEffect,useState } from 'preact/hooks';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

function Account(props) {

    const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        const stringifyToken = JSON.stringify(decoded);
        const parseToken = JSON.parse(stringifyToken);
        const userID = parseToken.sub;
        console.log(userID);
    
    const signOut = () =>{
        props.handleAuthenticated(false);
        localStorage.removeItem('token');
    }
    /*
    const[numberofGamesPlayed, setNumberOfGamesPlayed] = useState("");
    const countNumberOfGames = () =>{
        const formData = new FormData();
        formData.append('UserID', userID);
       
       //fetch api -> post form data 
        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/countgamescore",
          {
            method: 'POST',
            body: formData
          })
        .then(
          (response) => response.text()
        )
        .then(
          (json) => {
            console.log(json)
            setNumberOfGamesPlayed(json.data)
          })
        .catch(
          (e) => {
            console.log(e.message)
          })
    }*/ 

        const deleteUser=()=>{  
        const formData = new FormData();
        formData.append('UserID', userID);
       
       //fetch api -> post form data 
        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/delete",
          {
            method: 'POST',
            body: formData
          })
        .then(
          (response) => response.text()
        )
        .then(
          (json) => {
            console.log(json)
            props.handleInsert()
          })
        .catch(
          (e) => {
            console.log(e.message)
          })

        signOut();
        {shouldRedirect && <Navigate replace to="/signIn" />}
    }

    const shouldRedirect = true;
        return(
            <div>
                {!props.authenticated && <div>
                    {shouldRedirect && <Navigate replace to="/signIn" />}
                </div>}
                {props.authenticated && <div>
                    <div className='pageIntro'>
                        <h1>Account</h1>
                        <div className='WrapperGame'>
                            <main className='item'>
                                <div class="homePageDiv1" id='imageHomePage'>
                                    <h2 className='subHeading'>image placeholder</h2>
                                </div>
                                <div classname='accInfo'>
                                    <h3 classname='subHeading1'>Account Info</h3>
                                    <h3 classname='subHeading2'>Username</h3>
                                    <h3 classname='subHeading3'>No. of games played</h3>
                                </div>
                                <button className="primary1">EDIT</button>
                                <button onClick={deleteUser} className="secondary1">Delete Account</button>
                            </main>
                        </div>
                    </div>
                </div>}
            </div>
        )
}
export default Account;