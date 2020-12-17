import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import routeAPI from "../../../tools/routeAPI";
import Users from "../../containers/Users";
import Offers from "../../containers/Offers";
import Reviews from "../../containers/Reviews";
import Pagination from "react-pagination-bootstrap";
import Categories from "./Categories";
import Lists from "./Lists";
import Loading from "../modules/Loading";
import getToken from "../../../functions/getToken";
import Trades from "../../containers/Trades";
const token = getToken();

export default class ListData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: this.props.location.pathname.substr(1),
            tokenACP: token,
            isLoading: false,
            dataType: this.props.location.pathname.substr(6),
            data: [],
            dataId: '',
            activePage: '1',
            startRange: '0',
            endRange: '10'
        };
    }

    async componentDidMount() {
        await fetch(routeAPI + this.state.dataType+'/', {
            headers: {
                'Authorization': this.state.tokenACP
            },
        })
        .then(response => response.json())
            .then(json => {
                if(json){
                    this.setState({
                        nbUsers: json.length,
                        data: json,
                        load: true,
                    });
                }
            })
            .catch(e =>{
                console.log(e)
            })
    }

    handlePageChange(pageNumber) {
        let endRange = 10*pageNumber;
        let startRange = endRange-10;

        this.setState({
            activePage: pageNumber,
            startRange: startRange,
            endRange: endRange
        });
    }

    render() {
        const listData = {
            users: <Users data={this.state.data} startRange={this.state.startRange} endRange={this.state.endRange}/>,
            trades: <Trades data={this.state.data} startRange={this.state.startRange} endRange={this.state.endRange}/>,
            categories: <Categories data={this.state.data} startRange={this.state.startRange} endRange={this.state.endRange}/>,
            reviews: <Reviews data={this.state.data} startRange={this.state.startRange} endRange={this.state.endRange}/>,
            lists: <Lists data={this.state.data} startRange={this.state.startRange} endRange={this.state.endRange}/>,
            offers: <Offers data={this.state.data} startRange={this.state.startRange} endRange={this.state.endRange}/>,
        };

        if(!listData[this.state.dataType]){
            let newDataType = this.state.dataType.split("/");
            this.setState({dataType: newDataType[2]})
        }

        return (
            <div className="content col-10 mt-3">
                <Card>
                    <Card.Header>
                        {this.state.dataType}
                        <div className={'card-header-right'}>
                            <Link to={'/data/create/'+this.state.dataType}>
                                <Button size={"sm"} variant={"success"}>
                                    <FontAwesomeIcon icon={faUserPlus}/> Create {this.state.dataType}
                                </Button>
                            </Link>
                        </div>
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        {this.state.data.length !== 0 ? listData[this.state.dataType] : ( <Loading/> )}
                        <Pagination
                            totalItemsCount={this.state.data.length}
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange.bind(this)}
                        />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
