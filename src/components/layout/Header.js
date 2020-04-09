import React, { Component } from 'react'
import logo from '../../assets/chatterboxlogo.png'; 

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top mr-1" alt=""></img>
                     AEXI Dashboard
                </a>
            </nav>
        )
    }
}

export default Header
