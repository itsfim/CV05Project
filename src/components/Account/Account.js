import { Navigate } from 'react-router-dom';
import './Account.css';

function Account(props) {

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
                                <button className="secondary1">Delete Account</button>
                            </main>
                        </div>
                    </div>
                </div>}
            </div>
        )
}
export default Account;