import React, {Component} from 'react';
import {Table} from "react-bootstrap";

class Trades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "trades",
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
                        <th>Date du trade</th>
                        <th>Status </th>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.slice(this.props.startRange, this.props.endRange).map( (trade, index) => {
                        console.log(trade);
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{trade.id}</td>
                                <td>{Date(trade.date_of_trade)}</td>
                                <td>{trade.status}</td>
                                <td>{trade.type}</td>
                                <td>{trade.value}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default (Trades);
