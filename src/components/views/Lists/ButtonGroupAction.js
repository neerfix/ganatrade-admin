import React, { Component } from 'react';
import {Button, ButtonGroup, Modal} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import routeAPI from "../../../tools/routeAPI";
import Toasts from "../modules/Toasts";
import getToken from "../../../functions/getToken";
import {Link} from "react-router-dom";
const token = getToken();

export default class ButtonGroupAction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tokenACP: token,
            isShown: false,
            showToast: false,
            toastMessage: '',
            toastType: '',
            dataId: this.props.id,
        };
    }
    showToasts = () => {this.setState({showToast: true})};
    closeToast = () => {this.setState({showToast: false})};
    delayToHide = () => {setTimeout(this.closeToast, 10000)};

    Deactivate = (e) => {
        e.preventDefault();
        let user = this.props.data;
        fetch(routeAPI + 'users/' + this.props.id, {
            method: "PUT",
            headers: {'Authorization': this.state.tokenACP},
            body: {
                email: user.email,
                phoneNumber: user.phone,
                password: user.password,
                displayName: user.displayName,
                photoURL: user.photoURL,
                disabled: true
            }
        })
            .then(r => {
                this.setState({
                    toastMessage: 'User update with success !',
                    toastType: 'success'
                })
            })
            .catch(e => {
                this.setState({
                    toastMessage: 'An error occurred while updating the user: ' + e.message,
                    toastType: 'error'
                });
            });
        this.handleClose();
        this.showToasts();
        this.delayToHide();
    };

    deleteConfirm = (e) => {
        e.preventDefault();
        fetch(routeAPI + this.props.type + "/" + this.props.id, {
            method: "delete",
            headers: {'Authorization': this.state.tokenACP},
        })
            .then(response =>
                this.setState({
                    toastMessage: 'Action successfully completed !',
                    toastType: 'success'
                })
            );
        this.handleClose();
        this.showToasts();
        this.delayToHide();
    };

    handleClose = () => { this.setState({isShown: false})};

    render(){
        return(
            <div>
                <ButtonGroup aria-label="Basic example">
                    <Link to={"/data/edit/" + this.props.type + "/" +this.props.id}><Button variant={"warning"}><FontAwesomeIcon icon={faUserEdit}/></Button></Link>
                    <Button variant={"danger"}
                            onClick={() => this.setState({isShown: true, data: "users"}
                            )}><FontAwesomeIcon icon={faTimes}/></Button>
                </ButtonGroup>
                <Modal show={this.state.isShown} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure to want delete {this.props.data ? this.props.data.email : ""} ?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>No</Button>
                        {this.props.type === 'users' ? (
                        <Button type={"submit"} variant="warning" onClick={this.Deactivate}>Deactivate</Button>
                        ) : ""}
                        <Button type={"submit"} variant="danger" onClick={this.deleteConfirm}>Yes</Button>
                    </Modal.Footer>
                </Modal>
                <Toasts showT={this.state.showToast} message={this.state.toastMessage} type={this.state.toastType}/>
            </div>
        )
    }
}
