import React, { Component } from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {faBell, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import Gravatar from 'react-gravatar';
import Dropdown from "./Dropdown";
import logo from '../../../assets/img/full-logo.png'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render(){
        if (this.props.location.pathname !== '/') {
            return (
                <Navbar fixed="top">
                    <Navbar.Brand href="/dashboard" className={"color-danger"}> <img src={logo} alt={"logo"} width={"60px"}/>  </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link to="/users">Users</Nav.Link>
                    </Nav>
                    <Dropdown title={"Notifications"} icon={faBell} type={"danger"}/>
                    <Dropdown title={"Messages"} icon={faEnvelopeOpenText} type={"info"}/>
                    <Link to={"/profile/settings"} className={"ml-2"}>
                        <Gravatar email={'nicolas.notararigo@gmail.com'} className={"rounded-circle"} size={35}/>
                    </Link>
                </Navbar>
            )
        }else{
            return ("")
        }
    }
}
