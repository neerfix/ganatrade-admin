import React, { Component } from 'react';
import {ListGroup} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {faUser, faMapPin, faFlag, faClipboard, faTachometerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ListGroupItem from './ListGroupItem';

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.location.pathname !== '/') {
            return (
                <div className={"sideMenu col-2"}>
                    <ListGroup variant="flush" defaultActiveKey="#link1">
                        <NavLink exact to={'/dashboard'} activeClassName="active">
                            <ListGroup.Item>
                                <FontAwesomeIcon icon={faTachometerAlt}/> Dashboard
                            </ListGroup.Item>
                        </NavLink>
                        <h3>Data</h3>
                        <ListGroupItem to={'/list/users'} dataType={"Users"} icon={faUser}/>
                        <ListGroupItem to={'/list/categories'} dataType={"Categories"} icon={faMapPin}/>
                        <ListGroupItem to={'/list/offers'} dataType={"Offers"} icon={faClipboard}/>
                        <h3>Moderation</h3>
                        <ListGroupItem to={'/alert'} dataType={"Reporting"} icon={faFlag}/>
                        <ListGroupItem to={'/alert'} dataType={"Ban"} icon={faFlag}/>
                    </ListGroup>
                </div>
            )
        }else{
            return ("")
        }
    }
}
