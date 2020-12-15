import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import Gravatar from 'react-gravatar';
import ButtonGroupAction from "./ButtonGroupAction";
import routeAPI from "../../../tools/routeAPI";

class Reviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "reviews",
            tokenACP: token,
            isLoading: false,
            data: this.props.data,
            activePage: '1',
        };
    }
    async componentDidMount() {
            await fetch(routeAPI + this.state.dataType + "/" + this.props.id, {
                headers: { 'Authorization': this.state.tokenACP },
                method: 'GET',
            }).then(response => response.json())
                .then(json => {
                    if(json){
                        this.setState({
                            apiLoaded: true,
                            data: json,
                        });
                    }
                }).catch(e => {
                    console.log(e.code)
                    console.log(e.message)
                })
        }

    render() {
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
                    <tbody>
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (review, index) => {
                        console.log(review);
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{review.uid}</td>
                                <td>{review.authorId}</td>
                                <td>{review.createdAt}</td>
                                <td>{review.content}</td>
                                <td>{review.note}</td>
                                <td>
                                    <ButtonGroupAction data={this.props.data} id={review.uid} type="reviews"/>
                                </td>
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
