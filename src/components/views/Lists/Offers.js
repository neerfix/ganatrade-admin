import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import ButtonGroupAction from "./ButtonGroupAction";
import getToken from "../../../functions/getToken";
const token = getToken();

export default class Offers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "offers",
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
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Product Name</th>
                <th>Product Condition</th>
                <th>Tags</th>
                <th>User ID</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.data.slice(this.props.startRange, this.props.endRange).map( (offers, index) => {
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{offers.id}</td>
                    <td>{offers.title}</td>
                    <td>{offers.category}</td>
                    <td>{offers.description}</td>
                    {/*<td>{offers.product.name}</td>*/}
                    {/*<td>{offers.product.condition}</td>*/}
                    {/*<td>{tags[0]}</td>*/}
                    <td>
                        <ButtonGroupAction data={this.props.data} id={offers.id} type="offers"/>
                    </td>
                </tr>
            })}
            </tbody>
        </Table>

    }

}
