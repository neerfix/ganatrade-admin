import React, {Component} from 'react';
import {Table} from "react-bootstrap";

class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "reviews",
            tokenACP: 'token',
            isLoading: false,
            data: this.props.data,
            activePage: '1',
        };
    }

    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark" >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>content</th>
                        <th>créé le </th>
                        <th>par</th>
                        <th>note</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (review, index) => {
                        console.log(review);
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{review.id}</td>
                                <td>{review.content}</td>
                                <td>{Date(review.created_at)}</td>
                                <td>{review.author_id}</td>
                                <td>{review.note}</td>
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
