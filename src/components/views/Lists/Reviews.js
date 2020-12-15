import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import routeAPI from "../../../tools/routeAPI";

class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "reviews",
            tokenACP: 'token',
            dataType: this.props.location.pathname.substr(6),
            isLoading: false,
            data: [],
            activePage: '1',
        };
    }

    async componentDidMount() {
        await fetch(routeAPI + this.state.dataType+'/', {
            method: "GET"
            // headers: { 'Authorization': this.state.tokenACP },
        }).then(response => response.json())
            .then(json => {
                if(json){
                    this.setState({ data: json, apiLoaded: true });
                }
            });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Table striped bordered hover variant="dark" >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Author Id</th>
                        <th>Created At</th>
                        <th>Content</th>
                        <th>Note</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <h1>PANCAKE</h1>
                    <tbody>
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (review, index) => {
                        console.log(review);
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{review.uid}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default (Reviews);
