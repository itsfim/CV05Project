import React from 'react';
import Game from './Game.js'
function GameHouse (){
      return (
        <div className="pageIntro"><h1>Game!</h1>
          <div className='WrapperGame'>
            <Game className='item' />
          </div>
        </div>
      );
    }
    
    export default GameHouse;