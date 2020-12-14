import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";

export default class Switch extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
    // Bug and always returns "true"
        return (
            <Form.Group as={Col}>
                {/* Le checkbox bug */}
                <Form.Label sm={2}>
                    {this.props.label}
                </Form.Label>
                <Col>
                    <Form.Check
                        type="switch"
                        label={"is "+this.props.name}
                        name={this.props.name}
                        id={this.props.id + "true"}
                        onChange={this.props.handleChange}
                        checked={this.props.checked}
                    />
                </Col>
            </Form.Group>
        )
    }
}