import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";
import {faTimes, faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import routeAPI from "../../../tools/routeAPI";
import ButtonGroupAction from "./ButtonGroupAction";
import Loading from "../modules/Loading";
import getToken from "../../../functions/getToken";
const token = getToken();

class Trades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "trades",
            tokenACP: token,
            isLoading: false,
            apiLoaded: false,
            data: this.props.data,
            activePage: '1'
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
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (trade, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{trade.id}</td>
                                <td>{trade.name}</td>
                                <td>
                                    {!this.state.apiLoaded ?
                                        (
                                            <Loading/>
                                        )
                                        :
                                        // eslint-disable-next-line
                                        this.state.lists.map((list, index) => {
                                            if (list.id === trade.list) return (
                                                <span key={index}>
                                                    {list.title}
                                                    </span>
                                            )
                                        })
                                    }</td>
                                <td>
                                    {(trade.is_private) ? (
                                        <Button variant={"success"}><FontAwesomeIcon
                                            icon={faCheck}/></Button>
                                    ) : (
                                        <Button variant={"danger"}><FontAwesomeIcon icon={faTimes}/></Button>
                                    )}
                                </td>
                                <td>
                                    {(trade.is_done) ? (
                                        <Button variant={"success"}><FontAwesomeIcon
                                            icon={faCheck}/></Button>
                                    ) : (
                                        <Button variant={"danger"}><FontAwesomeIcon icon={faTimes}/></Button>
                                    )}
                                </td>
                                <td>
                                    <ButtonGroupAction data={this.props.data} id={trade.id} type="trades"/>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default (Trades);
