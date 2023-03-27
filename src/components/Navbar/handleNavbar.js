import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false,
            anim:'button',
        }

    }
    handleClick = () => {
        this.setState({display:!this.state.display})
        if(this.state.display){
          this.setState({anim:'revButton'});
        }
        else{this.setState({anim:'button'})}
        setTimeout(100);
    }
render() {
    let time = this.props.startTime;
    let navinfo = "";
    if(this.state.display){
        navinfo=
        <ul>
             <li><Link to="homepage" onClick={this.handleClick}>Homepage</Link></li>
             <li><Link to="login" onClick={this.handleClick}>Account</Link></li>
             <li><Link to="game" onClick={this.handleClick}>Game</Link></li>
             <li><Link to="report" onClick={this.handleClick}>Report</Link></li>
             <li><Link to="#" onClick={this.handleClick}>Close</Link></li>
             <li><Link to="signOut" onClick={this.handleClick}>SignOut</Link></li>
             <li className='displayTimer'>Session Started at: {time}</li>
        </ul>
        
    }
  return ( 
    <nav>
          <div className={this.state.anim}>
            <div href="#" onClick={this.handleClick} className="toggleHam">
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            </div>
            {navinfo}
          </div>
          <div className="full">
           <ul>
             <li><Link to="homepage">Homepage</Link></li>
             <li><Link to="login">Account</Link></li>
             <li><Link to="game">Game</Link></li>
             <li><Link to="report">Report</Link></li>
             <li><Link to="signOut">SignOut</Link></li>
              <li className='displayTimer'>Session Started at: {time}</li>
           </ul></div>
    </nav>
  );
}
}

export default Navbar