import React, { Component } from 'react';
import {Badge, NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notifications: 1
        };
    }

    render(){
        return (
            <NavDropdown title={(
                <span>
                    <FontAwesomeIcon icon={this.props.icon}/> <Badge pill variant={this.props.type} className={"notifications"}>{this.state.notifications}</Badge>
                </span>
                )} id="basic-nav-dropdown">
                <NavDropdown.Item disabled><h6>{this.props.title}</h6></NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item href={this.props.title + "/settings"}>Settings</NavDropdown.Item>
            </NavDropdown>
        )
    }
}