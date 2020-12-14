import React, { Component } from 'react';
import {ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <NavLink to={this.props.to} activeClassName="active">
                <ListGroup.Item>
                    <FontAwesomeIcon icon={this.props.icon}/> {this.props.dataType}
                </ListGroup.Item>
            </NavLink>
        )
    }
}