import React, { Component } from 'react';
import './Account.css';

class Account extends Component {

    render() {
        return(
            <div className='pageIn'>
                <h1 className='h0'>Account</h1>
                <main className='main'>
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
        )
    }
}
export default Account;