import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";

export default class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <span>
                    <Spinner animation="grow"/>
                    <Spinner animation="grow"/>
                    <Spinner animation="grow"/>
                </span>
    }
}