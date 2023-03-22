import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false
        }
    }
    handleClick = () => {
        this.setState({display:!this.state.display})
    }
render() {
    let navinfo = "";
    if(this.state.display){
        navinfo=
        <ul>
             <li><Link to="homepage" onClick={this.handleClick}>Homepage</Link></li>
             <li><Link to="" onClick={this.handleClick}>Login</Link></li>
             <li><Link to="game" onClick={this.handleClick}>Game</Link></li>
             <li><Link to="account">Account</Link></li>
             <li><Link to="#" onClick={this.handleClick}>Close</Link></li>
        </ul>
        
    }
  return ( 
    <nav>
          <div className="button">
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
             <li><Link to="login">Login</Link></li>
             <li><Link to="game">Game</Link></li>
             <li><Link to="report">Report</Link></li>
           </ul></div>
    </nav>
  );
}
}

export default Navbar