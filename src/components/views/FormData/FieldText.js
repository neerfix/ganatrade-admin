import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";

export default class FieldText extends Component {

    render () {

        return <Form.Group as={Col} controlId={this.props.id}>
                    <Form.Label>{this.props.title}</Form.Label>
                    <Form.Control
                        defaultValue={this.props.defaultValue}
                        name={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        onChange={this.props.handleChange}/>
                </Form.Group>
    }
}