import React from 'react';
import Timer from '../Timer/Timer.js';
import Game from './Game.js'
function GameHouse (props){
  const date = props.time;
      return (
        <div className="pageIntro"><h1>Game!</h1>
          <div className='WrapperGame'>
            <Game className='item' date={date} />
          </div>
        </div>
      );
    }
    
    export default GameHouse;