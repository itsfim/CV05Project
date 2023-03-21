import React, { Component } from 'react';
//import React, { useState } from 'react';
import '../../App.css'
import './Game.css'
//import './GameScript'

let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let shapes = ['circle'];
let pattern = [];
let index = 0;
let score = 0;
let timer = 300;
let interval;

class Game extends Component {
    constructor(){
        super();

        this.state = {
             display: true
        }
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

    this.generatePattern();
	interval = setInterval(this.countdown, 1000);
   }

   generatePattern() {
        pattern = [];
        index = 0;
        var numShapes = shapes.length;
        var numColors = colors.length;
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
          var div = document.createElement('div');
          div.style.backgroundColor = color;
          div.className = 'shape';
          patternDiv.appendChild(div);
        }
        document.getElementById('pattern').style.display = 'flex';
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
        var expected = pattern[index].color.toLowerCase();
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
            clearInterval(interval);
            alert('Time is up! Your final score is ' + score);
            this.resetGame();
        }
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
            <div className='grid'>
                <h1 className='h1'>Game Page</h1>
                <main className='main'>
                <button onClick={this.loadGame.bind(this)}>
                           Button
                  </button>
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