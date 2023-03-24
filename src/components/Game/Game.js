import React, { useState, useEffect,Component } from 'react';
import '../../App.css'
import './Game.css'

let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let shapes = ['circle','triangle','square'];
//to insure triangles shpw to test
//let shapes = ['triangle'];

let pattern = [];
let index = 0;
let score = 0;
let timer = 10;
let interval;

class Game extends Component {
    constructor(){
        super();

        this.state = {
             display: true
        }

    this.sendState = {
      DatePlayed: "",
      TimeScore:"",
      UserID: "",
    };
        this.loadGame = this.loadGame.bind(this);
        this.generatePattern = this.generatePattern.bind(this);
        this.displayPattern = this.displayPattern.bind(this);
        this.countdown = this.countdown.bind(this);
        this.clearPattern = this.clearPattern.bind(this);
        this.checkUserInput= this.checkUserInput.bind(this);
        this.resetGame = this.resetGame.bind(this);


   }
   changeDisplay(){
       this.setState({display: !this.state.display})
   }

   loadGame(){
    this.setState({display: !this.state.display})
    //this.resetGame();
    this.generatePattern();
	interval = setInterval(this.countdown, 1000);
   }

   generatePattern() {
        pattern = [];
        index = 0;
        var numShapes = shapes.length;
        var numColors = colors.length;
	//increases the pattern length each time the user is over a certain score, can be changed as per clients needs.
        var patternLength = score >= 20 ? 5 : score >= 15 ? 4 : score >= 10 ? 3 : score >= 5 ? 2 : 1;
        for (var i = 0; i < patternLength; i++) {
            var shape = shapes[Math.floor(Math.random() * numShapes)];
            var color = colors[Math.floor(Math.random() * numColors)];
            pattern.push({shape: shape, color: color});
        }
        this.displayPattern();
    }

     displayPattern() {
        var patternDiv = document.getElementById('pattern');
        patternDiv.innerHTML = '';
        for (var i = 0; i < pattern.length; i++) {
          var color = pattern[i].color;
          var shape = pattern[i].shape;
          var div = document.createElement('div');
          div.className = shape;
          //checking infor before and after colour changes
          console.log('shape before -if- statment ' + shape);
          console.log('color before if ' + color)
          console.log('border before if ' + div.style.borderBottom);
          //colour needs to be applied to the border for the triangle image
          if(shape!='triangle'){
            div.style.backgroundColor= color;
            console.log('working if statement')
          }else {
            div.style.borderBottomColor= color;
            console.log('else if triggered')

          }
          //double checking info in console
          console.log('div className '+ div.className);
          console.log('background color '+ div.style.backgroundColor);
          console.log(' triangle border '+ div.style.borderBottomColor);

          patternDiv.appendChild(div);
        }
        document.getElementById('pattern').style.display = 'flex';
	//sets how long the pattern will be on screen for before it is wiped, can be changed as per the clients needs.
        setTimeout(this.clearPattern, 5000);
      }

      clearPattern() {
        var patternDiv = document.getElementById('pattern');
        patternDiv.innerHTML = '';
    }

    checkUserInput() {
        var userPattern = [];
        var inputs = document.querySelectorAll('.user-input');
        for (var i = 0; i < inputs.length; i++) {
            var shape = inputs[i].classList[1];
            var color = inputs[i].style.backgroundColor;
            userPattern.push({ shape: shape, color: color });
        }
        for (var i = 0; i < pattern.length; i++) {
            if (userPattern[i].color !== pattern[i].color) {
                return false;
            }
        }
        return true;
    }

    handleUserInput() {
        var isCorrect = this.checkUserInput();
        if (isCorrect) {
            score++;
            document.getElementById('score').textContent = score;
            this.generatePatternElement();
            this.displayPattern();
        } else {
            this.gameOver();
        }
    }


    checkPattern() {
        var input = document.getElementById('input').value.trim().toLowerCase();
	//below code expects that the user tyoes the answer in lowercase
        var expected = pattern[index].color.toLowerCase();
	//if answer is as expected then increase the users score by one
        if (input === expected) {
            index++;
            score++;
            document.getElementById('score').textContent = score;
            if (index === pattern.length) {
                this.generatePattern();
            }
        } else {
            alert('Wrong pattern! Try again.');
        }
        document.getElementById('input').value = '';
    }

    countdown() {
        timer--;
        var minutes = Math.floor(timer / 60);
        var seconds = timer % 60;
        document.getElementById('time').textContent = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
        if (timer === 0) {
		//once timer hits 0 call send to db function and input final score to be uploaded to database.
		this.sendtodb(score);
            clearInterval(interval);
            alert('Time is up! Your final score is ' + score);
            this.resetGame();
        }
    }
	
	sendtodb(){
       // e.preventDefault();

        const formData = new FormData();
            formData.append('DatePlayed', this.sendState.DatePlayed);
            formData.append('TimeScore', score);
            formData.append('UserID', this.sendState.UserID);
    
        /*const requestOptions = {
          method: 'POST',
          headers: {'Accept': 'application/json','Content-Type': 'application/json'},
          body: formData
        };*/
    
        const requestOptions={
          method: 'POST',
          headers: new Headers({'Accept': 'application/json','Content-Type': 'application/json'}),
          body: formData
        }
        console.log("score value = " +score);
    
         fetch('http://unn-w20022435.newnumyspace.co.uk/groupProj/api/addgamescore', requestOptions)
          .then(
            (response) => response.json())
          .then(
            (json) => {
                console.log(json);
            })
    }
	
    resetGame() {
        document.getElementById('game').style.display = 'none';
        score = 0;
        timer = 300;
        document.getElementById('score').textContent = score;
        document.getElementById('time').textContent = '5:00';
    this.clearPattern();
}
    render() {
        let change_display = this.state.display ? "none" : "block";
        console.log(interval);
        return(
            //tom
            <div className=''>
                <h1 className=''>Game Page</h1>
                <main className='main'>
                    <button onClick={this.loadGame.bind(this)}>Start Game</button>
                    <div className={change_display}>
                    <h2>Remember the pattern:</h2>
                    <div id="pattern"></div>
                        <label for="input">Enter the color of the shape:</label>
                        <input type="text" id="input"/>
                        <button onClick={this.checkPattern.bind(this)}>Submit</button>
                        <p>Time left: <span id="time">5:00</span></p>
                        <p>Score: <span id="score">0</span></p>
                    </div>
                </main>
            </div>
        )
    }
}
export default Game;
