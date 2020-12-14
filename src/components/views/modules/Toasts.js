import React from "react";
import {Toast} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

export default class Toasts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showToast: this.props.showT,
            type: this.props.type,
            message: this.props.message
        };
    }

    returnTitle = (type) => {
        switch (type) {
            case "success":
                return (
                    <span>
                        <FontAwesomeIcon icon={faCheckSquare}/>&nbsp;
                        <strong className="mr-auto">Success !</strong>
                    </span>
                );
            case "error":
                return (
                    <span>
                        <FontAwesomeIcon icon={faTimesCircle}/>&nbsp;
                            <strong className="mr-auto">Error !</strong>
                        </span>
                );
            case "info":
                break;
            default:
                break;
        }
    };

    render(){
        return (
            <Toast show={this.props.showT} className={this.props.type}>
                <Toast.Header>
                    {this.returnTitle(this.props.type)}
                </Toast.Header>
                <Toast.Body>
                    {this.props.message}
                </Toast.Body>
            </Toast>
        )
    }
}