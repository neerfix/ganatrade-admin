import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import Gravatar from 'react-gravatar';
import ButtonGroupAction from "./ButtonGroupAction";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "users",
            tokenACP: "",
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
                        <th>id</th>
                        <th>Administrator</th>
                        <th>Super-Administrator</th>
                        <th>Trader</th>
                        <th>Display Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{user.uid}</td>
                                <td>{user.rank === "admin" ? "true" : 'false'}</td>
                                <td>{user.rank === "super_admin" ? "true" : 'false'}</td>
                                <td>{user.rank === "trader" ? "true" : 'false'}</td>
                                <td>
                                    <Gravatar email={user.email} size={35} className="rounded-circle"/>&nbsp;
                                    {user.firstname} {user.lastname}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <ButtonGroupAction data={this.props.data} id={user.uid} type="users"/>
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
export default (Index);
