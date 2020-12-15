import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";

export default class NationalitySelect extends Component {

    render () {

        return (
            <Form.Group as={Col}>
                <Form.Label sm={2}>
                    Gender
                </Form.Label>
                <Col sm={10} onChange={this.props.handleChange}>
                    <Form.Check
                        type="radio"
                        label="Male"
                        value="m"
                        name="gender"
                        id="genderMale"
                    />
                    <Form.Check
                        type="radio"
                        label="Female"
                        value="f"
                        name="gender"
                        id="genderFemale"
                    />
                </Col>
            </Form.Group>
        )
    }
}