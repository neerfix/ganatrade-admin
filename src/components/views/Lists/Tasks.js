import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";
import {faTimes, faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import routeAPI from "../../../tools/routeAPI";
import ButtonGroupAction from "./ButtonGroupAction";
import Loading from "../modules/Loading";
import getToken from "../../../functions/getToken";
const token = getToken();

class Tasks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "tasks",
            tokenACP: token,
            isLoading: false,
            apiLoaded: false,
            data: this.props.data,
            activePage: '1'
        };
    }

    async componentDidMount() {
        await fetch(routeAPI + 'lists/', {
            headers: { 'Authorization': this.state.tokenACP },
        }).then(response => response.json())
            .then(json => {
                if(json){
                    this.setState({ lists: json, apiLoaded: true });
                }
            });
    }

    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark" >
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>List</th>
                        <th>Private</th>
                        <th>Done</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (task, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>
                                    {!this.state.apiLoaded ?
                                        (
                                            <Loading/>
                                        )
                                        :
                                        this.state.lists.map((list, index) => {
                                            if (list.id === task.list) return (
                                                <span key={index}>
                                                    {list.title}
                                                    </span>
                                            )
                                        })
                                    }</td>
                                <td>
                                    {(task.is_private) ? (
                                        <Button variant={"success"}><FontAwesomeIcon
                                            icon={faCheck}/></Button>
                                    ) : (
                                        <Button variant={"danger"}><FontAwesomeIcon icon={faTimes}/></Button>
                                    )}
                                </td>
                                <td>
                                    {(task.is_done) ? (
                                        <Button variant={"success"}><FontAwesomeIcon
                                            icon={faCheck}/></Button>
                                    ) : (
                                        <Button variant={"danger"}><FontAwesomeIcon icon={faTimes}/></Button>
                                    )}
                                </td>
                                <td>
                                    <ButtonGroupAction data={this.props.data} id={task.id} type="tasks"/>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default (Tasks);