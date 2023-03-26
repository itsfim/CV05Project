import React from 'react';
import "./Report.css"
import '../../App.css'
 
/**
 * Report page component
 * 
 * This page will show information about Gamscores for users.
 * 
 * @author Max Endersby
 */
function Report(props) {
 
    const usersGameScore = props.gameScore?.map(
        (value, key) => <div className ="reportDiv" key={key}>
            <p className='reportP'>GameID: {value.GameID} </p>
			<p className='reportP'>UserID: {value.UserID} </p>
			<p className='reportP'>DatePlayed: {value.DatePlayed} </p>
			<p className='reportP' >TimeScore: {value.TimeScore}</p>
          </div>
      )

      const shouldRedirect = true;
    return (
        <div>
            {!props.authenticated && <div>
                {shouldRedirect && <Navigate replace to="/account" />}
            </div>}
            {props.authenticated && <div>
                <div className='pageIntro'>
                    <h1>Report</h1>
                    <div className="Wrapper">
                        <main className='main'>
                            {usersGameScore}
                        </main>
                    </div>
                </div>
            </div>}
        </div>
    );
}
 
export default Report;