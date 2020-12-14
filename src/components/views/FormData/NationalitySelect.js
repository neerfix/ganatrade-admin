import React, {Component} from "react";
import {Col, Form} from "react-bootstrap";
import {country} from '../../../tools/Nationalities';

export default class NationalitySelect extends Component {

    render () {

        return (
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Nationality</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." name={'nat'} onChange={this.props.handleChange}>
                    {country.map((country, index) => {
                            return <option value={country.value} key={index}>{country.name}</option>
                    })}
                </Form.Control>
            </Form.Group>
        )
    }
}