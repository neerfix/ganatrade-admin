import React, {Component} from "react";
import {Badge, Card, ProgressBar} from "react-bootstrap";

class ComparisonTasksWeek extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.stats
        };
    }

    render() {
        return <div>
            {this.state.data.map((day, index) =>
                <div className={"mt-3"} key={index}>
                    <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
                        <span>{day.name}</span>
                        <span>
                            <Badge variant={"primary"}>
                                +{Math.trunc((100*(this.props.statsGlobalUsers.length + day.newUsers)) / this.props.statsGlobalUsers.length)-100}% (+{day.newUsers})
                            </Badge>
                            &nbsp;
                            <Badge variant={"danger"}>
                                +{Math.trunc((100*(this.props.statsGlobalUsers.length + day.activeUsers)) / this.props.statsGlobalUsers.length)-100}% (+{day.activeUsers})
                            </Badge>
                            &nbsp;
                            <Badge variant={"warning"}>
                                +{Math.trunc((100*(this.props.statsGlobalOffers.length + day.newOffers)) / this.props.statsGlobalOffers.length)-100}% (+{day.newOffers})
                            </Badge>
                        </span>
                    </Card.Subtitle>
                    <ProgressBar now={Math.trunc((100*(this.props.statsGlobalUsers.length + day.newUsers)) / this.props.statsGlobalUsers.length)-100}  variant="primary"/>
                    <ProgressBar now={Math.trunc((100*(this.props.statsGlobalUsers.length + day.activeUsers)) / this.props.statsGlobalUsers.length)-100} variant="danger"/>
                    <ProgressBar now={Math.trunc((100*(this.props.statsGlobalOffers.length + day.newOffers)) / this.props.statsGlobalOffers.length)-100} variant="warning"/>
                </div>)}
            <Badge variant={"primary"}>
                User Active
            </Badge>
            &nbsp;
            <Badge variant={"danger"}>
                Offers Created
            </Badge>
        </div>
    }
}
export default (ComparisonTasksWeek);