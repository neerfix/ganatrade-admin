import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";
import {faTimes, faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Gravatar from 'react-gravatar';
import Loading from "../modules/Loading";
import ButtonGroupAction from "./ButtonGroupAction";
import routeAPI from "../../../tools/routeAPI";
import getToken from "../../../functions/getToken";
const token = getToken();

class Lists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'lists',
            tokenACP: token,
            isLoading: false,
            data: this.props.data,
            activePage: '1'
        };
    }

    async componentDidMount() {
        await fetch(routeAPI + 'users/', {
            headers: { 'Authorization': this.state.tokenACP },
        }).then(response => response.json())
            .then(json => {
                if(json){
                    this.setState({ users: json, apiLoaded: true });
                }
            });
    }

    render() {
        return  <Table striped bordered hover variant="dark" >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>User</th>
                        <th>Private</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.slice(this.state.startRange, this.state.endRange).map( (lists, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{lists.id}</td>
                                <td>{lists.title}</td>
                                <td>
                                    {!this.state.apiLoaded ?
                                        (
                                            <Loading/>
                                        )
                                        :
                                        // eslint-disable-next-line
                                        this.state.users.map((user, index) => {
                                            if (user.uid === lists.user) return (
                                                <span key={index}>
                                                       <Gravatar email={user.email}
                                                                // eslint-disable-next-line
                                                                 title={user.firstname + ' ' + user.lastname + ' ' + "(" + user.username + ")"}
                                                                 size={35}
                                                                 className="rounded-circle"
                                                       />&nbsp;
                                                    {// eslint-disable-next-line
                                                        user.firstname + ' ' + user.lastname + ' ' + "(" + user.username + ")"}
                                                    </span>
                                            )
                                        })
                                    }</td>
                                <td>
                                    {(lists.is_private) ? (
                                        <Button variant={"success"}><FontAwesomeIcon
                                            icon={faCheck}/></Button>
                                    ) : (
                                        <Button variant={"danger"}><FontAwesomeIcon icon={faTimes}/></Button>
                                    )}
                                </td>
                                <td>
                                    {(lists.is_active) ? (
                                        <Button variant={"success"}><FontAwesomeIcon
                                            icon={faCheck}/></Button>
                                    ) : (
                                        <Button variant={"danger"}><FontAwesomeIcon icon={faTimes}/></Button>
                                    )}
                                </td>
                                <td>
                                    <ButtonGroupAction data={this.props.data} id={lists.id} type="lists"/>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
    }
}
export default (Lists);