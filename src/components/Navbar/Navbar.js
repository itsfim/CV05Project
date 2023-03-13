import React, { Component } from 'react';
import { NavItems } from "./NavItems"
import './Navbar.css'

class Navbar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h2>Nav</h2>
                <ul className={this.stateClicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })} 
                </ul>
            </nav>
        )
    }
}
export default Navbar;