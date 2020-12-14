import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import ButtonGroupAction from "./ButtonGroupAction";
import getToken from "../../../functions/getToken";
const token = getToken();

export default class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "categories",
            tokenACP: token,
            isLoading: false,
            data: this.props.data,
            activePage: '1'
        };
    }

    render() {
        return <Table striped bordered hover variant="dark" >
                <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.slice(this.props.startRange, this.props.endRange).map( (categories, index) => {
                        return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{categories.id}</td>
                                    <td>{categories.title}</td>
                                    <td>{categories.description}</td>
                                    <td>
                                        <ButtonGroupAction data={this.props.data} id={categories.id} type="categories"/>
                                    </td>
                                </tr>
                    })}
                </tbody>
            </Table>
    }
}
