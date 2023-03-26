import React from 'react';
import { Navigate } from 'react-router-dom';
import Game from './Game.js'
function GameHouse (props){
  const date = props.time;

  const shouldRedirect = true;
      return (
        <div>
          {props.authenticated && <div>
            <div className="pageIntro"><h1>Game!</h1>
          <div className='WrapperGame'>
            <Game className='item'/>
          </div>
        </div>
          </div>}
          {!props.authenticated && <div>
            {shouldRedirect && <Navigate replace to="/signIn" />}
            </div>}
        </div>
      );
    }
    
    export default GameHouse;