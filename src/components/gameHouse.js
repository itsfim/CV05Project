import React from "react";
import Game from './Game.js'
class GameHouse extends React.Component {

    render() {
      return (
        <div className="pageIntro"><h1>Game!</h1>
        <div className='WrapperGame'>
          <Game className='item' />
        </div></div>
      );
    }
    }
    
    export default GameHouse;