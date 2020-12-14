import React, {Component} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import * as firebase from "firebase";

class Index extends Component {

    constructor(props) {
        let user = firebase.auth().currentUser;
        super(props);
        this.state = {
            email: user.email,
            displayName: user.displayName,
            phoneNumber: user.phoneNumber
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateProfile(this.state.email,this.state.displayName,this.state.phoneNumber)
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: [e.target.value]})
    };

    render() {
        return (
            <div className="content col-10 mt-3">
                <Card>
                    <Card.Header>My settings</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>My current email address </Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" onChange={this.handleChange} defaultValue={this.state.email}/>
                            </Form.Group>
                            <Form.Group controlId="formDisplayName">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control name="displayName" type="displayName" placeholder="Display Name" onChange={this.handleChange} defaultValue={this.state.displayName}/>
                            </Form.Group>
                            <Form.Group controlId="formPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control name="phoneNumber" type="phoneNumber" placeholder="Phone Number" onChange={this.handleChange} defaultValue={this.state.phoneNumber}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default (Index);