import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import ButtonGroupAction from "./ButtonGroupAction";
import getToken from "../../../functions/getToken";
import {Link} from "react-router-dom";
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
                <th>Trades</th>
                <th>Title</th>
                <th>Description</th>
                <th>Product Name</th>
                <th>Product Condition</th>
                <th>Tags</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {this.state.data.slice(this.props.startRange, this.props.endRange).map( (offers, index) => {
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td>
                        <Link to={'/list/offers/' + offers.id + '/trades'}>
                            <button className={"btn-success btn-sm"}> View trades </button>
                        </Link>
                    </td>
                    <td>{offers.title}</td>
                    <td>{offers.description}</td>
                    <td>{offers.product && offers.product.name}</td>
                    <td>{offers.product && offers.product.condition}</td>
                    <td>{offers.tags + ''}</td>
                    <td>
                        <ButtonGroupAction data={this.props.data} id={offers.id} type="offers"/>
                    </td>
                </tr>

            })}
            </tbody>
        </Table>

    }

}
