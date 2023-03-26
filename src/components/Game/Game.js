import '../../App.css'
import './Game.css'
import jwt_decode from "jwt-decode"; 

let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let shapes = ['circle','triangle','square'];
//to insure triangles shpw to test
//let shapes = ['triangle'];

let pattern = [];
let index = 0;
let score = 0;
let timer = 10;
let interval;

function Game (props) {

//const token =
//const decoded = jwt_decode(token);
//console.log("decoded token = "+decoded);

   const loadGame =() =>{
    //this.setState({display: !this.state.display})
    resetGame();
    generatePattern();
	interval = setInterval(countdown, 1000);
   }

   const generatePattern = ()=> {
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
        displayPattern();
    }

     const displayPattern= () => {
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
        setTimeout(clearPattern, 5000);
    }

    const clearPattern =()=>{
        var patternDiv = document.getElementById('pattern');
        patternDiv.innerHTML = '';
    }

    const checkUserInput = () =>{
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

    const handleUserInput = () =>{
        var isCorrect = checkUserInput();
        if (isCorrect) {
            score++;
            document.getElementById('score').textContent = score;
            this.generatePatternElement();
            displayPattern();
        } else {
            this.gameOver();
        }
    }


    const checkPattern =()=> {
        var input = document.getElementById('input').value.trim().toLowerCase();
	//below code expects that the user tyoes the answer in lowercase
        var expected = pattern[index].color.toLowerCase();
	//if answer is as expected then increase the users score by one
        if (input === expected) {
            index++;
            score++;
            document.getElementById('score').textContent = score;
            if (index === pattern.length) {
                generatePattern();
            }
        } else {
            alert('Wrong pattern! Try again.');
        }
        document.getElementById('input').value = '';
    }

    const countdown = () =>{
        timer--;
        var minutes = Math.floor(timer / 60);
        var seconds = timer % 60;
        document.getElementById('time').textContent = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
        if (timer === 0) {
		//once timer hits 0 call send to db function and input final score to be uploaded to database.
		sendtodb(score);
            clearInterval(interval);
            alert('Time is up! Your final score is ' + score);
            resetGame();
        }
    }
	
    const resetGame=() => {
        //document.getElementById('game').style.display = 'none';
        score = 0;
        timer = 10;
        document.getElementById('score').textContent = score;
        document.getElementById('time').textContent = '5:00';
        clearPattern();
    }
    const sendtodb=(event)=>{  
        const formData = new FormData();
        formData.append('TimeScore', event.score);
        formData.append('DatePlayed', props.date);
        //formData.append('UserID', props.userID);
       
       
        fetch("http://unn-w20022435.newnumyspace.co.uk/groupProj/api/addgamescore",
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
    }
        return(
            //tom
            <div>
                    <div className=''>
                        <h1 className=''>Game Page</h1>
                        <main className='main'>
                            <button onClick={loadGame}>Start Game</button>
                            <div /*className={change_display}*/>
                            <h2>Remember the pattern:</h2>
                            <div id="pattern"></div>
                                <label for="input">Enter the color of the shape:</label>
                                <input type="text" id="input"/>
                                <button onClick={checkPattern}>Submit</button>
                                <p>Time left: <span id="time">5:00</span></p>
                                <p>Score: <span id="score">0</span></p>
                            </div>
                        </main>
                    </div>
                </div>
        )
}
export default Game;
