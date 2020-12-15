import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import SmallGraph from "./SmallGraph";
import ComparisonTasksWeek from './ComparisonTasksWeek';
import routeAPI from "../../../tools/routeAPI";
import Loading from "../modules/Loading";
// import GenderStatistics from "./GenderStatistics";
import getToken from "../../../functions/getToken";
const token = getToken();

class WeekStatistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            apiLoaded: false,
            tokenACP: token,
            nbUsers: "",
            nbMale: "",
            weekStats: [{"name": "Monday"}, {"name": "Tuesday"}, {"name": "Wednesday"}, {"name": "Thursday"}, {"name": "Friday"}, {"name": "Saturday"}, {"name": "Sunday"}],
            weekTimestamp: "",
            users: [],
            offers: []
        };
    }

    async componentDidMount() {
        await fetch(routeAPI + 'users/', {
            // headers: { 'Authorization': this.state.tokenACP},
        }).then(response => response.json())
            .then(json => {
                if(json){
                    this.setState({ nbUsers: json.length, users: json});
                }
            });
        await fetch(routeAPI + 'offers/', {
            // headers: { 'Authorization': this.state.tokenACP },
        }).then(response => response.json())
            .then(json => {
                if(json){
                    this.setState({
                        offers: json,
                        apiLoaded: true
                    });
                }
            });
    }

    filterData = (collection, field, i, week) => {
        return this.state[collection].filter(data => (data[field] ? (data[field]._seconds <= week[i].end) : 0))
            .filter(data => (data[field]._seconds >= week[i].start))
    };

    getStats = () =>{
        let curr = new Date();
        let week = [];

        for (let i = 1; i <= 7; i++) {
            let first = curr.getDate() - curr.getDay() + i;
            let day = new Date(curr.setDate(first));
            let timestamp = Date.parse(day);
            timestamp -= (curr.getMilliseconds() + (curr.getSeconds() * 1000) - 1000 + (curr.getMinutes() * 60 * 1000) + (curr.getHours() * 3600 * 1000) );
            timestamp /= 1000;
            let endTimestamp = timestamp + 24 * 3600 - 1;
            week.push({start: timestamp, end: endTimestamp});
        }
        for(let i=0; i<=6; i++){

            const activeUsersByDay = this.filterData("users", "last_login", i, week);
            const newUsersByDay = this.filterData("users", "created_at", i, week);
            const newOffersByDay = this.filterData("offers", "created_at", i, week);

            // eslint-disable-next-line
            this.state.weekStats[i].activeUsers = activeUsersByDay.length;
            // eslint-disable-next-line
            this.state.weekStats[i].newUsers = newUsersByDay.length;
            // eslint-disable-next-line
            this.state.weekStats[i].newOffers = newOffersByDay.length;
        }

        const resultGender = this.state.users.filter(user => user.gender === 'm');
        this.setState({
            nbUsers: this.state.users.length,
            nbMale: resultGender.length,
            isLoaded: true
        })
    };

    render(){
        if(this.state.apiLoaded){
            if(!this.state.isLoaded){ this.getStats()}
        }
        return(
            <Card className={"mt-3"}>
                <Card.Header>Trafic this week</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Current week</Card.Subtitle>
                    {this.state.weekStats[0].activeUsers !== undefined ? (
                        <div className="d-flex flex-row justify-content-between">
                            <SmallGraph title={'New users'} type={'newUsers'} stats={this.state.weekStats}/>
                            <SmallGraph title={'Active users'} type={'activeUsers'} stats={this.state.weekStats}/>
                            <SmallGraph title={'Offers created'} type={'newOffers'} stats={this.state.weekStats}/>
                        </div>
                    ): <Loading/>}
                    <hr/>
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column w-50">
                            <ComparisonTasksWeek stats={this.state.weekStats} statsGlobalUsers={this.state.users} statsGlobalOffers={this.state.offers}/>
                        </div>
                        {/*{this.state.nbUsers ? ( <GenderStatistics nbUsers={this.state.nbUsers} nbMale={this.state.nbMale}/>) : (<Loading />)}*/}
                    </div>
                </Card.Body>
            </Card>
        )
    }
}
export default (WeekStatistics);