import React, { Component } from 'react';
import {Card, ProgressBar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";

export default class GenderStatistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    calcPercent = () => {
        return Math.trunc((this.props.nbMale * 100) / this.props.nbUsers)
    };

    render(){
        return(
            <div className="d-flex flex-column w-50 p-3">
                <div className="p-1">
                    <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
                        <span> <FontAwesomeIcon icon={faVenus} /> Female</span>
                        <span className="font-weight-bold">{100 - this.calcPercent()}%</span>
                    </Card.Subtitle>
                    <ProgressBar now={100 - this.calcPercent()} variant="warning" label="taskCreated" srOnly />
                </div>
                <div className="p-1">
                    <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
                        <span><FontAwesomeIcon icon={faMars} /> Male</span>
                        <span className="font-weight-bold">{this.calcPercent()}%</span>
                    </Card.Subtitle>
                    <ProgressBar now={this.calcPercent()} variant="warning" label="taskCreated" srOnly />
                </div>
            </div>
        )
    }
}